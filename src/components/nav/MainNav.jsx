import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user.Action";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainNav.css"

const MainNav = ()=> {
    const { favorite_list } = useSelector( state => state.setFavoriteReducer )

    const dispatch = useDispatch()

    const handleLogout = ()=> {
        dispatch(logout())
    }

    return (
        <Navbar 
        collapseOnSelect 
        expand="lg" 
        bg="dark" 
        variant="dark"
        className="main_nav"
        >
            <Container
            className="main_nav_container"
            >
                <Navbar.Brand>
                    <Link to="/" className="custom_nav_link">
                        UpImage
                    </Link> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse 
                id="responsive-navbar-nav"
                className="d-flex justify-content-end align-items-center">
                    <Nav>
                        <Nav.Link>
                            <Link to="/cart" className="custom_nav_link">
                                Favorites
                                <div className="favorite_circle">{favorite_list.length}</div>
                            </Link>
                        </Nav.Link>
                        <Nav.Link onClick={handleLogout}>
                            LogOut
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav