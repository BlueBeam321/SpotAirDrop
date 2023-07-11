
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

import MenuCloseIcon from 'components/Icons/MenuCloseIcon';
import MenuOpenIcon from 'components/Icons/MenuOpenIcon';

const MenuCloseButton = ({ isOpen, ...rest }) => (
  <Hidden lgUp implementation='css'>
    <IconButton edge='start' color='inherit' aria-label='menu' {...rest}>
      {isOpen ?
        <MenuCloseIcon viewBox={'6 4 13 15'} /> :
        <MenuOpenIcon viewBox={'6 4 13 15'} />
      }
    </IconButton>
  </Hidden>
);

export default MenuCloseButton;
