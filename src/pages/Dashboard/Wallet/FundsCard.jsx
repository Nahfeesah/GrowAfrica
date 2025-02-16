import { Card, Text, Box, Separator, HStack } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

function FundsCard(props) {
  return (
    <Box>
        <HStack>
        <Card.Root size={'sm'} bg={"white"} color={"black"} divideX={"1px solid #828282"} variant={"subtle"}  pr={{base:"20px", md:"100px"}}>
          <Card.Header>
            <Text fontSize={"12px"} fontWeight={500} color={"#00000080"}>{props.title}</Text>
          </Card.Header>
          <Card.Body pt={"8px"}>
            <Text color={"#1E1E1ECC"} fontSize={"20px"} fontWeight={600} lineHeight={"30px"}>{props.amount}</Text>
          </Card.Body>
      </Card.Root>
        <Separator orientation="vertical" height="12" />
        </HStack>
    </Box>
  )
}

export default FundsCard