import { Box, Card, CardContent, Input, InputAdornment, TextField, Typography } from '@mui/material';
import * as React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const Login: React.FC <{}> = ({



}) => {







return(
    <Card sx={{ maxWidth: 345 }}>
       <CardContent>
        <Typography>Login</Typography>
       
            <TextField 
                variant='filled'
                placeholder="Email Address" 
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <EmailIcon />
                        </InputAdornment>
                    )
                
            }}
            />
            <TextField 
                variant='filled'
                placeholder="Password" 
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <NewReleasesIcon />
                        </InputAdornment>
                    )
                
            }}
            />
       
          </CardContent>
    </Card>
)


}

export default Login;