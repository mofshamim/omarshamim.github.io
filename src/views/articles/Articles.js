import React, { Component } from "react";
import Header from "../../components/header/Header";

class Articles extends Component {
    render() {
        return (
            <>
                <Header theme={this.props.theme} setTheme={this.props.setTheme} />
                <h1>Articles Page</h1>
            </>
        );
    }
}

export default Articles;
