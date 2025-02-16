import { Stack, Table, Box, Button, DialogRootProvider, Heading, Separator, Text, useDialog } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "@/components/ui/menu"
import { DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogBody, DialogCloseTrigger } from '@/components/ui/dialog'


function WalletTable() {
    const dialog = useDialog()
    return (
        <Stack width="full" gap="5">
            <Table.Root size="lg" variant="line">
                <Table.Header >
                    <Table.Row bg={"#FCFCFC"} fontSize={"14px"} fontWeight={500} >
                        <Table.ColumnHeader color={"#4F5144"}>Date</Table.ColumnHeader>
                        <Table.ColumnHeader color={"#4F5144"}>TransactionID</Table.ColumnHeader>
                        <Table.ColumnHeader color={"#4F5144"}>Type</Table.ColumnHeader>
                        <Table.ColumnHeader color={"#4F5144"}>Description</Table.ColumnHeader>
                        <Table.ColumnHeader color={"#4F5144"}>Amount</Table.ColumnHeader>
                        <Table.ColumnHeader color={"#4F5144"}>Status</Table.ColumnHeader>
                        <Table.ColumnHeader color={"#4F5144"}></Table.ColumnHeader>

                    </Table.Row>
                </Table.Header>
                <Table.Body bg={"#fff"}>
                    {items.map((item) => (
                        <Table.Row key={item.id} bg={"#fff"} fontSize={"14px"}>
                            <Table.Cell color={"#4F5144"} >{item.date} </Table.Cell>
                            <Table.Cell color={"#4F5144"} >{item.transactionID}</Table.Cell>
                            <Table.Cell color={"#4F5144"}>{item.type}</Table.Cell>
                            <Table.Cell color={"#4F5144"}>{item.description}</Table.Cell>
                            <Table.Cell color={"#4F5144"}>{item.amount}</Table.Cell>
                            <Table.Cell>
                                <Box
                                    px="2" py="2"
                                    borderRadius="16px"
                                    fontWeight="bold"
                                    fontSize="12px"
                                    lineHeight={"18px"}
                                    color={getStatusColor(item.status).text}
                                    bg={getStatusColor(item.status).bg}
                                    textAlign="center"
                                    width="fit-content"
                                >
                                    {item.status}
                                </Box>
                            </Table.Cell>

                            <Table.Cell color={"#4F5144"}>
                                <MenuRoot>
                                    <MenuTrigger asChild>
                                        {item.icon}
                                    </MenuTrigger>
                                    <MenuContent>
                                        <MenuItem onClick={() => dialog.open()}>
                                            <DialogRootProvider value={dialog} >
                                                <DialogTrigger>

                                                    {dialog.open ? "Close" : "Open"}

                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader bg={"#fff"}>
                                                        <DialogTitle color={"var(--accent-color)"} fontSize={"24px"}>Transaction Details</DialogTitle>
                                                    </DialogHeader>
                                                    <Separator />
                                                    <DialogBody bg={"#fff"} pt={"20px"}>
                                                        <Box>
                                                            <Heading as={"h4"} pb={"16px"} color={"#1E1E1E"} fontSize={"16px"}> Transaction Overview</Heading>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>Transaction ID: {items[0].transactionID}</Text>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>Date: {items[0].date}</Text>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>Type: {items[0].type}</Text>
                                                            <Text color={getStatusColor(items[0].status).text} bg={getStatusColor(items[0].status).bg} width="fit-content" >Status: {items[0].status}</Text>
                                                        </Box>
                                                        <Stack>
                                                            <Heading as={"h4"} pb={"16px"} pt={"12px"} color={"#1E1E1E"} fontSize={"16px"}>Transaction Breakdown</Heading>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>ROI Earned: ₦100,000</Text>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>Fees Deducted: ₦0</Text>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>Net Credited: ₦100,000</Text>
                                                        </Stack>
                                                        <Stack>
                                                            <Heading as={"h4"} pb={"16px"} color={"#1E1E1E"} fontSize={"16px"}>Project Information</Heading>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>Project Name: {items[0].description}</Text>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>Investment Type: ROI Payment</Text>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>Start Date: {items[0].date}</Text>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>Completed: May 25, 2025</Text>
                                                            <Text pb={"12px"} color={"#1E1E1EBF"} fontSize={"14px"}>Farm Location: Kaduna State, Nigeria</Text>
                                                        </Stack>
                                                    </DialogBody>
                                                    <DialogCloseTrigger color={"var(--accent-color)"} size={"30px"} />
                                                </DialogContent>
                                            </DialogRootProvider>
                                            Details</MenuItem>
                                        

                                    </MenuContent>
                                </MenuRoot>
                            </Table.Cell>

                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Stack>

    )
}
export default WalletTable


export const getStatusColor = (status) => {
    switch (status) {
        case "Completed":
            return { bg: "#ECFDF3", text: "#027A48" };
        case "Pending":
            return { bg: "#FEF9C3", text: "#713F12" };
        default:
            return { bg: "gray.100", text: "gray.700" };
    }
};


export const items = [
    {
        id: 1,
        date: "Jan 05, 2025",
        transactionID: "TXNI12456780",
        type: "Credit",
        description: "ROI from Soybean Cycle 3",
        amount: "₦100,000",
        status: "Completed",
        icon: <BsThreeDotsVertical />,
    },
    {
        id: 2,
        date: "Jan 05, 2025",
        transactionID: "TXNI2123456",
        type: "Debit",
        description: "Investment in Maize Project",
        amount: "₦500,000",
        status: "Completed",
        icon: <BsThreeDotsVertical />,
    },
    {
        id: 3,
        date: "Jan 05, 2025",
        transactionID: "TXNI11223344",
        type: "Credit",
        description: "Wallet Deposit",
        amount: "₦250,000",
        status: "Completed",
        icon: <BsThreeDotsVertical />,
    },
    {
        id: 4,
        date: "Jan 05, 2025",
        transactionID: "TXNI0293847",
        type: "Credit",
        description: "Wallet Bonus (New Milestone)",
        amount: "₦750,000",
        status: "Pending",
        icon: <BsThreeDotsVertical />,
    },
    {
        id: 5,
        date: "Jan 05, 2025",
        transactionID: "TXNI5678904",
        type: "Debit",
        description: "Withdrawal to Bank Account",
        amount: "₦300,000",
        status: "Completed",
        icon: <BsThreeDotsVertical />,
    },
    {
        id: 6,
        date: "Jan 05, 2025",
        transactionID: "TXNI7894567",
        type: "Credit",
        description: "Refund from Delayed Project",
        amount: "₦150,000",
        status: "Completed",
        icon: <BsThreeDotsVertical />,
    },
    {
        id: 7,
        date: "Jan 05, 2025",
        transactionID: "TXNI6543278",
        type: "Debit",
        description: "Withdrawal to Bank Account",
        amount: "₦200,000",
        status: "Pending",
        icon: <BsThreeDotsVertical />,
    },
    {
        id: 8,
        date: "Jan 05, 2025",
        transactionID: "TXNI8907654",
        type: "Credit",
        description: "ROI from Rice Cycle",
        amount: "₦350,000",
        status: "Completed",
        icon: <BsThreeDotsVertical />,
    },
] 