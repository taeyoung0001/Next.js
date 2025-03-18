import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

//캐치 라우터
//[[...어쩌구]]
//이렇게하면 세그먼트를 다 캐치한다 (예를들어 /archive/2025 하면 2025를 , /archive/2025/3 하면 2025, 3 을 캐치한다.)
//근데 이러면 archive페이지 떄문에 오류 뜨게됨
//page중복 현상때문임!
//본문 page 삭제하면 됨

export default function FilteredNewsPAge({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;

  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p> 년도를 선택하여 주세요 </p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  // console.log("news", news);
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("해당 년도의 기사는 없습니다.");
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
  // <NewsList news={news}></NewsList>;
}
