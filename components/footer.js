/* eslint-disable import/newline-after-import */
import React from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

// RangeSlider component
const RangeSlider = () => {
  // Access theme and media query hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      justifyContent="space-between"
      sx={{
        color: "white",
        backgroundColor: theme.palette.secondary.main,
        px: 4,
        py: 3,
        borderTop: "0.5px solid #616066",
      }}
    >
      {/* Back button section */}
      <Box sx={{ flex: 1, marginBottom: isMobile ? 2 : 0 }}>
        <Button
          color="info"
          variant="outlined"
          sx={{
            borderRadius: 5,
            color: "white",
            width: isMobile ? "100%" : "auto",
          }}
        >
          Back
        </Button>
      </Box>

      {/* Next button section */}
      <Box sx={{ flex: 0 }}>
        <Button
          color="primary"
          variant="contained"
          endIcon={
            !isMobile && (
              <KeyboardDoubleArrowRightIcon style={{ marginLeft: 40 }} />
            )
          }
          sx={{
            borderRadius: 5,
            backgroundColor: "white",
            color: "#523FD7",
            width: isMobile ? "100%" : "auto",
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default RangeSlider;
