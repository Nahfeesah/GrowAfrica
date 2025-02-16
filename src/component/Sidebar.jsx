import React from 'react'
import { useState } from 'react';
import logo from '../assets/img/growLogo.svg'
import { Box, Image,Button, Text } from '@chakra-ui/react';
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
import { 
    MdOutlineDashboardCustomize, 
    MdOutlineLibraryBooks, 
    MdOutlinePeople } from 'react-icons/md';
import { LuBookText } from 'react-icons/lu';


const SIDEBAR_ITEMS = [
    // {name:"Dashboard", icon:MdOutlineDashboardCustomize, path:"/admin"},
    // { name: "User Management", icon:MdOutlinePeople, path:"/userMgt"},
    // { name: "Projects", icon:LuBookText, path:"/projects"},    
    // {name:"Investments", icon:Landmark, path:"/investment"},
    // { name: "Report", icon:LuChartSpline, path:"/reports"},
    // { name: "Security", icon:BsShieldLock, path:"/security"},
    // {name:"Audit Log", icon:MdOutlineLibraryBooks, path:"/audit"},
    // { name: "Settings", icon: GoGear, path:"/settings"},
  
]
const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <>
            <Box h={full} w={"250px"} >
                <Box display={"flex"} direction={"flex-column"}>
                    <Text>Menu</Text>

                </Box>

            </Box>
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