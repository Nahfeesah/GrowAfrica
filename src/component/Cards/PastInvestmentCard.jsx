import React from 'react'
import PropTypes from 'prop-types'
import { Box,Text, Image } from '@chakra-ui/react'

function PastInvestmentCard(props) {
  return (
    <>

          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} border={"1px solid #E3E3E3"} p={"10px 12px"} w={"320px"} gap={"8px"}>
              <Image src={props.img} borderRadius={"4px"} w={"107px"} h={"100px"}/>
            <Box textAlign={"left"}>
                  <Text fontSize={"18px"} fontWeight={400} color={"#9B9D8E"}>{props.date}</Text>
                  <Text fontSize={"16px"} fontWeight={600}  color={"#141414"}>{props.title}</Text>
                <Text fontSize={"16px"} fontWeight={400} color={"#9B9D8E"} >{props.location}</Text>
                  <Text fontSize={"18px"} fontWeight={500} color={"#000000"} > ROI + {props.roi}</Text>
            </Box>

        </Box>

        </>
  )
}


export default PastInvestmentCard
