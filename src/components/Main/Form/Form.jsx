import React from 'react';
import useStyles from './styles';
import { TextField,Typography, Grid, Button, FormControl,Select, InputLabel, MenuItem } from '@material-ui/core';
const Form = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number"label="Amount" fullWidth/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date"label="Date" fullWidth/>
            </Grid>
            <Button className={classes.button} color="primary" variant="outlined" fullWidth>Create</Button>
        </Grid>
    )
}

export default Form
