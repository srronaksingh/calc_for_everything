import React from 'react';
import { Container, Typography } from '@mui/material';

function MainCubeRootAndSquareRootCalc(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Cube Root And Square Root Calculator</Typography>
            <hr/>
            <br/>
        </Container>
    )
}

export default MainCubeRootAndSquareRootCalc;