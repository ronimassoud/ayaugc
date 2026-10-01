import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Challenge from "./pages/challenge";
import Brands from "./pages/brands";
import { About, Contact, FreeGuide, Privacy, Refunds, Templates, Terms } from "./pages/simple-pages";
import NotFound from "./pages/not-found";
import CampaignTracker from "./components/campaign-tracker";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CampaignTracker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/free-guide" element={<FreeGuide />} />
            <Route path="/ugc-guide" element={<Navigate to="/free-guide" replace />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/template" element={<Navigate to="/templates" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refunds" element={<Refunds />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
