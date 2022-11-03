import React from "react";
import { IChildren } from "../../@types";
import { IFormModalContext } from "../@types";

export const FormModalContext = React.createContext<IFormModalContext>({
  open: false,
} as IFormModalContext);

export function FormModalProvider(props: IChildren) {
  const [open, setOpen] = React.useState<boolean>(false);

  function onClose(): void {
    setOpen(false);
  }

  function onOpen(): void {
    setOpen(true);
  }

  return (
    <FormModalContext.Provider value={{ open, onOpen, onClose }}>
      {props.children}
    </FormModalContext.Provider>
  );
}
