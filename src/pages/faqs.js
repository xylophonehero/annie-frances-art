// import { SimpleGrid } from '@chakra-ui/react';
// import { graphql } from 'gatsby';
// import React from 'react';
// import FAQs from '../components/FAQs';
// import PageLayout from '../components/PageLayout';
// import ServicesCard from '../components/ServicesCard';

// function Services({ data })
// {
//   const pageData = data.contentfulServicesPage

//   return (
//     <PageLayout pageTitle={pageData.title}>
//       <SimpleGrid columns={[1, 2, 3, 4]} gap="8">
//         {pageData.services.map((service) => (
//           <ServicesCard key={service.id} {...service} />
//         ))}
//       </SimpleGrid>
//       <FAQs faqs={pageData.faqs} />
//     </PageLayout>
//   );
// }

// export default Services;

// export const query = graphql`
//   query ServicesQuery {
//     contentfulServicesPage {
//       title
//       services {
//         id
//         title
//         description {
//           childMarkdownRemark {
//             html
//           }
//         }
//       }
//       faqs {
//         id
//         question
//         answer {
//           childMarkdownRemark {
//             html
//           }
//         }
//       }
//     }
//   }
// `