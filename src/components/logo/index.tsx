import { ILogoProps } from "./types";

export function Logo(props: ILogoProps) {
  return (
    <div
      className={`${
        props.className && props.className
      } mr-4 mb-6 max-w-[6rem] md:mb-0 md:max-w-[6rem] lg:max-w-[8rem] xl:max-w-[10rem] 2xl:max-w-[12rem]`}
    >
      <img
        src="/logo.png"
        srcSet="/logo.png"
        loading="lazy"
        alt="OneMedia SA logo"
      />
    </div>
  );
}
