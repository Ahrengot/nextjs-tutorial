import {NextSeo} from "next-seo";
import PageLayout from "../components/PageLayout";

const Index = () => (
  <PageLayout>
    <NextSeo title="Next.js example" description="Tesing out next.js with a dummy app" />
    <h1 className="display-4">Hey there!</h1>
  </PageLayout>
)

export default Index;