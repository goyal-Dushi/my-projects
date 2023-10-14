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
    <AppBar style={{ color: "#ffffff" }} position={"fixed"}>
      <Container maxWidth={"lg"}>
        <Toolbar style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
    <div style={{ height: '100px' }}> </div>
    </>
  );
}

export default HomeNavbar;
