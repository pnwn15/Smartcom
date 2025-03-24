import React from 'react';
import { Grid, } from '@mui/material';
import FormProduct from '../components/FormProduct';



const Addproduct = () => {


    return (
        <Grid container spacing={0} direction="column">
            <Grid item xs={12} sx={{ border: 'none', marginTop: '7%', marginBottom: '2%' }}>
                <div className=''>
                    <FormProduct />
                </div>
            </Grid>
    
        </Grid>
    );
};

export default Addproduct;
