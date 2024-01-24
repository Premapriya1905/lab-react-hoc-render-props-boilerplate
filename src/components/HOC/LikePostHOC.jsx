import React from "react";

const LikePostHoc =(props)=>{
    let {count, increaseCount} = props;
    return (
        <>
        <button id="btns-6" onClick={increaseCount}>Like Post Hoc{count}</button>
        </>
    )
}

export default LikePostHoc;