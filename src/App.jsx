import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home/Home";
import Properties from "./Pages/Properties/Properties";
import UpdateProperty from "./Pages/Properties/UpdateProperty";
import AddProperty from "./Pages/Properties/AddProperty";
import Agents from "./Pages/Agents/Agents";
import AddAgent from "./Pages/Agents/AddAgent"
import UpdateAgent from "./Pages/Agents/UpdateAgent";
import Articles from "./Pages/Articles/Article";
import AddArticle from "./Pages/Articles/AddArticle"
import UpdateArticle from "./Pages/Articles/UpdateArticle"
import Cities from "./Pages/Cities/Cities";
import AddCity from "./Pages/Cities/AddCity";
import UpdateCity from "./Pages/Cities/UpdateCity";
import Settings from "./Pages/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/add" element={<AddProperty />} />
          <Route path="/properties/:id" element={<UpdateProperty />} />

          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/add" element={<AddAgent />} />
          <Route path="/agents/:id" element={<UpdateAgent />} />

          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/add" element={<AddArticle />} />
          <Route path="/articles/:id" element={<UpdateArticle />} />

          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/add" element={<AddCity />} />
          <Route path="/cities/:id" element={<UpdateCity />} />

          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
