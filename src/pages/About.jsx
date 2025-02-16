import React from 'react'
import Footer from '../component/Footer/Footer'
import ContactUs from '@/component/ContactUs/ContactUs'
import { Box,Text,Image, Heading } from '@chakra-ui/react'
import PageTitle from '@/component/PageTitle/PageTitle'
import leaf from '../assets/img/leaf.png'
import { Heading2 } from '@/component/Heading/Heading'
import WorksCard from '@/component/Cards/WorksCard'
import MissionCard from '@/component/Cards/MissionCard'
import Navbar from '@/component/Navbar/Navbar'
import istock8 from '../assets/img/istock8.jpg'
import womanMarket from '../assets/img/womanMarket.jpg'
import  StatItem  from '@/component/Text/NumberCount'
import gardener from '../assets/img/gardener1.jpg'
import blueSky from '../assets/img/blue-sky.jpg'
import hands from '../assets/img/handsholdingmoney.jpg'



export default function About() {
    return (
        <>
            <Navbar />
            <PageTitle title="About Us" />
            <Box h={{ base: "auto", md: "634px"}} display={{base: "block", md: "flex"}} justifyContent={"center"} alignItems={"center"} pt={{base: "40px", md: "0"}}>
                <Box display={{base: "block", md: "grid"}} gridTemplateColumns={{ base: "1fr", md: "1fr 1fr"}} gap={"73px"}>
                    <Box pl={{base: "20px", md: "100px"}} pr={{base: "20px", md: "0px"}} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"560px"}>
                        <Box color={"var(--accent-color)"}>
                            <Text fontWeight={600} fontSize={"36px"} lineHeight={"44px"} pb={"36px"}>How it all Began </Text>
                            <Text color={"#060606"} fontSize={"24px"} fontWeight={500} pb={"8px"}>Our Story</Text>
                            <Text p={"16px 0 40px 0"} color={"#9B9D8E"} fontSize={"18px"}>Cosmos Agritech, founded in [Year], is revolutionizing Nigerian agriculture. We connect smallholder farmers with investors, empowering them to increase yields, improve livelihoods, and protect the environment. Key milestones include our first major partnership with [Partner's Name] in [Year] and the launch of our innovative platform in [Year], connecting [Number] farmers. By investing in Cosmos Agritech, you're not just supporting a business, but the future of Nigerian agriculture.</Text>
                            
                        </Box>

                    </Box >
                    <Box pr={{ base: "20px", md: "100px" }} pt={{ base: "50px", md: "0" }} pl={{ base: "20px", md: "0px" }} >
                        <Image src={istock8} w={"466px"} h={"500px"} borderRadius={"32px"} />
                    </Box>
                </Box>

            </Box>
            <Box h={{ base: "auto", md: "634px" }} display={{ base: "block", md: "flex" }} justifyContent={"center"} alignItems={"center"} bg={"#FCFFF5"} position={"relative"}>
               
                <Image src={leaf} position={"absolute"} top={0} right={0} w={257} rotate={90} />
                
                <Box display={ "grid" } gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={"73px"}>
                    <Box pl={{ base: "20px", md: "0px" }} pt={{ base: "30px", md: "0" }} pr={{ base: "20px", md: "0px" }} order={{ base: "2", md: "1" }}>
                        <Image src={womanMarket} w={"466px"} h={"500px"} borderRadius={"32px"} />
                    </Box>

                    <Box pr={{ base: "20px", md: "0px" }} pl={{ base: "20px", md: "100px" }} display={"flex"} justifyContent={"center"} alignItems={"center"} h={{base:"auto", md:"560px"}} pt={{ base: "70px", md: "0" }}>
                        <Box color={"var(--accent-color)"}>
                            <Text fontWeight={600} fontSize={"36px"} lineHeight={"30px"} pb={"36px"}>Meet Cosmos AgriTech </Text>
                            <Text color={"#060606"} fontSize={"24px"} fontWeight={500} pb={"8px"}>"WHO WE ARE"</Text>
                            <Text color={"#9B9D8E"} fontSize={"18px"}>Cosmos Agritech connects investors with smallholder farmers, driving food security and sustainable growth through impactful agricultural investments.</Text>
                            <Text color={"#060606"} fontSize={"24px"} fontWeight={500} pb={"8px"} pt={"36px"}>"WHAT WE DO"</Text>
                            <Text color={"#9B9D8E"} fontSize={"18px"}>We empower smallholder farmers by providing them with access to funding and resources, enabling them to cultivate crops, increase yields, and improve livelihoods. Through our platform, investors can support sustainable agriculture while earning returns, fostering a stronger and more resilient agricultural sector.</Text>
                        </Box>
                    </Box >
                </Box>
            </Box>
            <Box p={{ base: "50px 20px", md: "80px 100px" }}>
                <Box >
                    <Heading2 text={"Mission"} />
                    <Box display={{ base: "block", md: "flex" }} justifyContent={"space-between"}>
                        <MissionCard
                        img={gardener}
                        title={"Empower Farmers"}
                        content={"Empower farmers through technology and collaboration "}
                        />
                        <MissionCard
                        img={hands}
                        title={"Connect Investors"}
                        content={" Connect investors with sustainable agricultural projects."} 
                        />
                        <MissionCard
                        img={blueSky}
                        title={"Build the Future"}
                        content={" Build a sustainable future for agricultural and communities."} 
                        />
                    </Box>
                </Box>
            </Box>
            <Box p={{ base: "30px 20px", md: "80px 100px" }}>
                <Box >
                    <Heading2 text={"Impacts in Numbers"}/>
                    <Box display={{ base: "block", md: "flex" }} justifyContent={"space-between"}>
                        <StatItem targetNumber={500} label="Farmers Empowered" />
                        <StatItem targetNumber={10000} label="Hectares Cultivated" />
                        <StatItem targetNumber={5000} label="Happy Investors" />
                        <StatItem targetNumber={70000} label="Ton Harvested" />
                    </Box>
                </Box>
            </Box>


        
            <ContactUs />
            <Footer />

        </>
    )
}