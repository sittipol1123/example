import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import Link from "next/link";

const UserCard = ({
  title,
  content,
  imgsrc,
  userid,
}: {
  title: String;
  content: String;
  imgsrc: any;
  userid: number;
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={imgsrc} component="img" height={300} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`user/${userid}`}>
          <Button size="small" color="primary">
            ดูข้อมูล
          </Button>
        </Link>
        <Button size="small" color="error">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
