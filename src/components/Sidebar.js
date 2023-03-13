
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocketContext } from '../Context';


const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className={"container"}>
      <div className={"paper"}>
        <div className={"root"} >
          <div container className={"infoContainer"}>
            <div item xs={12} md={6} className={"info"}>
              <p  variant="h6">Account Info</p>
              <input label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} className='infobtn' style={{backgroundColor:"blue",color:"white"}} >
                <button >
                  Copy Your ID <Assignment  fontSize="large" />
                </button>
              </CopyToClipboard>
            </div>
            <div item xs={12} md={6} className={"info"}>
              <p variant="h6">Make a call</p>
              <input label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <button className='infobtn'  onClick={leaveCall} style={{backgroundColor:"red",color:"white"}} ><PhoneDisabled fontSize="large" />
                  Hang Up
                </button>
              ) : (
                <button style={{backgroundColor:"green",color:"white"}} className='infobtn' onClick={() => callUser(idToCall)} ><Phone fontSize="large" />
                  Call
                </button>
              )}
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;