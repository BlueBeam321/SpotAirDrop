
import ClimbImage from 'components/ClimbImage';

const sources = [
  {
    srcSet: '/assets/logo/climb.png 600w, /assets/logo/climb.png 960w, /assets/logo/climb.png 1280w',
    type: 'image/png'
  },
  {
    srcSet: '/assets/logo/climb.png 600w, /assets/logo/climb.png 960w, /assets/logo/climb.png',
    type: 'image/png'
  }
];

const Logo = props => (
  <ClimbImage
    {...props}
    width={44}
    height={44}
    sources={sources} />
);

export default Logo;
