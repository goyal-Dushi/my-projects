import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { homeCardData } from "../../data";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeCard from "../../components/homeComponents/homeCard";

const useStyles = makeStyles({
  flexWrapCenterEven: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  flexCenterBtw: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default function HomePage() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "My Projects:DG";
  }, []);

  return (
    <>
      <AppBar position={"sticky"}>
        <Container maxWidth={"lg"}>
          <Toolbar className={classes.flexCenterBtw}>
            <Typography gutterBottom variant={"h5"} color={"textPrimary"}>
              {"My Projects"}
            </Typography>
            <IconButton
              target={"_blank"}
              href={"https://github.com/goyal-Dushi/my-projects"}
              edge={"end"}
              aria-label={"github"}>
              <GitHubIcon fontSize={"large"} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth={"lg"} style={{ paddingBottom: "30px" }}>
        <Box className={classes.flexWrapCenterEven} width={"100%"}>
          {homeCardData.map((item) => (
            <HomeCard
              key={item.id}
              iconSrc={item.avatarSrc}
              title={item.heading}
              subtitle={item.date}
              mediaSrc={item.imgSrc}
              content={item.subheading}
              navLink={item.linkTo}
            />
          ))}
        </Box>
      </Container>
    </>
  );
}
