import { Box, HStack, Input, Text, Stack, Button, Heading, Spacer,} from '@chakra-ui/react'
import React from 'react'
import { InputGroup } from "@/components/ui/input-group"
import {
    PaginationItems,
    PaginationRoot,
} from "@/components/ui/pagination"
import { IoMdNotificationsOutline } from 'react-icons/io'
import { GoPlusCircle } from 'react-icons/go'
import { LuCircleMinus, LuSearch } from 'react-icons/lu'
import FundsCard from './FundsCard'
import WalletTable from './WalletTable'
import { HiMiniAdjustmentsVertical } from 'react-icons/hi2'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Wallet() {
    return (
        <Box px={"34px"}>
            <HStack borderBottom={"1px solid #0000001A"} py={"27px"} >
                <Box>
                    <Text fontSize={"20px"} fontWeight={600} color={"#1E1E1E"}>Wallet</Text>
                    <Text fontSize={"14px"} color={"#00000080"}>Manage your funds easily and securely in one place</Text>
                </Box>
                <Spacer />
                <Box>
                    <IoMdNotificationsOutline size={"25px"} />
                </Box>
            </HStack>
            <HStack py={"24px"}>
                <Heading fontSize={"22px"} fontWeight={500} color={"#1E1E1E"}>Quick Overview of Your Funds</Heading>
                <Spacer />
                <HStack gap={"16px"}>
                    <Button bg={"var(--accent-color)"} color={"#fff"} ><GoPlusCircle /><Link to={"/addfunds"}>Add Funds </Link></Button>
                    <Button border={"1px solid var(--accent-color)"} color={"var(--accent-color)"}><LuCircleMinus />Withdraw</Button>
                </HStack>
            </HStack>
            <HStack justifyContent={"space-between"} borderBottom={"1px dashed #0000001A"}>

                <FundsCard
                    title={"WALLET BALANCE"}
                    amount={"₦5,000,000"}
                />
               
                <FundsCard
                    title={"TOTAL ROI CREDITED"}
                    amount={"₦1,000,000"}
                />
                
                <FundsCard
                    title={"FUNDS WITHDRAWN"}
                    amount={"₦850,000"}
                />
                
                <FundsCard
                    title={"PENDING TRANSACTIONS"}
                    amount={"5"}
                />

            </HStack>
            <HStack pt={"24px"}>
                <Box>
                    <Text fontSize={"20px"} fontWeight={500}>Transaction History</Text>
                </Box>
                <Spacer />

                <InputGroup
                    flex="1"
                    startElement={<LuSearch size={"20px"} />}
                    endElement={<HiMiniAdjustmentsVertical size={"20px"} />}
                >
                    <Input placeholder="Search..." fontSize={"16px"} fontWeight={500} />
                </InputGroup>


            </HStack>
            <Stack flex={1} gap="5">
                <WalletTable />

                <HStack justifyContent={"space-between"}>
                    <Button borderRadius={"8px"} border={"1px solid #D0D5DD"} gap={"8px"} color={"#344054"}><FaArrowLeft size={"20px"} />Previous</Button>
                    <PaginationRoot count={10} pageSize={2} page={1} defaultPage={1}>
                        <HStack wrap="wrap">
                            
                            <PaginationItems />
                            
                        </HStack>
                    </PaginationRoot>
                    <Button borderRadius={"8px"} border={"1px solid #D0D5DD"} gap={"8px"} color={"#344054"}>Next<FaArrowRight size={"20px"} /></Button>
                </HStack>
            </Stack>


        </Box>
    )
}

export default Wallet



