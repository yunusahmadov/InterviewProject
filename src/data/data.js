import htmlLogo from '../assets/htmllogo.png'
import csslogo from '../assets/csslogo.png'
import jslogo from '../assets/jslogo.png'
// import { useTranslation } from 'react-i18next';


// const { t } = useTranslation();
const languages={
    items:[
        {
            title:'HTML',
            color: "from-orange-400 to-orange-600",
            btnColor:"bg-orange-600",
            btnShadow:"shadow-md shadow-orange-800",
            shadow: "shadow-lg shadow-orange-600",
            logo:htmlLogo,
            link:'htmlpage'
        },
        {
            title:'Css',
            color: "from-sky-600 to-sky-500",
            btnColor:"bg-sky-600",
            btnShadow:"shadow-md shadow-sky-800",
            shadow: "shadow-lg shadow-sky-500",
            logo:csslogo,
            link:'csspage'
        },
        {
            title:'JavaScript',
            color: "from-amber-300 to-amber-400 ",
            btnColor:"bg-amber-400",
            btnShadow:"shadow-md shadow-amber-600",
            shadow: "shadow-lg shadow-yellow-500",
            logo:jslogo,
            link:'jspage'
        },
    ]
}

export {languages};