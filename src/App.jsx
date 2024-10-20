
import {BackgroundHeading} from "./components/BackgroundHeading.jsx";
import {Footer} from "./components/Footer.jsx";
import {Header} from "./components/Header.jsx";
import {ItemList} from "./components/ItemList.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {ItemsContextProvider} from "./contexts/ItemsContextProvider.jsx";

const App = () => {
  return (
    <>
      <BackgroundHeading />
      <main>
          <ItemsContextProvider>
              <Header />
              <ItemList />
              <Sidebar />
          </ItemsContextProvider>
      </main>
      <Footer />
    </>
  )
}

export default App
