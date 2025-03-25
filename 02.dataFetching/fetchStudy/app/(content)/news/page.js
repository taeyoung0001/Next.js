import NewsList from "@/components/news-list";

export default async function NewsPage() {
  //서버 사이드 랜더링
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new Error("데이터 패치 실패");
  }
  const news = await response.json();

  return (
    <>
      {news}
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
