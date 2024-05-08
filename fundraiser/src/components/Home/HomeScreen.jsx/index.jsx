import HomeSection from "../homesection"
import Footer from "../footer"
import Navbar from "../navbar"
import Testimonial from "../testimonials"
import { ChakraProvider, Divider } from '@chakra-ui/react'

export default function Home(){
    return(
        <ChakraProvider>  
        <div>
            <Navbar/>
            <HomeSection/>
            <Testimonial/>
            <Divider/>
            <Footer/>
        </div>
        </ChakraProvider>
            )
}