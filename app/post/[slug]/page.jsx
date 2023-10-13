import { PortableText } from "@portabletext/react";
import { client } from "@/app/lib/sanity";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";
async function getData(slug) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const data = await client.fetch(query);
  return data;
}

const slugPage = async ({ params }) => {
  const data = await getData(params.slug);
  const portableTextComponents = {
    types: {
      image: ({ value }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div>
              <p className="text-base font-medium leading-6 text-teal-500">
                {new Date(data._createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-500 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {data.title}
            </h1>
          </div>
        </div>
      </header>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 pb-7 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:cols-spa2-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <PortableText
              value={data.content}
              components={portableTextComponents}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default slugPage;
