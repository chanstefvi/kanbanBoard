import * as React from 'react';
import LinkMui from '@mui/material/Link';
import Typography from '@mui/material/Typography';



function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <LinkMui color="inherit" href="https://mui.com/">
          Your Website
        </LinkMui>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Copyright