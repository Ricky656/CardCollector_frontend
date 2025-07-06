import { useEffect, useRef} from "react";
import '../assets/stylesheets/components/_forms.scss';
import '../assets/stylesheets/components/_cards.scss'
import Button from "./UI/Button";
import InputField from "./UI/InputField";
import useCreateCard from "../hooks/Api/useCreateCard";

export default function CreateCard({ onCancel }) {
    const cardName = useRef(null);
    const { mutateAsync: addCard } = useCreateCard();
    useEffect(() =>{
        cardName.current.focus();
    }, []);

    return (
        <div className="card new-card">
            <h4>New Card</h4>
                <form className="form" onSubmit={async (e) => {
                    e.preventDefault();
                    console.log(cardName.current.value);
                    try {
                        await addCard(cardName.current.value)
                    }catch(err){
                        console.log(err)
                    }
                }}>
                    <InputField cardRef={cardName} name="Card Name" />
                    <div className="action-row">
                        <Button text="Create" classList="btn-success" />
                        <Button text="Cancel" classList="btn-cancel" handleClick={onCancel} />
                    </div>
                </form>
        </div>
    )
}