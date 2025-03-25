import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
        <h1> {newItem.title} </h1>
        <time dateTime={newItem.date}>{newItem.date}</time>
      </header>
      <p>{newItem.content}</p>
    </article>
  );
}
