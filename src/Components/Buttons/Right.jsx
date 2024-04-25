import React from 'react'

const Right = (props) => {
    const { className, style, onClick } = props;
    console.log("I am workiing!")
    return (
        <img
            className={className}
            style={{ ...style, display: "block", background: "blue", color: "orange", padding: "6px" }}
            onClick={onClick}
            src={`https://cdn-icons-png.freepik.com/256/271/271226.png`}
        />
    );
}

export default Right
