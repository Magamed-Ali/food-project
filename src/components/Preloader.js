import React from 'react';
import {Box, LinearProgress} from "@mui/material";


function Preloader(props) {
    return (
        <div>
            <Box sx={{width: '100%'}}>
                <LinearProgress />
            </Box>
        </div>
    );
}

export default Preloader;