import '../../assets/stylesheets/components/_forms.scss';
import useFormData from '../../hooks/useFormData';
import Button from '../UI/Button';
import FormActions from '../UI/FormActions';
import FormErrors from '../UI/FormErrors';
import InputField from '../UI/InputField';
import PasswordField from '../UI/PasswordField';

export default function LoginForm({onSubmit, isPending, error}){
    const [formData, changeFormData] = useFormData();
    return(
        <form className="form" onSubmit={async(e) => {
            e.preventDefault();
            onSubmit(formData);
        }}>
            <InputField name="email" onChange={changeFormData} placeholder="Email" />
            <PasswordField name="password" onChange={changeFormData} placeholder="Password" />
            <FormErrors errorArray={error?.errors?.login } />
            <Button text="Login" classList="btn-success" />
        </form>
    );
}