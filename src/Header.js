import React from 'react'
import {AppBar,IconButton, Toolbar, styled, Box, Typography} from '@mui/material';
import logo from './usyd_logo.png';
import SearchIcon from '@mui/icons-material/Search';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex',
}));

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"
            sx={{
                background: "#F0EEEE",
                boxShadow: 'none',
            }}
        >
            <StyledToolbar>
                <img src={logo} alt="usyd logo" width={130}></img>
                <Typography sx={{ flexGrow: 1}}>
                </Typography>
                <IconButton size="large" aria-label="search" color="black">
                    <SearchIcon />
                </IconButton>
            </StyledToolbar>
        </AppBar>
    </Box>
  )
}

