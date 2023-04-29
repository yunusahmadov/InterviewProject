import htmlLogo from "../assets/htmllogo.png";
import csslogo from "../assets/csslogo.png";
import jslogo from "../assets/jslogo.png";
import code1 from "../assets/code1.png";
import jsq2 from "../assets/jsq2.png";
import jsq3 from "../assets/jsq3.png";
import jsq3var2 from "../assets/jsq3var2.png";
import jsq4 from "../assets/jsq4.png";
import jsq4var2 from "../assets/jsq4var2.png";






const languages = {
  items: [
    {
      title: "HTML",
      color: "from-orange-400 to-orange-600",
      btnColor: "bg-orange-600",
      btnShadow: "shadow-md shadow-orange-800",
      shadow: "shadow-lg shadow-orange-600",
      logo: htmlLogo,
      link: "htmlpage",
    },
    {
      title: "Css",
      color: "from-sky-600 to-sky-500",
      btnColor: "bg-sky-600",
      btnShadow: "shadow-md shadow-sky-800",
      shadow: "shadow-lg shadow-sky-500",
      logo: csslogo,
      link: "csspage",
    },
    {
      title: "JavaScript",
      color: "from-amber-300 to-amber-400 ",
      btnColor: "bg-amber-400",
      btnShadow: "shadow-md shadow-amber-600",
      shadow: "shadow-lg shadow-yellow-500",
      logo: jslogo,
      link: "jspage",
    },
  ],
};

const htmlQuestions = {
  questions: [
    {
      title: "quest1",
      answer: "answer1",
      level:'junior'

    },
    {
      title: "quest2",
      answer: "answer2",
      level:'junior'

    },
  ],
};
const cssQuestions = {
  questions: [
    {
      title: "cssq1",
      answer: "cssq1answer",
      img: code1,
      level:'junior'

    },
  ],
};

const JsQuestions = {
  questions: [
    {
      title: "jsq1",
      answer: "jsq1answer",
      level:'junior'
    },
    {
      title: "jsq2",
      img: jsq2,
      level:'junior'
    },
    {
        title: "jsq3",
        img: jsq3,
        description1:"jsq3desc",
        description2:"jsq3desc2",
        img2: jsq3var2,
      level:'junior'

    },
    {
      title: "jsq4",
      img: jsq4,
      description1:"jsq4desc",
      description2:"jsq4desc2",
      img2: jsq4var2,
      level:'junior'
    },
  ],
};

export { languages, htmlQuestions, cssQuestions, JsQuestions };
