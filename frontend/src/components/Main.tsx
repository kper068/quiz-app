import { Paper } from "@mui/material";
import React from "react";

interface FullPageTemplateProps {
  children: React.ReactNode;
}

export default function FullPageTemplate(props: FullPageTemplateProps) {
  return (
    <main>
      <Paper
        elevation={3}
        sx={{
          width: "80vw",
        }}
      >
        {props.children}
      </Paper>
    </main>
  );
}
