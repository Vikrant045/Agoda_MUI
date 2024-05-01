import React from 'react'

function Left(props) {
    const { className, style, onClick } = props;
    return (
      <img
          className={className}
          style={{ ...style, display: "block",   padding: "6px" }}
          onClick={onClick}
          src={`https://cdn-icons-png.freepik.com/512/271/271218.png`}
      />
  );
}

export default Left
