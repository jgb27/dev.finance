import { Flex } from "@chakra-ui/react"
import Layout from "./Article"
import NavBar from "./Navbar"

interface ILayout {
    children?: React.ReactNode
    title: string
}

const LayoutContainer = ({ children, title }: ILayout) => {

    return (
        <Flex>
            <NavBar title={title}/>
            <Layout title={title}>
                {children}
            </Layout>
        </Flex>
    )
}

export default LayoutContainer;