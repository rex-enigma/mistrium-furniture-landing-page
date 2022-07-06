import { graphql, useStaticQuery } from "gatsby";

export default function useAllCommentDataNode() {
  const { allCommentDataNode } = useStaticQuery(graphql`
    query {
      allCommentDataNode {
        nodes {
          name
          date
          stars
          key
          id
          comment
        }
      }
    }
  `);
  return allCommentDataNode.nodes;
}
