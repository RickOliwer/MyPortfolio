import NavBar from "./nav"
import {isEmpty} from 'lodash'

const Header = ({HeaderMenus}) => {
    if(isEmpty(HeaderMenus)){
        return null;
    }
    return (
    
        <header>
            <Nav headerMenus={HeaderMenus} />
        </header>
    )
}

export default Header;