import { Box, Link } from '@chakra-ui/react';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const seeMoreStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    gap: "7px",
    color: "var(--accent-color)",
    padding: "50px 80px 0 0",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "24px",
    letterSpacing: "-0.004em",
    background: "#FCFFF5"
}
export const SeeMore = (props) => (
    <>
        <Box style={seeMoreStyle}>
            <Link href={props.link} textAlign={"right"} color={"var(--accent-color)"}>See More</Link>
            <IoIosArrowForward/>
        </Box>
    </>
) 

