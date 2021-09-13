import React, { Component } from 'react';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import RecentAdditions from "../components/RecentAdditions";
import Sponsors from "../components/Sponsors";

class home extends Component {
    render() {
        return (
        <>
		<Header />
		<Main/>
            {/*<RecentAdditions/>*/}

           <Sponsors/>
        <Footer/>
        </>
)
    }
}
export default home;