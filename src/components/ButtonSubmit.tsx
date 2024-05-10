import { Button } from "@chakra-ui/react";

interface Button {
    icon?: React.ReactElement,
    color: string,
    bg: string,
    text: string,
    loadingText?: string
    onSubmit: () => void
}


const ButtonSubmit = ({ icon, color, bg, text, loadingText, onSubmit }: Button) => {
    return (
        <Button
            leftIcon={icon}
            bg={bg}
            color={color}
            onClick={onSubmit}
            w="full"
            loadingText={loadingText}
            _hover={{
                opacity: 0.8,
            }}
        >
            {text}
        </Button >
    )
}

export default ButtonSubmit