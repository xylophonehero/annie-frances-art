
import { graphql } from 'gatsby';
import React from 'react';
import FAQs from '../components/FAQs';
import PageLayout from '../components/PageLayout';


function Services({ data })
{
  const pageData = data.contentfulFaqPage

  return (
    <PageLayout pageTitle={pageData.title}>
      {/* <SimpleGrid columns={[1, 2, 3, 4]} gap="8">
        {pageData.services.map((service) => (
          <ServicesCard key={service.id} {...service} />
        ))}
      </SimpleGrid> */}
      <FAQs faqs={pageData.faqs} />
    </PageLayout>
  );
}

export default Services;

export const query = graphql`
  query ServicesQuery {
    contentfulFaqPage {
      title
      faqs {
        id
        question
        answer {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`