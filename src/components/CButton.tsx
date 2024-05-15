import { Button } from "@chakra-ui/react";

interface IButton {
    icon?: React.ReactElement,
    color: string,
    bg: string,
    text: string,
    isLoading?: boolean,
    loadingText?: string,
    fontSize?: string,
    width?: string,
    fontWeight?: string | number,
    justifyContent?: string,
    onSubmit: () => void
}


const CButton = ({ fontWeight, justifyContent, icon, width, color, bg, text, fontSize, isLoading, loadingText, onSubmit }: IButton) => {
    return (
        <Button
            leftIcon={icon}
            justifyContent={justifyContent || "center"}
            bg={bg}
            color={color}
            fontWeight={fontWeight || "normal"}
            onClick={onSubmit}
            fontSize={fontSize || "md"}
            w={width || "full"}
            alignItems={"center"}
            isLoading={isLoading}
            loadingText={isLoading ? loadingText : ""}
            letterSpacing={0.5}
            _hover={{
                opacity: 0.8,
            }}
        >
            {text}
        </Button >
    )
}

export default CButton