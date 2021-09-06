import React, { Component } from 'react';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class home extends Component {
    render() {
        return (
        <React.Fragment>
		<Header />
		<Main/>
        <Footer/>

        </React.Fragment>
)
    }
}
export default home;