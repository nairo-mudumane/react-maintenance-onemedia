import { PageContainer } from "../page-container";
import { MainButton } from "../button-main";
import stand from "../../assets/stand.png";

export function Hero() {
  return (
    <section>
      <PageContainer>
        <div className="my-10 px-0 md:px-8 flex flex-wrap md:flex-nowrap items-center justify-between">
          <div className="mb-6 flex items-center justify-start">
            <div className="w-full flex flex-col md:block">
              <h2 className="text-black text-5xl italic lg:text-5xl font-extrabold uppercase mb-4">
                Estamos em <br />
                manutencao
              </h2>
              <MainButton text="Contacte" />
            </div>
          </div>

          <div className="w-full mt-[4rem] md:m-0 md:max-w-[30rem] md:flex-1 h-auto">
            <img className="w-full h-full" src={stand} alt="stand 3G image" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
