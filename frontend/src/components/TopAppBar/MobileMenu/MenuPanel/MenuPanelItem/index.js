
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(.5, 1),
    marginBottom: theme.spacing(1),
  },
  selectedItem: {
    color: theme.palette.text.primary,
    backgroundColor: `${theme.palette.background.main} !important`
  },
  unselectedIcon: {
    color: theme.palette.text.primary
  },
  selectedIcon: {
    color: theme.palette.text.primary
  }
}));

const MenuPanelListItem = ({ selected, menuItem, onClick }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      className={classes.listItem}
      classes={{
        selected: classes.selectedItem
      }}
      selected={selected}
      onClick={onClick}>
      <ListItemIcon
        className={selected ? classes.selectedIcon : classes.unselectedIcon}>
        {menuItem.icon}
      </ListItemIcon>
      <ListItemText>
        <Typography variant='subtitle1'>{menuItem.text}</Typography>
      </ListItemText>
    </ListItem>
  );
};

export default MenuPanelListItem;
