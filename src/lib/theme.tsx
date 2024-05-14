
import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import "@fontsource-variable/inter"
import '@fontsource/poppins';

const colors = {
    primary: "#299D91",
    defaultBlack: "#191919",
    specialGreen: "#4DAF6E",
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