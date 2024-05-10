import { motion } from 'framer-motion'
import { useEffect } from 'react';

interface LayoutProps {
    children: React.ReactNode
    title?: string
}

const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 } // Corrigido o valor de x e removido x: -0
}

const Layout = ({ children, title }: LayoutProps) => {
    const t = title ? `${title} - Dev.Finance` : "Dev.Finance"; // Use de forma segura o título
    
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
                {children}
            </>
        </motion.article>
    )
}

export default Layout
