
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
            subText: "#A0A0A0",
            card: {
                _light: "blackAlpha.200",
                _dark: "whiteAlpha.800"
            }
        }
    }
})

export default theme