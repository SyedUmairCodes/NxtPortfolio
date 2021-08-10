import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 px-5 lg:px-48 sm:px-20 md:px-32">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-md">
        <Sidebar />
      </div>
      <div className="col-span-12 bg-white lg:col-span-9  rounded-md flex flex-col">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
