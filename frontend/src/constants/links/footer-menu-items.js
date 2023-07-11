
import GitbookIcon from '../../components/Icons/GitbookIcon'
import MediumIcon from '../../components/Icons/MediumIcon'
import TelegramIcon from '../../components/Icons/TelegramIcon'
import TwitterIcon from '../../components/Icons/TwitterIcon'
import EmailIcon from '../../components/Icons/EmailIcon'

const FOOTER_MENUS = [
    {
        id: 'gitbook',
        icon: <GitbookIcon />,
        url: 'https://climbtoken.gitbook.io/climb-token/'
    },
    {
        id: 'twitter',
        icon: <TwitterIcon />,
        url: 'https://twitter.com/climbtoken'
    },
    {
        id: 'email',
        icon: <EmailIcon />,
        url: 'mailto:info@climbtoken.finance',
    },
    {
        id: 'telegram',
        icon: <TelegramIcon />,
        url: 'https://t.me/climbtoken'
    },
    {
        id: 'medium',
        icon: <MediumIcon />,
        url: 'https://climbtoken.medium.com/',
    }
];

export {
    FOOTER_MENUS
}