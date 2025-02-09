import React from 'react'
import { useState } from 'react';
import logo from '../assets/img/growLogo.svg'
import { Box, Image,Button } from '@chakra-ui/react';
import {
    DrawerActionTrigger,
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
import { BarChart, Landmark } from 'lucide-react';


const SIDEBAR_ITEMS = [
    {name:"Overview", icon:BarChart},
    {name:"Investment", icon:Landmark}
]
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <Box padding={"24px"}>
                <Image src={logo} padding={"10px"} w={{ base: "50px", md: "150px" }} />
                <BarChart/>
                <Landmark/>
                <DrawerRoot placement={"start"} colorpalette={"white"}>
                    <DrawerBackdrop />
                    <DrawerTrigger asChild>
                        <Button variant="outline" size="sm">
                            Open Drawer
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent offset="4" rounded="md">
                        <DrawerHeader>
                            <DrawerTitle>Drawer Title</DrawerTitle>
                        </DrawerHeader>
                        <DrawerBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </DrawerBody>
                        <DrawerFooter>
                            <DrawerActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerActionTrigger>
                            <Button>Save</Button>
                        </DrawerFooter>
                        <DrawerCloseTrigger />
                    </DrawerContent>
                </DrawerRoot>

            </Box>
        </>
    )
}

export default Sidebar