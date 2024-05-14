import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const SearchInput = () => {

    return (
        <InputGroup >
            <Input paddingEnd={24} type='search' placeholder='Search here' color="gray03" fontSize="14" />
            <InputRightElement pointerEvents='none'>
                <SearchIcon color='secondary' />
            </InputRightElement>
        </InputGroup >
    );
}

export default SearchInput;