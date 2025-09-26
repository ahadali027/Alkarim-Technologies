import NewsHeroSection from "@/components/news/NewsHeroSection";
import FeaturedStorySection from "@/components/news/FeaturedStorySection";
import NewsSection from "@/components/news/NewsSection";
import StoriesInsightsSection from "@/components/news/StoriesInsightsSection";
import CategoriesFilterSection from "@/components/news/CategoriesFilterSection";
import NewsCTASection from "@/components/news/NewsCTASection";

export default function NewsPage() {
  return (
    <div>
      <NewsHeroSection/>
      <FeaturedStorySection/>
      <NewsSection/>
      <StoriesInsightsSection/>
      <CategoriesFilterSection/>
      <NewsCTASection/>
    </div>
  );
}
