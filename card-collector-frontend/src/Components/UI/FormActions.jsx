import Button from "./Button";
import '../../assets/stylesheets/components/_forms.scss';

export default function FormActions({isEdit, isPending, onCancel}){
    const submitText = isEdit? "Save" : "Create"
    return(
        <div className="action-row">
            {isPending ? 
                <>
                    <Button disabled={true} text={submitText} classList="btn-success" mode="pending"  /> 
                    <Button disabled={true} text="Cancel" classList="btn-cancel" /> 
                </>
                :
                <>
                    <Button text={submitText} classList="btn-success" />
                    <Button text="Cancel" classList="btn-cancel" handleClick={onCancel} />
                </>
            }
            
        </div>
    );
}