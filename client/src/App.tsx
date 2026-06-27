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
import KitchenCabinetResurfacingPage from "./pages/KitchenCabinetResurfacing";
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
import KewPainters from "./pages/KewPainters";
import SandringhamPainters from "./pages/SandringhamPainters";
import MentonePainters from "./pages/MentonePainters";
import CarltonPainters from "./pages/CarltonPainters";
import MorningtonPeninsulaPainters from "./pages/MorningtonPeninsulaPainters";
import BaysidePainters from "./pages/BaysidePainters";
import KingstonPainters from "./pages/KingstonPainters";
import GreaterDandenongPainters from "./pages/GreaterDandenongPainters";
import Blog from "./pages/Blog";
import ReviewUs from "./pages/ReviewUs";
import BestPaintColours2025 from "./pages/blog/BestPaintColours2025";
import HousePaintingCostMelbourne from "./pages/blog/HousePaintingCostMelbourne";
import PrepareHomePainting from "./pages/blog/PrepareHomePainting";
import KitchenCabinetResurfacingBlog from "./pages/blog/KitchenCabinetResurfacing";
import ArmadalePainters from "./pages/ArmadalePainters";
import BerwickPainters from "./pages/BerwickPainters";
import DandenongPainters from "./pages/DandenongPainters";
import DonvalePainters from "./pages/DonvalePainters";
import MoorabbinPainters from "./pages/MoorabbinPainters";
import StonningtonPainters from "./pages/StonningtonPainters";
import BoxHillPainters from "./pages/BoxHillPainters";
import CroydonPainters from "./pages/CroydonPainters";
import DoncasterPainters from "./pages/DoncasterPainters";
import GlenWaverleyPainters from "./pages/GlenWaverleyPainters";
import McKinnonPainters from "./pages/McKinnonPainters";
import MurrumbeenaPainters from "./pages/MurrumbeenaPainters";
import OrmondPainters from "./pages/OrmondPainters";
import RingwoodPainters from "./pages/RingwoodPainters";
import TemplestowePainters from "./pages/TemplestowePainters";
import WheelersHillPainters from "./pages/WheelersHillPainters";

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
      <Route path={"/services/kitchen-cabinet-resurfacing"} component={KitchenCabinetResurfacingPage} />
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
      <Route path={"/painters-keysborough"} component={KeysboroughPainters} />
      <Route path={"/painter-kew"} component={KewPainters} />
      <Route path={"/painters-kew"} component={KewPainters} />
      <Route path={"/painter-sandringham"} component={SandringhamPainters} />
      <Route path={"/painters-sandringham"} component={SandringhamPainters} />
      <Route path={"/painter-mentone"} component={MentonePainters} />
      <Route path={"/painters-mentone"} component={MentonePainters} />
      <Route path={"/painter-carlton"} component={CarltonPainters} />
      <Route path={"/painters-carlton"} component={CarltonPainters} />
      <Route path={"/painter-mornington-peninsula"} component={MorningtonPeninsulaPainters} />
      <Route path={"/painters-mornington-peninsula"} component={MorningtonPeninsulaPainters} />
      <Route path={"/painter-bayside"} component={BaysidePainters} />
      <Route path={"/painters-bayside"} component={BaysidePainters} />
      <Route path={"/painter-kingston"} component={KingstonPainters} />
      <Route path={"/painters-kingston"} component={KingstonPainters} />
      <Route path={"/painter-greater-dandenong"} component={GreaterDandenongPainters} />
      <Route path={"/painters-greater-dandenong"} component={GreaterDandenongPainters} />
      <Route path={"/painter-armadale"} component={ArmadalePainters} />
      <Route path={"/painters-armadale"} component={ArmadalePainters} />
      <Route path={"/painter-berwick"} component={BerwickPainters} />
      <Route path={"/painters-berwick"} component={BerwickPainters} />
      <Route path={"/painter-dandenong"} component={DandenongPainters} />
      <Route path={"/painters-dandenong"} component={DandenongPainters} />
      <Route path={"/painter-donvale"} component={DonvalePainters} />
      <Route path={"/painters-donvale"} component={DonvalePainters} />
      <Route path={"/painter-moorabbin"} component={MoorabbinPainters} />
      <Route path={"/painters-moorabbin"} component={MoorabbinPainters} />
      <Route path={"/painter-stonnington"} component={StonningtonPainters} />
      <Route path={"/painters-stonnington"} component={StonningtonPainters} />
      <Route path={"/painter-box-hill"} component={BoxHillPainters} />
      <Route path={"/painters-box-hill"} component={BoxHillPainters} />
      <Route path={"/painter-croydon"} component={CroydonPainters} />
      <Route path={"/painters-croydon"} component={CroydonPainters} />
      <Route path={"/painter-doncaster"} component={DoncasterPainters} />
      <Route path={"/painters-doncaster"} component={DoncasterPainters} />
      <Route path={"/painter-glen-waverley"} component={GlenWaverleyPainters} />
      <Route path={"/painters-glen-waverley"} component={GlenWaverleyPainters} />
      <Route path={"/painter-mckinnon"} component={McKinnonPainters} />
      <Route path={"/painters-mckinnon"} component={McKinnonPainters} />
      <Route path={"/painter-murrumbeena"} component={MurrumbeenaPainters} />
      <Route path={"/painters-murrumbeena"} component={MurrumbeenaPainters} />
      <Route path={"/painter-ormond"} component={OrmondPainters} />
      <Route path={"/painters-ormond"} component={OrmondPainters} />
      <Route path={"/painter-ringwood"} component={RingwoodPainters} />
      <Route path={"/painters-ringwood"} component={RingwoodPainters} />
      <Route path={"/painter-templestowe"} component={TemplestowePainters} />
      <Route path={"/painters-templestowe"} component={TemplestowePainters} />
      <Route path={"/painter-wheelers-hill"} component={WheelersHillPainters} />
      <Route path={"/painters-wheelers-hill"} component={WheelersHillPainters} />
      {/* Blog Pages */}
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/best-paint-colours-melbourne-2025"} component={BestPaintColours2025} />
      <Route path={"/blog/house-painting-cost-melbourne"} component={HousePaintingCostMelbourne} />
      <Route path={"/blog/prepare-home-for-painting"} component={PrepareHomePainting} />
      <Route path={"/blog/kitchen-cabinet-resurfacing-vs-replacement"} component={KitchenCabinetResurfacingBlog} />
      <Route path={"/blog/best-paint-colors-melbourne"} component={BestPaintColours2025} />
      <Route path={"/blog/brighton-painters-guide"} component={BrightonPainters} />
      <Route path={"/blog/camberwell-painters-guide"} component={CamberwellPainters} />
      <Route path={"/blog/commercial-vs-residential"} component={CommercialPainting} />
      <Route path={"/blog/exterior-paint-protection"} component={ExteriorPainting} />
      <Route path={"/blog/exterior-painting-preparation"} component={PrepareHomePainting} />
      <Route path={"/blog/glen-waverley-painting-guide"} component={GlenWaverleyPainters} />
      <Route path={"/blog/hawthorn-painting-services"} component={HawthornPainters} />
      <Route path={"/blog/how-to-choose-painter"} component={PrepareHomePainting} />
      <Route path={"/blog/interior-painting-cost-guide"} component={HousePaintingCostMelbourne} />
      <Route path={"/blog/paint-color-trends-2024"} component={BestPaintColours2025} />
      <Route path={"/blog/seasonal-painting-guide"} component={PrepareHomePainting} />
      <Route path={"/blog/toorak-painting-guide"} component={ToorakPainters} />
      {/* Other Pages */}
      <Route path={"/review-us"} component={ReviewUs} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/about"} component={Home} />
      <Route path={"/contact"} component={Home} />
      <Route path={"/our-work"} component={Home} />
      <Route path={"/interior-painting"} component={InteriorPainting} />
      <Route path={"/kitchen-cabinet-resurfacing"} component={KitchenCabinetResurfacingPage} />
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
