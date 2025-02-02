import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { FC } from "react";
import { REQUIRED_FIELD } from "../../../constants/fieldsConstants";
import { IField } from "../../../interfaces/IField";

export const RadioFieldInput: FC<IField> = ({ name, label, options }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: REQUIRED_FIELD }}
      render={({ field }) => (
        <Box>
          <FormControl>
            <Typography variant="h5"> {label}</Typography>
            <RadioGroup name={name}>
              {options?.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option.value}
                  control={<Radio onChange={(e) => field.onChange(e)} />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      )}
    />
  );
};
