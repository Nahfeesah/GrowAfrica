import { Box, List, Text, Badge, Link } from "@chakra-ui/react"
import "./Footer.css"
import React from 'react'
import { flexStyle } from "../Hero/Hero"
import { FaTwitter, FaLinkedin, FaFacebook, FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";


const gridStyle = {
    display: { base: "block", md: "grid" },
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "100px"
}
const flexStyles = {
    display: { base: "block", md: "flex" },
    justifyContent: "space-between",
    alignItems: "center"
}
function Footer() {
    return (
        <>
            <Box h={ {base: "auto", md:"393px"}}>
                <Box style={flexStyles} display={{ base: "block", md: "flex" }} className="copyright" bg={"#4F6F0D"} h={ {base:"auto", md:"300px"}} gap={"200px"} color={"#EAECF0"} pt={"54px"} pb={"40px"}>
                    <Box  pl={{ base:"20px", md:"100px"}}>
                        <Text fontSize={"33px"} fontWeight={"500"} lineHeight={"60px"}color={"#FFFFFF"} pb={"32px"}>Cosmos</Text>
                        <Text fontSize={"16px"} fontWeight={"400"} lineHeight={"24px"}>Invest in amazing agro opportunities that create more happy people in the world.</Text>
                        <Box display={"flex"} gap={"10px"} alignItems={"center"} pt={"12px"}>
                            <FaRegEnvelope />
                            <p>Companyemail@email.com</p>
                        </Box>
                        <Box display={"flex"} gap={"10px"} alignItems={"center"} pt={"12px"}>
                            <FiPhone />
                            <p>+234 1234 567 8900</p>

                        </Box>

                    </Box>
                    <Box display={{ base: "block", md: "grid" }} p={{base:"20px", md:" 0 100px"}} gridTemplateColumns={ "1fr 1fr 1fr"} gap={"100px"} >
                        <Box pt={{base:"20px", md:"0"}}> 
                            <Text color={"#EDCF6F"} fontWeight={600} lineHeight={"20px"}>Investments</Text>
                            <Box display={"block"}>
                                 <Link href="#" pt={"8px"} w={"100%"}>Cassava </Link>
                                 <Link href="#" pt={"8px"} w={"100%"}>Plantain</Link>
                                 <Link href="#" pt={"8px"} w={"100%"}>Maize <Badge color="black" bg={"white"} borderRadius={"16px"}>New</Badge></Link>
                                 <Link href="#" pt={"8px"} w={"100%"}>Rice </Link>
                                 <Link href="#" pt={"8px"} w={"100%"}>Yam tubers</Link>
                                <Link href="#" pt={"8px"} w={"100%"}>Millet</Link>
                            </Box>
                        </Box>
                        <Box pt={{ base: "20px", md: "0" }}>
                            <Text color={"#EDCF6F"} fontWeight={600} lineHeight={"20px" }>Company</Text>
                            <Box>
                                <Link href="/home"  pt={"8px"} w={"100%"}>Home</Link>
                                <Link href="/about" pt={"8px"} w={"100%"}>About us</Link>
                                <Link href="#" pt={"8px"} w={"100%"}>Careers</Link>
                                <Link href="#" pt={"8px"} w={"100%"}>Investments</Link>
                                <Link href="/contact" pt={"8px"} w={"100%"}>Contact</Link>
                            </Box>
                        </Box>
                        <Box pt={{ base: "20px", md: "0" }}>
                            <Text color={"#EDCF6F"} fontWeight={600} lineHeight={"20px" }>Legal</Text>
                            <Box sx={{ a: { pt: "12px",fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}} >
                                <Link href="#" pt={"8px"} w={"100%"} >Terms</Link>
                                <Link href="#" pt={"8px"} w={"100%"}>Privacy</Link>
                                <Link href="#" pt={"8px"} w={"100%"}>Cookies</Link>
                            
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box px={{base:"20px", md:"100px"}} bg={"#354D04"}>
                <Box className="copyright" h={{base: "auto", md:"100px"}} >
                    <Box >
                        <Text> &copy; 2024 Cosmos. All rights reserved.</Text>
                    </Box>
                    <Box className="social-icons" >
                        <FaTwitter />
                        <FaLinkedin />
                        <FaFacebook />
                    </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Footer