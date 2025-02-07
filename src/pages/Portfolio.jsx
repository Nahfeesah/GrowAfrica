import React from 'react'
import Footer from '../component/Footer/Footer'
import ContactUs from '@/component/ContactUs/ContactUs'
import PageTitle from '@/component/PageTitle/PageTitle'
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import InvestmentCard from '@/component/Cards/InvestmentCard'
import PorfolioCard from '@/component/Cards/PorfolioCard'
import { AiOutlineLineChart } from "react-icons/ai";
import { VscBriefcase } from "react-icons/vsc";
import { Heading2 } from '@/component/Heading/Heading'
import leaf from '../assets/img/leaf.png'
import maize from '../assets/img/Maize.png'
import rice from '../assets/img/Rice.png'
import plantain from '../assets/img/Plantain.png'
import { SeeMore } from '@/component/Text/SeeMore'
import PastInvestmentCard from '@/component/Cards/PastInvestmentCard'
import Navbar from '@/component/Navbar/Navbar'
import poultry from '../assets/img/Poultry.png' 
import stock4 from '../assets/img/istock4.jpg'
import { defineAnimationStyles } from "@chakra-ui/react"





export default function Porfolio() {
    return (
        <>

            <Navbar />
            <PageTitle title={"Portfolio"} />
            <Box p={{ base: "30px 20px", md: "80px 100px" }}>
                <Box >
                    <Heading2 text={"Why Choose Cosmos?"} />
                    <Box display={{ base: "block", md: "flex" }} justifyContent={"space-between"}>
                        <PorfolioCard
                            icon={""}
                            title={"High Returns"}
                            content={"Competitive ROI for agricultural investment"}
                        />
                        <PorfolioCard
                            icon={""}
                            title={"Diversified Portfolio"}
                            content={"Multiple crop types and investment option"}
                        />
                        <PorfolioCard
                            icon={""}
                            title={"Transparency"}
                            content={"Regular updates and clear reporting"}
                        />

                    </Box>
                </Box>
            </Box>

            <Box position={"relative"} h={{ base: "auto", md: "743px" }} p={{ base: "30px 20px", md: "80px 100px" }} bg={"#FCFFF5"}>
                <Image src={leaf} position={"absolute"} top={0} right={0} w={"257px"} rotate={90} />
                <Box>
                    <Heading2 text={"Current Investment Opportunities"} />
                    <Box display={{ base: "block", md: "flex" }} justifyContent={"space-between"} >
                        <InvestmentCard 
                        img={{src: plantain, alt:"Plantain Tree"}}
                        name={"Premium Plantain Farm"} 
                        location={"Lagos, Nigeria"} 
                        min={"70,000"} 
                        roi={"25%"} 
                        status={"Open"}
                        link={"#"}/>
                        <InvestmentCard 
                            img={{src: maize, alt:"maize crops"}}
                            name={"Maize Farming Initiative"}
                            location={"Benin, Nigeria"}
                            min={"50,000"}
                            roi={"28%"}
                            status={"Open"} 
                            link={"#"}/>
                        <InvestmentCard 
                            img={{src: rice, alt:"rice crops"}}
                            name={"Rice Farming Initiative"}
                            location={"Kaduna, Nigeria"}
                            min={"100,000"}
                            roi={"25%"}
                            status={"Open"} 
                            link={"#"}/>

                    </Box>
                </Box>
            </Box>
                <SeeMore link={"#"} />
            <Box display={{ base: "block", md: "flex" }} alignItems={"center"} justifyContent={"center"} h={{ base: "auto", md: "380px" }} >
                <Box >
                    <Heading2 text={"Past Investment Opportunities"} />
                    <Box display={{ base: "block", md: "flex" }} justifyContent={"space-between"} gap={"10px"} px={{ base: "20px", md: "100px" }}>
                    <PastInvestmentCard
                        img={maize}
                        date={"Jan - April 2024"}
                        title={"Maize Farm Project"}
                        location={"Kaduna, Nigeria"}
                        roi={"24%"}
                    />
                    <PastInvestmentCard
                        img={rice}
                        date={"May - June 2024"}
                        title={"Rice Farm Project"}
                        location={"Ondo, Nigeria"}
                        roi={"20%"}
                    />
                    <PastInvestmentCard
                        img={poultry}
                        date={"August - December 2024"}
                        title={"Poultry Farm Project"}
                        location={"Kaduna, Nigeria"}
                        roi={"25%"}
                    />
                    </Box>

                </Box>

            </Box>

            <Box height={{ base: "auto", md: "700px" }} display={{ base: "block", md: "flex" }} bg={"#FCFFF5"} justifyContent={"center"} alignItems={"center"}>
                <Box display={{base: "block", md: "grid"}} gridTemplateColumns={{ base: "1fr", md: "1fr 1fr"}}>
                    <Box pl={{base: "20px", md: "100px"}} pr={{base: "20px", md: "0px"}} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"560px"}>
                        <Box color={"var(--accent-color)"}>
                            <Text fontWeight={600} fontSize={"36px"} lineHeight={"44px"}>Our Investment Strategy </Text>
                            <Text p={"16px 0 40px 0"} color={"#9B9D8E"} fontSize={"18px"}>At Cosmos, we prioritize key investment strategies for the profitability of both investors and farmers</Text>
                            <Text fontSize={"20px"} fontWeight={600}>Key Strategies</Text>
                            <Text color={"#9B9D8E"} pt={"20px"}>Focus on high demand crops</Text>
                            <Text color={"#9B9D8E"} pt={"20px"}>Strategic farm location</Text>
                            <Text color={"#9B9D8E"} pt={"20px"}>Modern farming techniques</Text>
                        </Box>

                    </Box >
                    <Box pr={{ base: "20px", md: "100px" }} pt={{ base: "50px", md: "0" }}>
                        <Image src={stock4} w={"529px"} h={"560px"} borderRadius={"32px"}  />
                    </Box>
                </Box>
            </Box>

            <ContactUs />
            <Footer />

        </>
    )
}