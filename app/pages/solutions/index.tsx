import Head from 'next/head';
import SmartSolutions from '../../components/SmartSolutions';
import { getClient, overlayDrafts } from '../../lib/sanity.server';
import { indexQuery } from '../../lib/queries';

export default function Index({ solutions, preview }: any) {
  return (
    <div preview={preview}>
      <Head>
        <title>Smart Home Solutions</title>
        <meta name="description" content="Smart Home Solutions" />
      </Head>
      <SmartSolutions solutions={solutions} />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const solutions = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { solutions, preview }
  };
}
