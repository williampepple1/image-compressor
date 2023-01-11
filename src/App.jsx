import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <main className="text-3xl flex flex-col h-screen justify-between text-grey-500 font-bold bg-gray-200">
      <Header />
      <Body />
      <Footer/>
    </main>
  )
}