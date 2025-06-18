import ChatBox from "./components/ChatBox";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <main className="flex">
      <Sidebar />
      <ChatBox />
    </main>
  )
}
