import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import ParityBit from "./pages/lessons/ParityBit";
import Checksum from "./pages/lessons/Checksum";
import CRC from "./pages/lessons/CRC";
import HammingCode from "./pages/lessons/HammingCode";
import DataEncoding from "./pages/lessons/DataEncoding";
import Transmission from "./pages/lessons/Transmission";
import Reception from "./pages/lessons/Reception";
import Checking from "./pages/lessons/Checking";
import Detection from "./pages/lessons/Detection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/lessons/parity-bit" element={<ParityBit />} />
          <Route path="/lessons/checksum" element={<Checksum />} />
          <Route path="/lessons/crc" element={<CRC />} />
          <Route path="/lessons/hamming-code" element={<HammingCode />} />
          <Route path="/lessons/data-encoding" element={<DataEncoding />} />
          <Route path="/lessons/transmission" element={<Transmission />} />
          <Route path="/lessons/reception" element={<Reception />} />
          <Route path="/lessons/checking" element={<Checking />} />
          <Route path="/lessons/detection" element={<Detection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
