import { Link, useNavigate, useParams } from "react-router";
import MainLayout from "../layouts/MainLayout";
import useFetchCard from "../hooks/Api/useFetchCard";
import CardHolder from "../Components/CardHolder";
import Button from "../Components/UI/Button";
import useDeleteCard from "../hooks/Api/useDeleteCard";
import { useEffect } from "react";

export default function ViewCardPage(){
    const params = useParams();
    const card= useFetchCard(params.cardId);
    const nav = useNavigate();

    const {mutateAsync: deleteCard, isSuccess, isIdle} = useDeleteCard();
    useEffect(() => {
        if(isSuccess){
            //TODO: Toast card successfully deleted
            nav("/cards");
        }
    }, [isSuccess])

    return(
        <MainLayout>
            <div className="top-bar"><Link to="/cards">&larr; Back to Cards</Link></div>
            <div className="action-bar">
                <Button text="Edit" classList={"btn-cancel"} />
                <Button text="Delete"
                    classList="btn-danger" 
                    handleClick={() => {deleteCard(params.cardId)}}
                />
            </div>
            <div className="card-section">
                <CardHolder cardData={card} />
            </div>
        </MainLayout>
    )
}