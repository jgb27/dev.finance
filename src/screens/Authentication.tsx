import {
  Container,
  FormControl,
  Link,
  Flex,
  Text,
  Checkbox,
  Center,
} from "@chakra-ui/react"
import Title from "../components/Title"
import { useState } from 'react'

import Layout from "../Layout/Article"
import ButtonSubmit from '../components/ButtonSubmit';
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
  const [login, setLogin] = useState(true)
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
    <Layout title={login ? "Login" : "Register"}>
      <Container maxW='md' boxShadow={'lg'} padding={6} mt={22}>
        <Flex direction='column' gap={8}>
          <Title color="primary" font="4xl" fontFamily="poppins" />
          <FormControl >
            <Flex gap={8} justify='flex-start' direction='column'>
              <Flex gap={6} justify='flex-start' direction='column'>
                {!login ?
                  <FormInput
                    type='text'
                    name='name'
                    font={font}
                    formData={formData}
                    onChange={handleInputChange}
                  />
                  : <></>
                }
                <FormInput
                  type='email'
                  name='email'
                  onChange={handleInputChange}
                  font={font}
                  formData={formData}
                />

                <FormInput
                  login={login}
                  type='password'
                  name='password'
                  onChange={handleInputChange}
                  font={font}
                  formData={formData}
                />
              </Flex>
              <Flex gap={4} direction='column'>
                {
                  login ?
                    <Checkbox
                      fontFamily={font}
                      fontWeight={300}
                      onChange={handleCheckLoggin}
                    >
                      Keep me signed in
                    </Checkbox> :

                    <Flex gap={1} >
                      <Text fontFamily={font} color="text">By continuing, you agree to our</Text>
                      <Link fontFamily={font} color="primary">terms of service.</Link>
                    </Flex>
                }
                <ButtonSubmit
                  loadingText="Submitting"
                  bg='primary'
                  color='white'
                  text={login ? "Login" : "Register"}
                  onSubmit={() => navigate("/home")}
                />
              </Flex>

              <Diviser font={font} text='or sign in with' />
              <Flex direction="column" gap={2}>
                <ButtonSubmit
                  icon={<FcGoogle size={24} />}
                  color="white"
                  bg="gray.400"
                  text={login ? "Login with Google" : "Register with Google"}
                  onSubmit={() => console.log("Google Login")}
                />
                <ButtonSubmit
                  icon={<FaGithub size={24} />}
                  color="white"
                  bg="gray.500"
                  onSubmit={() => console.log("Github Login")}
                  text={login ? "Login with Github" : "Register with Github"}
                />
              </Flex>
              <Center>
                {login ?
                  <Link onClick={() => setLogin(!login)} color="primary">Create an account</Link>
                  :
                  <Flex direction="row" gap={1}>
                    <Text>Already have an account?</Text>
                    <Link onClick={() => setLogin(!login)} color="primary">Sign in here</Link>
                  </Flex>
                }
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