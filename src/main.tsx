import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './lib/theme.tsx'
import router from './lib/router.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
