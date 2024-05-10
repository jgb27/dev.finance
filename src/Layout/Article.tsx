import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import ThemeToggleButton from '../components/ThemeToggleButton';

interface LayoutProps {
    children: React.ReactNode
    title?: string
}

const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
}

const Layout = ({ children, title }: LayoutProps) => {
    const t = title ? `${title} - Dev.Finance` : "Dev.Finance";

    useEffect(() => {
        if (title) {
            document.title = t;
        }
    }, [title]);

    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >
            <>
                {title && (
                    <>
                        <meta name="twitter:title" content={t} />
                        <meta property="og:title" content={t} />
                    </>
                )}
                <Box
                    position="absolute"
                    right={5}
                    zIndex={10}
                >
                    <ThemeToggleButton />
                </Box>
                {children}
            </>
        </motion.article>
    )
}

export default Layout
