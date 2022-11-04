import { IChildren } from "../../@types";

export interface ModalProps extends IChildren {
  open: boolean;
  onClose: () => any;
}
