import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Yemets Vladyslav - Mobile Development Specialist",
  description:
    "With over 4 years of software engineering expertise and 3+ years in mobile app development, I specialize in building apps and engaging user experiences with Flutter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased scroll-smooth bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
