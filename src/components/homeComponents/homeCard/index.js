import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Tooltip,
  CardActions,
  Button,
  makeStyles,
  withStyles,
  Avatar,
  CardMedia,
} from "@material-ui/core";
import { ArrowRightSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  cardStyle: {
    maxWidth: "380px",
    maxHeight: "max-content",
    margin: "15px 3px",
  },
});

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#3f51b5",
    color: "#ffffff",
    fontSize: "20px",
    width: "fit-content",
  },
}))(Tooltip);

export default function HomeCard({
  tooltipText,
  iconSrc,
  title,
  subtitle,
  mediaSrc,
  content,
  navLink,
}) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.cardStyle} raised>
        <CardHeader
          avatar={
            <HtmlTooltip arrow title={tooltipText}>
              <Avatar alt={"techStack-icon"} src={iconSrc} />
            </HtmlTooltip>
          }
          title={title}
          subheader={subtitle}
        />
        <CardMedia
          style={{ height: "120px" }}
          component={"iframe"}
          role={"img"}
          allow={"autoPlay"}
          image={mediaSrc + "?autoplay=1&mute"}
        />
        <CardContent>
          <Typography variant={"subtitle2"} color={"textSecondary"}>
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Link target={"_blank"} to={{ pathname: navLink }}>
            <Button
              endIcon={<ArrowRightSharp />}
              variant={"contained"}
              color={"primary"}>
              {"View Project"}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
