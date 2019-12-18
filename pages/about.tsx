import PageLayout from "../components/PageLayout";
import { NextSeo } from "next-seo";

const AboutPage = () => (
  <PageLayout>
    <NextSeo title="About" description="Learn more about the dummy app" />
    <h1 className="display-4 mb-4">About</h1>
    <p>
      Learning how next.js works via the tutorial on{" "}
      <a href="https://nextjs.org/learn/" target="_blank">
        nextjs.org/learn
      </a>
    </p>
  </PageLayout>
);

export default AboutPage;