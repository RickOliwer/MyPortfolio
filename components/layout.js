import NavBar from './navbar';
import Footer from './footer';
import Hero from './hero';

const Layout = ({children}) => {
    return ( 

        <div className="main-content">
            
            <header>
                <NavBar />
                <Hero />
            </header>

            <main className="w-4/5 m-auto main-content">
                {
                    children
                }
            </main>

            <footer>
                <Footer />
            </footer>
            
        </div>
    );
}
 
export default Layout;