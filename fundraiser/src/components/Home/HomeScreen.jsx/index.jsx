import HomeSection from "../homesection"
import Footer from "../footer"
import Navbar from "../navbar"
import { ChakraProvider } from '@chakra-ui/react'

export default function Home(){
    return(
        <ChakraProvider>  
        <div>
            <Navbar/>
            <HomeSection/>
            <Footer/>
        </div>
        </ChakraProvider>
            )
}