import '../../assets/stylesheets/components/_cards.scss';
import Card from './Card';

export default function CardHolder({cardData}){
    if(cardData.isPending){
        return( <div className='card'>Loading...</div>)
    }
    if(cardData.isError){
        return( <div className='card'>Error: {cardData.error.message}</div>)
    }
    return(
        <div className='card'>
            <Card cardData={cardData.data}/>
        </div>
    )
}