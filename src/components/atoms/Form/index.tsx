import { ReactNode } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import * as yup from 'yup';

interface IFormProps<TFieldValues extends FieldValues> {
  children: (methods: UseFormReturn<TFieldValues>) => ReactNode;
  onSubmit: SubmitHandler<TFieldValues>;
  schema?: yup.ObjectSchema<TFieldValues>;
  options?: UseFormProps<TFieldValues>;
}

const Form = <TFieldValues extends FieldValues>({
  onSubmit,
  children,
  options,
  schema,
}: IFormProps<TFieldValues>) => {
  const methods = useForm<TFieldValues>({
    ...options,
    resolver: schema && yupResolver<any>(schema),
  });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

export default Form;
