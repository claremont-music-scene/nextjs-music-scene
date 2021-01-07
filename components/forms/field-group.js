import { Controller, useFormContext } from "react-hook-form";
import { patterns } from '../../static/validation-rules';
import FieldError from './field-error';
// import Wysiwyg from './fields/wysiwyg';

import dynamic from 'next/dynamic';

const Wysiwyg = dynamic(
    () => import('./fields/wysiwyg'),
    { ssr: false }
);


export default function FieldGroup({
    fieldId,
    displayName,
    description,
    isRequired,
    inputType,
    options = null
}) {
    const methods = useFormContext(),
        { control, errors } = methods,
        fieldRules = { required: isRequired };
    let elInput = () => <></>;

    switch (inputType) {
        case 'text':
        case 'email':
        case 'phone':
        case 'zip':
            elInput = (ref, onChange) =>
                <input
                    name={fieldId}
                    id={fieldId}
                    ref={ref}
                    onChange={onChange}
                    type='text'
                />;
            if (inputType === 'email') {
                fieldRules.pattern = patterns.email;
            }
            else if (inputType === 'phone') {
                fieldRules.pattern = patterns.phone;
            }
            else if (inputType === 'zip') {
                fieldRules.pattern = patterns.zip;
            }
            break;

        case 'textarea':
            elInput = (ref, onChange) =>
                <textarea
                    name={fieldId}
                    id={fieldId}
                    ref={ref}
                    onChange={onChange}
                />;
            break;

        case 'html':
            elInput = (ref, onChange) => <Wysiwyg ref={ref} onChange={onChange} />;
            break;

        case 'select':
            elInput = (ref, onChange) =>
                <select
                    name={fieldId}
                    id={fieldId}
                    ref={ref}
                    onChange={onChange}
                >
                    {options.map(o =>
                        <option
                            key={o.replace(/ /g, '')}
                            value={o}
                        >
                            {o}
                        </option>
                    )}
                </select>;
            break;

        case 'radio':
            elInput = (ref, onChange) =>
                <>
                    {options.map(o => {
                        const oKey = o.replace(/ /g, '');
                        return (
                            <div key={oKey}>
                                <input
                                    type='radio'
                                    ref={ref}
                                    id={oKey}
                                    value={o}
                                    name={fieldId}
                                    // checked 
                                    onChange={onChange}
                                />
                                <label htmlFor={oKey}>{o}</label>
                            </div>
                        )
                    })}
                </>;
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