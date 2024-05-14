import { Flex } from "@chakra-ui/react"
import Layout from "./Article"
import NavBar from "./Navbar"
import Header from "../components/Header"

interface ILayout {
    children?: React.ReactNode
    title: string
}

const LayoutContainer = ({ children, title }: ILayout) => {

    return (
        <Flex
            w="100vw"
            h="100vh"
        >
            <NavBar title={title} />
            <Layout title={title}>
                <Header user="João" />
                {children}
            </Layout>
        </Flex >
    )
}

export default LayoutContainer;