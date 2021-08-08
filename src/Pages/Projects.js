import React from "react";
import "./Projects.scss";
import InlineLoading from "../Components/InlineLoading";
import Toasts from "../Components/Toasts";
import LinkWrapper from "../Components/LinkWrapper";
import Tooltip from "../Components/Tooltip";
import { joinClassNames } from "../Classes/Constants";
import { openImageModal } from "../Components/Modals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

function ProjectItem({ name, type, description, buttons, images }) {
    let [index, setIndex] = React.useState(0);
    const [transitioning, setTransitioningState] = React.useState(false);
    const [collapsed, setCollapsedState] = React.useState(false);
    const ref = React.useRef();
    
    React.useEffect(() => {
        const interval = setInterval(async () => {
            setTransitioningState(true);
            
            await new Promise(r => setTimeout(r, 500));
            
            setIndex(index = index + 1 >= images.length ? 0 : index + 1);
            setTransitioningState(false);
        }, 5500);
        
        if (ref.current.getElementsByClassName("Description")[0].getBoundingClientRect().height >= 200)
            setCollapsedState(true);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="Item" ref={ref}>
            <div className="Header">
                <div className="Name">{name}</div>
                <div className="Type">{type}</div>
            </div>

            <div className="ImageContainer">
                <img alt="Image" src={images[index + 1] ?? images[0]}/>
                <img alt="Image" src={images[index] ?? images[0]} className={transitioning ? "Transitioning" : null}
                     onClick={() => openImageModal(images[index], () => images)}/>
            </div>
            
            <div className="Footer">
                <div className="DescriptionWrapper">
                    <div className={joinClassNames("Description", [collapsed, "Collapsed"])}
                         dangerouslySetInnerHTML={{ __html: description }}
                         onClick={() => setCollapsedState(false)}/>
                    
                    { collapsed && (
                        <Tooltip direction="down">
                            Show More
                        </Tooltip>
                    ) }
                </div>
                
                <div className="Buttons">
                    { buttons.map((button, i) => (
                        <LinkWrapper href={button.disabled ? null : button.link} key={i}>
                            <div className={joinClassNames("Button", [button.disabled, "Disabled"])}>
                                <span>{button.title}</span>
                                
                                { button.tooltip?.length && (
                                    <Tooltip>
                                        {button.tooltip}
                                    </Tooltip>
                                ) }
                            </div>
                        </LinkWrapper>
                    )) }
                </div>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    const [data, initProjects] = React.useState(null);
    
    React.useEffect(() => {
        fetch("https://dl.dropboxusercontent.com/s/53aehv6kh5tqdk8/my_projects.json?raw=1", { cache: "no-cache" })
            .then(d => d.json())
            .then(initProjects)
            .catch(e => (console.error(e), Toasts.showToast("An unknown error occurred", "Failure")));
    }, []);
    
    return data ? (
        <div className="ProjectsPage">
            <div className="LastUpdated">Last Updated - <span>{data.lastUpdated}</span></div>
            
            <div className="Items">
                { data.projects.map((project, i) => <ProjectItem key={i} {...project}/>) }
            </div>

            <div className="ButtonsContainer" style={{ transform: "scale(1)", opacity: 1 }}>
                <LinkWrapper href="#">
                    <div className="Button">
                        <FontAwesomeIcon icon={faHome}/>
                        <Tooltip>Home Page</Tooltip>
                    </div>
                </LinkWrapper>
            </div>
        </div>
    ) : (
        <div className="ProjectsPage Loading">
            <InlineLoading/>
        </div>
    );
}