import '../../assets/stylesheets/components/_forms.scss';
import useFormData from '../../hooks/useFormData';
import { CardRarity } from '../../Util/Constants';
import Dropdown from '../UI/Dropdown';
import FormActions from '../UI/FormActions';
import FormErrors from '../UI/FormErrors';
import InputField from '../UI/InputField';

export default function CardForm({cardData, onSubmit, onCancel, isPending, error}){
    let isEdit = true;
    if(cardData == null){
        cardData = {name: "", rarity: 0}
        isEdit=false;
    }
    const [formData, changeFormData] = useFormData(cardData);
    return (
        <form className ="form" onSubmit={async(e) => {
            e.preventDefault();
            onSubmit(formData);
        }}>
            <InputField value={cardData?.name} name="name" onChange={changeFormData} placeholder="Card Name" />
            <FormErrors errorArray={error?.errors?.Name} />
            <Dropdown value={cardData?.rarity} name="rarity" onChange={changeFormData} keyArray={CardRarity}/>
            <FormErrors errorArray={error?.errors?.Rarity} />
            <FormActions isEdit={isEdit} isPending={isPending} onCancel={onCancel} />
        </form>
    )
}