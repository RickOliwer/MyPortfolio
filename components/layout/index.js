import Header from "./header"

const Layout = ({data, children}) => {
    return(
        <div>
            <Header menus={data?.menus?.HeaderMenus} />
            {children}
        </div>
    )
}

export default Layout