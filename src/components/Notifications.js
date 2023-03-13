import React, { useContext } from 'react';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  console.log(call)

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;