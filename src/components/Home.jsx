import React  from 'react';
//import './home.css';
import AdContainer from './AdContainer';
import MobileWebServiceCards from './MobileWebServiceCards';

const Home = () => {

  return (
    <>
      <AdContainer/>
      <div className="ministrip-card">
        <div className="emergency-number left">
          <p> <i className="fas fa-ambulance"></i> Medical:0710761679</p>
        </div>
        <div className="emergency-number right">
          <p><i className="fas fa-shield-alt"></i> Security:0720253976</p>
                 </div>
      </div>
      <MobileWebServiceCards/>
      
    </>
  );
};

export default Home;
