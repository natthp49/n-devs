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
import MosueButton from '../../components/MosueButton';
import SectionAbout from '../../components/SectionAbout';
import SectionService from '../../components/SectionService';
import SectionResume from '../../components/SectionResume';
import SectionDesignSkills from '../../components/SectionDesignSkills';
import SectionCodingSkills from '../../components/SectionCodingSkills';
import SectionInterests from '../../components/SectionInterests';
import SectionTeam from '../../components/SectionTeam';
import SectionTestimonials from '../../components/SectionTestimonials';
import SectionClients from '../../components/SectionClients';



export default class Resume extends React.Component {
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
                                header="Resume"
                                path={["Home", "Resume"]}
                            />
                        </SectionStarted>
                        <MosueButton />
                    </Wrapper>

                    <SectionAbout
                        about={
                            {
                                message: "Hello! I’m Daniel Curry. Web designer from USA, California, San Francisco. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.",
                                image: { img },
                                age: "22",
                                residence: "THAI",
                                freelance: "Available",
                                address: "Bankkok",
                                phone: "+66 80 314 7507",
                                email: "nutthapat.psk26@gmail.com"
                            }
                        }
                    />
                    <SectionService
                        title="Services"
                        item={[
                            {
                                icon: "code",
                                name: "Web Development",
                                text: "Modern and mobile-ready website that will help you reach all of your marketing."
                            },
                            {
                                icon: "gamepad",
                                name: "Game Development",
                                text: "Developing memorable and unique mobile android, ios and video games."
                            },
                            {
                                icon: "mobile-alt",
                                name: "Android Application",
                                text: "Games, playing music, handle network transactions, interacting content etc."
                            }
                        ]}
                    />
                    <SectionResume
                        content={[
                            {
                                title: "Experience",
                                item: [
                                    {
                                        date: "2019 - Present",
                                        name: "Full-stack Web Developer Share We Go Project.",
                                        text: "Monitored technical aspects of the full-stack delivery for projects."
                                    }
                                ]
                            },
                            {
                                title: "Education",
                                item: [
                                    {
                                        date: "2016 - 2020",
                                        name: "Eastern Asia University",
                                        text: "Informetion Technology"
                                    }
                                ]
                            }
                        ]}
                    />
                    <SectionDesignSkills
                        title="Design Skills"
                        item={[
                            {
                                name: "Web Design",
                                progress: "95"
                            },
                            {
                                name: "Illustrations",
                                progress: "60"
                            },
                            {
                                name: "Photoshop",
                                progress: "85"
                            },
                            {
                                name: "Graphic Design",
                                progress: "50"
                            },
                            {
                                name: "XD",
                                progress: "95"
                            }
                        ]}
                    />

                    <SectionCodingSkills
                        id="section-skills-code"
                        content_box="circles"
                        title="Coding Skills"
                        item={[
                            {
                                name: "PHP / MYSQL",
                                progress: "70"
                            },
                            {
                                name: "React / React Native",
                                progress: "90"
                            },
                            {
                                name: "JavaScript / HTML / CSS",
                                progress: "95"
                            },
                            {
                                name: "Firebase / MongoDB",
                                progress: "80"
                            }
                        ]}
                    />
                    <SectionInterests
                        title="Interests"
                        item={[
                            {
                                icon: "star",
                                name: "Boxing",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            },
                            {
                                icon: "campground",
                                name: "Camping",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            },
                            {
                                icon: "gamepad",
                                name: "Game",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            },
                            {
                                icon: "headphones",
                                name: "Music",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            }
                        ]} />
                    <SectionTeam
                        title="Our Team"
                        item={[
                            {
                                image: { img },
                                name: "Nutthapat Piasangka",
                                category: "Full-stack Web Developer",
                                profile: [
                                    {
                                        url: "https://web.facebook.com/n.psk26",
                                        icon: "facebook",
                                    },
                                    {
                                        url: "https://github.com/n-psk",
                                        icon: "github",
                                    },
                                    {
                                        url: "https://www.linkedin.com/in/npsk26/",
                                        icon: "linkedin",
                                    }
                                ]
                            }

                        ]}
                    />
                    <SectionTestimonials
                        title="Testimonials"
                        item={[
                            {
                                image: { img },
                                name: "Nutthapat Piasangka",
                                company: "Solo",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            }
                        ]}
                    />
                    {/* <SectionClients /> */}
                    <Footer />
                    <Lines />
                </Container>
            </React.Fragment>)
    }
} 