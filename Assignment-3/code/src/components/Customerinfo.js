import React from 'react'
import './Customerinfo.css'
import PropTypes from 'prop-types';
export default function Customerinfo(props) {
    const {info} = props;
    const {Appointment, Email, Phone} = info;
  return (
    <div className='Customerinfo'>
        <div className="appointment">
            <span className='details'>Appointment:</span>
            <span>{Appointment}</span>
        </div>
        <div className="email">
            <span className='details'>Email:</span>
            <span>{Email}</span>
        </div>
        <div className="phone">
            <span className='details'>Phone:</span>
            <span>{Phone}</span>
        </div>

    </div>
  )
}

Customerinfo.propTypes = {Phone: PropTypes.string,
                        Appointment: PropTypes.string,
                        Email: PropTypes.string}