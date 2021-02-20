import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

function FormInput({ name, label }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        name={name}
        defaultValue=""
        control={control}
        label={label}
        fullWidth
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;
