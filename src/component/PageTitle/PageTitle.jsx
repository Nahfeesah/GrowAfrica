import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import './PageTitle.css'

function PageTitle(props) {
  return (
    <>
    
        <Box position={"relative"} className='page-title'>
            <Heading as={"h1"} className='page-title-header'>{props.title}</Heading>
        </Box>
    </>
  )
}

export default PageTitle