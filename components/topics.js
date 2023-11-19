import React, { useState } from "react";
import {
  Chip,
  TextField,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Topics = ({ topicList, topicTitle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedChip, setSelectedChip] = useState("Fun");
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownValues, setDropdownValues] = useState([
    "Board games revival",
    "Comedy trends",
    "Amusement parks",
    "Escape rooms",
    "Street performances",
    "Online challenges",
    "Festivals impact",
    "Crafting movement",
    "Social gaming",
    "Virtual reality",
  ]);

  const handleChipClick = (chipValue) => {
    setSelectedChip(chipValue);
    setDropdownValues(getDropdownValuesForChip(chipValue));
  };

  const getDropdownValuesForChip = (chipValue) => {
    const chipValueToDropdownValues = topicTitle;

    return chipValueToDropdownValues[chipValue] || [];
  };

  const handleDropdownChange = (event, value) => {
    setSelectedOption(value);
    // Implement your logic based on the selected dropdown value
    console.log("Selected Dropdown Value:", value);
  };

  return (
    <Box>
      <Typography color="white" gutterBottom variant="body1">
        What type of content are you creating?
      </Typography>
      <Box>
        {/* Render MUI Chips */}

        {topicList.map((val) => (
          <Chip
            key={val}
            style={{ margin: 5 }}
            color={selectedChip === val ? "primary" : "info"}
            label={val}
            onClick={() => handleChipClick(val)}
            variant={selectedChip === val ? "filled" : "outlined"}
          />
        ))}
      </Box>

      {selectedChip && (
        <Box sx={{ mt: 3 }}>
          <Typography color="white" gutterBottom variant="body1">
            {`Which type of "${selectedChip}" content do you want to create?`}
          </Typography>

          {/* Render autocomplete dropdown based on selected chip */}
          <Autocomplete
            value={selectedOption}
            onChange={handleDropdownChange}
            options={dropdownValues}
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select"
                inputProps={{ ...params.inputProps, style: { color: "white" } }}
                style={{
                  backgroundColor: "#3A39404D",
                  marginTop: 10,
                  maxWidth: isMobile ? "100%" : "60%",
                }}
                InputLabelProps={{ style: { color: "white" } }}
                endAdornment={<KeyboardArrowDownIcon />}
                sx={{
                  "& .MuiAutocomplete-endAdornment .MuiSvgIcon-root": {
                    color: "white",
                  },
                  ".MuiPaper-root": {
                    backgroundColor: "red ", // Set the background color here
                  },
                }}
              />
            )}
          />
        </Box>
      )}
    </Box>
  );
};

export default Topics;
