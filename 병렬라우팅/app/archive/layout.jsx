// 병렬 라우팅을 사용하려면 반드시 layout파일이 존재 해야한다
// 원하는 만큼 추가가 가능 하며 @로 시작한다.
// 프롭스에 children이 아니라 @뒤에 명칭을 붙인다.

export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
