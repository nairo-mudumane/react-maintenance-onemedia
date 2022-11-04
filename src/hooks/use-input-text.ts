import React from "react";
import { isValidEmail, isValidPassword } from "../resources";
import type { UseInputText } from "./@types";

export function useInputText<T>(initialValues: T): T & UseInputText {
  const passwordMsg =
    "Minimo 6 caracteres, uma letra maiuscula, um numero e um caractere especial";

  const [values, setValues] = React.useState<T>(initialValues || ({} as T));
  const [errors, setErrors] = React.useState<{ [k: string]: string }>({});

  function updateErrors(newErrors: { [T: string]: string }) {
    setErrors({
      ...errors,
      ...newErrors,
    });
  }

  function onChange(
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.currentTarget;
    setValues({ ...values, [name]: value });
  }

  function onBlur(event: React.FocusEvent<any, Element>) {
    const {
      name,
      value,
      type,
      required,
    }: EventTarget & (HTMLInputElement | HTMLTextAreaElement) =
      event.currentTarget;

    if (required && value === "") {
      updateErrors({ [name]: "Este campo é obrigatorio" });
      return;
    }

    if (type === "text" || type === "number") {
      if (required) {
        if (value === "") {
          updateErrors({ [name]: "Este campo é obrigatorio" });
          return;
        } else {
          updateErrors({ [name]: "" });
          return;
        }
      }
    }

    if (type === "url" || name === "website" || name === "url") {
      if (required) {
        if (value === "") {
          updateErrors({
            [name]: "URL inválida! Exemplo: https://dominio.com",
          });
          return;
        } else {
          updateErrors({ [name]: "" });
          return;
        }
      }

      if (value !== "") {
        updateErrors({
          [name]: "URL inválida! Exemplo: https://dominio.com",
        });
        return;
      } else {
        updateErrors({ [name]: "" });
        return;
      }
    }

    if (type === "email") {
      if (required) {
        if (!isValidEmail(value)) {
          updateErrors({ [name]: "email invalido" });
          return;
        } else {
          updateErrors({ [name]: "" });
          return;
        }
      }

      if (value !== "" && !isValidEmail(value)) {
        updateErrors({ [name]: "email invalido" });
        return;
      } else {
        updateErrors({ [name]: "" });
        return;
      }
    }

    if (type === "password") {
      if (!isValidPassword(value)) {
        updateErrors({
          [name]: passwordMsg,
        });
        return;
      } else {
        updateErrors({
          [name]: "",
        });
      }
    }
  }

  function clear() {
    setValues(initialValues);
    setErrors({});
  }

  return { ...values, errors, updateErrors, onChange, onBlur, clear };
}
