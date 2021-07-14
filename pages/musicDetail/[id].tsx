import MusicDetail from "@src/components/MusicDetail";
import LayoutContainer from "@src/components/public/LayoutContainer";
import server from "../../src/libs/api/musicDetail";
import Head from 'next/head';

export default function MusicDetailPage({ arr }) {
  return (
    <>
    {
      arr && (
        <>
        <Head>
          <title>{arr.title} - KUNDER</title>
          <meta name="description" content={arr.description}></meta>
        </Head>
        <LayoutContainer children={<MusicDetail arr={arr} />} />
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
      arr: (await res).data,
    },
  };
}
