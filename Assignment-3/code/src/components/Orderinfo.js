import React from 'react'
import './Orderinfo.css'
export default function Orderinfo() {
    const Orderinfo = {
        Status: 'In progress',
        Door: 'Mark',
        Time: '10:30',
        Date: ' (25-05-2016)'
      }
  return (
    <div className='Orderinfo'>
        <div className="status">
        <p>Status</p>
        <span>⚫</span>
        {Orderinfo.Status}
        </div>
        <div className="door">
        <p>Door</p>
        {Orderinfo.Door}
        </div>
        <div className="time">
        <p>Time</p>
        {Orderinfo.Time}
        <span className='date'>{Orderinfo.Date}</span>
        </div>
    </div>
  )
}
