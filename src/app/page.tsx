"use client";
import Link from "next/link";
import { Button, TextField, Paper } from "@mui/material";
import useAlert from "@/hooks/Alert";

export default function Home() {
  const { message, handlemessage } = useAlert("www.google.com");

  return (
    <Paper>
      <h1>in page</h1>
      <p>in state value is: {message}</p>
      <br />
      <a href="/user">กดเพื่อเปลี่ยนหน้า</a>
      <br />
      <Link href="/user">กดเพื่อเปลี่ยนหน้า v2</Link>
      <br />
      <Link href="/user/1">ทดสอบส่งค่า parameter</Link>
      <br />
      <Link href="/user">
        <Button variant="outlined" color="error">
          test
        </Button>
      </Link>
      <br />
      <TextField style={{ color: "#fff" }} onChange={handlemessage} value={message} />
    </Paper>
  );
}
