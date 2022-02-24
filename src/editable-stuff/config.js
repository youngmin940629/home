// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Heo",
  middleName: "",
  lastName: "Young Min",
  message: " No Pain No Gain. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/youngmin940629",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kgjdudals/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpg"),
  imageSize: 375,
  message:
    {
      birth: '1994 / 06 / 29',
      name : '허영민',
      university: '성균관대학교, 삼성 청년 SW 아카데미 수료',
      promise : '프론트엔드를 지망하는 ',
    }
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects & Study",
  gitHubUsername: "youngmin940629", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ['HawJowing-pjt', 'React', 'algorithm', 'Cpp_study'],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 77 },
    { name: "React", value: 70 },
    { name: "Vue", value: 60 },
    { name: "HTML/CSS", value: 63 },
    { name: "Python", value: 85 },
    { name: "Django", value: 75 },
    { name: "C/C++", value: 35 },
    { name: "SQL", value: 70 },
  ],
  softSkills: [
    { name: "긍정적", value: 99 },
    { name: "목표성향", value: 85 },
    { name: "협업능력", value: 90 },
    { name: "적응력", value: 85 },
    { name: "문제해결능력", value: 89 },
    { name: "창의성", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const contact = {
  show: true,
  heading: "contact",
  email: "gjdudals1237@gmail.com",
  number: "+82 10-2112-3873",
};

export { navBar, mainBody, about, repos, skills, contact };
