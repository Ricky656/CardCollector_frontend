import '../../assets/stylesheets/components/_forms.scss'

function FormErrors({errorArray}){
    if(errorArray == null){ return }
    return(
        <div className="form-error-group">
            {errorArray.map( e =>
                <div className='form-error' key={e}>{e}</div>
            )}
        </div>
    );
}

export default FormErrors;