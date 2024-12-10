// app/layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "KickIt365",
  description: "Fútbol para todos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar global */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
