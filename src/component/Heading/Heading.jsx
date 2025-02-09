import { Heading } from '@chakra-ui/react'
import React from 'react'

 export const Heading2 = (props) => (
    <>
    <Heading as={"h2"} color={"var(--accent-color)"} fontSize={"36px"} fontWeight={600} lineHeight={"48px"} pb={{base: "25px", md: "48px"}}textAlign={"center"}>{props.text}</Heading>
    </>

)