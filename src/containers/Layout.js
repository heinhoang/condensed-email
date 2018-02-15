import React, { Children } from 'react';

// get all chidren and put to layout
const Layout = ({ children }) => {
    const lHeader = [];
    const lSidebar = [];
    const lFooter = [];
    const lMain = [];
    Children.forEach(children, (child) => {
        switch (child.props.inLayout) {
            case 'header':
                return lHeader.push(child);
            case 'left-sidebar':
                return lSidebar.push(child);
            case 'footer':
                return lFooter.push(child);
            default:
                return lMain.push(child);
        }
    });
    return (
        <div className="app">
            {
                lHeader.length > 0 &&
                <header className="header">
                    {lHeader}
                </header>
            }
            <div className="app-body">
                {
                    lSidebar.length > 0 &&
                    <aside className="sidebar">
                        {lSidebar}
                    </aside>
                }
                {
                    lMain.length > 0 &&
                    <main className="main">
                        {lMain}
                    </main>
                }
            </div>
            {
                lFooter.length > 0 &&
                <footer className="footer">
                    {lFooter}
                </footer>
            }
        </div>
    );
};

export default Layout;