import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { solutionQuery, solutionSlugsQuery } from '../../lib/queries';
import { usePreviewSubscription } from '../../lib/sanity';
import {
  sanityClient,
  getClient,
  overlayDrafts
} from '../../lib/sanity.server';
import Container from '../../components/Container';
import ProseableText from '../../components/ProseableText';

export default function solution({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.solution?.slug;
  const {
    data: { solution, moreSolutions }
  } = usePreviewSubscription(solutionQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div preview={preview}>
      <Container>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article>
              <div className="mx-auto mt-12 text-center sm:px-6 lg:px-8">
                <h1 className="text-4xl font-semibold text-zinc-700 dark:text-zinc-300">
                  {solution.title}
                </h1>
                <p className="pt-2 pb-8 text-xl text-zinc-700 dark:text-zinc-400">
                  {solution.excerpt}
                </p>
              </div>
              <div className="mx-auto max-w-3xl">
                <ProseableText content={solution.content} />
              </div>
            </article>
          </>
        )}
      </Container>
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const queryParams = { slug: params.slug };
  const { solution, moreSolutions } = await getClient(preview).fetch(
    solutionQuery,
    queryParams
  );

  return {
    props: {
      preview,
      data: {
        solution,
        moreSolutions: overlayDrafts(moreSolutions)
      }
    }
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(solutionSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}
