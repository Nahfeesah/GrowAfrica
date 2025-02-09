import { Box, HStack, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import { p } from 'framer-motion/client'
import React from 'react'
import { Rating } from "@/components/ui/rating"
import { Quote } from 'lucide-react'

function Testbox(props) {
  return (
    <>
      <Box display={"flex"} flexDirection={props.direction} alignItems={"center"} >
        <Image src={props.img} borderRadius={"20px"} />
        <Box borderRadius={"20px"} bg={props.bg} color={props.color} p={"30px 39px"}>
          <Box>
            <HStack>
              <Stack>
                <Text fontSize={"20px"} fontWeight={700}>{props.name}</Text>
                <Text fontSize={"12px"} fontWeight={400} color={props.titlecolor}>{props.title}</Text>
              </Stack>
              <Spacer />
            <Rating readOnly defaultValue={4} size="xs" colorPalette={props.ratecolor} />
            </HStack>
            <Text py={"17px 10px"} fontSize={"18px"} fontWeight={500}>{props.content}</Text>
            <Quote color={props.quotecolor} />

          </Box>

        </Box>

      </Box>
    </>
  )
}

export default Testbox