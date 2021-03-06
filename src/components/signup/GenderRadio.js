import React from "react";
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  radioField: {
    borderRadius: 3,
    border: 0,
  },
});

const GenderRadio = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row aria-label="gender" name="gender" onChange={onChange}>
        <FormControlLabel
          value="female"
          control={
            <Radio
              size="small"
              style={{
                color: "#c19393",
              }}
            />
          }
          label="Female"
          labelPlacement="bottom"
          className={classes.radioField}
        />
        <FormControlLabel
          value="male"
          control={
            <Radio
              size="small"
              style={{
                color: "#c19393",
              }}
            />
          }
          label="Male"
          labelPlacement="bottom"
          className={classes.radioField}
        />
      </RadioGroup>
    </FormControl>
  );
};
export default GenderRadio;
