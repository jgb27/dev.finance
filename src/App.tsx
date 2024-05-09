import { Container, Flex } from "@chakra-ui/react"
import Title from "./components/Title"
import Forms from "./components/Form"

export const App = () => {
  return (
    <Container maxW='md' boxShadow={'lg'} padding={12} mt={22}>
      <Flex direction='column' gap={8}>
        <Title color="primary" font="4xl" fontFamily="poppins" />
        <Forms fontFamily="inter" />
      </Flex>
    </Container>
  )
}

