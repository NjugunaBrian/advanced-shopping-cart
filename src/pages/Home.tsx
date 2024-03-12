import { Outlet } from "react-router-dom";
import CategoriesBanner from "../components/CategoriesBanner";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";

export function Home() {
    return (
        <>
            <Hero />
            <CategoriesBanner /> 
            <Outlet />           
            <Newsletter />
            <Footer />
        </>
    )
}