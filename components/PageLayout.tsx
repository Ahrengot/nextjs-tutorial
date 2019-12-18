import GlobalHead from "./GlobalHead";
import Header from "./Header";

const styles = {
  width: "100%",
  maxWidth: "65rem",
  minHeight: "100vh",
}

const PageLayout = props => (
  <main className="mx-auto" style={styles}>
    <GlobalHead />
    <Header />
    <article className="container-fluid">
      {props.children}
    </article>
  </main>
);

export default PageLayout;