import "./globals.css";

export const metadata = {
  title: "Sikander Rasheed | Frontend Web Developer",
  description: "Sikander Rasheed is a Frontend Developer with 3 years of experience building fast, responsive web applications using React.js and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
