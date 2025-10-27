import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}
