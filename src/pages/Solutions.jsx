import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from '../components/Carousel';


function Solutions() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 0,  // เอามุมกลมออก
    }));
  return (
      <Grid container spacing={1}>
              <Grid item xs={12}>
                  <Item sx={{ margin: 0 }}> {/* เพิ่ม margin 0 ให้กับ Item */}
                      <div className=""><Carousel /></div>
                  </Item>
              </Grid>
          <Grid item xs={4}>
              <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
              <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
              <Item>xs=8</Item>
          </Grid>
      </Grid>
  )
}

export default Solutions
