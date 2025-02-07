import { Field } from '@/components/ui/field'
import { Checkbox } from '@/components/ui/checkbox'
import { PasswordInput } from "@/components/ui/password-input"
import { Image, Box, Heading, Text, Input, Link, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import harvest from '../assets/img/harvest.jpg'
import countryWoman from '../assets/img/countryWoman.jpg'





function SignUp() {
    const [visible, setVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    return (
        <>
            <Box display={{ base: "block", md: "flex" }} justifyContent={"center"} alignItems={"center"} h={"853px"}>
                <Box>
                    <Image src={countryWoman} w={{ base: "auto", md: "600px" }} h={"853px"} />
                </Box>
                <Box w={{ base: "auto", md: "600px" }} h={"853px"}>
                    <Box w={{ base: "auto", md: "513px" }} h={"613px"} m={{ base: "40px 20px", md: "120px 50px" }}>
                        <Heading as={"h2"} fontSize={"34px"} fontWeight={600} lineHeight={"44px"} color={"var(--accent-color)"} pb={"8px"}>Start Your Investment Journey!</Heading>
                        <Text fontSize={"14px"} fontWeight={400} lineHeight={"19px"} color={"#1E1E1ECC"} pb={"32px"}>Sign up on Cosmos and start investing in sustainable farming today</Text>
                        <form >
                            <Field label="Full Name" errorText="This field is required" required pb={"20px"}>
                                <Input type='text' placeholder=' Enter Full Name' />
                            </Field>
                            <Field label="Email Address" errorText="This field is required" required pb={"20px"}>
                                <Input type='email' placeholder='Enter Email Address' />
                            </Field>
                            <Field label="NIN" errorText="This field is required" required pb={"20px"}>
                                <Input type='number' placeholder='Enter NIN' />
                            </Field>
                            <Field label="Password" errorText="This field is required" required helperText="Use 8 or more characters with a mix of letters, numbers & symbols" pb={"20px"}>
                                <PasswordInput
                                    placeholder='Enter Password'
                                    visible={visible}
                                    onVisibleChange={setVisible}
                                />
                            </Field>
                            <Field label="Confirm Password" errorText="This field is required" required pb={"20px"}>
                                <PasswordInput
                                    placeholder='Enter Confirm Password'
                                    visible={confirmPasswordVisible}
                                    onVisibleChange={setConfirmPasswordVisible}
                                />
                            </Field>
                            <Checkbox >By creating an account, i agree to the <Text as={"span"}><Link href="#" color={"var(--accent-color)"}>Terms of use</Link></Text> and <Text as={"span"} > <Link href="#" color={"var(--accent-color)"}>Privacy Policy</Link></Text></Checkbox>
                            <Button type='submit' w={"100%"}  h={"48px"} mt={"32px"} color={"#fff"} bg={"var(--accent-color)"} fontSize={"18px"}>Sign Up</Button>
                        </form>
                        <Text>Already have an account? <Link href="/login" color={"var(--accent-color)"}>Login</Link></Text>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default SignUp