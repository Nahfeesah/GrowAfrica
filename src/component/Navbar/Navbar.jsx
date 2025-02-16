import { Box, Button, Flex, Stack, Image } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react'
import logo from '../../assets/img/growLogo.svg'
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



const NavLinks = () => (
  <>
   
    <Link to="/home" color={"black"}>Home</Link>
    <Link to="/about" color={"black"}>About Me</Link>
    <Link to="/portfolio" color={"black"}>Portfolio</Link>
    <Link to="/Testimonials" color={"black"}>Testimonials</Link>
    <Link to="/contact" color={"black"}>Contact Us</Link>
   
  </>
  )
  const NavButtons = () => (
    <>
      <Button className='nav-btn' color={'var(--accent-color)'}><Link to="/Login">Login</Link></Button>
      <Button className='nav-btn' color='#fff' bg={'var(--accent-color)'}><Link to="/signup">Sign Up</Link></Button>
    </>
)
  const NavButton = () => (
    <>
      <Link  href="#" className='nav-btn' color={'var(--accent-color)'}>Login</Link>
      <Link href="#" className='nav-btn' color='#fff' bg={'var(--accent-color)'}>Sign Up</Link>
    </>
)
function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
       setIsOpen(!isOpen);
   };
  return (
    <>
        <Flex as="header"  justify="space-between" align="center" className='navbar'>
          <Box>
            <Image src={logo}/>
                {/* <h1 className='logo'><a href="">Cosmos</a></h1> */}
          </Box>
          <Flex  display={{ base: "none", lg: "flex" }} gap="32px" className="nav-list">   
            <NavLinks />
          </Flex>
                    
        <Box display={{ base: "none", lg: "flex" }} gap="16px">
           <NavButtons />
          </Box>
          <Box display={{ base: "block", lg: "none" }} className='mobile-nav-toggle'>
            <DrawerRoot bg={"#fff"} >
            <DrawerBackdrop />
              <DrawerTrigger asChild fontSize={32}>
                <RxHamburgerMenu  />
              </DrawerTrigger>
            <DrawerContent bg={"#fff"}>
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                  <Stack gap="32px">
                   <NavLinks />
                  </Stack>
                </DrawerBody>
                <DrawerFooter>
                <NavButtons />
                </DrawerFooter>
                <DrawerCloseTrigger />
              </DrawerContent>
            </DrawerRoot>
         </Box>

        </Flex>
    </>
  )
}
export default Navbar
