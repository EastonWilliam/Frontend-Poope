import * as React from "react";

import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";


interface Props {
  tabs: string[];
}

export default function SelectTop({ tabs }: Props) {
  const [title, setTitle] = React.useState(tabs[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, width: "95%" }} size="small">
      <Select
        value={title}
        onChange={handleChange}
        sx={{
          background: "#ffd258 !important",
          width: "100%",
          height: 'auto',
          borderRadius: "100px !important",
          padding: "10px 8px 0px 8px",
          color: "#141414 !important",
        }}
      >
        {tabs.map((tab) => (
          <MenuItem value={tab} key={tab}>
            <Typography sx={{ fontSize: '24px !important', textAlign: 'center !important' }}>{tab}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
