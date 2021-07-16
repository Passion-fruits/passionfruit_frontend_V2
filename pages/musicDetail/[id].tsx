import MusicDetail from "@src/components/MusicDetail";
import LayoutContainer from "@src/components/public/LayoutContainer";
import server from "../../src/libs/api/musicDetail";
import Head from 'next/head';

export default function MusicDetailPage({ musicObj }) {
  return (
    <>
    {
      musicObj && (
        <>
        <Head>
          <title>{musicObj.title} | KUNDER</title>
          <meta name="description" content={musicObj.description}></meta>
        </Head>
        <LayoutContainer children={<MusicDetail musicObj={musicObj} />} />
        </>
      )
    }
    </>
  )
}

export async function getServerSideProps(context) {
  const res = server.getMusicInfor(context.params.id);
  return {
    props: {
      musicObj: (await res).data,
    },
  };
}
