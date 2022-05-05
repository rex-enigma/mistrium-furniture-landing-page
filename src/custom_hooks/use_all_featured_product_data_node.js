import { useStaticQuery, graphql } from "gatsby";

export default function useAllFeaturedProductDataNode() {
  const {allFeaturedProductDataNode} = useStaticQuery(graphql`
  query {
    allFeaturedProductDataNode {
       nodes {
          name
          bgColor
          id
          key
       }
      
    }
  }
`);
  return allFeaturedProductDataNode.nodes;
}
