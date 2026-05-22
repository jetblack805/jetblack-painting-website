import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ExteriorPainting from "./pages/ExteriorPainting";
import InteriorPainting from "./pages/InteriorPainting";
import RoofPainting from "./pages/RoofPainting";
import CommercialPainting from "./pages/CommercialPainting";
import KeysboroughPainters from "./pages/KeysboroughPainters";
import FAQ from "./pages/FAQ";
import ToorakPainters from "./pages/ToorakPainters";
import MalvernPainters from "./pages/MalvernPainters";
import BrightonPainters from "./pages/BrightonPainters";
import CamberwellPainters from "./pages/CamberwellPainters";
import HawthornPainters from "./pages/HawthornPainters";
import BentleighPainters from "./pages/BentleighPainters";
import CaulfieldPainters from "./pages/CaulfieldPainters";
import HamptonPainters from "./pages/HamptonPainters";
import MordiallocPainters from "./pages/MordiallocPainters";
import Blog from "./pages/Blog";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      {/* Service Pages */}
      <Route path={"/services/interior-painting"} component={InteriorPainting} />
      <Route path={"/services/exterior-painting"} component={ExteriorPainting} />
      <Route path={"/services/roof-painting"} component={RoofPainting} />
      <Route path={"/services/commercial-painting"} component={CommercialPainting} />
      {/* Suburb Landing Pages */}
      <Route path={"/painter-toorak"} component={ToorakPainters} />
      <Route path={"/painters-toorak"} component={ToorakPainters} />
      <Route path={"/painter-malvern"} component={MalvernPainters} />
      <Route path={"/painters-malvern"} component={MalvernPainters} />
      <Route path={"/painter-brighton"} component={BrightonPainters} />
      <Route path={"/painters-brighton"} component={BrightonPainters} />
      <Route path={"/painter-camberwell"} component={CamberwellPainters} />
      <Route path={"/painters-camberwell"} component={CamberwellPainters} />
      <Route path={"/painter-hawthorn"} component={HawthornPainters} />
      <Route path={"/painters-hawthorn"} component={HawthornPainters} />
      <Route path={"/painter-bentleigh"} component={BentleighPainters} />
      <Route path={"/painters-bentleigh"} component={BentleighPainters} />
      <Route path={"/painter-caulfield"} component={CaulfieldPainters} />
      <Route path={"/painters-caulfield"} component={CaulfieldPainters} />
      <Route path={"/painter-hampton"} component={HamptonPainters} />
      <Route path={"/painters-hampton"} component={HamptonPainters} />
      <Route path={"/painter-mordialloc"} component={MordiallocPainters} />
      <Route path={"/painters-mordialloc"} component={MordiallocPainters} />
      <Route path={"/keysborough-painters"} component={KeysboroughPainters} />
      <Route path={"/painter-keysborough"} component={KeysboroughPainters} />
      {/* Content Pages */}
      <Route path={"/blog"} component={Blog} />
      <Route path={"/faq"} component={FAQ} />
      {/* 404 */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
