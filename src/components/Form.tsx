import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'

import { useState } from 'react'

interface Form {
    type: string,

}

const Forms = () => {

    const [formData, setFormData] = useState({
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
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
            />

            <FormLabel>Password</FormLabel>
            <Input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
            />
        </FormControl>
    )
}

export default Forms