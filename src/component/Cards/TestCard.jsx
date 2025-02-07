import React from 'react'
import gardener from '../../assets/img/gardener1.jpg'
import { Box, Card, Image, Text } from '@chakra-ui/react'
import '../Hero/Hero.css'
function TestCard(props) {
  return (
    
        <Box w={"321px"} h={"324.87px"}>
            <Card.Root className='testimonial-card-root'  >
                <Image src={props.img} className='textimonial-card-img'/>
                <Card.Body gap="2" p={"19px 22px 10px 22px"}>
                    <Card.Title fontWeight={500} fontSize={"20px"} lineHeight={"24px"}>{props.name}</Card.Title>
                    <Card.Description color={'#9B9D8E'} fontWeight={400} fontSize={"18px"} lineHeight={"24px"}>
                        {props.description}
                    </Card.Description>
                    <Text fontWeight={400} fontSize={"14px"}>
                        {props.date}
                    </Text>
                </Card.Body>

            </Card.Root>
        </Box>
  )
}
export default TestCard



