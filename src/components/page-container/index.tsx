import { PageContainerProps } from "./types";

export function PageContainer(props: PageContainerProps) {
  return (
    <div
      style={props.sx}
      className={`${
        props.className && props.className
      } container mx-auto px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]`}
    >
      {props.children}
    </div>
  );
}
