import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { ListItemText } from "@mui/material";

export default function FormSelect({ value, list, handleChange }) {
  return (
    <div>
      <FormControl
        className="w-full"
        sx={{
          ".MuiOutlinedInput-notchedOutline": {
            borderStyle: "none",
          },
        }}
      >
        <Select
          className="!rounded-xl bg-[#EFF1F6] border-[#EFF1F6] !text-sm"
          sx={{ "& .MuiSelect-outlined": { padding: "14px 16px" } }}
          multiple
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={() => value.join(", ")}
        >
          {list.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox
                checked={value.indexOf(name) > -1}
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
              <ListItemText className="font-semibold text-sm text-[#131316]">
                {name}
              </ListItemText>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
