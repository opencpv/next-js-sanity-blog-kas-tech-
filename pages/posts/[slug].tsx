import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { sanityClient, urlFor } from "../../utils/clients/sanity";
import { useEffect } from "react";
import Head from "next/head";
import Container from "../../components/layout/Container";
import Loader from "../../components/shared/Loader";
import AuthorDetails from "../../components/page-components/posts/AuthorDetails";
import CustomImage from "../../components/shared/Image";
import { PortableText } from "@portabletext/react";

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<{
  post: any;
}> = async (context) => {
  if (context.params && context) {
    let slug = context.params.slug;
    const post = await sanityClient.fetch(
      `
      *[_type == "post" && slug.current == $slug][0]
    `,
      { slug }
    );
    return {
      props: {
        post,
      },
    };
  }
  return {
    props: {
      post: undefined,
    },
  };
};

const Post = ({ post }: any) => {
  useEffect(() => {
    console.log(post);
  });
  return (
    <>
      <Head>{post && <title>{post.title} | Kas-Tech-Chronicles</title>}</Head>
      <main>
        <Container>
          {post && (
            <article className="pb-10 my-20 border-b-2  w-full md:w-[800px] mx-auto">
              <AuthorDetails
                img="/avatar.png"
                authorName={"Kasuadana Sulemana Adams"}
                date={"11 July 2022"}
              />
              <h1 className="mt-6 mb-2 text-[34px] font-poppins font-bold text-center">
                {post.title}
              </h1>
              <div className="flex justify-center">
                <CustomImage
                  img={urlFor(post.mainImage).url()!}
                  alt={post.title}
                  sizeStyle={"h-[300px] w-full   md:w-[800px]  md:h-[512px] mb-5"}
                  roundedStyle={"rounded-md"}
                />
              </div>
              <div className="mx-auto blog">
                <PortableText value={post.body} />
              </div>
            </article>
          )}
          {!post && (
            <section className="w-full h-[90vh] flex justify-center items-center">
              <Loader />
            </section>
          )}
        </Container>
      </main>
    </>
  );
};

export default Post;
