import Header from "../Compoments/Header/Header"
import Footer from "../Compoments/Footer/Footer"


const Layout = () => {
 return (

        <div>
            <BrowserRouter> 
            <Header/>
            <Rotas/>
            <Footer/>
            </BrowserRouter>    
        </div>
    
    )

}


    export default Layout