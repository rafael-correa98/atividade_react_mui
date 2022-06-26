import { Box, Typography } from "@mui/material";
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

type CardIconesProps={
    children: string
    titulo: string
}

export default function Icones(props: CardIconesProps){
    return(
        <>
            <Box>
                <DesktopWindowsIcon/>
                <Typography variant="h6" >{props.titulo}</Typography>
                <Typography variant="body1" >
                    {props.children}
                </Typography>
            </Box>
        </>
    )
}