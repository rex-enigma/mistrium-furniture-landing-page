import { useStaticQuery, graphql } from 'gatsby';



export function useAllProductDataNode() {
    const {allProductDataNode} = useStaticQuery(graphql`
      query  {
        allProductDataNode {
         nodes {
           name
           currentPrice
           previousPrice
           key
           id
         }
       }
     }
  `);

  return allProductDataNode.nodes;
  }
  