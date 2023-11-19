import React from "react";
import { Stack, Box, Typography,Grid ,useMediaQuery, useTheme} from "@mui/material";
import Slider from "@mui/material/Slider";

const DiscussionRange = ({min,max}) => {
     // Access theme and media query hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box  sx={{  pb: 3 , maxWidth: isMobile ? "100%" : '60%'}}>
      <Box>
        <Typography color="white" gutterBottom variant="body1" >
        What type of content are you creating?
      </Typography>
        </Box>  
      <Box
        sx={{
          backgroundColor: "black",
        //   width: "20%",
          paddingTop: 0.5,
          marginTop: 1,
          borderRadius: 1,
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1, px: 1 }}
          alignItems="center"
        >
          <Typography color="white" gutterBottom variant="body2">
            {min}
          </Typography>
          <Slider
            sx={{
              "& .MuiSlider-valueLabel": {
                background: "#523FD7",
              },
              // '& .MuiSlider-track': {
              //     color: "yellow"
              // },
              "& .MuiSlider-rail": {
                color: "#acc4e4",
              },

              // '& .MuiSlider-active': {
              //     color: "green"
              // }
            }}
            disabled={false}
            marks={false}
            max={max}
            min={min}
            size="medium"
            valueLabelDisplay="on"
          />
          <Typography color="white" gutterBottom variant="body2">
            {max}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default DiscussionRange;
