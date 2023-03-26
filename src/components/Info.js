import React from 'react';
const Info = ({ children }) => {
  return (
    <div className={classes.info}>
      {children} <a href="login.html">Login</a> instead.
    </div>
  );
};

export default Info;
