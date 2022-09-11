import React, { Component } from "react";
import Header from "../../components/header/Header";
import Container from 'react-bootstrap/Container';

class Portfolio extends Component {
    render() {
        return (
            <>
                <Header theme={this.props.theme} setTheme={this.props.setTheme} />
                <Container>
                    <h1>Portfolio Page</h1>
                </Container>
            </>
        );
    }
}

export default Portfolio;

