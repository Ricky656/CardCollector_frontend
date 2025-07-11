import MainLayout from "../layouts/MainLayout";
import BoosterForm from "../Components/Boosters/BoosterForm";
import { redirect, useNavigate } from "react-router";


export default function CreateBoosterPage(){
    const nav = useNavigate();
    return(
        <MainLayout>
            <h1>Create New Booster Pack</h1>
            <BoosterForm onCancel={() => {
                nav("/packs")}
            }/>
        </MainLayout>
    )
}