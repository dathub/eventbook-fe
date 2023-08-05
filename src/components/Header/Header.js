import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import profileimage from "static/images/profileimage.jpg";
import { AppTitle, PageInfo } from "appConstants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//For different views
//Looged in / Logout out -- Web / Mobile

const PageLinksMenuView = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const handleNavigation = (event, route) => {
    handleCloseNavMenu();
    navigate(route);
    console.log("Navigate rqst:" + route);
  };

  return (
    <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {PageInfo.map((page) => {
          if (page.menuItem === true) {
            return (
              <MenuItem
                key={page.id}
                onClick={(event) => handleNavigation(event, page.route)}
              >
                <Typography textAlign="center">{page.label}</Typography>
              </MenuItem>
            );
          } else {
            return [];
          }
        })}
      </Menu>
    </Box>
  );
};

const PageLinksRowView = () => {
  const navigate = useNavigate();
  const handleNavigation = (event, route) => {
    navigate(route);
    console.log("Navigate rqst:" + route);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {PageInfo.map((page) => {
        if (page.appBarItem === true) {
          return (
            <Button
              key={page.id}
              onClick={(event) => handleNavigation(event, page.route)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page.label}
            </Button>
          );
        } else {
          return null;
        }
      })}
    </Box>
  );
};

const UserLoginLogoutView = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onLoginBtnClick = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    handleMenuClose();
    setLoggedIn(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  if (loggedIn) {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleProfileMenuOpen} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={profileimage} />
        </IconButton>
        {renderMenu}
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Button color="inherit" onClick={onLoginBtnClick}>
          Login
        </Button>
      </Box>
    );
  }
};

const Logo = ({ sxprops }) => {
  const sxpropsDefault = {
    color: "#507BEA",
    backgroundColor: "#CDE6F4",
    "&:hover": { backgroundColor: "#CDE6F4" },
    borderRadius: 0,
  };
  const sxpropsMerged = { ...sxpropsDefault, ...sxprops };
  return (
    <IconButton size="large" variant="contained" sx={{ ...sxpropsMerged }}>
      <AutoStoriesIcon />
      <Typography sx={{ paddingLeft: 1 }}>{AppTitle}</Typography>
    </IconButton>
  );
};

const MobileHeader = () => {
  return (
    <Toolbar
      disableGutters
      sx={{
        display: { xs: "flex", md: "none" },
        justifyContent: { xs: "space-between", md: "none" },
      }}
    >
      <PageLinksMenuView />
      <Logo sxprops={{ justifyContent: "center" }} />
      <UserLoginLogoutView />
    </Toolbar>
  );
};

const WebHeader = () => {
  return (
    <Toolbar disableGutters sx={{ display: { xs: "none", md: "flex" } }}>
      <Logo sxprops={{ flexGrow: 0 }} />
      <PageLinksRowView />
      <UserLoginLogoutView />
    </Toolbar>
  );
};

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <MobileHeader />
        <WebHeader />
      </Container>
    </AppBar>
  );
};

export default Header;
