import Button from "./Button";
import '../../assets/stylesheets/components/_forms.scss';

export default function FormActions({isPending, onCancel}){
    return(
        <div className="action-row">
            {isPending ? 
                <>
                    <Button disabled={true} text="Create" classList="btn-success" mode="pending"  /> 
                    <Button disabled={true} text="Cancel" classList="btn-cancel" /> 
                </>
                :
                <>
                    <Button text="Create" classList="btn-success" />
                    <Button text="Cancel" classList="btn-cancel" handleClick={onCancel} />
                </>
            }
            
        </div>
    );
}