import { ClerkProvider } from "@clerk/nextjs"
import { HeroUIProvider } from "@heroui/react"
import Header from "./_components/Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Provider({children} : {children:React.ReactNode}) {
  return (
    <ClerkProvider>
    <HeroUIProvider>
       {/* header */}
       <Header></Header>
    {children}
    <ToastContainer></ToastContainer>
  </HeroUIProvider>
  </ClerkProvider>
  )
}

export default Provider