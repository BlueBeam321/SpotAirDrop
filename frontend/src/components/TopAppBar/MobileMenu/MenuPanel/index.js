
import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { AppContext } from 'contexts';
import MenuPanelListItem from './MenuPanelItem';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(2)
  }
}));

const MenuPanel = ({ title, menuItems, history, onItemClick }) => {
  const classes = useStyles();
  const { topAppMenu } = useContext(AppContext);
  const listItemClickHandler = (event, index) => {
    history.push(menuItems[index].url)
    onItemClick();
  };

  return (
    <>
      <Typography className={classes.title}>{title}</Typography>
      <List>
        {menuItems.map((menuItem, index) => (
          <MenuPanelListItem
            key={menuItem.id}
            selected={topAppMenu === index}
            menuItem={menuItem}
            onClick={(event) => listItemClickHandler(event, index)} />
        ))}
      </List>
    </>
  );
};

export default withRouter(MenuPanel);
