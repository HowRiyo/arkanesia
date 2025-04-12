import prisma from "@/lib/prisma"; // path sesuai tempat kamu taruh prisma client
import Link from "next/link";

export default async function CultureDetailPage({ params }) {
  const { id } = params;

  const culture = await prisma.culture.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!culture) {
    return <div className="p-10 text-center">Budaya tidak ditemukan</div>;
  }

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
            <Link href="/ensiklopedia" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">Back</Link>
        </div>
      <h2 className="text-3xl font-bold mb-4">
        {culture.title} ({culture.year})
      </h2>
      <img
        src={culture.image}
        alt={culture.title}
        className="w-full h-auto rounded-lg my-6"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-700 leading-relaxed text-center">
          Gambar ini menunjukkan ilustrasi terkait ensiklopedia yang sedang dibahas. Visualisasi ini membantu memahami konteks lebih dalam dan memperkaya informasi yang tersedia.
        </p>
      </div>

      <div className="md:col-span-3 mt-10">
        <p className="text-gray-700 leading-relaxed text-justify mb-6">
          Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam qui dolore hic adipisci eum, temporibus veniam repellendus itaque repellat at nemo, unde porro. Temporibus neque a exercitationem quia blanditiis. Culpa, incidunt aliquam quae facilis id recusandae omnis vel dolores quidem placeat reprehenderit inventore natus quam ipsam tempora, qui laudantium est corporis nobis, voluptate enim rem. Dolore eveniet quo inventore! Corporis delectus praesentium excepturi reiciendis nisi? Corporis autem mollitia totam cum maiores fuga ipsum animi quae exercitationem ex! Excepturi facilis hic repudiandae mollitia exercitationem. Facilis recusandae distinctio debitis aut deserunt! Praesentium officiis nulla voluptatem, harum sunt porro atque nisi temporibus dolor commodi ex dolorem sit iusto officia vel beatae ratione quia vero iure cumque! Minima assumenda commodi voluptas debitis accusamus. Libero vel culpa quod, cum incidunt alias odit nihil fuga distinctio! Modi, quasi minima! Provident ab tempore expedita delectus enim eos dolor libero sint, ullam repellat laborum aperiam assumenda debitis!
        </p>
        <p className="text-gray-700 leading-relaxed text-justify mb-6">
          Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim.
        </p>
      </div>
    </main>
  );
}
