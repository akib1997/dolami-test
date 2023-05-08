import Header from "./components/Header";
import { MainContent } from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="px-3 grid sm:grid-cols-5 gap-4">
        <div className="col-span-1 sm:block hidden">
          <Sidebar />
        </div>
        <div className="col-span-4">
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
