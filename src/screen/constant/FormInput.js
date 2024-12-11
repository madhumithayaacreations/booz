import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Grid,
  InputLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { StyledTextField } from "../components/formStyles";

const StyledFormInput = ({
  disabled = false,
  fullWidth = false,
  label = "",
  placeholder = " ",
  size = "small",
  type = "text",
  className,
  labelClassName,
  spacing,
  inputProps = {},
  backgroundColor,
  hideCountButton = false,
  invertBorder = false,
  errors = {},
  errorTextClassName = "",
  hidden = false,
  control,
  name = "test",
  rules = {},
  readOnly = false,
  style,
  multipleLine = false,
  onClick,
  onFocus,
  defaultValue,
  handleCopy,
  handlePaste,
  handleCut,
  autocomplete,
  contentEditable,
  classNameFormGrid,
}) => {
  const { control: childControl } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Grid
      className={`form-input-container ${
        hidden && "hidden"
      } ${classNameFormGrid}`}
      container
      flexDirection="column"
      spacing={spacing}
    >
      <Grid item>
        <InputLabel variant="standard" className={`${labelClassName}`}>
          {label}
        </InputLabel>
      </Grid>
      <Grid item>
        <Controller
          name={name}
          control={control || childControl}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field: { value, onChange, onBlur, ...field } }) => (
            <StyledTextField
              style={style}
              multiline={multipleLine}
              className={`form-input w-100 ${className} ${
                hideCountButton ? "hide-count-button" : ""
              } ${invertBorder ? "invert-border" : "normal-border"} ${
                multipleLine ? "multiple-line" : ""
              }`}
              fullWidth={fullWidth}
              size={size}
              placeholder={placeholder}
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              InputProps={{
                ...inputProps,
                endAdornment: type === "password" && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                readOnly,
                onClick,
                onFocus,
                onCut: handleCut,
                onCopy: handleCopy,
                onPaste: handlePaste,
                autoComplete: autocomplete,
                contentEditable,
              }}
              disabled={disabled}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              error={!!errors?.[name]}
              sx={{
                backgroundColor: backgroundColor || "white",
              }}
            />
          )}
        />

        {errors?.[name]?.message && (
          <FormHelperText
            className={`error-text ${errorTextClassName}`}
            error={true}
            sx={{ color: "red" }} // Adjust color as needed
          >
            {errors?.[name]?.message}
          </FormHelperText>
        )}
      </Grid>
    </Grid>
  );
};

export default StyledFormInput;
