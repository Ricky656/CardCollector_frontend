import { Link, useNavigate, useParams } from "react-router"
import MainLayout from "../layouts/MainLayout"
import useFetchPack from "../hooks/Api/useFetchPack";
import { useEffect, useState } from "react";
import Button from "../Components/UI/Button";
import CardHolder from "../Components/Cards/CardHolder";

import "../assets/stylesheets/layouts/_boostersPage.scss";
import "../assets/stylesheets/layouts/_general.scss";
import Collection from "../Components/Collection";
import Card from "../Components/Cards/Card";
import useDeletePack from "../hooks/Api/useDeletePack";


function ViewBoostersPage() {
    const [isEdit, setIsEdit] = useState(false);
    const params = useParams();
    const pack = useFetchPack(params.packId);
    const nav = useNavigate();

    const { mutateAsync: deletePack, isSuccess } = useDeletePack();
    useEffect(() => {
        if (isSuccess) {
            //TODO: Toast card successfully deleted
            nav("/packs");
        }
    }, [isSuccess])

    return (
        <MainLayout>
            <div className="top-bar"><Link to="/packs">&larr; Back to Booster Packs</Link></div>
            <div className="action-bar">
                <Button text="Edit"
                    classList={"btn-cancel"}
                    handleClick={() => setIsEdit(true)}
                />
                <Button text="Delete"
                    classList="btn-danger"
                    handleClick={() => {deletePack(params.packId)}}
                />
            </div>
            <div className="booster-contents">
                <div className="pack-section">
                    <CardHolder cardData={pack} />
                </div>
                <div className="booster-contents-cards">
                    <Collection title={`${pack.data?.name}'s Cards`}
                        isPending={pack.isPending}
                        isError={pack.isError}
                        error={pack.error}>
                        {pack.data?.cards.$values.map(c =>
                            <Card cardData={c} key={c.id} />
                        )}
                    </Collection>
                </div>
            </div>
        </MainLayout>
    )
}

export default ViewBoostersPage