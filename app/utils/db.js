import { tablesDB } from "../../lib/appwrite";
import { ID, Query } from "appwrite";

export const createRows = async (tableId, data, rowId = ID.unique()) => {
  const response = await tablesDB.createRow({
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
    tableId: tableId,
    rowId: rowId,
    data: data,
  });
  return response;
};

export const getRows = async (tableId, emailOrQueries) => {
  try {
    let queries;
    if (typeof emailOrQueries === "string" && emailOrQueries.trim() !== "") {
      queries = [Query.equal("email", emailOrQueries)];
    } else if (Array.isArray(emailOrQueries)) {
      queries = emailOrQueries;
    }

    const response = await tablesDB.listRows({
      databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      tableId: tableId,
      queries,
    });

    // Appwrite responses vary by SDK version; try common shapes
    
    const rows = response?.rows ?? response?.documents ?? response;
    if (Array.isArray(rows) && rows.length > 0) {
      const first = rows[0];
      return first?.data ?? first;
    }
    return null;
  } catch (error) {
    console.error("getRows error:", error);
    throw error;
  }
};

export { Query };
