import { Header } from "./Components/Header.jsx"
import "./UI-CSS/Header.css"
import { MainContent } from "./Components/MainContent.jsx"
import "./UI-CSS/MainContent.css"
import { Footer } from "./Components/Footer.jsx"
import "./UI-CSS/Footer.css"


export function App(){
  return(
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}