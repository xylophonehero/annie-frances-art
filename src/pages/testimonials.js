import React from 'react';
import PageLayout from '../components/PageLayout';
import { graphql } from 'gatsby'
import TestimonialCard from '../components/TestimonialCard';
import { SimpleGrid } from '@chakra-ui/layout';

function Testimonials({ data })
{
  return (
    <PageLayout pageTitle="Testimonials">
      <SimpleGrid columns={[1, null, null, 2]} spacing="10">
        {data.contentfulTestimonialsPage.testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </SimpleGrid>
    </PageLayout>
  );
}

export default Testimonials;

export const query = graphql`
  query TestimonialQuery {
    contentfulTestimonialsPage {
      title
      testimonials {
        id
        buyer
        location
        review{
          childMarkdownRemark{
            html
          }
        }
        photo {
          gatsbyImageData
        }
      }
    }
  }
`