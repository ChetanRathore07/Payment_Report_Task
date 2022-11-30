import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  Avatar,
  Stack,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  Paper,
} from "@mui/material";
import {
  GridView as GridViewIcon,
  DonutSmall as DonutSmallIcon,
  MenuOpenOutlined as MenuOpenOutlinedIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
  AssessmentOutlined as AssessmentOutlinedIcon
} from "@mui/icons-material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import "./style.css";
import { report } from "util/constants";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type TBaseLayoutConfigProps = {
  children: JSX.Element;
};

export default function BaseLayout({ children }: TBaseLayoutConfigProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Box component="span" sx={{display: 'flex',flexWrap: 'wrap'}}>
            <Toolbar>
              <img src="./b-color.png" />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginLeft: "60%",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuOpenOutlinedIcon />
              </IconButton>
            </Toolbar>
            <Box  sx={{display: 'flex',flexWrap: 'wrap', marginLeft: 'auto', padding: '0.5% 2% 0 2%'}}>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: "#f6ca65",fontWeight:"700" }} variant="square">
                  JD
                </Avatar>
              </Stack>
              <Typography
                variant="h6"
                noWrap
                component="div"
                pt={'7px'}
                sx={{ paddingLeft: "1rem", fontWeight:700, fontSize: '1rem', color: '#005B96' }}
              >
                  John Doe
              </Typography>
            </Box>
          </Box>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <MenuOpenOutlinedIcon />
              ) : (
                <MenuOpenOutlinedIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? (
                    <PowerSettingsNewIcon />
                  ) : index === 1 ? (
                    <AssessmentOutlinedIcon />
                  ) : index === 2 ? (
                    <GridViewIcon />
                  ) : (
                    <DonutSmallIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
      <Paper sx={{ position: 'fixed',bottom: 0, MarginBottom: '0.7%',boxShadow:'none', left: '5%', color:'#005B96', fontWeight:'700' }} elevation={3}>
        {report.TERMS_CONDITIONS}
      </Paper>
    </>
  );
}
