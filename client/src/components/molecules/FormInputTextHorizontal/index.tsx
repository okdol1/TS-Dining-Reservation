import React from 'react';
import FormInput from '../FormInput';
import FormItem from '../FormItem';
import FormError from '../FromError';
import InputText from '../../atoms/InputText';

const FormInputTextHorizontal = (item: any, index: number) => {
  return (
    <FormItem key={`${item.id}-${index}`}>
      <FormInput
        htmlFor={item.htmlFor}
        labelTitle={item.labelTitle}
        direction='horizontal'
      >
        <InputText
          type={item.type}
          id={item.id}
          name={item.name}
          value={item.value}
          maxLength={item.maxLength}
          autoComplete={item.autoComplete}
          onChange={item.onChange}
          placeholder={item.placeholder}
          readOnly={item.readOnly}
        />
      </FormInput>
      {item.error ? <FormError message={item.error} /> : null}
    </FormItem>
  );
};

export default FormInputTextHorizontal;
