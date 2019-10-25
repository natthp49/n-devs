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


export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="home">
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
                                <Background />
                                <StartedContent />
                            </SectionStarted>
                        </Wrapper>

                        <Footer />
                        <Lines />
                    </Container>
                </div>
            </React.Fragment>)
    }
} 