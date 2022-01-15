import {
  Container,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  flexCenterBtw: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
});

function HomeNavbar() {
  const classes = useStyles();
  return (
    <AppBar style={{ color: "#ffffff" }} position={"sticky"}>
      <Container maxWidth={"lg"}>
        <Toolbar className={classes.flexCenterBtw}>
          <Typography variant={"h5"}>{"My Projects"}</Typography>
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
  );
}

export default HomeNavbar;
