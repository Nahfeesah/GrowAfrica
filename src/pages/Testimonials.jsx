import React from 'react'
import Footer from '../component/Footer/Footer'
import ContactUs from '@/component/ContactUs/ContactUs'
import Navbar from '@/component/Navbar/Navbar'
import { Box, Button, Flex, Grid, HStack, Image, Text } from '@chakra-ui/react'
import videoImage from '../assets/img/VideoImage.png'
import Testbox from '@/component/Testbox/Testbox'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'




export default function Testimonials() {
    return (
        <>

            <Navbar />

            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} h={"auto"} px={{"base": "20px", md: "0px"}} pt={{base: "200px", md: "150px"}}>
                <Box>
                    <Text as={"h2"} fontSize={{ base: "40px", md: "60px", lg: "80px" }} lineHeight={{base: "48px",md:"78px"}} fontWeight={600} textAlign={"center"} w={{ base: "auto", md: "790px" }}>Read what happy investors are saying</Text>
                    <Text as={"p"} fontSize={"18px"} lineHeight={"28px"} fontWeight={500} textAlign={"center"} color={"#00000080"} w={{base: "auto", md: "450px"}} pt={"40px"} mx={"auto"}>Join thousands of investors funding Nigeria’s agricultural
                    growth while earning sustainable returns</Text>

                    <Image src={videoImage} w={{base: "auto", md: "672px"}} mx={"auto"} pt={"40px"} />
                    <Text w={{base: "auto", md: "672px"}} mx={"auto"} pt={"40px"}>“Pellentesque blandit ligula non venenatis dapibus. Maecenas eleifend metus ut velit iaculis ornare. Quisque commodo commodo tincidunt. Fusce eget ipsum tincidunt, viverra leo id, hendrerit ante. Nam malesuada id tellus et ultrices. Morbi egestas consectetur ligula, nec lobortis magna porta in.”</Text>
                </Box>
            </Box>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} px={{base: "20px", md: "100px"}} py={"50px"} rowGap={"40px"}>
                <Box >
                    <Testbox
                    img={videoImage}
                    name={"John Doe"}
                    title={"Farmer"}
                    bg={"#4F6F0D"}
                    color={"#FFFFFFE5"}
                    titlecolor={"#88B32E"}
                    ratecolor={"orange"}
                    quotecolor={"#88B32E"}
                    direction={"column"}
                    content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, ligula eget consequat lacinia, nisl nunc ultricies nisi, nec pellentesque nisl nisl eu massa."}
                    />
                </Box>
                <Box mb={"10px"}>
                    <Testbox
                    img={videoImage}
                    name={"John Doe"}
                    title={"Farmer"}
                    bg={"#D6A22F"}
                    color={"#FFFFFFE5"}
                    titlecolor={"#000"}
                    ratecolor={"white"}
                    quotecolor={"#4F6F0D"}
                    direction={"column-reverse"}
                    content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, ligula eget consequat lacinia, nisl nunc ultricies nisi, nec pellentesque nisl nisl eu massa."}
                    />
                </Box>
                <Box>
                    <Testbox
                    img={videoImage}
                    name={"John Doe"}
                    title={"Farmer"}
                    bg={"#82AC2A"}
                    color={"#FFFFFFE5"}
                    titlecolor={"black"}
                    ratecolor={"orange"}
                    quotecolor={"black"}
                    direction={"column"}
                    content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, ligula eget consequat lacinia, nisl nunc ultricies nisi, nec pellentesque nisl nisl eu massa."}
                    />
                </Box>
                <Box>
                    <Testbox
                        img={videoImage}
                        name={"John Doe"}
                        title={"Farmer"}
                        bg={"#82AC2A"}
                        color={"#FFFFFFE5"}
                        titlecolor={"black"}
                        ratecolor={"orange"}
                        quotecolor={"black"}
                        direction={"column"}
                        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, ligula eget consequat lacinia, nisl nunc ultricies nisi, nec pellentesque nisl nisl eu massa."}
                    />
                </Box>
                <Box>
                    <Testbox
                        img={videoImage}
                        name={"John Doe"}
                        title={"Farmer"}
                        bg={"#4F6F0D"}
                        color={"#FFFFFFE5"}
                        titlecolor={"#88B32E"}
                        ratecolor={"orange"}
                        quotecolor={"#88B32E"}
                        direction={"column"}
                        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, ligula eget consequat lacinia, nisl nunc ultricies nisi, nec pellentesque nisl nisl eu massa."}
                    />
                </Box>
                <Box>
                    <Testbox
                        img={videoImage}
                        name={"John Doe"}
                        title={"Farmer"}
                        bg={"#D6A22F"}
                        color={"#FFFFFFE5"}
                        titlecolor={"#000"}
                        ratecolor={"white"}
                        quotecolor={"#4F6F0D"}
                        direction={"column-reverse"}
                        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, ligula eget consequat lacinia, nisl nunc ultricies nisi, nec pellentesque nisl nisl eu massa."}
                    />
                </Box>
            </Grid>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"8px"} mb={"40px"}>
                <Button borderRadius={"200px"} p={"12px 20px"} border={"1px solid #6B911B"} color={"#6B911B"} ><Link to="/signup" color={"#fff"}>Begin Your Investment Journey Today</Link> </Button>
                <Link to="/signup"><FaArrowRight color={"#6B911B"} /></Link>
            </Flex>
            <ContactUs />
            <Footer />

        </>
    )
}