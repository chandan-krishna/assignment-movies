import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const MenuBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Assignment
          </Typography>
          <Button color="inherit">Login</Button>
          <Link to="/company-info">Company Info</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuBar;
