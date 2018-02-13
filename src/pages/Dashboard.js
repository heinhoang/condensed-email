import React from 'react';

import Layout from '../containers/Layout/Layout';
import Header from '../components/Header/Header';

const Dashboard = () => {
    const headerProps = {
        inLayout: "header"
    };
    return (
        <Layout>
            <Header {...headerProps}>
                <div>hhh</div>
            </Header>
        </Layout>
    );
};

export default Dashboard;