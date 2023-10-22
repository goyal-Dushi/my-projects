import { BottomNavigation, BottomNavigationAction, Typography, Link, AppBar } from "@mui/material";
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import './index.scss';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <AppBar position="fixed" color={"primary"} className="footer">
      <Typography variant={"h6"}>
      <CopyrightSharpIcon fontSize="small" />
        <Link
          rel={"noopener"}
          href={"http://dushyantgoyal.herokuapp.com/"}
          variant={"inherit"}
          sx={{ textDecoration: "none" }}
          color={"inherit"}>
          {"Dushyant Goyal"}
        </Link>
        {": " + date}
      </Typography>
    </AppBar>
  );
}

export default Footer;
