import React from 'react';
import img from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
  return (
    <div className="col-md-4 text-center">
      <img src={img} alt="" className="img-fluid mb-3" />
      <h4>Dr. Luffy</h4>
      <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-1878-97975</p>
    </div>
  );
};

export default Doctor;