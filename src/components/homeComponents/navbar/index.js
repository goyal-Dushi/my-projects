import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";


function HomeNavbar() {

  return (
    <>
      <AppBar position="static" style={{ color: "#ffffff" }}>
        <Container maxWidth={"lg"}>
          <Toolbar style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0" }}>
            <Typography variant={"h5"}>{"Projects"}</Typography>
            <IconButton
              target={"_blank"}
              rel={"noreferrer noopener"}
              href={"https://github.com/goyal-Dushi/my-projects"}
              edge={"end"}
              aria-label={"github"}>
              <GitHubIcon fontSize={"large"} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default HomeNavbar;
