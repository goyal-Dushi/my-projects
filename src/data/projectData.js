import glassmorphGif from "../assets/gifs/glassmorphism.gif";
import boxMoveGif from "../assets/gifs/boxMove.gif";
import flipEffGif from "../assets/gifs/flipEffect.gif";
import xcoinGif from "../assets/gifs/xcoins.gif";
import doremGif from "../assets/gifs/dorem.gif";
// import mernExerciseGif from "../assets/gifs/exercise-mern.gif";
import pwaWeatherGif from "../assets/gifs/pwa-weather.gif";
// import bookStoreGif from "../assets/gifs/bookStore_mern.gif";
import libcompareGif from "../assets/gifs/libcompare.gif";
import frontendDesignImg from '../assets/gifs/frontendDesigns.png'

import formikImg from "../assets/icons/formik.webp";
import htmlCssImg from "../assets/icons/htmlCss.webp";
import reactImg from "../assets/icons/react.webp";

export const beginnerCards = [
  {
    id: 1,
    heading: "PWA : Weather app",
    date: "22 Aug 2021",
    subheading:
      "A Progressive Web application (PWA) in React, responsive made using Bootstrap and deployed using Netlify. Utilizing openweathermap API to fetch weather details!",
    imgSrc: pwaWeatherGif,
    avatarSrc: reactImg,
    tooltipText: "PWA: React",
    linkTo: "/pwa",
  },
  {
    id: 2,
    heading: "Box Movement",
    date: "1 June 2021",
    subheading: "Responsive design using Material UI and React to understand react hooks!",
    imgSrc: boxMoveGif,
    avatarSrc: reactImg,
    tooltipText: "React + Material UI",
    linkTo: "/boxMovement",
  },
  {
    id: 3,
    heading: "Glassmorphism",
    date: "2 May 2021",
    subheading: "Responsive design using HTML and SCSS to play with styling properties.",
    imgSrc: glassmorphGif,
    avatarSrc: htmlCssImg,
    tooltipText: "HTML & CSS",
    linkTo: "/glassmorphism",
  },
  {
    id: 4,
    heading: "Flip Effect",
    date: "17 April 2021",
    subheading: "Responsive flip Effect design to understand HTML and CSS fundamentals",
    imgSrc: flipEffGif,
    avatarSrc: htmlCssImg,
    tooltipText: "HTML,CSS & JS",
    linkTo: "/flipEffect",
  },
];

export const intermediateCards = [
  {
    id: 1,
    heading: "Frontend with React Js",
    date: "9 Oct 2022",
    subheading:
      "This consists of a group of project work taken from frontendmentor.io. Utilized React to develop all the tasks/challenge to become more familiar with React and its nuances.",
    imgSrc: frontendDesignImg,
    avatarSrc: reactImg,
    tooltipText: "React",
    linkTo: "/webDevReact",
  },
  {
    id: 2,
    heading: "LibCompare",
    date: "4 Jan 2022",
    subheading:
      "A static website to help Frontend Developers compare and evaluate various frontend styling/component libraries that could be used with React.",
    imgSrc: libcompareGif,
    avatarSrc: reactImg,
    tooltipText: "React",
    linkTo: "/libcompare",
  },
  {
    id: 3,
    heading: "X Coins Forms",
    date: "16 June 2021",
    subheading: "Form validation using Formik with React",
    imgSrc: xcoinGif,
    avatarSrc: formikImg,
    tooltipText: "Formik + React",
    linkTo: "/xcoinsForms",
  },
  {
    id: 4,
    heading: "Dorem Gipsum",
    date: "6 Aug 2021",
    subheading:
      "An application helping to generate Lorem Ipsum text!",
    imgSrc: doremGif,
    avatarSrc: reactImg,
    tooltipText: "React + API",
    linkTo: "/doremGispsum",
  },
];
