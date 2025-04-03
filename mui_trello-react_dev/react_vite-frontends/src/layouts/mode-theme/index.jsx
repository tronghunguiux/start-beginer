/* eslint-disable no-undef */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useColorScheme } from '@mui/material/styles';

export default function ToggleTheme() {
    const { mode, setMode } = useColorScheme();
    const handleChange = (ev) =>{ setMode(ev.target.value) }
    return (
      <>
        {/* <div>
          {mode}
        </div> */}
        <FormControl  sx={{ m: 1, minWidth: 120 }} size='small'>
          <InputLabel id='label-select-dark-light-mode'> Theme </InputLabel>
          <Select
            defaultValue={30}
            labelId='label-select-dark-light-mode'
            id='demo-select-small'
            label='Mode'
            value={mode}
            onChange={handleChange}>
              <MenuItem value={'light'}>
                Light
              </MenuItem>
              <MenuItem value={'system'}>
                System
              </MenuItem>
              <MenuItem value={'dark'}>
                Dark
              </MenuItem>
          </Select>
        </FormControl>
      </>
    );
}