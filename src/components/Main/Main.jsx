import React from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './styles';
const Main = () => {
    const classes = useStyles;
    return (
        <Card className={classes.root}>
            <CardHeader title="ExpenseBea" subtitle="Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance-₹1000
                </Typography>    
                <Typography variant="subtitle" style={{lineHeight: '1.5em', marginTop:'20px' }}> Add Income of ₹500 in Category Sales for next Monday
                </Typography>
                <Divider>

                </Divider>
                
            </CardContent>   
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}></Grid>
                    <Grid item xs={12}>
                        
                    </Grid>
            </CardContent>
        </Card>
    )
}
export default Main
