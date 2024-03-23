import React from 'react';
import { Typography, AppBar, Container, Grid } from '@mui/material';
import styled from 'styled-components';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notification';

const StyledAppBar = styled(AppBar)`
  background-color: #512da8;
`;

const StyledTypography = styled(Typography)`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const StyledGridContainer = styled(Grid)`
  padding: 20px;
`;

const StyledGridItem = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <StyledAppBar position="static">
        <StyledTypography variant="h2">Meet Up</StyledTypography>
      </StyledAppBar>
      <StyledContainer>
        <StyledGridContainer container spacing={3}>
          <StyledGridItem item xs={12} md={8}>
            <VideoPlayer />
          </StyledGridItem>
          <StyledGridItem item xs={12} md={4}>
            <Sidebar>
              <Notifications />
            </Sidebar>
          </StyledGridItem>
        </StyledGridContainer>
      </StyledContainer>
    </>
  );
};

export default App;
