import React, { useContext } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

import { SocketContext } from '../Context';

const StyledNotification = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-right: 20px;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <StyledNotification>
                    <StyledHeading>{call.name} is calling:</StyledHeading>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                </StyledNotification>
            )}
        </>
    );
};

export default Notifications;
