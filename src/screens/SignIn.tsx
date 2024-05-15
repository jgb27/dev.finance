import {
  Container,
  FormControl,
  Link,
  Flex,
  Text,
  Checkbox,
  Center,
  Button,
} from "@chakra-ui/react"
import Title from "../components/Title"
import { useState } from 'react'

import Layout from "../Layout/Article"
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";
import FormInput from '../components/FormInput';
import { useNavigate } from 'react-router-dom';

interface diviser {
  font: string,
  text: string
}

const Authentication = () => {
  const font = "poppins"

  const navigate = useNavigate();

  const [keepLogin, setKeepLogin] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleCheckLoggin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeepLogin(!keepLogin)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Layout title="Sign In">
      <Container maxW='md' boxShadow={'lg'} padding={6} mt={22}>
        <Flex direction='column' gap={8}>
          <Title color="primary" fontSize="4xl" fontFamily="poppins" />
          <FormControl >
            <Flex gap={8} justify='flex-start' direction='column'>
              <Flex gap={6} justify='flex-start' direction='column'>
                <FormInput
                  type='email'
                  name='email'
                  onChange={handleInputChange}
                  font={font}
                  formData={formData}
                />

                <FormInput
                  login={true}
                  type='password'
                  name='password'
                  onChange={handleInputChange}
                  font={font}
                  formData={formData}
                />
              </Flex>
              <Flex gap={4} direction='column'>
                <Checkbox
                  fontFamily={font}
                  fontWeight={300}
                  onChange={handleCheckLoggin}
                >
                  Keep me signed in
                </Checkbox>
                <Button
                  loadingText="Submitting"
                  bg='primary'
                  color='white'
                  onClick={() => navigate("/overview")}
                >
                  Sign In
                </Button>
              </Flex>

              <Diviser font={font} text='or sign in with' />
              <Flex direction="column" gap={2}>
                <Button
                  leftIcon={<FcGoogle size={24} />}
                  color="white"
                  bg="gray.400"
                  onClick={() => console.log("Google Login")}
                >
                  Sign in with Google
                </Button>
                <Button
                  leftIcon={<FaGithub size={24} />}
                  color="white"
                  bg="gray.500"
                  onClick={() => console.log("Github Login")}
                >
                  Sign in with Github
                </Button>
              </Flex>
              <Center>
                <Link onClick={() => navigate("/signup")} color="primary">Create an account</Link>
              </Center>
            </Flex>
          </FormControl >
        </Flex>
      </Container>
    </Layout>
  )
}

const Diviser = ({ font, text }: diviser) => {
  return (
    <Flex
      align={'center'}
      _before={{
        content: '""',
        borderBottom: '1px solid',
        borderColor: "primary",
        flexGrow: 1,
        mr: 8,
      }}
      _after={{
        content: '""',
        borderBottom: '1px solid',
        borderColor: "primary",
        flexGrow: 1,
        ml: 8,
      }}>
      <Text fontWeight="400" fontFamily={font}>{text}</Text>
    </Flex>
  )
}


export default Authentication;