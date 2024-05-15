import { Flex, VStack } from "@chakra-ui/react"
import MenuItem from "../components/MenuItem"
import Title from "../components/Title"
import { MdOutlineDashboard, MdOutlineLogout, MdOutlineMoneyOff, MdAccountBalanceWallet } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { TbReceiptDollar } from "react-icons/tb";

interface NavBar {
    title: string
}

type MenuItemProps = {
    title: string
    icon: React.ReactElement
    size: string[],
}

const NavBar = ({ title }: NavBar) => {
    const menuItensList = [
        { title: "Overview", icon: <MdOutlineDashboard fontSize={22} color="white" />, size: ['22', '20', '18'] },
        { title: "Balance", icon: <MdAccountBalanceWallet fontSize={22} color="white" />, size: ['22', '20', '18'] },
        { title: "Transactions", icon: <GrTransaction fontSize={22} color="white" />, size: ['22', '20', '18'] },
        { title: "Expense", icon: <MdOutlineMoneyOff fontSize={22} color="white" />, size: ['22', '20', '18'] },
        { title: "Bills", icon: <TbReceiptDollar fontSize={22} color="white" />, size: ['22', '20', '18'] }
    ] as MenuItemProps[]

    return (
        <VStack
            alignItems="center"
            w="16vw"
            h="100vh"
            bg="defaultBlack"
            justify={"space-between"}
            padding="10"
        >
            <Flex
                direction={"column"}
                gap={10}
            >
                <Title color="white" fontSize="24" fontFamily="poppins" />
                <VStack >
                    {menuItensList.map((item, index) => (
                        <MenuItem
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            size={item.size}
                            select={title == item.title ? true : false}
                        />
                    ))}
                </VStack>
            </Flex>
            <MenuItem select={false} title="Logout" icon={<MdOutlineLogout fontSize={22} color="white" />} size={['22', '20', '18']} />
        </VStack>
    )
}

export default NavBar