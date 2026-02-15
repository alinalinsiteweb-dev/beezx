import "./globals.css";

export const metadata = {
  title: "Beez Pixel - Web Design, Magazine Online, SEO",
  description: "Beez Pixel creeaza site-uri moderne si rapide."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}