import { BottomNavigation, Typography, Link } from "@material-ui/core";
import { CopyrightSharp } from "@material-ui/icons";

const footerStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#3f51b5",
  color: "#ffffff",
  verticalAlign: "text-bottom",
};

function Footer() {
  const date = new Date().getFullYear();
  return (
    <BottomNavigation style={{ ...footerStyle }}>
      <Typography variant={"h6"}>
        <CopyrightSharp />{" "}
        <Link
          href={"http://dushyantgoyal.herokuapp.com/"}
          variant={"inherit"}
          color={"inherit"}>
          {"Dushyant Goyal"}
        </Link>
        {": " + date}
      </Typography>
    </BottomNavigation>
  );
}

export default Footer;
