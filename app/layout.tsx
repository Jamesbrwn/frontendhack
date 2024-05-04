import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "semantic-ui-css/semantic.min.css";
import { Container, Theme } from "@radix-ui/themes";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Battlefield Intelligence with RAG",
  description: "View and and analyze battlefield documents, video, and 3D scans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <body className={inter.className}>
        <Theme accentColor="blue">
          <main>
            <Container className="w-screen min-h-screen p-3 bg-gradient-to-tl from-yellow-100 to-pink-100">
              {children}
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
