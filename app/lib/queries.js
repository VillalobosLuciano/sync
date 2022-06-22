import { groq } from 'next-sanity';

const solutionFields = groq`
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
`;

export const indexQuery = groq`
*[_type == "solution"] | order(date desc, _updatedAt desc) {
  ${solutionFields}
}`;

export const solutionQuery = groq`
{
  "solution": *[_type == "solution" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${solutionFields}
  },
  "moreSolutions": *[_type == "solution" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${solutionFields}
  }
}`;

export const solutionSlugsQuery = groq`
*[_type == "solution" && defined(slug.current)][].slug.current
`;

export const solutionBySlugQuery = groq`
*[_type == "solution" && slug.current == $slug][0] {
  ${solutionFields}
}
`;
