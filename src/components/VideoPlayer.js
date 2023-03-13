import React, { useContext } from 'react';
import { SocketContext } from '../Context';


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  // console.log(userVideo.current.srcObject)

  return (
    <div className={"gridContainer"}>
      {stream && (
        <div className={"paper"}>
          <div item xs={12} md={6}>
            <p variant="h5" gutterBottom>{name || 'Name'}</p>
            <video playsInline muted ref={myVideo} autoPlay className={"video"} />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className={"paper"}>
          <div item xs={12} md={6}>
            <p variant="h5">{call.name || 'Name'}</p>
            <video playsInline ref={userVideo} autoPlay className={"video"} />
          </div>
        </div>
       )} 
    </div>
  );
};

export default VideoPlayer;