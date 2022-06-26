type CardsImageProps ={
    imageSrc: string
    imageAlt: string
}

export default function CardImage(props: CardsImageProps){
    return(
        <>
            <img style={{width: '100%', height: '400px', objectFit: 'cover'}} src={props.imageSrc} alt={props.imageAlt}/>
        </>
    )
}