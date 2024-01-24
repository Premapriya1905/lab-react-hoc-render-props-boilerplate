import React from "react";

const LikeImageRender = (props) => {
    return (
        <>
                <button id="btns-1" onClick={props.increaseCount}>Like Image Render  {props.count}  </button>
        </>
    )
}

export default LikeImageRender;