import { Controller, useFormContext } from "react-hook-form";
import { patterns } from '../../static/validation-rules';
import FieldError from './field-error';

export default function FieldGroup({ fieldId, displayName, description, isRequired, inputType }) {
    const methods = useFormContext(),
        { control, errors } = methods,
        fieldRules = { required: isRequired };
    let elInput = () => <></>;

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
            fieldRules.pattern = patterns.email;
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
                render={({ onChange, ref }) => (elInput(ref, onChange))}
            />

            {description && <div className='field-description'>{description}</div>}

            {errors[fieldId] && <FieldError errors={errors} fieldId={fieldId} inputType={inputType} />}

        </div>
    );
}