import { useContext } from 'react'

import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import ProjectList from "../components/ProjectList/ProjectsList"

//CONTEXT
import { AppContext } from '../contexts/AppContext'

function Home(){
    const appContext = useContext(AppContext)
    return(
        <>
            <Header/>
            <div className="container">
                <Hero/>
                <ProjectList/>

            </div>
            
            <Footer/>
        </>
    )
}

export default Home