import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faUser } from '@fortawesome/free-solid-svg-icons';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Select Login Type</h2>
        <div className="login-options">
          <div className="login-option" onClick={() => navigateTo('/admin')}>
            <FontAwesomeIcon icon={faUserShield} size="3x"style={{color: "#135d66"}} />
            <p style={{fontSize: "17px", fontWeight: "600"}}>Admin</p>
          </div>
          <div className="login-option" onClick={() => navigateTo('/LoginForm')}>
            <FontAwesomeIcon icon={faUser} size="3x" style={{color: "#135d66"}}/>
            <p style={{fontSize: "17px", fontWeight: "600"}}>User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
