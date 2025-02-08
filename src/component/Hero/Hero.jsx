import { Box, Flex, Image, Button, Heading, Text, SimpleGrid, Card, Link } from '@chakra-ui/react'
import React from 'react'
import './Hero.css'
import Tractor from '../../assets/img/tractor.jpg'
import vector from '../../assets/img/Vector.png'
import leaf from '../../assets/img/leaf.png'
import harvest from '../../assets/img/harvest.jpg'
import signup from '../../assets/img/sign-up.jpg'
import hands from '../../assets/img/handsholdingmoney.jpg'
import gardener from '../../assets/img/gardener1.jpg'
import project from '../../assets/img/project.png'
import worker from '../../assets/img/farm-worker.jpg'
import woman from '../../assets/img/woman.png'
import frame from '../../assets/img/frame.png'
import TestCard from '../Cards/TestCard'
import WorksCard from '../Cards/WorksCard'
import Contact from '@/pages/Contact'
import ContactUs from '../ContactUs/ContactUs'
import { Heading2 } from '../Heading/Heading'
import { SeeMore } from '../Text/SeeMore'
import womanWithTomato from '../../assets/img/istock5.jpg'
import moneyExchangePlant from '../../assets/img/moneyExchangePlants.jpg'
<ChartSpline />


 export const flexStyle = {
     display: { base: "block", md: "flex" },
    justifyContent: "center",
    alignItems: "center"
    
}
export default function Hero() {
    return (
        <>
            <Box position={"relative"} className='hero'>
                <div className='overlay'></div>
                <Box className='hero-top-div'>
                    <p>April Maize <span>Funding</span> Cycle, Limited slots available! </p>
                    <p>Ends in : 10 Days, 12 Hours, 30 Minutes</p>
                </Box>
                <Box className='hero-center-div'>
                    <div className='hero-container'>
                        <div className='hero-text'>
                            <h1 className='hero-title'>Funding Farmers, Harvesting Hope for the Future</h1>
                            <p className='hero-description'>Join thousands of investors funding Nigeria’s agricultural
                                growth while earning sustainable returns</p>
                            <Button className='hero-btn'><Link href="./signup" color={"#fff"}>Begin Your Investment Journey Today</Link> </Button>
                        </div>
                    </div>
                </Box>
            </Box>
            <Box style={flexStyle} height={{ base: "auto", md: "700px"}} display={{base: "block", md: "flex" }}>
                <Box className='benefits'>
                    <Box pl={{base: "0px", md: "100px"}} color={"var(--accent-color)"} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"560px"}>
                        <Box>
                            <Text fontWeight={600} fontSize={"36px"} lineHeight={"44px"}>Empowering Agriculture,<br />Enriching Lives!</Text>
                            <Text p={"16px 0 40px 0"} color={"#9B9D8E"} fontSize={"18px"}>At Cosmos, we bridge the gap between investors and farmers. Your funding empowers local farmers to grow high-potential crops, increase yields, and contribute to food security.</Text>
                            <Text fontSize={"20px"} fontWeight={600}>Key Benefits</Text>
                            <Text color={"#9B9D8E"} pt={"20px"}> Invest in sustainable agriculture with confidence.</Text>
                            <Text color={"#9B9D8E"} pt={"20px"}>Support small-scale farmers and rural communities.</Text>
                            <Text color={"#9B9D8E"} pt={"20px"}>Earn competitive returns while making an impact.</Text>
                        </Box>

                    </Box >
                    <Box pr={{ md: "100px" }} pt={{ base: "50px", md: "0" }}>
                        <Image src={womanWithTomato} w={"529px"} h={"560px"} borderRadius={"32px"}  />
                    </Box>
                </Box>
            </Box>
            <Box style={flexStyle} className='how-it-works'>
                <Image src={leaf} position={"absolute"} top={0} left={0} w={308} />
                <Box>
                    <Heading2 text={"How It Works"} pb={"48px"}/>
                    <Box>
                        <SimpleGrid columns={{base:1, md: 2}} gap={'42px'} px={{base:"20px", md:"100px"}}>
                            <WorksCard 
                                img={project}
                                title={"Browse Projects"}
                                content={"Discover various agricultural projects available for investment"}
                            />
                            <WorksCard
                                img={signup}
                                title={"Sign Up to Invest"}
                                content={"Create an account to start supporting local farmer"}
                            />
                            <WorksCard
                                img={moneyExchangePlant}
                                title={"Invest in Local Farmers"}
                                content={" Choose a project and invest in a sustainable future"}
                            />
                            <WorksCard
                                img={hands}
                                title={"Earn Returns"}
                                content={"Receive returns while making a possible impact on communities"}
                            />
                        </SimpleGrid>
                    </Box>

                </Box>
            </Box>
            <Box h={{base:"auto", md: "700px"}} borderBottom={"1px solid #E3E3E3"}>
                <Box className='testimonial'>
                    <div className='overla'></div>
                    <Box className='testimonial-title'>
                        <Text fontWeight={600} fontSize={"36px"} lineHeight={"46.87px"
                        } pb={"10px"}>Testimonial</Text>
                        <Text fontWeight={500} fontSize={"18px"} lineHeight={"23.44px"}>Stories of Growth Through Funding</Text>
                    </Box>
                    <Box  gap={"30px"} zIndex={"3"} position={"relative"} pt={"80px"} display={{base: "block", md: "flex"
                    }} justifyContent={"center"} alignItems={"center"} pl={{base: "20px", md: "0"}}>
                        <TestCard
                         img={gardener} 
                         name={"John Adedeji"} 
                         description={"Cosmos Agritech transformed my farming business!"} 
                         date={"24 August 2024"}
                        />
                        <TestCard
                         img={worker} 
                         name={"Obinna John"} 
                            description={" I'm grateful for the support from Cosmos."} 
                         date={"24 August 2024"}
                        />
                        <TestCard
                         img={woman} 
                         name={"Chika Nwosu"} 
                         description={"Investing in Cosmos was a game changer in the agric sector"} 
                         date={" 17 December 2024"}
                        />
                        
                    </Box>
                    <SeeMore link={"./testimonials"} />
                </Box>
            </Box>
            <ContactUs/>
        </>
    )
}
