import Navbar from "./Navbar";
import Hero from "./Hero";
import SleepingShowcase from "./SleepingShowcase";
import Services from "./Services";
import PhotoGallery from "./PhotoGallery";
import Specs from "./Specs";
import Pricing from "./Pricing";
import BookingForm from "./BookingForm";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function TeslaBeskydyLanding() {
  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <SleepingShowcase />
        <Services />
        <PhotoGallery />
        <Specs />
        <Pricing />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
