import Homepage from "@/components/Homepage";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className=" min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="sticky">
          <Navbar />
        </div>
        <Homepage />
      </main>
    </div>
  );
}
