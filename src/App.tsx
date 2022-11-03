import { Footer, Header, Hero } from "./components";

function App() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-between">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
