import { Box, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'

function PorfolioCard(props) {
  return (
    <>
       <Box>
              <Box textAlign={"center"} border={"1px solid #E9E9E9"} p={"24px 12px"} w={"320px"}>
                
                <Text fontSize={"20px"} fontWeight={600} pb={"12px"}>{props.title}</Text>
                <Text fontSize={"14px"} fontWeight={400} color={"#9B9D8E"} >{props.content}</Text>
            </Box>
       </Box>
    </>
  )
}

export default PorfolioCard