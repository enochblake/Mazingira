import HomeSection from "../homesection"
import Footer from "../footer"
import Navbar from "../navbar"
import Testimonial from "../testimonials"
import { ChakraProvider, Divider } from '@chakra-ui/react'

export default function Home(){
    return(
        <ChakraProvider>  
        <div className="homescreen">
            <Navbar/>
            <HomeSection/>
            <Testimonial/>
            <Divider className="testimonial-divider"/>
            <Footer/>
        </div>
        </ChakraProvider>
            )
}