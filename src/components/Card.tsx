import { Flex, Text } from "@chakra-ui/react"

export interface CardAccountProps {
    title?: string
    subTitle?: string
    account?: {
        number: number
        totalAmount: number
    }
}

const Title = ({ title, subTitle }: CardAccountProps) => {
    return (
        <Flex direction="row" gap={2} justify="space-between" >
            <Text color="black" fontSize="16" fontFamily="poppins" >
                {title}
            </Text>
            <Text color="black" fontSize="12" fontFamily="poppins" >
                {subTitle}
            </Text>
        </Flex>
    )
}

const Account = ({ account }: CardAccountProps) => {

    const formatAccountNumber = (accountNumber: number) => {
        return accountNumber.toString().replace(/\d{4}(?=.)/g, '$& ');
    }

    return (
        <Flex direction="row" gap={2}>
            {/* Account info Client*/}
            <Flex direction="column" gap={0} >
                <Text
                    color="black"
                    fontSize="16"
                    fontFamily="poppins"
                >
                    {formatAccountNumber(account?.number || 0)}
                </Text>
                <Text
                    color="gray03"
                    fontSize="16"
                    fontFamily="poppins"
                >
                    Account Number
                </Text>
            </Flex>
            {/* Account info Balance */}

        </Flex>
    )
}

const CardAccount = ({ title, subTitle, account }: CardAccountProps) => {
    return (
        <Flex>
            <Flex
                bg="#D2D2D2"
                borderRadius="10"
                padding="15"
                direction="column"
                justify="space-between"
                w="100%"
                h="100%"
                color="black"
            >
                <Title title={title} subTitle={subTitle} />
                <Account account={account} />
            </Flex>
        </Flex>
    )

}
export default CardAccount;
