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

//Services
import DigitalMarketing from "./components/Header/pages/services/DigitalMarketing.jsx";
import BrandReputation from "./components/Header/pages/services/OnlineReputation/BrandReputations.jsx";
import CelebrityReputation from "./components/Header/pages/services/OnlineReputation/CelebrityReputation.jsx";
import CorporateReputation from "./components/Header/pages/services/OnlineReputation/CorporateReputation.jsx";
import OnlineReputation from "./components/Header/pages/services/OnlineReputation/OnlineReputation.jsx";
import PayPer from "./components/Header/pages/services/PayPer.jsx";
import SearchEngine from "./components/Header/pages/services/SearchEngine.jsx";
import SocialMedia from "./components/Header/pages/services/SocialMedia.jsx";
import WebDesigning from "./components/Header/pages/services/WebDesigning.jsx";
import WebsiteDevelopment from "./components/Header/pages/services/WebsiteDevelopment.jsx";

//Seo
import EnterPrise from "./components/Header/pages/Seo/EnterPrise.jsx";
import Local from "./components/Header/pages/Seo/Local.jsx";
import WhiteLabel from "./components/Header/pages/Seo/WhiteLabel.jsx";
import GoogleRecovery from "./components/Header/pages/Seo/GoogleRecovery.jsx";
import Reseller from "./components/Header/pages/Seo/Reseller.jsx";
import Technical from "./components/Header/pages/Seo/Technical.jsx";
import SeoAudit from "./components/Header/pages/Seo/SeoAudit.jsx";
import SmallBusiness from "./components/Header/pages/Seo/SmallBusiness.jsx";
import Video from "./components/Header/pages/Seo/Video.jsx";

//Design and development
import ECommerceWebSiteDesign from "./components/Header/pages/DesignDevelopment/ECommerceWebsite.jsx";
import FlashAnimation from "./components/Header/pages/DesignDevelopment/FlashAnimation.jsx";
import Multimedia from "./components/Header/pages/DesignDevelopment/Multimedia.jsx";
import Responsive from "./components/Header/pages/DesignDevelopment/Responsive.jsx";
import SeoFriendly from "./components/Header/pages/DesignDevelopment/SeoFriendly.jsx";
import ECommerceDevelopment from "./components/Header/pages/DesignDevelopment/ECommerceDevelopment.jsx";
import PHPDevelopment from "./components/Header/pages/DesignDevelopment/PhpDevelopment.jsx";
import LaravelDevelopment from "./components/Header/pages/DesignDevelopment/LaravelDevelopment.jsx";
import MagentoDevelopment from "./components/Header/pages/DesignDevelopment/MagentoDevelopment.jsx";
import GraphicDesign from "./components/Header/pages/DesignDevelopment/GraphicDesign.jsx";

// Industries
import AccountingFirms from "./components/Header/pages/Industries/Accounting.jsx";
import IndustriesECommerce from "./components/Header/pages/Industries/IndustriesECommerce.jsx";
import Educational from "./components/Header/pages/Industries/Educational.jsx";
import ElectronicsCompanies from "./components/Header/pages/Industries/ElectronicsCompanies.jsx";
import HealthCare from "./components/Header/pages/Industries/HealthCare.jsx";
import LawFirms from "./components/Header/pages/Industries/LawFirms.jsx";
import RealEstate from "./components/Header/pages/Industries/RealEstate.jsx";
import Manufacturing from "./components/Header/pages/Industries/Manufacturing.jsx";
import MediaEntertainment from "./components/Header/pages/Industries/MediaEntertainment.jsx";
import OnlineCourses from "./components/Header/pages/Industries/OnlineCourses.jsx";

// ECommerce-Marketing
import ECommerceOptimization from "./components/Header/pages/ECommerce/ECommerceOp.jsx";
import ECommerceSEO from "./components/Header/pages/ECommerce/ECommerceSeo.jsx";
import ECommercePPC from "./components/Header/pages/ECommerce/ECommercePpc.jsx";
import ShopifySEO from "./components/Header/pages/ECommerce/ShopifySeo.jsx";
import AmazonMarketing from "./components/Header/pages/ECommerce/AmazonMarketing.jsx";
import AmazonSEO from "./components/Header/pages/ECommerce/AmazonSeo.jsx";
import AmazonAdvertise from "./components/Header/pages/ECommerce/AmazonAdvertise.jsx";
import AmazonStore from "./components/Header/pages/ECommerce/AmazonStores.jsx";
import AmazonSeller from "./components/Header/pages/ECommerce/AmazonSeller.jsx";
import AmazonPostMange from "./components/Header/pages/ECommerce/AmazonPost.jsx";

// Admin & Auth
import Admin from "./components/Admin/Admin.jsx";
import Pages from "./components/Admin/SideBarComponents/Pages.jsx";
import Blog from "./components/Admin/SideBarComponents/Blog.jsx";
import FAQs from "./components/Admin/SideBarComponents/FAQs.jsx";
import DigitalCards from "./components/Admin/SideBarComponents/DigitalCards.jsx";
import Testimonials from "./components/Admin/SideBarComponents/Testimonials.jsx";
import Dashboard from "./components/Admin/SideBarComponents/Dashboard.jsx";
import Cards from "./components/Admin/SideBarComponents/Cards.jsx";

import Login from "./components/Auth/Login.jsx";
import Navigate from "./components/Auth/Navigate.jsx";


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
      <Route path="/Social-Media" element={<SocialMedia />} />
      <Route path="/Web-Designing" element={<WebDesigning />} />
      <Route path="/Website-Development" element={<WebsiteDevelopment />} />
      {/* Seo */}
      <Route path="/Enterprise" element={<EnterPrise />} />
      <Route path="/Local" element={<Local />} />
      <Route path="/White-Label" element={<WhiteLabel />} />
      <Route path="/Google-Recovery" element={<GoogleRecovery />} />
      <Route path="/Reseller-seo" element={<Reseller />} />
      <Route path="/Technical" element={<Technical />} />
      <Route path="/Seo-audit" element={<SeoAudit />} />
      <Route path="/Small-Business" element={<SmallBusiness />} />
      <Route path="/Video" element={<Video />} />
      {/* Design and development */}
      <Route
        path="/Ecommerce-Website-Design"
        element={<ECommerceWebSiteDesign />}
      />
      <Route path="/Flash-Animation-Design" element={<FlashAnimation />} />
      <Route path="/Multimedia-Designing" element={<Multimedia />} />
      <Route path="/Responsive-Web-Design" element={<Responsive />} />
      <Route path="/Seo-Friendly-Design" element={<SeoFriendly />} />
      <Route
        path="/E-commerce-Development"
        element={<ECommerceDevelopment />}
      />
      <Route path="/PHP-WebDevelopment" element={<PHPDevelopment />} />
      <Route path="/Laravel-Development" element={<LaravelDevelopment />} />
      <Route path="/Magento-Development" element={<MagentoDevelopment />} />
      <Route path="/Graphic-Design" element={<GraphicDesign />} />
      {/* Industries */}
      <Route path="/Accounting-Firms" element={<AccountingFirms />} />
      <Route path="/ECommerce-Solution" element={<IndustriesECommerce />} />
      <Route path="/education" element={<Educational />} />
      <Route path="/Electronics-Companies" element={<ElectronicsCompanies />} />
      <Route path="/healthcare" element={<HealthCare />} />
      <Route path="/Law-Firms" element={<LawFirms />} />
      <Route path="/Real-Estate-Solution" element={<RealEstate />} />
      <Route path="/Manufacturing" element={<Manufacturing />} />
      <Route path="/Media-Entertainment" element={<MediaEntertainment />} />
      <Route path="/Online-Courses" element={<OnlineCourses />} />
      {/* ECommerce-Marketing */}
      <Route
        path="/ECommerce-optimization"
        element={<ECommerceOptimization />}
      />
      <Route path="/ECommerce-seo" element={<ECommerceSEO />} />
      <Route path="/ECommerce-ppc" element={<ECommercePPC />} />
      <Route path="/shopify-seo" element={<ShopifySEO />} />
      <Route path="/amazon-marketing" element={<AmazonMarketing />} />
      <Route path="/amazon-seo" element={<AmazonSEO />} />
      <Route path="/amazon-advertising" element={<AmazonAdvertise />} />
      <Route path="/amazon-storefront" element={<AmazonStore />} />
      <Route path="/amazon-sellar-consulting" element={<AmazonSeller />} />
      <Route path="/amazon-posts-management" element={<AmazonPostMange />} />

      {/* Admin Routes with Nested Routes */}
      <Route path="/admin" element={<Admin />}>
        <Route path="blog" element={<Blog />} />
        <Route path="DigitalCards" element={<DigitalCards />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="FAQs" element={<FAQs />} />
        <Route path="Pages" element={<Pages />} />
        <Route path="Testimonials" element={<Testimonials />} />
        <Route path="Cards" element={<Cards />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
