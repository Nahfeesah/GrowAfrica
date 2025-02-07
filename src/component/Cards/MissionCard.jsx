import { Text, Box, Image } from "@chakra-ui/react"







 function MissionCard(props){
    return(
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} border={"1px solid #E3E3E3"} p={"14px"} w={"316px"} gap={"16px"}>
            <Image src={props.img} w={"100px"} borderRadius={"5px"}h={"100px"} />
            <Box>
                <Text fontWeight={600} fontSize={"20px"} color={"#141414"} lineHeight={"24px"}>{props.title}</Text>
                <Text fontWeight={400} fontSize={"14px"} color={"#9B9D8E"} lineHeight={"24px"}>{props.content}</Text>
            </Box>
        </Box>
    )
 }
export default MissionCard