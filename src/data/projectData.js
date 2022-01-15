import glassmorphGif from "../assets/gifs/glassmorphism.gif";
import boxMoveGif from "../assets/gifs/boxMove.gif";
import flipEffGif from "../assets/gifs/flipEffect.gif";
import xcoinGif from "../assets/gifs/xcoins-1.gif";
import doremGif from "../assets/gifs/dorem.gif";
import mernExerciseGif from "../assets/gifs/exercise-mern.gif";
import pwaWeatherGif from "../assets/gifs/pwa-weather.gif";
import bookStoreGif from "../assets/gifs/bookStore_mern.gif";
import libcompareGif from "../assets/gifs/libcompare.gif";

import formikImg from "../assets/icons/formik.png";
import htmlCssImg from "../assets/icons/htmlCss.png";
import reactImg from "../assets/icons/react.png";
import mernImg from "../assets/icons/mern.png";

export const homeCardData = [
  {
    id: 1,
    heading: "Glassmorphism",
    date: "2 May 2021",
    subheading: "Responsive design using HTML and SCSS only.",
    imgSrc: glassmorphGif,
    avatarSrc: htmlCssImg,
    tooltipText: "HTML & CSS",
    linkTo: "/glassmorphism",
  },
  {
    id: 2,
    heading: "Box Movement",
    date: "1 June 2021",
    subheading: "Responsive design and functions using Material UI and React",
    imgSrc: boxMoveGif,
    avatarSrc: reactImg,
    tooltipText: "React + Material UI",
    linkTo: "/boxMovement",
  },
  {
    id: 3,
    heading: "Flip Effect",
    date: "17 April 2021",
    subheading: "Responsive flip Effect design using HTML & CSS",
    imgSrc: flipEffGif,
    avatarSrc: htmlCssImg,
    tooltipText: "HTML,CSS & JS",
    linkTo: "/flipEffect",
  },
  {
    id: 4,
    heading: "X Coins Forms",
    date: "16 June 2021",
    subheading: "Performed Form validation using Formik with React",
    imgSrc: xcoinGif,
    avatarSrc: formikImg,
    tooltipText: "Formik + React",
    linkTo: "/xcoinsForms",
  },
  {
    id: 5,
    heading: "Dorem Gipsum",
    date: "6 Aug 2021",
    subheading:
      "Data fetching form External API with dark and light theme toggler!",
    imgSrc: doremGif,
    avatarSrc: reactImg,
    tooltipText: "React + API",
    linkTo: "/doremGispsum",
  },
  {
    id: 6,
    heading: "Exercise/Routine Tracker",
    date: "16 Aug 2021",
    subheading:
      "A MERN application performing all the CRUD functionality to keep track of user's exercises.API handling and database querying.",
    imgSrc: mernExerciseGif,
    avatarSrc: mernImg,
    tooltipText: "MERN Stack",
    linkTo: "/exerciseMern",
  },
  {
    id: 7,
    heading: "PWA : Weather app",
    date: "22 Aug 2021",
    subheading:
      "A Progressive Web application in React, able to work offline, completely responsive made using Bootstrap, having theme toggler and deployed using Netlify",
    imgSrc: pwaWeatherGif,
    avatarSrc: reactImg,
    tooltipText: "PWA: React",
    linkTo: "/pwa",
  },
  {
    id: 8,
    heading: "Ecommerce: Book Store",
    date: "14 Sept 2021",
    subheading:
      "A Full stack (MERN) web appication with authentication and session management using Passportjs and password encryption using Bcrypt.js.",
    imgSrc: bookStoreGif,
    avatarSrc: mernImg,
    tooltipText: "MERN stack",
    linkTo: "/bookStore",
  },
  {
    id: 9,
    heading: "LibCompare",
    date: "4 Jan 2022",
    subheading:
      "A form of documentation for all Frontend Developers who want to compare and evaluate various styling libraries that could be used with React",
    imgSrc: libcompareGif,
    avatarSrc: reactImg,
    tooltipText: "React",
    linkTo: "/libcompare",
  },
];
