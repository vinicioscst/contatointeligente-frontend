import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Header desktopMenu={<Nav />} mobileMenu={<MobileNav />} />
      <main className="flex">
        <HomeBanner />
      </main>
      <Footer />
    </>
  );
}
