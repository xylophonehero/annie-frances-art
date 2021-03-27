import React from 'react';
import { animateScroll } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'

import useScrollPercentage from '../hooks/useScrollPercentage'
import { Button, Icon } from '@chakra-ui/react';

function ProgressArrow()
{
  const percentage = useScrollPercentage()

  return (

    <Button
      pos="fixed"
      right="6"
      bottom="8"
      h="12"
      w="12"
      borderRadius="full"
      zIndex="overlay"
      onClick={() => animateScroll.scrollToTop({ duration: "500" })}
      color="gray.500"
      p="0"
      bgColor="transparent"
      boxShadow="inset 0 0 0 2px rgba(0, 0, 0, 0.2)"
      opacity={percentage > 0 ? 1 : 0}
      visible={percentage > 0 ? "visible" : "hidden"}
      transform={percentage > 0 ? "TranslateY(0)" : "TranslateY(20px)"}
      transition="all 1s ease"
    >
      <Icon as={FaArrowUp} pos="absolute" h="full" w="full" p="2" />
      <svg className="svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "strokeDashoffset 10ms linear 0s",
            strokeDashoffset: 307.919 - (percentage * 307.919),
            strokeWidth: 4,
            boxSizing: "border-box",
            fill: 'none',
            strokeDasharray: "307.919, 307.919",
            stroke: "gray"
          }}
        ></path>
      </svg>
    </Button>

  );
}

export default ProgressArrow;