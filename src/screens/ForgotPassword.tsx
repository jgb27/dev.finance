import { Container, Flex, FormControl, Text } from "@chakra-ui/react";
import Title from "../components/Title";
import FormInput from "../components/FormInput";
import ButtonSubmit from "../components/ButtonSubmit";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "../Layout/Article"

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <Layout title="Forgot Password">
            <Container maxW='md' boxShadow={'lg'} padding={12} mt={22}>
                <Flex direction='column' gap={8}>
                    <Title color="primary" font="4xl" fontFamily="poppins" />
                    <Flex gap={4} direction='column'>
                        <Text fontFamily="inter" fontSize="24px" fontWeight="600" align='center' color="text">
                            Forgot Password
                        </Text>
                        <Text fontFamily="poppins" fontSize="16px" fontWeight="300" align='center' color="newGray.200">
                            Enter you email address to get the password reset link.
                        </Text>
                        <FormControl>
                            <Flex gap={4} direction='column'>
                                <FormInput
                                    font="poppins"
                                    type='email'
                                    name='email'
                                    onChange={handleInputChange}
                                    formData={formData}
                                />
                                <Flex justify='center' direction='column' gap={1}>
                                    <ButtonSubmit
                                        bg="primary"
                                        color="white"
                                        text="Password Reset"
                                        onSubmit={() => {
                                            alert("Password reset link sent to your email")
                                            navigate('/authentication')
                                        }}
                                    />
                                    <ButtonSubmit
                                        bg="white"
                                        color="newGray.200"
                                        text="Back to login"
                                        onSubmit={() => navigate('/authentication')}
                                    />
                                </Flex>
                            </Flex>
                        </FormControl>
                    </Flex>
                </Flex>
            </Container >
        </Layout>
    )
}

export default ForgotPassword;