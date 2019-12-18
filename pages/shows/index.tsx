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

  const router = useRouter();

  const search = async (e:React.FormEvent) => {
    e.preventDefault();
    router.push(`/shows?q=${encodeURIComponent(query)}`);
  }

  return (
    <PageLayout>
      <NextSeo title="TV Shows" description="Search for TV Shows" />
      <h1 className="display-4 mb-4">Search for movies</h1>
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
      {results && (
        <div className="card-grid">
          {results.map(movie => (
            <Link href="/shows/[id]" as={`/shows/${movie.show.id}`}>
              <a className="card text-reset text-decoration-none">
                <ShowItem {...movie} />
              </a>
            </Link>
          ))}
        </div>
      )}
      <style jsx>{`
        .card-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 0.85rem;
        }

        @media (min-width: 550px) {
          .card-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 720px) {
          .card-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1150px) {
          .card-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
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