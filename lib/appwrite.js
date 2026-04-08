import { ID, Client, Account } from "appwrite";

const client = new Client();
const account = new Account(client);

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

if (!endpoint || typeof endpoint !== "string") {
  throw new Error(
    "Missing or invalid NEXT_PUBLIC_APPWRITE_ENDPOINT environment variable. Add it to .env.local",
  );
}

if (!projectId || typeof projectId !== "string") {
  throw new Error(
    "Missing or invalid NEXT_PUBLIC_APPWRITE_PROJECT_ID environment variable. Add it to .env.local",
  );
}

client.setEndpoint(endpoint).setProject(projectId);

export { client, ID, account };
