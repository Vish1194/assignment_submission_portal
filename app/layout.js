import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Assignment Submission Portal",
  description: "Assignment Submission Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <NavBar/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
