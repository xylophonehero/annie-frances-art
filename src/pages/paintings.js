import
{
  SimpleGrid,

} from '@chakra-ui/react';
// import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { graphql } from 'gatsby';

import React from 'react';
import PageLayout from '../components/PageLayout';
import PaintingCard from '../components/PaintingCard';

// import PortfolioCard from '../components/PortfolioCard';
// import PortfolioFilter from '../components/PortfolioFilter';

function Paintings({ data })
{
  return (
    <PageLayout pageTitle="Paintngs">
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
        {data.allContentfulPainting.nodes.map((painting) => (
          <PaintingCard key={painting.id} {...painting} />
        ))}
      </SimpleGrid>
    </PageLayout>
  );
}

export default Paintings;

export const paintingsQuery = graphql`
  query AllPaintings {
    allContentfulPainting(sort: {order: DESC, fields: createdAt}) {
      nodes {
        id: contentful_id
        name
        description {
          childMarkdownRemark {
            html
          }
        }
        images {
          gatsbyImageData(placeholder: BLURRED)
          file {
            url
          }
        }
        price
      }
    }
  }
`