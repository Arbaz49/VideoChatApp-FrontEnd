import React from 'react';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import "./App.css"

const App = () => {
  // const classes = useStyles();

  return (
    <div className={"wrapper"}>
      <nav className={"appBar"} position="static" color="inherit">
        <h1 style={{color:"white",textAlign:"center",width:"100%"}}>Video Chat</h1>
      </nav>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;