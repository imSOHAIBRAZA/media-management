import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  styled,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const StyledAppBar = styled(AppBar)({
  borderBottom: "0.5px solid #616066",
});

const StyledIconButton = styled(IconButton)({
  backgroundColor: "#3A39404D",
  borderRadius: 2,
  marginRight: 1,
});

const StyledAvatar = styled(Avatar)({
  borderRadius: 5,
});

const StyledMenu = styled(Menu)({
  marginTop: "45px",
});

const UserProfile = ({username}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
    >
      <Box display="flex" flexDirection="column" alignItems="end">
        <Typography variant="body" fontSize={16}>
          {username}
        </Typography>
        <Typography variant="body" fontSize={16} color="#FF7DFF">
          Change profile
        </Typography>
      </Box>
    </Box>
  );
};

const UserSettingsMenu = ({ settings, handleClose }) => {
  return (
    <StyledMenu
      id="menu-appbar"
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      onClose={handleClose}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleClose}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </StyledMenu>
  );
};

const Header = ({username,avatar}) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display="flex" alignItems="center" flex="1">
            <StyledIconButton color="inherit">
              <ArrowBackIcon />
            </StyledIconButton>

            <Box display="flex" flexDirection="column" sx={{ ml: 1 }}>
              <Box display="flex" alignItems="center">
                <Typography variant="body" fontSize={16} sx={{ mr: 1 }}>
                  Media management
                </Typography>
                <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="body" fontSize={14} color="lightGrey">
                  Draft campaign
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <UserProfile username={username}/>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <StyledAvatar
                  alt="Remy Sharp"
                  src={avatar}
                />
              </IconButton>
            </Tooltip>
            <UserSettingsMenu
              settings={["Profile", "Account", "Dashboard", "Logout"]}
              handleClose={handleCloseUserMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
