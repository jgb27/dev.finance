import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    HStack,
    Link,
    VStack,
    Flex
} from '@chakra-ui/react'

import { useState } from 'react'

interface Form {
    login: boolean,

}

const Forms = ({ login }: Form) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <FormControl >
            <Flex gap={6} justify='flex-start' direction='column'>
                {!login ?
                    <Flex direction='column'>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Flex>
                    : <></>
                }
                
                <Flex direction='column'>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Flex>

                <Flex direction='column'>
                    <HStack justify='space-between'>
                        <FormLabel>Password</FormLabel>
                        {login ? <Link color="primary.100">Forgot Password?</Link> : <></>}
                    </HStack>
                    <Input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </Flex>
            </Flex>
        </FormControl>
    )
}

export default Forms