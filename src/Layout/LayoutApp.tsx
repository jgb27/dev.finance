import { Flex } from "@chakra-ui/react"
import Layout from "./Article"
import NavBar from "./Navbar"

interface ILayout {
    children: React.ReactNode
    title?: string
}

const LayoutContainer = ({ children, title }: ILayout) => {
    <Layout title={title}>
        <Flex>
            <NavBar />
            {children}
        </Flex>
    </Layout>
}

export default LayoutContainer;