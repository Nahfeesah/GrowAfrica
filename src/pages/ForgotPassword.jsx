import { Field } from '@/components/ui/field'
import { Image, Box, Heading, Text, Input, Link, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import harvest from '../assets/img/harvest.jpg'
import { TbLockQuestion } from "react-icons/tb";
import countryWoman from '../assets/img/countryWoman.jpg'





function ForgotPassword() {
    return (
        <>
            <Box display={{ base: "block", md: "flex" }} justifyContent={"center"} alignItems={"center"} h={"853px"}>
                <Box>
                    <Image src={countryWoman} w={{ base: "auto", md: "600px" }} h={"853px"} />
                </Box>
                <Box w={{ base: "auto", md: "600px" }} h={"853px"}>
                    <Box w={{ base: "auto", md: "513px" }} h={"613px"} m={{ base: "40px 20px", md: "120px 50px" }}>
                        <Heading as={"h2"} fontSize={"34px"} fontWeight={400} lineHeight={"40px"}  pb={"32px"}> <Text><TbLockQuestion /></Text> Forgot Password</Heading>
                        <form >
                            <Field label="Email Address" errorText="This field is required" required pb={"20px"}>
                                <Input type='email' placeholder=' &#9993; Enter Email Address' />
                            </Field>

                            <Button type='submit' w={"100%"} h={"48px"} mt={"32px"} color={"#fff"} bg={"var(--accent-color)"}>Continue</Button>
                        </form>
                       
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default ForgotPassword