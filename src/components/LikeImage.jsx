import React, { useState } from 'react'

export default function LikeImage() {

  const [likeImageCounter, setLikeImageCounter] = useState(0);

  const handleLikeImageCount = ()=>{
    setLikeImageCounter(likeImageCounter+1);
  }

  return (
      <button id='btns-4' onClick={handleLikeImageCount}>Like Image {likeImageCounter}</button>
  )
}
