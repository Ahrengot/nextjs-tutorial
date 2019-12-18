import { useState, useEffect } from "react";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import fetch from "isomorphic-unfetch";
import { Show } from "../../types/show";

const ShowItem = ({ show }: Show) => (
  <article>
    {show.image && <img src={show.image.medium} alt={show.name} className="card-img-top" />}
    <div className="card-body">
      <h3 className="card-title h5">{show.name}</h3>
      <div className="card-text" dangerouslySetInnerHTML={{ __html: show.summary }} />
    </div>
  </article>
);

const ShowSearchPage = () => {
  const [didSearch, setDidSearch] = useState(false);
  const [results, setResults] = useState<Show[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const search = async (e:React.FormEvent) => {
    e.preventDefault();

    if (isLoading || !query) {
      return;
    }
    
    setResults([]);
    setLoading(true);
    setDidSearch(false);
    
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    

    setLoading(false);
    setResults(data);
    setDidSearch(true);
  }

  useEffect(() => {
    if (didSearch) {
      setDidSearch(false);
    }
  }, [query]);

  return (
    <PageLayout>
      <h1>Search for movies</h1>
      <form onSubmit={search} className="mb-4">
        <fieldset disabled={isLoading}>
          <input
            type="search"
            className="form-control rounded-pill"
            value={query}
            placeholder="Enter search phrase..."
            onChange={e => setQuery(e.target.value)}
            autoFocus
            required
          />
        </fieldset>
      </form>
      {results.length === 0 && didSearch && <p className="mt-3 text-danger">No results :(</p>}
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

export default ShowSearchPage;