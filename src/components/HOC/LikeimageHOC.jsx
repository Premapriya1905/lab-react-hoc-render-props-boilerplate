import React from "react";

const LikeImageHoc =(props)=>{
    let {count, increaseCount} = props;
    return (
        <>
            <button id="btns-5" onClick={increaseCount} >Like Image Hoc{count}</button>
        </>
    )
}

export default LikeImageHoc;