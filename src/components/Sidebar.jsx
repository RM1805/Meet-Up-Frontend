import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import styled from 'styled-components';

import { SocketContext } from '../Context';

const StyledPaper = styled(Paper)`
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 15px;
  color: #333;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 15px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const Sidebar = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <StyledPaper elevation={3}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <StyledTypography variant="h6">Account Info</StyledTypography>
                    <StyledTextField label="Your Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                    <CopyToClipboard text={me}>
                        <StyledButton variant="contained" color="primary" fullWidth startIcon={<Assignment />}>
                            Copy Your ID
                        </StyledButton>
                    </CopyToClipboard>
                </Grid>
                <Grid item xs={12}>
                    <StyledTypography variant="h6">Make a Call</StyledTypography>
                    <StyledTextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                    {callAccepted && !callEnded ? (
                        <StyledButton variant="contained" color="secondary" startIcon={<PhoneDisabled />} fullWidth onClick={leaveCall}>
                            Hang Up
                        </StyledButton>
                    ) : (
                        <StyledButton variant="contained" color="primary" startIcon={<Phone />} fullWidth onClick={() => callUser(idToCall)}>
                            Call
                        </StyledButton>
                    )}
                </Grid>
            </Grid>
            {children}
        </StyledPaper>
    );
};

export default Sidebar;
