//
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import HomePage from "./components/Homepage"
//import Profile from "./components/Profile"
//import Settings from "./components/Settings"

function App() {
  return (
    <>
      <MyNav tema="dark" />
      <HomePage />
      {/*<Profile />*/}
      <MyFooter />
      {/*<Settings />*/}
    </>
  )
}

export default App
