import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

//병렬 라우팅
export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
