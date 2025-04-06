/* eslint-disable no-undef */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useColorScheme } from '@mui/material/styles';

export default function ToggleTheme() {
    const { mode, setMode } = useColorScheme();
    const handleChange = (ev) =>{ setMode(ev.target.value) }
    return (
      <>
        <FormControl size='small' sx={{minWidth: '120px'}}>
          <InputLabel id='label-select-dark-light-mode'
            sx={{
              color: 'white',
              '&.Mui-focused': {
                color: 'white',
              },
            }}> Theme </InputLabel>
          <Select
            defaultValue={30}
            labelId='label-select-dark-light-mode'
            id='demo-select-small'
            label='Mode'
            value={mode}
            onChange={handleChange}
            sx={{
              color: 'white',
              '& .MuiSelect-icon': {color: 'white',},
              '.MuiOutlinedInput-notchedOutline': { borderColor: 'white', },
              ':hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white', },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white', },
              '.MuiSvgIcon-root': { color: 'white', }
            }}>
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