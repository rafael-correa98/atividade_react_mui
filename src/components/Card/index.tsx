import { Box, Typography } from "@mui/material"


type CardProprs ={
    children: string
    titulo: string
}

export default function Card (props: CardProprs){
    return(
       <>
        <Box sx={{
            padding: '10%'
        }}>
            <Typography variant="h4" >{props.titulo}</Typography>
            <Typography variant="body1" >
                {props.children}
            </Typography>
        </Box>
       </> 
    )
}