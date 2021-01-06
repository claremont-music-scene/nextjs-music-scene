import * as errorMsgs from '../../static/error-msgs';

export default function FieldError({ errors, fieldId, inputType }) {
    return (
        <div className='field-error'>
            {
                errors[fieldId].message // specific error message in component
                || errors && errors[fieldId] && errorMsgs[(errors[fieldId]).type][inputType] // error message from errorMsgs.js
                || errors && errors[fieldId] && errorMsgs[(errors[fieldId]).type] // error message from errorMsgs.js
                || errorMsgs.unknown // unknown error message from errorMsgs.js
            }
        </div>
    );
}