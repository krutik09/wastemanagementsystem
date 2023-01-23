import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import './Gridform.css'
import { MenuItem, Select, OutlinedInput, InputAdornment } from '@mui/material';
import { InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';
export default class Gridform extends Component {
    handleChange = (event) => {
        console.log("changed");
    }
    render() {
        return (
            <div>

                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        className="giveback"
                    >
                        <h2 class='text-center my-2' style={{ fontFamily: "bolabong", fontWeight: "bold", color: "#B0E0E6" }}>What it takes to reach you?</h2>
                        <ol class="list-group list-group-numbered mx-2 " >
                            <li class="list-group-item bg-transparent my-4" style={{ color: "white", fontFamily: "bolabong", fontWeight: "bold" }}>We fetched data from your form</li>
                            <li class="list-group-item bg-transparent  my-4" style={{ color: "white", fontFamily: "bolabong", fontWeight: "bold" }}>Your order will be verified by Administrator</li>
                            <li class="list-group-item bg-transparent  my-4" style={{ color: "white", fontFamily: "bolabong", fontWeight: "bold" }}>If verified then worker will be at your doorstep on your prefered date and time</li>
                            <li class="list-group-item bg-transparent  my-4" style={{ color: "white", fontFamily: "bolabong", fontWeight: "bold" }}>If not verified It will be rejected and you will be given the reason</li>
                        </ol>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundColor: "transparent" }} >
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Place your waste order
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>

                                <InputLabel id="demo-simple-select-label" >Type of waste</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Type of waste"
                                    fullWidth
                                >
                                    <MenuItem value="ow">Orgaic waste</MenuItem>
                                    <MenuItem value="hw">Hazardous waste</MenuItem>
                                    <MenuItem value="sw">Solid waste</MenuItem>
                                    <MenuItem value="lw">Liquid waste</MenuItem>
                                    <MenuItem value="rw">Recyclable waste</MenuItem>
                                </Select>



                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    fullWidth
                                    startAdornment={<InputAdornment position="start">kg</InputAdornment>}
                                    label="Amount of waste"
                                />
                                <InputLabel htmlFor="outlined-adornment-amount">Describe your waste</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    fullWidth
                                    label="here"
                                    multiline
                                />
                                <br></br>
                                    <br></br>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                        label="Date desktop"
                                        inputFormat="MM/DD/YYYY"
                                        sx={{ mt: 3 }}
                                        renderInput={(params) => <TextField {...params} />}
                                        fullWidth
                                    />
                                    <br></br>
                                    <br></br>
                                    <TimePicker
                                        label="Time"
                                        sx={{ mt: 3 }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                   place order
                                </Button>
                                
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
