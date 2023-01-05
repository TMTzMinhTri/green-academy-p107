import { Fragment, useContext, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap"
import { AuthContext } from "../../contexts/AuthContext"

const MainLayout = () => {
    const { currentUser, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return <Fragment>
        <Navbar
            color="secondary"
            dark
            expand={"md"}
        >
            <NavbarBrand href="/">
                Reactstrap
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <Link to='/share-movie' className="nav-link">
                            Share a movie
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
            {currentUser
                ? <UncontrolledDropdown inNavbar direction="start">
                    <DropdownToggle nav >
                        <img className="border rounded-circle" src={currentUser.photoURL} width={32} height={32} />
                    </DropdownToggle>
                    <DropdownMenu end flip={true} direction="start">
                        <DropdownItem disabled> {currentUser.displayName}</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={logOut}>Logout</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                : <Link to='/login' />}
        </Navbar>
        <Container>
            <Outlet />
        </Container>
    </Fragment>
}

export default MainLayout