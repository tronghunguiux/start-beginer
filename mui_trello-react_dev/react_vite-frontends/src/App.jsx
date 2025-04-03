/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button'
import './App.css'
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { MenuItem, Select, Switch } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

function ToggleTheme() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (ev) =>{ setMode(ev.target.value) }
  return (
    <>
      <div>
        {mode}
      </div>
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

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  return (
  
    <>
      <ToggleTheme/>
      <div>prefersDarkMode: {prefersDarkMode.toString()}</div>
      <h1>React: NextJS</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
