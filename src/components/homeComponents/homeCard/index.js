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
    width: "380px",
    height: "380px",
    margin: "15px 3px",
    position: "relative"
  },
  actionSection: {
    position: "absolute",
    right: "5px",
    bottom: "5px",
  }
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
          style={{ height: "150px" }}
          role={"img"}
          image={mediaSrc}
        />
        <CardContent>
          <Typography variant={"subtitle2"} color={"textSecondary"}>
            {content}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionSection}>
          <Link target={"_blank"} style={{textDecoration: "none"}} to={{ pathname: navLink }}>
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
