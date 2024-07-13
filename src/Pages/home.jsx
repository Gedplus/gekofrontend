import React from "react"
import Slider from "../Components/Slider/Slider"
import AboutCard from "../Components/About/AboutCard"
import ServicesCard from "../Components/services/servicesCard"
import Storehome from "./homeShop"
import BlogHome from "../Components/services/blogHome"
import ProductSlider from "../Components/ProductSlider"
import TabsPage from "./pagetabs"
import DomaineApplication from "../Components/DomaineApplication"



const Home = () => {
    return(<>
    <Slider/>
    <AboutCard/>
    <ServicesCard title={"Nos Produits"}/>
    <TabsPage/>
    <ServicesCard title={"Domaines d'application"}/>
  <DomaineApplication/>
    <ServicesCard title={"Nos Actualités"}/>
    <BlogHome/>
    </>
)
}
export default Home