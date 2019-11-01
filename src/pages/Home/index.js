import React from 'react';
import Preloader from '../../components/Preloader';
import Cursor from '../../components/Cursor';
import Container from '../../components/Container';
import Header from '../../components/Header';
import MenuButton from '../../components/MenuButton';
import Logo from '../../components/Logo';
import TopMenu from '../../components/TopMenu';
import Wrapper from '../../components/Wrapper';
import SectionStarted from '../../components/SectionStarted';
import Background from '../../components/Background';
import StartedContent from '../../components/StartedContent';
import Footer from '../../components/Footer';
import Lines from '../../components/Lines';
import img from '../../images/img.png';
import {createElement} from '../../components/createElement';
// import  '../../js/demo-bar';
// import '../../js/min.scripts';
// import '../../js/scripts';
// import '../../js/index';



export default class Home extends React.Component {
    componentDidMount() {
        createElement('./js/min.scripts.js');
        createElement('./js/demo-bar.js');
    }
    render() {
        return (
            <React.Fragment>
                <Preloader />

                <Container>
                    <Cursor />

                    <Header>
                        <MenuButton />
                        <Logo />
                        <TopMenu />
                    </Header>

                    <Wrapper>
                        <SectionStarted>
                            <Background img={img} />
                            <StartedContent
                                page="home"
                                text_about={{
                                    intro: "Hello, I’m",
                                    name: "P Devs",
                                    skill: [", Front-end Developer and", "Back-end Developer Based in San Francisco."]
                                }}
                                text_work={[
                                    {
                                        intro: "I code cool",
                                        work: "websites",
                                    },
                                    {
                                        intro: "I develop",
                                        work: "mobile apps",
                                    },
                                    {
                                        intro: "I love",
                                        work: "react.js",
                                    }
                                ]}
                            />
                        </SectionStarted>
                    </Wrapper>

                    <Footer />
                    <Lines />
                </Container>
            </React.Fragment>)
    }
} 