import { Footer, Header, Hero, ModalForm } from "./components";
import { useFormModal } from "./hooks";

function App() {
  const { open, onClose } = useFormModal();

  return (
    <>
      <ModalForm open={open} onClose={onClose} />
      <div className="w-full min-h-[100vh] flex flex-col justify-between">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
