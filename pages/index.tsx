import {NextSeo} from "next-seo";
import PageLayout from "../components/PageLayout";

const Index = () => (
  <PageLayout>
    <NextSeo title="Next.js example" description="Tesing out next.js with a dummy app" />
    <h1 className="display-4">Hey there!</h1>
    <p>
      This is a tiny demo app built to experiment with{" "}
      <a href="https://nextjs.org/" target="_blank">
        Next.js
      </a> and some other fun tech
      .
    </p>
    <p>
      Check out the source here:{" "}
      <a href="https://github.com/Ahrengot/nextjs-tutorial" target="_blank">
        github.com/Ahrengot/nextjs-tutorial
      </a>
    </p>
  </PageLayout>
);

export default Index;