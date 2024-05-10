import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

const SearchBar: FC = () => {
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
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
