import React, { Component } from "react";
import Header from "../../components/header/Header";

class Portfolio extends Component {
    render() {
        return (
            <>
                <Header theme={this.props.theme} setTheme={this.props.setTheme} />
                <h1>Portfolio Page</h1>
            </>
        );
    }
}

export default Portfolio;

