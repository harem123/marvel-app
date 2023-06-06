import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import marvelIcon from '../../static/images/icons/icons8-marvel-70.png'

function TopBar() {
  return (
    <AppBar position="sticky" style={{ marginBottom: '25px' }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{ marginRight: '25px' }}>
            <img width="70" height="70" src={marvelIcon} alt="marvel" />
          </div>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            COMICS APP
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopBar;