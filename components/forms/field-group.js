import { Controller, useFormContext } from "react-hook-form";
import * as errorMsgs from '../../static/error-msgs';

export default function FieldGroup({ fieldId, displayName, description, isRequired, inputType }) {
    const methods = useFormContext(),
        { control, errors } = methods,
        fieldRules = { required: isRequired };
    let elInput = <></>;

    switch (inputType) {
        case 'text':
            elInput = (ref, onChange) => <input
                name={fieldId}
                id={fieldId}
                ref={ref}
                onChange={onChange}
                type='text'
            />;
            break;

        case 'email':
            elInput = (ref, onChange) => <input
                name={fieldId}
                id={fieldId}
                ref={ref}
                onChange={onChange}
                type='text'
            />;
            fieldRules.pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; // https://regexlib.com/Search.aspx?k=email
            break;

        case 'textarea':
            elInput = (ref, onChange) => <textarea
                name={fieldId}
                id={fieldId}
                ref={ref}
                onChange={onChange}
            />;
            break;

        default:
            console.warn('Unknown field type: ', inputType);
            elInput = () => <div>Unknown field type</div>;
    }

    return (
        <div className='field-group'>
            <label htmlFor={fieldId}>{displayName}</label>

            <Controller
                name={fieldId}
                control={control}
                defaultValue={null}
                rules={fieldRules}
                render={({ onChange, ref }) => (
                    elInput(ref, onChange)
                )}
            />

            {description && <div className='field-description'>{description}</div>}

            {errors[fieldId] &&
                <div className='field-error'>
                    {
                        errors[fieldId].message // specific error message in component
                        || errors && errors[fieldId] && errorMsgs[(errors[fieldId]).type][inputType] // error message from errorMsgs.js
                        || errors && errors[fieldId] && errorMsgs[(errors[fieldId]).type] // error message from errorMsgs.js
                        || errorMsgs.unknown // unknown error message from errorMsgs.js
                    }
                </div>
            }

        </div>
    );
}