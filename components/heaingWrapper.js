/* eslint-disable import/newline-after-import */
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// HeadingWrapper component for content type selection
export default function HeadingWrapper({ title, subTitle }) {
  return (
    // Grid container for the heading wrapper
    <Grid
      container
      item
      sx={{ mt: 5, borderBottom: "0.5px solid #616066", pb: 2 }}
    >
      {/* Box for content type heading and description */}
      <Box>
        <Typography color="white" variant="h5">
          {title}
        </Typography>
        <Typography color="white" variant="body2">
          {subTitle}
        </Typography>
      </Box>
    </Grid>
  );
}
