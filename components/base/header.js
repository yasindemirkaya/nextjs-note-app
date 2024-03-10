import classes from './header.module.scss'
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

function Header() {
    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
                <Navbar.Brand>
                    <Link href="/" legacyBehavior>
                        <a>Notes</a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Link href="/add-note" legacyBehavior>
                    <a>Add New Note</a>
                </Link>
            </Container>
        </Navbar>
    );
}

export default Header;