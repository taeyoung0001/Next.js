import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

//이거먼저보여줌
//병렬라우트랑 결합하면  유용함
export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItems) => newsItems.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop">
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt="" />
          </div>
        </dialog>
      </div>
    </>
  );
}
