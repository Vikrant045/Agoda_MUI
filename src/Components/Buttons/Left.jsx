import React from 'react'

function Left(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" , padding:"6px",}}
        onClick={onClick}
      />
    );
}

export default Left
