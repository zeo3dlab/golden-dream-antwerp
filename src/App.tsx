import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import WeddingRings from "./pages/WeddingRings";
import EngagementRings from "./pages/EngagementRings";
import DiamondJewelry from "./pages/DiamondJewelry";
import CustomDesign from "./pages/CustomDesign";
import CashForGold from "./pages/CashForGold";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/wedding-rings" element={<WeddingRings />} />
            <Route path="/engagement-rings" element={<EngagementRings />} />
            <Route path="/diamond-jewelry" element={<DiamondJewelry />} />
            <Route path="/custom-design" element={<CustomDesign />} />
            <Route path="/cash-for-gold" element={<CashForGold />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
