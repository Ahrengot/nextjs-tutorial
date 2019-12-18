import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import fetch from "isomorphic-unfetch";

import { ShowData } from "../../types/show";
import { NextSeo } from "next-seo";

type Props = {
  show? : ShowData;
  showId: string,
}

const SingleShowPage = ({show, showId}:Props) => {
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
      <div className="row">
        <div className="col-6 col-lg-4">
          {show.image && show.image.original && <img src={show.image.original} alt={show.name} />}
          <style jsx>{`
            img {
              max-width: 100%;
              height: auto;
            }
          `}</style>
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
      </div>
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
