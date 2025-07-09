import '../../assets/stylesheets/components/_forms.scss';
import { CardRarity } from '../../Util/Constants';
import Dropdown from '../UI/Dropdown';
import FormActions from '../UI/FormActions';
import FormErrors from '../UI/FormErrors';
import InputField from '../UI/InputField';

export default function CardForm({cardData, onSubmit, onCancel, isPending, error}){
    return (
        <form className ="form" onSubmit={async(e) => {
            e.preventDefault();
            onSubmit();
        }}>
            <InputField cardRef={cardData.name} name="Card Name" />
            <FormErrors errorArray={error?.errors?.Name} />
            <Dropdown formRef={cardData.rarity} keyArray={CardRarity}/>
            <FormErrors errorArray={error?.errors?.Rarity} />
            <FormActions isPending={isPending} onCancel={onCancel} />
        </form>
    )
}