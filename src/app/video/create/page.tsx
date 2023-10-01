"use client";
import React from "react";
import { useState } from "react";
import { Paper, Button, Grid } from "@mui/material";

export default function page() {
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);
      const res = await fetch("http://127.0.0.1:4444/video", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (e: any) {
      console.error(e);
    }
  };
  return (
    <Paper>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile(e.target.files?.[0])}
        />
        <input type="submit" value="Upload" />
      </form>
    </Paper>
  );
}
