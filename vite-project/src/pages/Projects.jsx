import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import ProjectList from "../components/ProjectList/ProjectsList"

function Projects(){
    return(
        <>
            <Header/>
            <Banner title="Projects" image="projects.svg"/>
            <div className="container">
                
                <ProjectList/>

            </div>
            
            <Footer/>
        </>
    )
}

export default Projects