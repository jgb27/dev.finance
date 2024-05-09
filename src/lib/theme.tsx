import { extendTheme } from "@chakra-ui/react"
import "@fontsource-variable/inter"
import '@fontsource/poppins';

const theme = extendTheme({
    colors: {
        primary: "#299D91",
        text: "#191D23",
        gray: {
            2: "#878787",
            4: "#D1D1D1"
        }
    },
    fonts: {
        inter: `'Inter Variable', sans-serif`,
        poppins: `'Poppins', sans-serif`,
    }
})

export { theme }