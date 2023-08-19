"use client";
import useFetchapi from "@/hooks/user/useFetchapi";
import { Grid, Card, CardContent, Paper, Button } from "@mui/material";
import Link from "next/link";

const Page = () => {
  const { member } = useFetchapi("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <Paper>
        <Grid container spacing={2}>
          {/* lg = fullhd md = tablet || ipad {sm sx} = mobile */}
          {member?.map((value, index) => {
            return (
              <Grid item lg={4} key={index}>
                <Card style={{ backgroundColor: "Highlight" }}>
                  <CardContent>
                    <p>{value.title}</p>
                    <p>{value.userId}</p>
                    <Link href={`/user/${value.id}`}>
                      <Button variant="outlined" color="primary">
                        ดูข้อมูล
                      </Button>
                    </Link>
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

export default Page;
