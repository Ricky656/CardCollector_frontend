import { Link, useNavigate, useParams } from "react-router";
import MainLayout from "../layouts/MainLayout";
import useFetchCard from "../hooks/Api/useFetchCard";
import CardHolder from "../Components/Cards/CardHolder";
import Button from "../Components/UI/Button";
import useDeleteCard from "../hooks/Api/useDeleteCard";
import { useEffect, useState } from "react";
import EditCard from "../Components/Cards/EditCard";

import "../assets/stylesheets/layouts/_cardsPage.scss";
import "../assets/stylesheets/layouts/_general.scss";
import { useToast } from "../hooks/useToast";
import { useAuthentication } from "../hooks/useAuthentication";

export default function ViewCardPage() {
    const [isEdit, setIsEdit] = useState(false);

    const params = useParams();
    const card = useFetchCard(params.cardId);
    const nav = useNavigate();
    const toast = useToast();
    const currentUser = useAuthentication().currentUser;

    const { mutateAsync: deleteCard, isSuccess } = useDeleteCard();
    useEffect(() => {
        if (isSuccess) {
            toast.open("Successfully deleted card!", "toast-success")
            nav("/cards");
        }
    }, [isSuccess])

    return (
        <MainLayout>
            <div className="top-bar"><Link to="/cards">&larr; Back to Cards</Link></div>
            <div className="action-bar">
                {currentUser?.role == "Admin" && <>
                    <Button text="Edit"
                        classList={"btn-cancel"}
                        handleClick={() => setIsEdit(true)}
                    />
                    <Button text="Delete"
                        classList="btn-danger"
                        handleClick={() => { deleteCard(params.cardId) }}
                    />
                </>}
            </div>
            <div className="card-section">
                {isEdit ?
                    <EditCard cardData={card} onCancel={() => setIsEdit(false)} />
                    :
                    <CardHolder cardData={card} />
                }
            </div>
        </MainLayout>
    )
}