import { MainButtonProps } from "./types";

export function MainButton(props: MainButtonProps) {
  return (
    <button className="bg-orange1 text-white font-semibold uppercase shadow-lg rounded-2xl py-1 px-4 hover:shadow-xl md:py-2 md:px-5">
      {props.text}
    </button>
  );
}
