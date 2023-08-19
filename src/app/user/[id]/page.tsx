"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Paper } from "@mui/material";

import useFetchuser from "@/hooks/user/useFetchuser";

const Page = () => {
  const { detail } = useFetchuser("https://jsonplaceholder.typicode.com/todos");

  return (
    <Paper>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.scrolller.com/pico/morning-run-tokidoki-bosotto-russia-go-de-dereru-ca8fsu5itv-1507x1080.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {detail.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {detail.completed ? (
            <Button size="small" color="primary">
              Share
            </Button>
          ) : (
            <Button size="small" color="error">
              Cancel
            </Button>
          )}
        </CardActions>
      </Card>
    </Paper>
  );
};

export default Page;
