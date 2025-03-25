import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home">
      <h1>Next.js Routing & Page Rendering</h1>
      <Link href="/news"> First Page </Link>
      <Link href="/news/first-news"> Second Page </Link>
      <Link href="/news/second-news"> Third Page </Link>
    </div>
  );
}
