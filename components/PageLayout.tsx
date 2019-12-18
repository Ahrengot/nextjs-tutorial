import Header from "./Header";
import "../styles/index.css";

const PageLayout = props => (
  <>
    <head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
    </head>
    <main>
      <Header />
      <article className="container-fluid">{props.children}</article>
    </main>
  </>
);

export default PageLayout;