import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AutomatizacionAI from "./pages/AutomatizacionAI";
import MachineLearning from "./pages/MachineLearning";
import SoftwareMedida from "./pages/SoftwareMedida";
import AnalisisDatos from "./pages/AnalisisDatos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/automatizacion-ai" element={<AutomatizacionAI />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/software-medida" element={<SoftwareMedida />} />
          <Route path="/analisis-datos" element={<AnalisisDatos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
