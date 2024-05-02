import AppRoutes from "./componens/AppRoutes"
import Header from "./componens/Header/Header"

function App() {
  return (
    <div className="wrapper" translate="no">
      <div className="container">
        <Header />
        <AppRoutes />
      </div>
    </div>
  )
}

export default App