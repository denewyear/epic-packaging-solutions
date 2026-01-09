// import all page components
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Solutions from "@/app/components/Solutions";

// main home page component that combines all sections
export default function Home() {
  return (
    <>
      {/* main hero section with header and background image */}
      <Hero />
      {/* services we offer section */}
      <Services />
      {/* packaging solutions section */}
      <Solutions />
      {/* footer with contact info and links */}
      <Footer />
    </>
  );
}
