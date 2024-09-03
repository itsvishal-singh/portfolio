import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";

const HomePage=()=>{
    return(
        <>
        <Header/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>

        <Contact/>
        <Footer/>
        <Mail/>
        <Social/>
        </>
    )
}
export default HomePage;