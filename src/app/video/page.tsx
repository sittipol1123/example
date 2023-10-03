"use client";
import React from "react";

export default function page() {
  return (
    <div>
      <video width={1000} height={500} controls={true}>
        <source src='http://127.0.0.1:4444/test/file-1696171552075.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
