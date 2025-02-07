import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import PageTitle from '@/component/PageTitle/PageTitle'
import { AspectRatio, Text, Box, Card, Input, HStack, Stack, Button } from '@chakra-ui/react'
import { SlLocationPin } from "react-icons/sl";
import { FaRegEnvelope } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { color } from 'framer-motion'


const InputStyle = {
    border: "1px solid #828282",
    background: "#F9F9F9",
    borderRadius: "10px",
    width: "",
    marginBottom: "15px",
    color: "black"

}
export default function Contact() {
    return (
        <>
            <Navbar />
            <PageTitle title={"Contact"} />
            <Box display={{ base: "block", md: "flex" }} justifyContent={"space-between"} alignItems={"top"} p={{ base: "40px", md: "100px" }}>
                <Box>
                    <Box w={{base: "auto", md:"305px"}}>
                        <Text pb={"20px"} fontSize={"36px"} fontWeight={600} lineHeight={"46.87px"}>Connect with Us</Text>
                        <Text fontSize={"16px"} pb={"20px"} fontWeight={400} lineHeight={"26px"} color={"#141414"}>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</Text>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"center"} gap={"10px"}>
                            <IoLocationOutline color={"var(--accent-color)"} />
                            <Text fontSize={"16px"} color={"#141414"} lineHeight={"26px"}>1054 Eric Moore close, 71.
                                New Site South Side.</Text>
                        </Box>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"center"} gap={"10px"}>
                            <LuPhoneCall color={"var(--accent-color)"}/>
                            <Text fontSize={"16px"} color={"#141414"} lineHeight={"26px"}>+234 768 9110 55</Text></Box>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"center"} gap={"10px"}>
                            <FaRegEnvelope color={"var(--accent-color)"}/>
                            <Text fontSize={"16px"} color={"#141414"} lineHeight={"26px"}>Contact@cosmosinfo.com</Text>
                        </Box>
                    </Box>
                    <Box pt={{base: "30px", md: "80px"}}>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />

                    </Box>
                </Box>
                <Box alignSelf={"center"} pt={{base: "30px", md: "0"}}>
                    <Card.Root maxW="md" bg={"#fff"} p={{base:"15px", md:"30px"}}  >

                        <Card.Body >
                            <Stack>

                                <HStack gap="4" w="full">
                                    <Input placeholder='First Name*' type='text' required style={InputStyle} />
                                    <Input placeholder='Last Name*' type='text' style={InputStyle} />
                                </HStack>
                                <Input placeholder='Email' type='email' style={InputStyle} />
                                <Input placeholder='Phone Number' type='number' style={InputStyle} />
                                <textarea rows={"5"} placeholder='Your Message...' style={InputStyle}></textarea>

                            </Stack>
                        </Card.Body>
                        <Card.Footer>
                            <Button w={"100%"} bg={'var(--accent-color)'} color={"#fff"}>Send Message</Button>
                        </Card.Footer>
                    </Card.Root>
                </Box>
            </Box>



            <Footer />

        </>
    )
}