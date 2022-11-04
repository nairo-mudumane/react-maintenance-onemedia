import { MainButton } from "../button-main";
import { Logo } from "../logo";
import { PageContainer } from "../page-container";

export function Header() {
  return (
    <section className="py-6 w-full">
      <PageContainer>
        <header className="flex items-center justify-between">
          <Logo className="!m-0" />

          <MainButton text="Contacte" size="small" />
        </header>
      </PageContainer>
    </section>
  );
}
