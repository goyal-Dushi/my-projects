import React, { useEffect, useRef, useState } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HomeCard from "../homeCard";
import './index.scss';

export default function HomeCarousel(props) {
  const { data, title } = props;
  const carouselContainer = useRef();
  const carouselBox = useRef();
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const carouselBoxScrollLen = carouselBox.current?.scrollWidth;
    const carouselContainerWidth = carouselContainer.current?.offsetWidth;

    if(carouselBoxScrollLen > carouselContainerWidth){
      setIsOverflow(true);
    }
  }, [carouselBox.current, carouselContainer.current]);

  const handleRightNavClick = () => {
    carouselBox.current.scrollLeft += 280;
  }

  const handleLeftNavClick = () => {
    carouselBox.current.scrollLeft -= 280;
  }

  return (
    <>
      <Container
        ref={carouselContainer}
        maxWidth={"lg"}
        className="home-carousel-container">
            {title && (
                <Typography variant="h5" >
                {title}
            </Typography>
            )}
            
          {isOverflow && (
            <IconButton onClick={handleLeftNavClick} aria-label="left-navigation" centerRipple className="nav-btn nav-btn-left" >
            <ArrowCircleLeftIcon fontSize="large" />
        </IconButton>
          )}
          <Box sx={{ padding: !isOverflow ? "0px" : "0px 40px" }} ref={carouselBox} className="cards-container">      
                {data.map((card) => {
                  return(
                    <HomeCard key={`card-${card.id}`} content={card.subheading} iconSrc={card.avatarSrc} title={card.heading} mediaSrc={card.imgSrc} navLink={card.linkTo} tooltipText={card.tooltipText} subtitle={card.date} />
                  )
                })}
          </Box>
          {isOverflow && (
            <IconButton onClick={handleRightNavClick} aria-label="right-navigation" centerRipple className="nav-btn nav-btn-right" >
            <ArrowCircleRightIcon fontSize="large" />
        </IconButton>
          )}
      </Container>
    </>
  );
}
