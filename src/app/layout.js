import "./globals.css";

export const metadata = {
  title: "Sikander Rasheed | Frontend Web Developer",
  description: "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product",
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
