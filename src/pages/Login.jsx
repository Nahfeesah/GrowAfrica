import { Field } from '@/components/ui/field'
import { Checkbox } from '@/components/ui/checkbox'
import { PasswordInput } from "@/components/ui/password-input"
import { Image, Box, Heading, Text, Input, Link, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import harvest from '../assets/img/harvest.jpg'
import countryWoman from '../assets/img/countryWoman.jpg'





function Login() {
    const [visible, setVisible] = useState(false)
   
    return (
        <>
            <Box display={{ base: "block", md: "flex" }} justifyContent={"center"} alignItems={"center"} h={"853px"}>
                <Box>
                    <Image src={countryWoman} w={{ base: "auto", md: "600px" }} h={"853px"} />
                </Box>
                <Box w={{ base: "auto", md: "600px" }} h={"853px"}>
                    <Box w={{ base: "auto", md: "513px" }} h={"613px"} m={{ base: "40px 20px", md: "120px 50px" }}>
                        <Heading as={"h2"} fontSize={"34px"} fontWeight={600} lineHeight={"44px"} color={"var(--accent-color)"} pb={"8px"}>Welcome Back</Heading>
                        <Text fontSize={"14px"} fontWeight={400} lineHeight={"19px"} color={"#1E1E1ECC"} pb={"32px"}>Sign in to unlock investment opportunities</Text>
                        <form >
                            <Field label="Email Address" errorText="This field is required" required pb={"20px"}>
                                <Input type='email' placeholder='&#9993; Enter Email Address' />
                            </Field>

                            <Field label="Password" errorText="This field is required" required pb={"20px"}>
                                <PasswordInput
                                    placeholder='Enter Password'
                                    visible={visible}
                                    onVisibleChange={setVisible}
                                />
                            </Field>
                            <Box display={"flex"} justifyContent={"space-between"}>

                                <Checkbox colorPalette={"var(--accent-color)"}>Remember me</Checkbox>
                                <Text> <Link href="/forgotpassword" color={"var(--accent-color)"}>Forgot Password? </Link></Text>
                            </Box>
                                <Button type='submit' w={"100%"} h={"48px"} mt={"32px"} color={"#fff"} bg={"var(--accent-color)"}>Sign In</Button>
                        </form>
                        <Text textAlign={"center"} pt={"30px"}>Don't have an account? <Text as={"span"}><Link href="/signup" color={"var(--accent-color)"}>Sign Up</Link></Text></Text>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Login