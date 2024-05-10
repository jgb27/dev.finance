import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import "@fontsource-variable/inter"
import '@fontsource/poppins';

const colors = {
    primary: "#299D91",
    text: "#191D23",
    newGray: {
        200: "#878787",
        400: "#D1D1D1"
    }
}

const fonts = {
    inter: `'Inter Variable', sans-serif`,
    poppins: `'Poppins', sans-serif`,
}

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config, fonts, colors })

export default theme