import { Text, Box, Image } from "@chakra-ui/react"
import project from '../../assets/img/project.png'
import '../Hero/Hero.css'
 function WorksCard(props){
    return(
        <Box className='how-it-works-box'>
            <Image src={props.img} w={"100px"} />
            <Box>
                <Text className='how-it-works-h'>{props.title}</Text>
                <Text className='how-it-works-p'>{props.content}</Text>
            </Box>
        </Box>
    )
 }
export default WorksCard
