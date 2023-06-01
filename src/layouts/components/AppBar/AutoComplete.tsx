import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";

const AutoComplete = () => {
  return (
    <OutlinedInput
      fullWidth
      placeholder="Tìm kiếm"
      size="small"
      sx={{
        borderRadius: 10,
      }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton edge="end">
            <Search />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default AutoComplete;
