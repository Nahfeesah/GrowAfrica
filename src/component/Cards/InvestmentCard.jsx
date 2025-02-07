import React from 'react'

import { Box, Image, Card, Button, Text, Link } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'

function InvestmentCard(props) {
  return (
    <>
        <Box w={"321px"} h={{ base: "auto", md: "324.87px"}} pt={{base: "30px", md: "0px"}}>
                    <Card.Root className='testimonial-card-root'  >
                        <Image src={props.img.src} alt={props.img.alt} w={"297px"} h={"234px"} m={" 14px auto 0"} borderRadius={"12px"}/>
                  <Card.Body gap="2" p={"19px 22px 10px 22px"} color={'#9B9D8E'}>
                      <Card.Title fontWeight={600} fontSize={"22px"} lineHeight={"24px"} color={"#141414"}>{props.name}</Card.Title>
                      <Card.Description  fontWeight={400} fontSize={"16px"} lineHeight={"24px"}>Location: <Text as={"span"} fontWeight={600}>{props.location}</Text>
                            </Card.Description>
                      <Text fontWeight={400} fontSize={"14px"}>Min investment:&#8358; <Text as={"span"} fontWeight={600}>{props.min}</Text>
                        </Text>
                      <Text>ROI: <Text as={"span"} fontWeight={600}>{props.roi}</Text></Text>
                      <Text>Status: <Text as={"span"} fontWeight={600}>{props.status}</Text></Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button bg={'var(--accent-color)'}  textAlign={"center"} w={"100%"}>
                                <Link href={props.link} color={"#fff"}>View Projects</Link>
                            </Button>
                        </Card.Footer>
        
                    </Card.Root>
                </Box>
    </>
  )
}

InvestmentCard.propTypes = {}

export default InvestmentCard
