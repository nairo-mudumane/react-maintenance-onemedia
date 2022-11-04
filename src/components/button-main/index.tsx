import { useFormModal } from "../../hooks";
import { StyledButton as Button } from "./styles";
import { MainButtonProps } from "./types";

export function MainButton(props: MainButtonProps) {
  const { onOpen } = useFormModal();

  if (props.size) {
    if (props.size === "small") {
      return (
        <Button
          onClick={onOpen}
          className="text-xs font-bold uppercase border border-transparent text-white rounded-xl py-2 px-6 shadow-md hover:shadow-none hover:text-orange1 hover:border-orange1"
        >
          {props.text}
        </Button>
      );
    }
  }

  return (
    <Button
      onClick={onOpen}
      className="text-mg font-bold uppercase border border-transparent text-white rounded-2xl py-2 px-6 shadow-md hover:shadow-none hover:text-orange1 hover:border-orange1"
    >
      {props.text}
    </Button>
  );
}
