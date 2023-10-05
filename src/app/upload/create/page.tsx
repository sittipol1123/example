"use client";
import { useState } from "react";
import { Paper, Grid, Card, CardContent, Button } from "@mui/material";

const Create = () => {
    const [data, setData] = useState<File>();

    const confirmupload = () => {
        if(!data) {
            console.log("file is null");
            return;
        }

        const frmdata = new FormData();
        frmdata.set("file", data);

        fetch("http://127.0.0.1:4444/upload", {
            method: "POST",
            body: frmdata
        }).then((response) => {
            if(response.ok){
                console.log("upload success");
            }else{
                console.log("upload is failed");
            }
        })

    }

  return (
    <>
      <Paper>
        <Grid container>
          <Grid item sm={12}>
            <Card>
              <CardContent>
                <form>
                    <input
                        type="file"
                        name="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setData(e.target.files?.[0]);
                        }}
                    />
                    <Button  variant="outlined" onClick={confirmupload}>เพิ่ม</Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Create;
