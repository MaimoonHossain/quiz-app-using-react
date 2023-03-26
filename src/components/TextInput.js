import React from 'react';

const TextInput = ({ icon, ...rest }) => {
  return (
    <div>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInput;
