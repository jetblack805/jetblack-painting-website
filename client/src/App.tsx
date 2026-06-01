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
import PreSalePropertyPainting from "./pages/PreSalePropertyPainting";
import RentalPropertyPainting from "./pages/RentalPropertyPainting";
import RoofFencePainting from "./pages/RoofFencePainting";
import KitchenCabinetResurfacing from "./pages/KitchenCabinetResurfacing";
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
import ReviewUs from "./pages/ReviewUs";
import BestPaintColours2025 from "./pages/blog/BestPaintColours2025";
import HousePaintingCostMelbourne from "./pages/blog/HousePaintingCostMelbourne";
import PrepareHomePainting from "./pages/blog/PrepareHomePainting";
import KitchenCabinetResurfacing from "./pages/blog/KitchenCabinetResurfacing";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      {/* Service Pages */}
      <Route path={"/services/interior-painting"} component={InteriorPainting} />
      <Route path={"/services/exterior-painting"} component={ExteriorPainting} />
      <Route path={"/services/roof-painting"} component={RoofPainting} />
      <Route path={"/services/commercial-painting"} component={CommercialPainting} />
      <Route path={"/services/pre-sale-property-painting"} component={PreSalePropertyPainting} />
      <Route path={"/services/rental-property-painting"} component={RentalPropertyPainting} />
      <Route path={"/services/roof-fence-painting"} component={RoofFencePainting} />
      <Route path={"/services/kitchen-cabinet-resurfacing"} component={KitchenCabinetResurfacing} />
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
      {/* Blog Pages */}
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/best-paint-colours-melbourne-2025"} component={BestPaintColours2025} />
      <Route path={"/blog/house-painting-cost-melbourne"} component={HousePaintingCostMelbourne} />
      <Route path={"/blog/prepare-home-for-painting"} component={PrepareHomePainting} />
      <Route path={"/blog/kitchen-cabinet-resurfacing-vs-replacement"} component={KitchenCabinetResurfacing} />
      {/* Other Pages */}
      <Route path={"/review-us"} component={ReviewUs} />
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
