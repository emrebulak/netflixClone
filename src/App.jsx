import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import MainPage from "./pages/MainPage"
import DetailPage from "./pages/DetailPage"
import Header from "./components/Header"

const App = () => {
  return (
    <Router>
      <div className="p-5 md:p-10 lg:p-15 xl:px-20 relative">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App