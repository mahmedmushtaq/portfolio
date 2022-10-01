import WebLayout from "../../src/components/Layout/WebLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { H2, H3, Input, LinkWrapper, P } from "../../src/components/UIWidgets";
import BlogItem from "../../src/components/Blogs/BlogItem";

const BlogPage = () => {
  return (
    <WebLayout redirectToHome>
      <div className="text-center mx-auto w-3/4 mt-10">
        <H2>Learn and understand the new technologies</H2>
        <P>
          You don't need to follow different blogs to understand new
          technologies. Just read my blog and you are good to go
        </P>

        <Input
          icon="search"
          className="w-full mt-10"
          placeholder="Search blog"
        />
        <div className="mt-16">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </WebLayout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: { ...(await serverSideTranslations(locale, ["home", "common"])) },
  };
}

export default BlogPage;
