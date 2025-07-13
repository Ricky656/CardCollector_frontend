import '../../assets/stylesheets/components/_forms.scss';
import useFormData from '../../hooks/useFormData';
import FormErrors from '../UI/FormErrors';
import InputField from '../UI/InputField';
import '../../assets/stylesheets/components/_cards.scss';
import FormActions from '../UI/FormActions';
import Collection from '../Collection';
import BoosterCardEditor from './BoosterCardEditor';

export default function BoosterForm({ packData, onSubmit, onCancel, isPending, error }) {
    let isEdit = true;
    let contents = []
    if (packData == null) {
        packData = { name: "", cardIds: [] }
        isEdit = false;
    }else{
        //packData.cardIds = packData.cards.$values.map( c => c.id)
        contents = packData.cards.$values
    }
    const [formData, changeFormData, setFormData] = useFormData(packData);
    return (
        <form className='form' onSubmit={async (e) => {
            e.preventDefault();
            onSubmit(formData);
        }}>
            <div className="action-bar">
                <div className="action-bar-right">
                        <FormActions isEdit={isEdit} isPending={isPending} onCancel={onCancel} />
                </div>
            </div>
            <div className='card'>
                <h4>Details</h4>
                <InputField value={packData?.name} name="name" onChange={changeFormData} placeholder="Booster Name" />
                <FormErrors errorArray={error?.errors?.Name} />
            </div>
            <BoosterCardEditor editContents={contents} setFormData={setFormData} />
        </form>
    )
}