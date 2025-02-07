import React from 'react'
import exchange from '../../assets/img/moneyExchangePlants.jpg'
import { Box, Heading, Text, Button,Image, Link } from '@chakra-ui/react'

function ContactUs() {
  return (
    <Box 
        height={{ base:"auto", md: "520px"}} 
        display={{base: "block", md: "flex"}} 
        justifyContent={"center"} 
        alignItems={"center"}>
        <Box 
            gap={104} 
            display={{base: "block", md: "grid"}} 
            gridTemplateColumns={"1fr 1fr"}>
            <Box 
                pl={{base:"20px", md:"100px"}} 
                mt={"37px"} pr={{"base":"20px", md:"0px"}}> 
               <Image src={exchange} w={"493px"} h={"387px"} borderRadius={"32px"} />
            </Box>
            <Box 
            pr={{base: "20px ", md:"100px"}} 
            pl={{base:"20px", md:"0px"}} 
            pt={{base:"40px", md:"0px"}} 
            color={"var(--accent-color)"} 
            display={{base: "block", md: "flex"}} 
            justifyContent={"center"} 
            alignItems={"center"} 
            h={"467px"}>

            <Box>
                <Heading fontSize={"36px"} fontWeight={600} lineHeight={"46.87px"} pb={"16px"}>Invest in Agriculture. Grow Your Wealth!</Heading>
                <Text fontSize={"18px"} fontWeight={400} lineHeight={"23.44px"} color={"#9B9D8E"}>Support farmers, earn returns, and make a difference today.</Text>
            <Button className='hero-btn' mt={"40px"} w={"100%"}><Link href="./contact" color={"#fff"}>Contact Us Now</Link></Button>
            </Box>

        </Box >

    </Box>
</Box>
  )
}

export default ContactUs
