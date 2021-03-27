import { Box } from '@chakra-ui/react';
import React from 'react';

function Content({ text, ...props })
{
  return (
    <Box className="content" {...props} dangerouslySetInnerHTML={{ __html: text.childMarkdownRemark.html }} />
  );
}

export default Content