import React, { useEffect } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { homeCardData } from "../../data";
import HomeCard from "../../components/homeComponents/homeCard";
import Footer from "../../components/homeComponents/footer";
import HomeNavbar from "../../components/homeComponents/navbar";

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

  useEffect(() => {
    document.title = "My Projects:DG";
  }, []);

  return (
    <>
      <HomeNavbar />
      <Container
        maxWidth={"lg"}
        style={{ paddingBottom: "30px", position: "relative" }}>
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
      <Footer />
    </>
  );
}
