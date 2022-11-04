import { Modal } from "@mui/material";
import { ModalProps } from "./@types";
import { Form } from "./form";
import { StyledModal } from "./styles";

export function ModalForm(props: ModalProps) {
  if (props.open) {
    return (
      <Modal
        disableAutoFocus
        open={props.open}
        onClose={props.onClose}
        BackdropProps={{
          sx: {
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(0, 0, 30, 0.4)",
          },
        }}
      >
        <StyledModal className="mt-[3.5rem] mx-auto max-w-[86%] md:max-w-[360px] lg:max-w-[520px] rounded-lg pt-7 py-4 px-6">
          <Form />
        </StyledModal>
      </Modal>
    );
  }

  return null;
}
