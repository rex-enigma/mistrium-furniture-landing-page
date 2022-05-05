import { useStaticQuery, graphql } from 'gatsby';


export default function useAllImgFiles() {

    const data = useStaticQuery(graphql`
          query  {
            allFile {
              edges {
                node {
                  childImageSharp {
                    gatsbyImageData
                  }
                  name
                  relativePath
                  id
                }
              }
            }
          }
          `);
  
  
    return data;
  
  }







