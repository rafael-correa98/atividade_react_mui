import { Box, Typography } from "@mui/material"
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';





export default function CardFooter(){
    return(
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    paddingLeft: '32px'
                }}>
                    <Typography color="primary">
                        About - Contact - Terms of Use - Privacy Policy
                    </Typography>
                    <Typography>
                        <CopyrightIcon/> Your website 2020.All Right reserved.
                    </Typography>
                </Box>
                <Box sx={{
                    paddingRight: '32px'
                }}>
                    <FacebookRoundedIcon color="primary"/>
                    <TwitterIcon color="primary"/>
                    <InstagramIcon color="primary"/>
                </Box>
            </Box>
        </>
    )
}