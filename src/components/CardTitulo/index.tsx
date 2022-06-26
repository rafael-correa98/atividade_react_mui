import { Box, Typography } from "@mui/material"

type CardTituloProps = {
    children: string,
}

export default function CardTitulo(props: CardTituloProps){
    return(
        <>
            <Box sx={{
                color: "white"
            }}>
                <Typography>{props.children}</Typography>
            </Box>
        </>
    )
}