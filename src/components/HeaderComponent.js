import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../CSS/coder.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }


    toggleNav() {
        
        this.setState({
            isOpen : !this.state.isOpen
        });
        
        //this.state.isOpen = !this.state.isOpen;
    }

    render() {
        return (
            <Navbar className="navbar-fixed-top" color="dark" light expand="md">
                <NavbarBrand className="container text-white" href="/">Online HTML & CSS IDE</NavbarBrand>
            </Navbar>
        );
    }
}

export default Header;