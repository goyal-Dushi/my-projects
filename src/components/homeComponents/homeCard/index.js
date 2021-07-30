import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Avatar,
  CardMedia,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  cardStyle: {
    maxWidth: "380px",
    maxHeight: "350px",
    margin: "15px 0px",
  },
});

export default function HomeCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.cardStyle} raised>
        <CardHeader
          avatar={<Avatar src={props.iconSrc} />}
          title={props.title}
          subheader={props.subtitle}
        />
        <CardMedia style={{ height: "120px" }} image={props.mediaSrc} />
        <CardContent>
          <Typography variant={"subtitle2"} color={"textSecondary"}>
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={{ pathname: props.navLink }}>
            <Button variant={"contained"} color={"primary"}>
              {"View Project"}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
