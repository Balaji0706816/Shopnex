import HeroSection from "../components/home/hero-section";
import CategoriesSection from "../components/home/categories-section";
import FeaturedProducts from "../components/home/featured-products";
import TrustSection from "../components/home/trust-section";  

export default function HomePage() {  
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <TrustSection />
    </div>
  );
}