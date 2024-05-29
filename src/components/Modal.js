import React, { useState } from 'react';

const Modal = ({ closeModal }) => {
  const [address, setAddress] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [placeKind, setPlaceKind] = useState('');

  const registerPlace = (event) => {
    event.preventDefault();
    const data = { address, place_name: placeName, place_kind: placeKind };

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert('등록되었습니다.');
          closeModal();
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form id="modal-form" onSubmit={registerPlace}>
          <input type="text" id="address" placeholder="길거리 음식의 주소를 입력하세요" value={address} onChange={(e) => setAddress(e.target.value)} />
          <input type="text" id="place_name" placeholder="길거리 음식의 이름을 입력하세요" value={placeName} onChange={(e) => setPlaceName(e.target.value)} />
          <input type="text" id="place_kind" placeholder="길거리 음식의 종류를 입력하세요" value={placeKind} onChange={(e) => setPlaceKind(e.target.value)} />
          <button type="submit" id="submit-button">등록</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
