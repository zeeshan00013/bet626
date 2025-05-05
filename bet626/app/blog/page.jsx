import Link from "next/link";

export default function Blog() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <h2 className="text-3xl font-bold text-[#a0d1d5]  text-center mb-12">
        Blog
      </h2>
      <ul className="">
        <li className="text-blue-500 underline text-3xl">
          <Link href="/blog/Profile-section">Bet 626 profile Review</Link>
        </li>
      </ul>
    </section>
  );
}
