

export interface RadioPropsBase {
  size: string;
  disabled: boolean;
  label: string | number | boolean;
}

export interface radioProps extends RadioPropsBase {
  modelValue: string | number | boolean;
  name: string;
  border: boolean;
}
