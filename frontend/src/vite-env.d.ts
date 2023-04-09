/// <reference types="vite/client" />

declare type FieldProps = {
  field: {
    name: string;
    value: any;
    onChange: (event: React.ChangeEvent<any>) => void;
    onBlur: (event: React.FocusEvent<any>) => void;
  };
  form: {
    touched: { [field: string]: boolean };
    errors: { [field: string]: string };
  };
  meta: {
    error?: string;
    touched?: boolean;
  };
};