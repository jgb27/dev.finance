import { Container } from "@chakra-ui/react"
import Title from "./components/Title"
import Forms from "./components/Form"

export const App = () => {
  return (
    <Container maxW='md'>
      <Title color="primary.100" font="4xl" fontFamily="poppins" />
      <Forms />
    </Container>
  )
}

