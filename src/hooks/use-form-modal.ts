import { useContext } from "react";
import { FormModalContext } from "../contexts";

export function useFormModal() {
  const context = useContext(FormModalContext);
  return context;
}
