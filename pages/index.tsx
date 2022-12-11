import Head from "next/head";
import { sanityClient } from "../utils/clients/sanity";
import { Post } from "../typings";
import CustomSwiper from "../components/layout/CustomSwiper";
import Container from "../components/layout/Container";
import TrendingPosts from "../components/page-components/TendingPosts";
import BlogGrid from "../components/page-components/CardGrid";
import NewsLetterSub from "../components/page-components/NewsLetterSub";
import Socials from "../components/shared/Socials";
import Footer from "../components/layout/Footer";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Home | Kas Robo Chronicles</title>
      </Head>
      <main>
        <TrendingPosts data={posts} />
        <BlogGrid data={posts} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const query = `*[_type == "post"] {
      _id,
      title,
      author-> {
       name,
       image
      },
      publishedAt,
      description,
      mainImage,
      slug
    }`;
  const posts = await sanityClient.fetch(query);

  // This is where we return the props
  return {
    props: {
      posts,
    },
  };
};
