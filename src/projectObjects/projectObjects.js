//THESE ARE THE PROJECT OBJECTS TO BE LOOPED OVER INTO PROJECT CARDS
// I decided to use this method as opposed to individual cards for each project
import Twip from "./images/Twip-on-twitter.PNG";
import TwipIG from "./images/Twip-on-instagram.PNG";
import Kwitter from "./images/Kwitter.PNG";
import Todo from "./images/todo-app.PNG";
const projectsArray = [
  {
    title: "Twip on Twitter",
    content:
      "Twip the twipper-bot is using Twitter! His code utilizes the Twitter Developer API in order to manage and maintain itself while the program is running.",
    author: "Alex Mourtos",
    tools: "Tweepy",
    language: "Python",
    imageSource: Twip,
    link: "https://twitter.com/amourtosgmailc1",
  },
  {
    title: "Twip on Instagram",
    content:
      "Twip the twipper-bot is also using instagram using Selenium and Instapy coded with Python. The hardest part is maintaining the account while flying under the radar of Instagram's bot detection algorithms.",
    author: "Alex Mourtos",
    tools: "Instapy, Python, Selenium",
    language: "Python",
    imageSource: TwipIG,
    link: "https://www.instagram.com/twip_the_twipper001/",
  },
  {
    title: "Kwitter Social Media Site",
    content:
      "A basic social media platform used with a mock social media API. Users can create accounts, login, view all site members and profiles as well as edit their own personal information and profile. I worked on a team with 3 other developers to build this site",
    author: "Alex Mourtos, Cynthia Onwuana, Lindsey Fisher, Tina Safari",
    tools: "mock social media API, React Framework, React-Bootstrap",
    language: "Javascript, HTML/CSS",
    imageSource: Kwitter,
    link: "https://kenzie-se-q2.github.io/kwitter-LindsFish8691/",
  },
  {
    title: "You Can Do Anything You Put Your Mind To!",
    content:
      "A taskmanager application that can manager, track, sort, and accomplish your todos! This application was built using React and Javascript, and utilizes a fully functioning backend database that was built using node.js, MongoDB, and Express. I worked on a team with 3 other developers to build this application.",
    author: "Alex Mourtos, Hyde Saulesberry, Michael Escamilla, Cynthia Onwuana",
    tools: "React, Node.js, Express, Mongoose, MongoDB, React-Bootstrap",
    language: "Javascript, HTML/CSS",
    imageSource: Todo,
    link: "https://amourtos.github.io/Task-Manager-app/",
  },
];
export default projectsArray;
