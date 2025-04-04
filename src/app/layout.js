import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Breast Cancer Detection System",
  description: "Creating A better future with the help of Technology.",
  icons: {
    icon: "logo.png",
  },
  keywords: [
    "Breast Cancer Detection",
    "Machine Learning",
    "AI",
    "Deep Learning",
    "Medical Imaging",
    "Healthcare Technology",
    "Breast Cancer Awareness",
    "Data Science",
    "Computer Vision",
  ],
  authors: [{ name: "Group 179" }],
  creator: "Group 179",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
