import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";

import DigitalMarketing from "./components/Header/pages/services/DigitalMarketing.jsx";
import BrandReputation from "./components/Header/pages/services/OnlineReputation/BrandReputations.jsx";
import CelebrityReputation from "./components/Header/pages/services/OnlineReputation/CelebrityReputation.jsx";
import CorporateReputation from "./components/Header/pages/services/OnlineReputation/CorporateReputation.jsx";
import OnlineReputation from "./components/Header/pages/services/OnlineReputation/OnlineReputation.jsx";

import PayPer from "./components/Header/pages/services/PayPer.jsx";
import SearchEngine from "./components/Header/pages/services/SearchEngine.jsx";
import Social from "./components/Header/pages/services/Social.jsx";
import WebDesigning from "./components/Header/pages/services/WebDesigning.jsx";
import WebsiteDevelopment from "./components/Header/pages/services/WebsiteDevelopment.jsx";
import EnterPrise from "./components/Header/pages/Seo/EnterPrise.jsx";
import Local from "./components/Header/pages/Seo/Local.jsx";
import WhiteLabel from "./components/Header/pages/Seo/WhiteLabel.jsx";
import GoogleRecovery from "./components/Header/pages/Seo/GoogleRecovery.jsx";
import Reseller from "./components/Header/pages/Seo/Reseller.jsx";
import Technical from "./components/Header/pages/Seo/Technical.jsx";
import SeoAudit from "./components/Header/pages/Seo/SeoAudit.jsx";
import SmallBusiness from "./components/Header/pages/Seo/SmallBusiness.jsx";
import Video from "./components/Header/pages/Seo/Video.jsx";
// import Dashboard from "./components/Dashboard/src/App.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      {/* services */}
      <Route path="/Digital-Marketing" element={<DigitalMarketing />} />
      <Route path="/Brand-Reputation" element={<BrandReputation />} />
      <Route path="/Celebrity-Reputation" element={<CelebrityReputation />} />
      <Route path="/Corporate-Reputation" element={<CorporateReputation />} />
      <Route path="/Online-Reputation" element={<OnlineReputation />} />
      <Route path="/Pay-Per" element={<PayPer />} />
      <Route path="/Search-Engine" element={<SearchEngine />} />
      <Route path="/Social-Media" element={<Social />} />
      <Route path="/Web-Designing" element={<WebDesigning />} />
      <Route path="/Website-Development" element={<WebsiteDevelopment />} />
      <Route path="/Enterprise" element={<EnterPrise />} />
      <Route path="/Local" element={<Local />} />
      <Route path="/White-Label" element={<WhiteLabel />} />
      <Route path="/Google-Recovery" element={<GoogleRecovery />} />
      <Route path="/Reseller-seo" element={<Reseller />} />
      <Route path="/Technical" element={<Technical />} />
      <Route path="/Seo-audit" element={<SeoAudit />} />
      <Route path="/Small-Business" element={<SmallBusiness />} />
      <Route path="/Video" element={<Video />} />
    
    
    
    
      {/* Dashboard routes */}
      {/* <Route path="/dashboard/*" element={<Dashboard />} />  */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
