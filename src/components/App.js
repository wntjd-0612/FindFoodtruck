import React, { useState } from 'react';
import Modal from './Modal';
import KakaoMap from './KakaoMap';
import '../App.css';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleGreyArea = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="App">
      <KakaoMap />
      <div id="grey-area" className={isExpanded ? 'expanded' : ''}>
        <span className="material-icons" id="up-arrow" onClick={toggleGreyArea}>
          {isExpanded ? 'expand_more' : 'expand_less'}
        </span>
      </div>
      <div id="plus-container" onClick={() => setModalVisible(true)}>
        <span className="material-icons" id="plus-sign">add</span>
      </div>
      {modalVisible && <Modal closeModal={() => setModalVisible(false)} />}
    </div>
  );
}

export default App;
