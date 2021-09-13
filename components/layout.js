import NavBar from './navbar';
import Footer from './footer';


const Layout = ({children}) => {
    return ( 

        <div className="main-content">
                <NavBar />
                
                {
                    children
                }
                <Footer />
        </div>
    );
}
 
export default Layout;

