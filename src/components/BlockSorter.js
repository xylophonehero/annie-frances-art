import React from 'react';
import BlockPaintingCollection from './BlockPaintingCollection';
import BlockCommission from './BlockCommission';
import BlockTestimonial from './BlockTestimonial';
import BlockContactForm from './BlockContactForm';
import BlockHero from './BlockHero';
import BlockCTA from './BlockCTA';

function BlockSorter({ block })
{
  switch (block.__typename)
  {
    case ("ContentfulCommissionBlock"):
      return <BlockCommission {...block} />

    case ("ContentfulPaintingCollection"):
      return <BlockPaintingCollection {...block} />

    case ("ContentfulTestimonial"):
      return <BlockTestimonial {...block} />

    case ("ContentfulContactForm"):
      return <BlockContactForm {...block} />

    case ("ContentfulHero"):
      return <BlockHero {...block} />

    case ("ContentfulCta"):
      return <BlockCTA {...block} />

    default:
      return <p>Block not being rendered</p>
  }
}

export default BlockSorter;