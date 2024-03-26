import React, { useContext, useEffect, useRef } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import styled from 'styled-components';

import { SocketContext } from '../Context';

const StyledVideoContainer = styled(Grid)`
  justify-content: center;
  margin-top: 20px;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  margin: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, stream, call } = useContext(SocketContext);
  const userVideoRef = useRef();

  useEffect(() => {
    if (stream && myVideo.current) {
      myVideo.current.srcObject = stream;
    }
  }, [stream, myVideo]);

  useEffect(() => {
    if (callAccepted && userVideoRef.current && call.stream) {
      userVideoRef.current.srcObject = call.stream;
    }
  }, [callAccepted, call.stream]);

  return (
    <StyledVideoContainer container>
      {stream && (
        <StyledPaper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom style={{ color: '#333', marginBottom: '10px', textAlign: 'center' }}>{name || 'Name'}</Typography>
            <StyledVideo playsInline muted ref={myVideo} autoPlay />
          </Grid>
        </StyledPaper>
      )}
      {callAccepted && (
        <StyledPaper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom style={{ color: '#333', marginBottom: '10px', textAlign: 'center' }}>{call.name || 'Name'}</Typography>
            <StyledVideo playsInline ref={userVideoRef} autoPlay />
          </Grid>
        </StyledPaper>
      )}
      {callAccepted && stream && (
        <StyledPaper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom style={{ color: '#333', marginBottom: '10px', textAlign: 'center' }}>You are calling {call.name}...</Typography>
            <StyledVideo playsInline ref={userVideo} autoPlay />
          </Grid>
        </StyledPaper>
      )}
      {!stream && !callAccepted && (
        <StyledPaper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom style={{ color: '#333', marginBottom: '10px', textAlign: 'center' }}>Waiting for a call...</Typography>
          </Grid>
        </StyledPaper>
      )}
    </StyledVideoContainer>
  );
};

export default VideoPlayer;
