import React from "react";
import './Notifications.css';

import {getLatestNotification } from './utilis';

const style = {
    'display': 'flex',
    'justify-content': 'space-between',
    'align-items': 'center'
};

export default function Notifications() {
    return (
        <div className="Notifications">
            <div style={style}>
                <p>Here is the list of notifications</p>
                <button aria-label="Close" onClick={() => console.log('Close button has been clicked')}>Close</button>
            </div>
            <ul>
                <li data-id='0'>New course available</li>
                <li data-id='1'>New resume available</li>
                <li data-id='1' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            
        </div>
    )
}