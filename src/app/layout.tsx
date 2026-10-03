import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Folio", template: "%s · Folio" },
  description: "Clear, dependable A.C.E. homeschool recordkeeping.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
