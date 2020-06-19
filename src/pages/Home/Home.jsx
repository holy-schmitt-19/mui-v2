import React from 'react';
import 'date-fns';
import {
  Button,
  Paper,
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  TextField,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import DeleteIcon from '@material-ui/icons/Delete';

export const Home = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Typography variant="h4" gutterBottom>
              Headings &#38; Text
            </Typography>
            <Typography variant="body1" gutterBottom>
              A sample of body text.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Typography variant="h4" gutterBottom>
              Buttons
            </Typography>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Button variant="contained">Contained</Button>
              <Button variant="contained" startIcon={<DeleteIcon />}>
                Start Icon
              </Button>
              <Button variant="contained" endIcon={<DeleteIcon />}>
                End Icon
              </Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Typography variant="h4" gutterBottom>
              Input Form
            </Typography>
            <FormGroup>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <FormControlLabel
                  control={
                    <Checkbox color="primary" checked={true} name="checkedA" />
                  }
                  label="Checked"
                />
                <FormControlLabel
                  control={
                    <Checkbox color="primary" checked={false} name="checkedA" />
                  }
                  label="Unchecked"
                />
                <FormControl component="fieldset">
                  <FormLabel component="legend">Options</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1">
                    <FormControlLabel
                      value="mediumRare"
                      control={<Radio />}
                      label="Medium Rare"
                    />
                    <FormControlLabel
                      value="medium"
                      control={<Radio />}
                      label="Medium"
                    />
                    <FormControlLabel
                      value="wellDone"
                      control={<Radio />}
                      label="Well Done"
                    />
                    <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="(Disabled option)"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControlLabel
                  control={
                    <Switch checked={true} name="checkedB" color="primary" />
                  }
                  label="Toggle"
                />
                <TextField label="Outlined" variant="outlined" />
              </Grid>
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Typography variant="h4" gutterBottom>
              Pickers &#38; Selects
            </Typography>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  Order Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={'Received'}
                  label="Order Status"
                >
                  <MenuItem value={'Recieved'}>Recieved</MenuItem>
                  <MenuItem value={'In Progress'}>In Progress</MenuItem>
                  <MenuItem value={'Completed'}>Completed</MenuItem>
                </Select>
              </FormControl>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Typography variant="h4" gutterBottom>
              Overlays
            </Typography>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            ></Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
