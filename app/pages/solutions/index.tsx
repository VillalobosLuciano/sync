// import Head from 'next/head';
// import SmartSolutions from '../../components/SmartSolutions';
// import { getClient, overlayDrafts } from '../../lib/sanity.server';
// import { indexQuery } from '../../lib/queries';

// export default function Index({ solutions }: any) {
//   return (
//     <div>
//       <Head>
//         <title>Smart Home Solutions</title>
//         <meta name="description" content="Smart Home Solutions" />
//       </Head>
//       <SmartSolutions solutions={solutions} />
//     </div>
//   );
// }

// export async function getStaticProps({ preview = false }) {
//   const solutions = overlayDrafts(await getClient(preview).fetch(indexQuery));
//   return {
//     props: { solutions, preview }
//   };
// }

import React from 'react';

export default function index() {
  return (
    <div className="py-20 lg:py-56 flex items-center w-full justify-center font-semibold text-5xl">
      Solutions
    </div>
  );
}
