import { BottomNavigation, Typography } from "@material-ui/core";
import { CopyrightSharp } from "@material-ui/icons";

const footerStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#3f51b5",
  color: "#ffffff",
};

function Footer() {
  const date = new Date().getFullYear();
  return (
    <BottomNavigation style={{ ...footerStyle }}>
      <Typography variant={"h6"}>
        <CopyrightSharp /> {"Dushyant Goyal : " + date}
      </Typography>
    </BottomNavigation>
  );
}

export default Footer;
