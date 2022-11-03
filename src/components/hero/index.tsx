import { PageContainer } from "../page-container";
import stand from "../../assets/stand.png";
import { MainButton } from "../button-main";

export function Hero() {
  return (
    <section>
      <PageContainer>
        <div className="my-10 flex flex-wrap md:flex-nowrap items-center justify-between">
          <div className="mb-6 flex items-center justify-start">
            <div className="w-full flex flex-col md:block">
              <h2 className="text-4xl italic lg:text-5xl font-extrabold uppercase mb-4">
                Estamos em manutencao
              </h2>
              <MainButton text="Contacte" />
            </div>
          </div>

          <div className="max-w-full md:min-w-[24rem] md:flex-1 h-auto">
            <img className="w-full h-full" src={stand} alt="stand 3G image" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
