import { useState, useEffect } from "react";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import fetch from "isomorphic-unfetch";
import { Show } from "../../types/show";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const ShowItem = ({ show }: Show) => (
  <article>
    {show.image && <img src={show.image.medium} alt={show.name} className="card-img-top" />}
    <div className="card-body">
      <h3 className="card-title h5">{show.name}</h3>
      <div className="card-text" dangerouslySetInnerHTML={{ __html: show.summary }} />
    </div>
  </article>
);

type Props = {
  results: Show[],
  initialQuery: string,
}

const ShowSearchPage = ({results, initialQuery}:Props) => {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const router = useRouter();

  const search = async (e:React.FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/shows",
      query: {
        q: encodeURIComponent(query)
      }
    });
  }

  return (
    <PageLayout>
      <NextSeo title="TV Shows" description="Search for TV Shows" />
      <h1 className="display-4 mb-4">TV Show Search</h1>
      <form onSubmit={search} className="mb-5">
        <input
          type="search"
          className="form-control rounded-pill"
          value={query}
          placeholder="Enter search phrase..."
          onChange={e => setQuery(e.target.value)}
          autoFocus
          required
        />
      </form>
      {results.length === 0 && initialQuery && <p className="mt-3 text-danger">No results :(</p>}
      {!initialQuery && (
        <div className="my-3">
          <h5 className="h6 d-inline mr-2">Example queries:</h5>
          <ul className="d-inline list-inline">
            <li className="list-inline-item">
              <Link href="/shows?q=The%20Ranch">
                <a>The Ranch</a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="/shows?q=Batman">
                <a>Batman</a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="/shows?q=Always%20Sunny">
                <a>Always Sunny</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {results && (
        <div className="card-grid">
          {results.map(movie => (
            <Link href="/shows/[id]" as={`/shows/${movie.show.id}`}>
              <a className="card">
                <ShowItem {...movie} />
              </a>
            </Link>
          ))}
        </div>
      )}
    </PageLayout>
  );
}

ShowSearchPage.getInitialProps = async ({query}):Promise<Props> => {
  if (!query.q) {
    return {
      results: [],
      initialQuery: ""
    }
  }

  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query.q}`);
  const data = await res.json();

  return {
    results: data,
    initialQuery: decodeURIComponent(query.q)
  };
}

export default ShowSearchPage;