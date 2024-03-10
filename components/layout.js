import React from 'react';
import Header from './base/header';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default Layout;