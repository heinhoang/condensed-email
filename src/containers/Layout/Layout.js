import React, { Children } from 'react';

const Header = ({ children }) => (
    <div className="header">
        {children}
    </div>
);

const LeftSidebar = ({ children }) => (
    <div className="sidebar">
        {children}
    </div>
);

const Footer = ({ children }) => (
    <div className="footer">
        {children}
    </div>
);

const Main = ({ children }) => (
    <div className="main">
        {children}
    </div>
);

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
        <div className="app-layout">
            {lHeader.length > 0 && <Header>
                {lHeader}
            </Header>}
            <div className="app-main">
                {lSidebar.length > 0 && <LeftSidebar>
                    {lSidebar}
                </LeftSidebar>}
                {lMain.length > 0 && <Main>
                    {lMain}
                </Main>}
            </div>
            {lFooter.length > 0 && <Footer>
                {lFooter}
            </Footer>}
        </div>
    );
};

export default Layout;