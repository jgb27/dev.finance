import { Button } from "@chakra-ui/react";

interface IButton {
    icon?: React.ReactElement,
    color: string,
    bg: string,
    text: string,
    loadingText?: string
    onSubmit: () => void
}


const CButton = ({ icon, color, bg, text, loadingText, onSubmit }: IButton) => {
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

export default CButton