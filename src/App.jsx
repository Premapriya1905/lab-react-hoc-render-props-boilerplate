import './App.css';
import React from 'react';
import LikePost from './components/LikePost';
import LikeImage from './components/LikeImage';
import HigherOrderComponent from './components/HOC/HigherOrderComponent';
import LikeImageHoc from './components/HOC/LikeimageHOC';
import LikePostHoc from './components/HOC/LikePostHOC';
import RenderPropsComponent from './components/RenderProps/RenderPropsComponent';
import LikeImageRender from './components/RenderProps/LikeImageRender';
import LikePostRender from './components/RenderProps/LikePostRender';


const LikeImageH = HigherOrderComponent(LikeImageHoc)
const LikePostH = HigherOrderComponent(LikePostHoc)


function App() {
  return (
    <div className='parent'>
      <h1 className='title'>Some Blog</h1>


      <div className="render">
        <RenderPropsComponent render={(count, increaseCount)=>(
          <LikeImageRender count={count} increaseCount={increaseCount}/>
        )} />
         <RenderPropsComponent render={(count, increaseCount)=>(
          <LikePostRender count={count} increaseCount={increaseCount} />
        )} />
      </div>


      <div className='buttons'>
        <LikePost />
        <LikeImage />
      </div>

      <div className="hoc">
        <LikeImageH />
        <LikePostH />
      </div>


    </div>
  );
}

export default App;