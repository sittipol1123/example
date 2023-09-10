"use client";
import useFetchapi from "@/hooks/user/useFetchapi";
import {
  Grid,
  Card,
  CardContent,
  Paper,
  Button,
  Skeleton,
} from "@mui/material";
import Link from "next/link";
import UserCard from "@/component/user/UserCard";
import UserChildren from "@/component/user/UserChildren";

const Page = () => {
  const { member, loading } = useFetchapi(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <>
      <Paper>
        <Grid container spacing={2}>
          {/* lg = fullhd md = tablet || ipad {sm sx} = mobile */}
          {member?.map((value, index) => {
            return (
              <Grid item lg={4} key={index}>
                {loading ? (
                  <Skeleton />
                ) : (
                  <UserCard
                    title="เบ้นหรอง"
                    content={value.title}
                    userid={value.id}
                    imgsrc={`https://images.scrolller.com/pico/morning-run-tokidoki-bosotto-russia-go-de-dereru-ca8fsu5itv-1507x1080.jpg`}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
};

export default Page;
