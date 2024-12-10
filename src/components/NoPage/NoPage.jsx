import React from 'react';
import '../../css/style.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-scroll';

const NoPage = () => {


  const navigate = useNavigate();

  const homeButton = () => {
    navigate('/');
  };

  return (
    <div className='error-404'>
      <h1>404 Error</h1>
      <Button
            variant="contained"
            className="button"
            size="small"
            onClick={homeButton}
          >Go Back</Button>
    </div>
  )
}

export default NoPage;
