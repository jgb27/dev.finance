
import { extendTheme } from "@chakra-ui/react"
import "@fontsource-variable/inter"
import '@fontsource/poppins';

const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: true,
    fonts: {
        inter: `'Inter Variable', sans-serif`,
        poppins: `'Poppins', sans-serif`,
    },
    semanticTokens: {
        colors: {
            defaultBlack: "#191919",
            specialGreen: "#4DAF6E",
            primary: "#299D91",
            secondary: "#525256",
            gray03: {
                _light: "gray.400",
                _dark: "gray.100"
            },
            gray05: {
                _light: "#E8E8E8",
                _dark: "#b9b9b9"
            },
        }
    }
})

export default theme