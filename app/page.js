import HeroSection from "@/components/HeroSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import RestaurantStory from "@/components/RestaurantStory";
import ChefSpecial from "@/components/ChefSpecial";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <RestaurantStory />
      <ChefSpecial />
      <FeaturedDishes />
      <Testimonials />
      <Footer />
    </main>
  );
}
