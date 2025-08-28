import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import Industrial from "./pages/verticals/Industrial";
import InfraVenture from "./pages/verticals/InfraVenture";
import Hotels from "./pages/verticals/Hotels";
import Hospitality from "./pages/verticals/Hospitality";
import HealthFitness from "./pages/verticals/HealthFitness";

// Load AboutDetail immediately to prevent loading delay
import AboutDetail from "./pages/AboutDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/verticals/industrial" element={<Industrial />} />
          <Route path="/verticals/infraventure" element={<InfraVenture />} />
          <Route path="/verticals/hotels" element={<Hotels />} />
          <Route path="/verticals/hospitality" element={<Hospitality />} />
          <Route path="/verticals/health-fitness" element={<HealthFitness />} />
          <Route path="/about-detail" element={<AboutDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
