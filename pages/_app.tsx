import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
        <div className="col-span-12 p-4 text-center bg-white rounded-md dark:bg-dark-700 lg:col-span-3">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-md lg:col-span-9 dark:bg-dark-700">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
