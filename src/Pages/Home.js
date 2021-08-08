import React from "react";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faEnvelope, faEnvelopeOpen, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faGuilded } from "@fortawesome/free-brands-svg-icons";
import Tooltip from "../Components/Tooltip";
import LinkWrapper from "../Components/LinkWrapper";
import { copyToClipboard } from "../Components/Modals";

export const discordTag = "Metalloriff 💕🌈#2891";

export default class extends React.Component {
    startTime = Date.now();
    paragraphs;
    buttonsContainerRef = React.createRef();
    
    componentDidMount() {
        // Query selector bad but this site small
        this.paragraphs = [...document.querySelectorAll(".MainPage > .Head > p")];
        for (const paragraph of this.paragraphs)
            paragraph.addEventListener("animationstart", () => this.paragraphs.splice(this.paragraphs.indexOf(paragraph), 1));
        
        window.addEventListener("scroll", this.handleScroll);
        
        if (window.location.hash.length)
            this.handleScroll();
    }
    
    clearedDelays = false;
    handleScroll = () => {
        const { current } = this.buttonsContainerRef;
        if (!current) return;
        
        const rect = current.getBoundingClientRect();
        current.style =
            rect.left < window.innerWidth && rect.top + (rect.height / 2) < window.innerHeight
                ? "transform:scale(1);opacity:1"
                : "transform:scale(0.5);opacity:0"
        
        if (this.clearedDelays) return;
        this.clearedDelays = true;
        
        for (const paragraph of this.paragraphs)
            paragraph.style.animationDelay = `${Date.now() - this.startTime}ms`;
    };
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <div className="MainPage">
                <div className="Head">
                    <p>Hi,</p>
                    <p>I'm Israel.</p>
                    
                    <p>I'm a hobby/freelance <b>web</b>, <b>software</b>, and <b>game</b> developer.</p>
                    <p>Fluent with <b>C#</b>, <b>JavaScript</b>, <b>ReactJS</b>, <b>CSS/SCSS</b>, <b>Unity Engine</b>, <b>HTML</b>, and <b>LUA</b>.</p>
                    <p>I also work with <b>Java</b>, <b>Python</b>, <b>3D modeling</b>, <b>3D animation</b>, and <b>vector art design</b>.</p>
                </div>
                
                <div className="ButtonsContainer" ref={this.buttonsContainerRef}>
                    <LinkWrapper href="#projects">
                        <div className="Button">
                            <FontAwesomeIcon icon={faProjectDiagram}/>
                            <Tooltip>My Projects</Tooltip>
                        </div>
                    </LinkWrapper>
                    
                    <div className="Divider"/>
                    
                    <LinkWrapper href="https://www.github.com/Metalloriff">
                        <div className="Button">
                            <FontAwesomeIcon icon={faGithub}/>
                            <Tooltip>My GitHub</Tooltip>
                        </div>
                    </LinkWrapper>

                    <div className="Button" onClick={() => copyToClipboard(discordTag)}>
                        <FontAwesomeIcon icon={faDiscord}/>
                        <Tooltip>My Discord - {discordTag}</Tooltip>
                    </div>

                    <LinkWrapper href="https://guilded.gg/Metalloriff">
                        <div className="Button">
                            <FontAwesomeIcon icon={faGuilded}/>
                            <Tooltip>My Guilded - Guilded.gg/Metalloriff</Tooltip>
                        </div>
                    </LinkWrapper>

                    <div className="Divider"/>
                    
                    <div className="Button">
                        <FontAwesomeIcon icon={faEnvelope} style={{ opacity: 0.5 }}/>
                        <Tooltip>Not yet added - you can contact me with any of the links to the left</Tooltip>
                    </div>
                </div>
            </div>
        );
    }
}