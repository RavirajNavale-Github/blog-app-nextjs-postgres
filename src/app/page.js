import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./pages/aboutus/page";
import ContactUs from "./pages/contactus/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <ContactUs/>
    </div>
  );
}
