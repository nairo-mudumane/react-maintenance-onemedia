export interface UseInputTextErrors {
  errors: { [k: string]: string };
}

export interface UseInputText extends Pick<UseInputTextErrors, "errors"> {
  onChange: (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (event: React.FocusEvent<any, Element>) => void;
  clear: () => void;
  updateErrors: (newErrors: { [k: string]: string }) => void;
}
