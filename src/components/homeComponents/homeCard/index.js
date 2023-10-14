import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Tooltip,
  CardActions,
  Button,
  Avatar,
  CardMedia,
} from "@mui/material";
import { ArrowRightSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import defImg from '../../../assets/icons/no_img.png'

export default function HomeCard({
  tooltipText,
  iconSrc,
  title,
  subtitle,
  mediaSrc,
  content,
  navLink,
}) {

  return (
    <>
      <Card raised style={{ height: "380px", minWidth: '320px', maxWidth: '320px' , margin: "15px 0px", position: 'relative' }}>
        <CardHeader
          avatar={
            <Tooltip arrow title={tooltipText}>
              <Avatar alt={"techStack-icon"} src={iconSrc} />
            </Tooltip>
          }
          title={title}
          subheader={subtitle}
        />
        <CardMedia
          style={{ height: "150px", backgroundSize: "contain" }}
          role={"img"}
          image={mediaSrc || defImg}
        />
        <CardContent>
          <Typography variant={"caption"} color={"textSecondary"}>
            {content}
          </Typography>
        </CardContent>
        <CardActions sx={{ position: "absolute", right: '5px', bottom: '5px' }} >
          <Link target={"_blank"} style={{textDecoration: "none"}} to={{ pathname: navLink }}>
            <Button
              endIcon={<ArrowRightSharp />}
              variant={"contained"}
              size="small"
              color={"primary"}>
              {"View Project"}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
