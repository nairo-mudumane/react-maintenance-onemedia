import { PageContainer } from "../page-container";
import { CONTACTS } from "./config";

export function Footer() {
  return (
    <div className="py-6 w-full">
      <PageContainer>
        <footer className="grid grid-cols-1 md:grid-cols-3 lg:w-max lg:mx-auto">
          {CONTACTS.map((contact) => (
            <div
              key={contact}
              className="w-full md:w-max text-center border-2 border-gray2 rounded-2xl my-2 py-2 px-3 mx-1"
            >
              <p className="text-gray2 text-sm truncate">{contact}</p>
            </div>
          ))}
        </footer>
      </PageContainer>
    </div>
  );
}
