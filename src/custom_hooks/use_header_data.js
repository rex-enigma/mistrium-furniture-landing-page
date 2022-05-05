import { useStaticQuery, graphql } from "gatsby";

export default function useHeaderData() {
  const {headerData} = useStaticQuery(graphql`
    query {
     headerData {
       title
       subtitle
    }
  }
`);
  return headerData;
}
