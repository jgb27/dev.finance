import { Flex, FormLabel, HStack, Input, Link } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom';

interface IFormData {
    [key: string]: string;
}

interface IFormInput {
    font: string,
    formData: IFormData,
    type: string,
    name: string,
    login?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({ font, formData, onChange, name, type, login }: IFormInput) => {
    return (
        <Flex direction='column' gap={0}>
            <HStack justify='space-between'>
                <FormLabel fontWeight="500" fontFamily={font}>
                    {name[0].toUpperCase() + name.substring(1)}
                </FormLabel>
                {login ? <Link as={ReactRouterLink} to='/forgotPassword' color="primary">Forgot Password?</Link> : <></>}
            </HStack>
            <Input
                type={type}
                name={name}
                value={formData[name]}
                onChange={onChange}
            />
        </Flex>
    )
}

export default FormInput