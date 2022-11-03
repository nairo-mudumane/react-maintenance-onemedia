import { ILogoProps } from "./types";

export function Logo(props: ILogoProps) {
  return (
    <div
      className={`${
        props.className && props.className
      } mr-4 mb-6 max-w-[8rem] md:mb-0 md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[12rem] 2xl:max-w-[14rem]`}
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
