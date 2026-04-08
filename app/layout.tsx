import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/app/context/user-context/userContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimePath - Your Ultimate Real Estate Companion",
  description: "Discover your dream home with PrimePath, the premier real estate platform. Explore a vast selection of properties, from cozy apartments to luxurious estates. Our user-friendly interface and powerful search tools make finding your perfect home easy and enjoyable. Whether you're buying, selling, or renting, PrimePath is your trusted partner in the real estate journey. Start your search today and experience the future of real estate with PrimePath.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
