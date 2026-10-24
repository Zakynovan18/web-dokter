import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Services from "@/components/Services";
import Schedule from "@/components/Schedule";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Services />
        <Schedule />
        <Articles />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}