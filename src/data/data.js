import htmlLogo from '../assets/htmllogo.png'
import csslogo from '../assets/csslogo.png'
import jslogo from '../assets/jslogo.png'
// import { useTranslation } from 'react-i18next';


// const { t } = useTranslation();
const languages={
    items:[
        {
            title:'HTML',
            text:'Частые вопросы на собесах',
            color: "from-orange-400 to-orange-600",
            shadow: "shadow-lg shadow-orange-600",
            logo:htmlLogo
        },
        {
            title:'Css',
            text:`Частые вопросы на собесах `,
            color: "from-sky-600 to-sky-500",
            shadow: "shadow-lg shadow-sky-500",
            logo:csslogo
        },
        {
            title:'JavaScript',
            text:`Частые вопросы на собесах `,
            color: "from-amber-300 to-amber-400 ",
            shadow: "shadow-lg shadow-yellow-500",
            logo:jslogo
        },
    ]
}

export {languages};