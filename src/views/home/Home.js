import React, { Component } from "react";
import Header from "../../components/header/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";
import Fade from "../../assests/lib/react-reveal/in-and-out/Fade";
import imageProgrammingBlue from '../../assests/images/programming-blue.svg';
import imageProgrammingBlack from '../../assests/images/programming-black.svg';
import SocialMedia from "../../components/socialMedia/SocialMedia";

class Home extends Component {

    //const theme = this.props.theme;

    render() {
        return (
            <>
                <Header theme={this.props.theme} setTheme={this.props.setTheme} />
                <Container>
                    <Fade bottom duration={2000} distance="300px">
                        <Row className="grettings-section" xs={1} sm={1} md={1} lg={2}>
                            <Col>
                                <br /><br />
                                <h1><strong>Hey, I'm Omar!</strong></h1>
                                <div className="grettings-summary">
                                    <p>Welcome! I'm happy to have you here 👋</p>
                                    <p className="grettings-para">
                                        I am a full-stack .NET developer with 5+ years of experience. Fascinated with problem-solving, clean coding, test-driven development, domain-driven design, object-oriented design, onion architecture and maintainable system.
                                    </p>
                                    <p className="grettings-para">
                                        Check out my portfolio and articles I've written on subjects like back-end & front end development.
                                    </p>
                                </div>
                                <SocialMedia theme={this.props.theme} />
                            </Col>
                            <Col className="grettings-image-box">
                                {this.props.theme.name === "dark" ?
                                    <img src={imageProgrammingBlack} alt="React Logo" className="image-programming" /> :
                                    <img src={imageProgrammingBlue} alt="React Logo" className="image-programming" />
                                }
                            </Col>
                        </Row>
                    </Fade>
                </Container>
            </>
        );
    }
}

export default Home;
