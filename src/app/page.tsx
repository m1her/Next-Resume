import { NavBar } from "@/components/NavBar";
import { LandingPage } from "@/features/Landing";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="md:pt-28 pt-20">
        <LandingPage />
      </div>
    </div>
  );
}
