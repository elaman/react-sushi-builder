import React from 'react';

export default ({ children, url }) => (
  <li>
    <a href={url}>{children}</a>
  </li>
);