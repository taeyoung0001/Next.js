import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItems) => newsItems.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt="" />
    </div>
  );
}
