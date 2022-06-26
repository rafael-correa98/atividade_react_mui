import { Box, Grid } from "@mui/material";
import Card from "../../components/Card";
import CardImage from "../../components/CardImage";
import CardTitulo from "../../components/CardTitulo";
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import CardFooter from "../../components/CardFooter";

export default function Landing(){
    return(
        <>  
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{
                        height: '320px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'url(https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdhbWV8ZW58MHx8MHx8&w=1000&q=80)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: 'cover',
                    }}>
                        <CardTitulo>
                            Minha primeira página com React.
                        </CardTitulo>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <DesktopWindowsIcon color="primary" sx={{fontSize: '80px'}}/>
                    <Card titulo={"Somente para desktop"}>
                        Vamos aprender, como utilizar um framework.
                    </Card>
                </Grid>
                <Grid item xs={4} sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <AutoAwesomeMotionIcon color="primary" sx={{fontSize: '80px'}}/>
                    <Card titulo={"Criado com componentes"}>
                        Utilizamos o Styled Components.
                    </Card>
                </Grid>
                <Grid item xs={4} sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <CheckCircleOutlineIcon color="primary" sx={{fontSize: '80px'}}/>
                    <Card titulo={"Facíl aproveitamento"}>
                        Estamos no caminho.
                    </Card>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={6}>
                    <Card titulo={"Mussum Ipsum"}>
                        Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.
                        Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mé faiz elementum girarzis,
                        nisi eros vermeio.Atirei o pau no gatis, per gatis num morreus.
                        In elementis mé pra quem é amistosis quis leo.Detraxit consequat et quo num tendi nada.Pra lá ,
                        depois divoltis porris, paradis.Sapien in monti palavris qui num significa nadis i pareci latim.
                    </Card>                   
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <CardImage imageSrc={"https://tm.ibxk.com.br/2021/05/03/03095818181052.jpg"} imageAlt={"Chrono Trigger"}/>
                    </Box>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={6}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <CardImage imageSrc={"https://img.olhardigital.com.br/wp-content/uploads/2022/01/The_Last_of_Us_2_final_diferente_rR6m3Xo.jpg"} imageAlt={"The Last Of Us 2"}/>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Card titulo={"Mussum Ipsum"}>
                        Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.
                        Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mé faiz elementum girarzis,
                        nisi eros vermeio.Atirei o pau no gatis, per gatis num morreus.
                        In elementis mé pra quem é amistosis quis leo.Detraxit consequat et quo num tendi nada.Pra lá ,
                        depois divoltis porris, paradis.Sapien in monti palavris qui num significa nadis i pareci latim.
                    </Card>                   
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={6}>
                    <Card titulo={"Mussum Ipsum"}>
                        Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.
                        Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mé faiz elementum girarzis,
                        nisi eros vermeio.Atirei o pau no gatis, per gatis num morreus.
                        In elementis mé pra quem é amistosis quis leo.Detraxit consequat et quo num tendi nada.Pra lá ,
                        depois divoltis porris, paradis.Sapien in monti palavris qui num significa nadis i pareci latim.
                    </Card>                   
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <CardImage imageSrc={"https://assets.xboxservices.com/assets/0a/74/0a743e0d-4c9d-48c0-9ec9-d9906cb5957a.jpg?n=Apex-Legends_Gallery-0_1350x759_41.jpg"} imageAlt={"Apex Legends"}/>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{
                        height: '160px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                                                background: 'url(https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdhbWV8ZW58MHx8MHx8&w=1000&q=80)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: 'cover',
                    }}>
                        <CardTitulo>
                            Contato
                        </CardTitulo>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <CardFooter/>
                </Grid>
            </Grid>
        </>
    )
}