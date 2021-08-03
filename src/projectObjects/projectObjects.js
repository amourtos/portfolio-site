//THESE ARE THE PROJECT OBJECTS TO BE LOOPED OVER INTO PROJECT CARDS
// I decided to use this method as opposed to individual cards for each project
import Twip from "./images/Twip-on-twitter.PNG";
import TwipIG from "./images/Twip-on-instagram.PNG";
import Kwitter from "./images/Kwitter.PNG";
import Todo from "./images/todo-app.PNG";
import sudoku from "./images/sudoku.PNG";
import quitter from "./images/quitter.PNG";
import deerWatcher from "./images/deer watcher.PNG";
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
    gitHub: "https://github.com/amourtos/Twips-twitter-config",
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
    gitHub: "https://github.com/amourtos/Twips-Instagram/tree/master",
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
    gitHub: "https://github.com/kenzie-se-q2/kwitter-LindsFish8691",
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
    gitHub: "https://github.com/amourtos/Task-Manager-app",
  },
  // {
  //   title: "Sudoku Solver",
  //   content: "A simple program that will solve any sudoku challenge you throw at it!",
  //   author: "Alex Mourtos",
  //   tools: "Python",
  //   imageSource: sudoku,
  //   link: null,
  //   gitHub: "https://github.com/amourtos/sudoku-solver",
  // },
  {
    title: "Quitter",
    content:
      "My first mobile app created with React Native for Android. The application is meant to be used to track how many days since the user quit smoking or using other tobacco products. Still in beta production",
    author: "Alex Mourtos",
    tools: "React Native",
    imageSource: quitter,
    link: null,
    gitHub: "https://github.com/amourtos/Quitter",
  },
  {
    title: "Deer Watcher",
    content:
      "A python program that monitors a chosen directory for added and removed files. The program also searches specified file types for specific text and displays what line the text was found on.",
    author: "Alex Mourtos",
    tools: "Python",
    imageSource: deerWatcher,
    link: null,
    gitHub: "https://github.com/amourtos/Dirwatcher",
  },
];
export default projectsArray;
