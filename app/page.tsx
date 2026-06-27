import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileTabs from "@/components/ProfileTabs";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProfileTabs />
    </main>
  );
}