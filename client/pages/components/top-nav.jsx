import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

export default function TopNav(props) {
  return (
    <>
    <Grid container>
      <Grid item scale={8}>
        <Typography varient='h1'>
          <span className="iconify" data-icon="map:gym"></span>
          GYM BUDDIE
        </Typography>
      </Grid>
      <Grid item scale={2}>
        <Button>
          <span className="iconify" data-icon="bx:bx-barcode-reader"></span>
        </Button>
      </Grid>
      <Grid item scale={2} >
        <Button>
          <span className="iconify" data-icon="cil:hamburger-menu"></span>
        </Button>
      </Grid>
    </Grid>
    </>
  );
}
