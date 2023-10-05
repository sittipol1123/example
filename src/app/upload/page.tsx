"use client";
import { Paper, Grid, Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";

interface Data {
  id: number;
  media_name: string;
  created_at: Date;
  updated_at: Date;
}

const Uploads = () => {
  const [vdo, setVdo] = useState<Data[] | []>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4444/upload")
      .then((response) => response.json())
      .then((result) => setVdo(result));
  }, []);

  return (
    <>
      <Paper>
        <Grid container spacing={2}>
          {vdo.map((val, key) => {
            return (
              <Grid key={key} item sm={3}>
                <Card>
                  <CardContent>
                    <video width={400} height={300} controls={true}>
                      <source
                        src={`http://127.0.0.1:4444/upload/${val.media_name}`}
                        type="video/mp4"
                      ></source>
                    </video>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
};

export default Uploads;
