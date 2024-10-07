import Homepage from "@/components/homepage/Homepage";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className=" min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="relative">
        <div className="sticky">
          <Navbar />
        </div>
        <Homepage />
        <Footer />
      </main>
    </div>
  );
}
