import React, { Component } from "react";
import Header from "../../components/header/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";
import Fade from "../../assests/lib/react-reveal/in-and-out/Fade";
import imageProgrammingBlue from '../../assests/images/programming-blue.svg';
import imageProgrammingBlack from '../../assests/images/programming-black.svg';

class Home extends Component {

    //const theme = this.props.theme;

    render() {
        return (
            <>
                <Header theme={this.props.theme} setTheme={this.props.setTheme} />
                <Container>
                    <Fade bottom duration={2000} distance="300px">
                        <Row className="grettings-section" xs={1} md={1} lg={6}>
                            <Col>
                                <br /><br />
                                <h1><strong>Hey, I'm Omar!</strong></h1>
                                <div className="summary">
                                    <p>Welcome! I'm happy to have you here 👋</p>
                                    <br />
                                    <p>
                                        I am a full-stack .NET developer with 5+ years of experience. Fascinated with problem-solving, clean coding, test-driven development, domain-driven design, object-oriented design, onion architecture and maintainable system.
                                    </p>
                                </div>
                            </Col>
                            <Col className="image-box">
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
