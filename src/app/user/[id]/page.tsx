"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";
import { Button, CardActionArea, CardActions, Paper } from "@mui/material";

import useFetchuser from "@/hooks/user/useFetchuser";

const Showuser = () => {
  const { detail, loading } = useFetchuser(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <Paper>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {loading ? (
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image="https://static.wikia.nocookie.net/roshidere/images/b/bf/Alisa_Mikhailovna_Kujo_Bio.png"
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              title
            </Typography>
            {loading ? (
              <Skeleton />
            ) : (
              <Typography variant="body2" color="text.secondary">
                {detail.title}
              </Typography>
            )}
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

export default Showuser;
