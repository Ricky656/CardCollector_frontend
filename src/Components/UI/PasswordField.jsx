import '../../assets/stylesheets/components/_forms.scss'

function PasswordField({value, name, onChange, placeholder}){
    return(
        <input
            className="form-input"
            type="password"
            defaultValue={value}
            name={name}
            placeholder={placeholder} 
            onChange={onChange}
        />
    );
}

export default PasswordField;