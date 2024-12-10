import React from 'react';
import '../../css/style.css';

const BackDrop = ({closeSideBar}) => {
  return (
    <div className='backdrop' onClick={closeSideBar}>
    </div>
  )
}

export default BackDrop;