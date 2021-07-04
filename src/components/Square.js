import React from "react";

const Square = ({ value, onClick }) => (
    <button className="square-button" onClick={() => onClick()}>
        {value}
    </button >
);

export default Square;