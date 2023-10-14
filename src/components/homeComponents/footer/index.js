import { BottomNavigation, Typography, Link } from "@mui/material";
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import './index.scss';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <BottomNavigation color={"primary"} className="footer">
      <CopyrightSharpIcon fontSize="sm" />
      <Typography variant={"h6"}>
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
    </BottomNavigation>
  );
}

export default Footer;
