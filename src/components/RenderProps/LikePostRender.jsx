import React from "react";

const LikePostRender = (props) => {
    return (
        <>
                <button id="btns-2" onClick={props.increaseCount}>Like Post Render {props.count}</button>
        </>
    )
}

export default LikePostRender;