import React from 'react';
import CommisionBlock from './CommisionBlock';

function BlockSorter({ block })
{
  switch (block.__typename)
  {
    case ("ContentfulCommissionBlock"):
      return <CommisionBlock {...block} />
    default:
      return <p>Block not being rendered</p>
  }
}

export default BlockSorter;