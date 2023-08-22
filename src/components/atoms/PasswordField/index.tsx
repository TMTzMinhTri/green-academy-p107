import { FC, forwardRef } from 'react';
import { useDisclosure } from '@/hooks/useDisclosure';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const PasswordField: FC<TextFieldProps> = forwardRef((props, ref) => {
  const { isOpen, toggle } = useDisclosure();

  return (
    <TextField
      {...props}
      ref={ref}
      fullWidth
      type={isOpen ? 'text' : 'password'}
      autoComplete="current-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggle}
              edge="end"
            >
              {!isOpen ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
});

export default PasswordField;
