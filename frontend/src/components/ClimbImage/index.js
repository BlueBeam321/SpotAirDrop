
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  picture: {
    display: 'flex'
  }
}));

const ClimbImage = ({
  sources,
  width,
  height,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <picture
      {...rest}
      className={clsx(classes.picture, className)}>
      {sources.map(source => (
        <source
          key={source.srcSet}
          srcSet={source.srcSet}
          type={source.type} />
      ))}
      <img
        width={width}
        height={height}
        src='/assets/images/placeholder.gif'
        alt='MARS' />
    </picture>
  );
};

export default ClimbImage;
