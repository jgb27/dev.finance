import { extendTheme } from "@chakra-ui/react"
import "@fontsource-variable/inter"
import '@fontsource/poppins';

const theme = extendTheme({
    colors: {
        primary: {
            100: "#299D91",
        },
    },
    fonts:{
        inter: `'Inter Variable', sans-serif`,
        poppins: `'Poppins', sans-serif`,
    }
})

export { theme }