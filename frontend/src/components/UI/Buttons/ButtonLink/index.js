
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/display-name
const ButtonLink = React.forwardRef(({ className, href, hrefAs, children, prefetch }, ref) => (
  <Link className={className} to={href} as={hrefAs} prefetch={prefetch} ref={ref}>
    {children}
  </Link>
));

export default ButtonLink;
