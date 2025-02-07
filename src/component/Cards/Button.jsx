import { Box, Button, Link } from '@chakra-ui/react'
import React from 'react'

function SendButton(props) {
  return (
      <Box w={"100%"} bg={"var(--accent-color)"}>
        <Button type='submit'  h={"48px"} mt={"32px"} > <Link href={props.link} bg={"var(--accent-color)"} color={"#fff"} >{props.name}</Link></Button>
      </Box>
  )
}

export default SendButton