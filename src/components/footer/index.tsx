import { PageContainer } from "../page-container";
import { CONTACTS } from "./config";

export function Footer() {
  return (
    <section className="py-6 w-full">
      <PageContainer>
        <footer className="w-full md:w-max mx-auto flex flex-wrap items-center justify-start">
          {CONTACTS.map((contact) => (
            <div
              key={contact}
              className="w-full my-2 mx-0 md:w-max text-center border-2 border-black1 rounded-2xl py-2 px-3 md:my-0 md:mx-2"
            >
              <p className="text-sm truncate">{contact}</p>
            </div>
          ))}
        </footer>
      </PageContainer>
    </section>
  );
}
