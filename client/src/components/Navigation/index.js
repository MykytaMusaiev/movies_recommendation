import {useState} from "react";
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link as RouterLink} from "react-router-dom";
import {LangPanel} from "../index"
import {FormattedMessage} from "react-intl";


const Navigation = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"
        >
            <List>

                <Link component={RouterLink} to="/">
                    <ListItem key={"1"} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link component={RouterLink} to="/settings">
                    <ListItem key={"2"} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>

            <Divider/>
        </Box>
    );

    return (

        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={() => setDrawerOpen(true)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2, display: {xs: 'block', md: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Link component={RouterLink} to="/">
                        <Typography variant="h6" component="div" sx={{flexGrow: 1, color: "white"}}>
                            <FormattedMessage id="moviesRec"/>
                        </Typography>
                    </Link>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'end'}}>


                        <LangPanel/>

                        <Button
                            component={RouterLink}
                            to="settings"
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            <FormattedMessage id="settingsTitle"/>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                {list()}
            </Drawer>
        </Box>
    );
}

export default Navigation;
