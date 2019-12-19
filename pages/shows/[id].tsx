import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import fetch from "isomorphic-unfetch";

import { ShowData, CastMember } from "../../types/show";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";

type Props = {
  show? : ShowData;
  showId: string,
}

const SingleShowPage = ({show, showId}:Props) => {
  const [cast, setCast] = useState<CastMember[]>([]);

  useEffect(() => {
    if (show) {
      setCast([]);

      fetch(`http://api.tvmaze.com/shows/${show.id}/cast`)
        .then(res => res.json())
        .then(setCast);
    }
  }, [show])

  if (!show) {
    return (
      <PageLayout>
        <h1>Nothing found for ID "{showId}"</h1>
        <Link href="/shows"><a>&larr; back to search</a></Link>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <NextSeo title={`${show.name} | TV Shows`} />
      <h1 className="display-4 mb-4">{show.name}</h1>
      <section className="row">
        <div className="col-6 col-lg-4">
          {show.image && show.image.original && (
            <img src={show.image.original} alt={show.name} className="img-fluid shadow" />
          )}
        </div>
        <div className="col-6 col-lg-8">
          <section className="mb-3 bg-light rounded py-3 px-4">
            <dl>
              <dt>Date</dt>
              <dd>{show.premiered}</dd>
              {show.network && (
                <>
                  <dt>Country</dt>
                  <dd>{show.network.country.name}</dd>
                </>
              )}
              <dt>Summary</dt>
              <dd dangerouslySetInnerHTML={{ __html: show.summary }} />
            </dl>
            <style jsx>{`
              dd {
                margin-bottom: 2.65vmin;
              }
            `}</style>
          </section>
        </div>
      </section>
      {cast.length > 0 && (
        <section className="mt-5">
          <h2 className="display-6 mb-3">Cast members</h2>
          <div className="person-grid">
            {cast.map(({ person, character }) => (
              <a href={person.url} className="person-grid-item" key={person.id} target="_blank">
                {person.image.medium && (
                  <figure>
                    <img src={person.image.medium} alt={person.name} className="img-responsive rounded-circle" />
                  </figure>
                )}
                <h4>{person.name}</h4>
                <h6>{character.name}</h6>
              </a>
            ))}
          </div>
        </section>
      )}
    </PageLayout>
  );
};

SingleShowPage.getInitialProps = async ({query}):Promise<Props> => {
  const res = await fetch(`https://api.tvmaze.com/shows/${query.id}`);
  const data = await res.json();

  return {
    show: data,
    showId: query.id
  }
}

export default SingleShowPage;
