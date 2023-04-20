import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

export const metadata = {
  title: "Kaarten",
  description: "Kaarten en meer",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="nl">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
