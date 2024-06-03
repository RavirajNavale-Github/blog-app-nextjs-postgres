"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className=" flex items-center justify-between bg-slate-900 text-white p-5">
      <div className="pl-5">
        <button
          className="text-3xl font-bold rounded-md px-10 py-2"
          onClick={() => router.push("/")}
        >
          Blog.com
        </button>
      </div>
      <div className="pr-5">
        <ul className="flex items-center justify-center gap-10 mr-20">
          <li>
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-2 text-sm font-medium"
              onClick={() => router.push("/pages/aboutus")}
            >
              AboutUs
            </button>
          </li>
          <li>
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-2 text-sm font-medium"
              onClick={() => router.push("/pages/contactus")}
            >
              ContactUs
            </button>
          </li>
          <li>
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-2 text-sm font-medium"
              onClick={() => router.push("/pages/blogs")}
            >
              Blogs
            </button>
          </li>
          <li>
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-2 text-sm font-medium"
              onClick={() => router.push("/pages/addblog")}
            >
              Add Blog
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
