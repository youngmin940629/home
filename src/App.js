import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  contact,
  frontProject,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import FrontProject from "./components/home/FrontProject";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import Contact from "./components/home/Contact.jsx";


const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
        />
      )}
      {repos.show && (
        <Project
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specfic={repos.specificRepos}
        />
        )}
        {frontProject.show && (
          <FrontProject frontProject={frontProject}/>
        )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {contact.show && (
          <Contact
            heading={contact.heading}
            email={contact.email}
            number={contact.number}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
