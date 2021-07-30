import React from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import { homeCardData } from "../../data";
import HomeCard from "../../components/homeComponents/homeCard";

const useStyles = makeStyles({
  flexWrapCenterEven: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default function HomePage() {
  const classes = useStyles();
  return (
    <Container maxWidth={"lg"} style={{ padding: "30px 10px" }}>
      <Typography
        align={"center"}
        gutterBottom
        variant={"h2"}
        color={"textPrimary"}>
        {"My Projects"}
      </Typography>
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
  );
}
