import { PageContainer } from "../page-container";
import stand from "../../assets/stand.jpg";
import { MainButton } from "../button-main";

export function Hero() {
  return (
    <PageContainer>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-start">
          <div className="w-full flex flex-col md:block">
            <h2 className="text-5xl font-extrabold uppercase mb-4">
              Estamos em manutencao
            </h2>

            <MainButton text="Contacte" />
          </div>
        </div>

        <div className="w-[30rem] h-auto">
          <img className="w-full h-full" src={stand} alt="stand 3G image" />
        </div>
      </div>
    </PageContainer>
  );
}
