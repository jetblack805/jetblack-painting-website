import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import StickyCallBar from "./components/StickyCallBar";
import { ThemeProvider } from "./contexts/ThemeContext";
const Home = lazy(() => import("./pages/Home"));
const ExteriorPainting = lazy(() => import("./pages/ExteriorPainting"));
const InteriorPainting = lazy(() => import("./pages/InteriorPainting"));
const RoofPainting = lazy(() => import("./pages/RoofPainting"));
const CommercialPainting = lazy(() => import("./pages/CommercialPainting"));
const RoofFencePainting = lazy(() => import("./pages/RoofFencePainting"));
const RealEstatePainting = lazy(() => import("./pages/RealEstatePainting"));
const BodyCorporatePainting = lazy(() => import("./pages/BodyCorporatePainting"));
const KitchenCabinetResurfacingPage = lazy(() => import("./pages/KitchenCabinetResurfacing"));
const KeysboroughPainters = lazy(() => import("./pages/KeysboroughPainters"));
const FAQ = lazy(() => import("./pages/FAQ"));
const ToorakPainters = lazy(() => import("./pages/ToorakPainters"));
const MalvernPainters = lazy(() => import("./pages/MalvernPainters"));
const BrightonPainters = lazy(() => import("./pages/BrightonPainters"));
const CamberwellPainters = lazy(() => import("./pages/CamberwellPainters"));
const HawthornPainters = lazy(() => import("./pages/HawthornPainters"));
const BentleighPainters = lazy(() => import("./pages/BentleighPainters"));
const CaulfieldPainters = lazy(() => import("./pages/CaulfieldPainters"));
const HamptonPainters = lazy(() => import("./pages/HamptonPainters"));
const MordiallocPainters = lazy(() => import("./pages/MordiallocPainters"));
const KewPainters = lazy(() => import("./pages/KewPainters"));
const SandringhamPainters = lazy(() => import("./pages/SandringhamPainters"));
const MentonePainters = lazy(() => import("./pages/MentonePainters"));
const CarltonPainters = lazy(() => import("./pages/CarltonPainters"));
const MorningtonPeninsulaPainters = lazy(() => import("./pages/MorningtonPeninsulaPainters"));
const BaysidePainters = lazy(() => import("./pages/BaysidePainters"));
const KingstonPainters = lazy(() => import("./pages/KingstonPainters"));
const GreaterDandenongPainters = lazy(() => import("./pages/GreaterDandenongPainters"));
const Blog = lazy(() => import("./pages/Blog"));
const ReviewUs = lazy(() => import("./pages/ReviewUs"));
const BestPaintColours2025 = lazy(() => import("./pages/blog/BestPaintColours2025"));
const HousePaintingCostMelbourne = lazy(() => import("./pages/blog/HousePaintingCostMelbourne"));
const PrepareHomePainting = lazy(() => import("./pages/blog/PrepareHomePainting"));
const KitchenCabinetResurfacingBlog = lazy(() => import("./pages/blog/KitchenCabinetResurfacing"));
const MouldRemediationPainting = lazy(() => import("./pages/blog/MouldRemediationPainting"));
const ArmadalePainters = lazy(() => import("./pages/ArmadalePainters"));
const BerwickPainters = lazy(() => import("./pages/BerwickPainters"));
const DandenongPainters = lazy(() => import("./pages/DandenongPainters"));
const DonvalePainters = lazy(() => import("./pages/DonvalePainters"));
const MoorabbinPainters = lazy(() => import("./pages/MoorabbinPainters"));
const StonningtonPainters = lazy(() => import("./pages/StonningtonPainters"));
const BoxHillPainters = lazy(() => import("./pages/BoxHillPainters"));
const CroydonPainters = lazy(() => import("./pages/CroydonPainters"));
const DoncasterPainters = lazy(() => import("./pages/DoncasterPainters"));
const GlenWaverleyPainters = lazy(() => import("./pages/GlenWaverleyPainters"));
const McKinnonPainters = lazy(() => import("./pages/McKinnonPainters"));
const MurrumbeenaPainters = lazy(() => import("./pages/MurrumbeenaPainters"));
const OrmondPainters = lazy(() => import("./pages/OrmondPainters"));
const RingwoodPainters = lazy(() => import("./pages/RingwoodPainters"));
const TemplestowePainters = lazy(() => import("./pages/TemplestowePainters"));
const WheelersHillPainters = lazy(() => import("./pages/WheelersHillPainters"));
const CheltenhamPainters = lazy(() => import("./pages/CheltenhamPainters"));
const ParkdalePainters = lazy(() => import("./pages/ParkdalePainters"));
const AspendalePainters = lazy(() => import("./pages/AspendalePainters"));
const ChelseaPainters = lazy(() => import("./pages/ChelseaPainters"));
const SouthYarraPainters = lazy(() => import("./pages/SouthYarraPainters"));
const ElsternwickPainters = lazy(() => import("./pages/ElsternwickPainters"));
const BeaumarisPainters = lazy(() => import("./pages/BeaumarisPainters"));
const BlackRockPainters = lazy(() => import("./pages/BlackRockPainters"));
const BrightonEastPainters = lazy(() => import("./pages/BrightonEastPainters"));
const HighettPainters = lazy(() => import("./pages/HighettPainters"));
const HeathertonPainters = lazy(() => import("./pages/HeathertonPainters"));
const EdithvalePainters = lazy(() => import("./pages/EdithvalePainters"));
const BonbeachPainters = lazy(() => import("./pages/BonbeachPainters"));
const CarrumPainters = lazy(() => import("./pages/CarrumPainters"));
const OakleighPainters = lazy(() => import("./pages/OakleighPainters"));
const ClarindaPainters = lazy(() => import("./pages/ClarindaPainters"));
const ChadsonePainters = lazy(() => import("./pages/ChadstonePainters"));
const FrankstonPainters = lazy(() => import("./pages/FrankstonPainters"));
const MorningtonPainters = lazy(() => import("./pages/MorningtonPainters"));
const MountElizaPainters = lazy(() => import("./pages/MountElizaPainters"));

function Router() {
  return (
    <Suspense fallback={null}>
    <Switch>
      <Route path={"/"} component={Home} />
      {/* Service Pages */}
      <Route path={"/services/interior-painting"} component={InteriorPainting} />
      <Route path={"/services/exterior-painting"} component={ExteriorPainting} />
      <Route path={"/services/roof-painting"} component={RoofPainting} />
      <Route path={"/services/commercial-painting"} component={CommercialPainting} />
      <Route path={"/services/roof-fence-painting"} component={RoofFencePainting} />
      <Route path={"/services/kitchen-cabinet-resurfacing"} component={KitchenCabinetResurfacingPage} />
      <Route path={"/services/real-estate-painting"} component={RealEstatePainting} />
      <Route path={"/services/body-corporate-painting"} component={BodyCorporatePainting} />
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
      <Route path={"/painter-cheltenham"} component={CheltenhamPainters} />
      <Route path={"/painters-cheltenham"} component={CheltenhamPainters} />
      <Route path={"/painter-parkdale"} component={ParkdalePainters} />
      <Route path={"/painters-parkdale"} component={ParkdalePainters} />
      <Route path={"/painter-aspendale"} component={AspendalePainters} />
      <Route path={"/painters-aspendale"} component={AspendalePainters} />
      <Route path={"/painter-chelsea"} component={ChelseaPainters} />
      <Route path={"/painters-chelsea"} component={ChelseaPainters} />
      <Route path={"/painter-south-yarra"} component={SouthYarraPainters} />
      <Route path={"/painters-south-yarra"} component={SouthYarraPainters} />
      <Route path={"/painter-elsternwick"} component={ElsternwickPainters} />
      <Route path={"/painters-elsternwick"} component={ElsternwickPainters} />
      <Route path={"/painter-beaumaris"} component={BeaumarisPainters} />
      <Route path={"/painters-beaumaris"} component={BeaumarisPainters} />
      <Route path={"/painter-black-rock"} component={BlackRockPainters} />
      <Route path={"/painters-black-rock"} component={BlackRockPainters} />
      <Route path={"/painter-brighton-east"} component={BrightonEastPainters} />
      <Route path={"/painters-brighton-east"} component={BrightonEastPainters} />
      <Route path={"/painter-highett"} component={HighettPainters} />
      <Route path={"/painters-highett"} component={HighettPainters} />
      <Route path={"/painter-heatherton"} component={HeathertonPainters} />
      <Route path={"/painters-heatherton"} component={HeathertonPainters} />
      <Route path={"/painter-edithvale"} component={EdithvalePainters} />
      <Route path={"/painters-edithvale"} component={EdithvalePainters} />
      <Route path={"/painter-bonbeach"} component={BonbeachPainters} />
      <Route path={"/painters-bonbeach"} component={BonbeachPainters} />
      <Route path={"/painter-carrum"} component={CarrumPainters} />
      <Route path={"/painters-carrum"} component={CarrumPainters} />
      <Route path={"/painter-oakleigh"} component={OakleighPainters} />
      <Route path={"/painters-oakleigh"} component={OakleighPainters} />
      <Route path={"/painter-clarinda"} component={ClarindaPainters} />
      <Route path={"/painters-clarinda"} component={ClarindaPainters} />
      <Route path={"/painter-chadstone"} component={ChadsonePainters} />
      <Route path={"/painters-chadstone"} component={ChadsonePainters} />
      <Route path={"/painter-frankston"} component={FrankstonPainters} />
      <Route path={"/painters-frankston"} component={FrankstonPainters} />
      <Route path={"/painter-mornington"} component={MorningtonPainters} />
      <Route path={"/painters-mornington"} component={MorningtonPainters} />
      <Route path={"/painter-mount-eliza"} component={MountElizaPainters} />
      <Route path={"/painters-mount-eliza"} component={MountElizaPainters} />
      {/* Blog Pages */}
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/best-paint-colours-melbourne-2025"} component={BestPaintColours2025} />
      <Route path={"/blog/house-painting-cost-melbourne"} component={HousePaintingCostMelbourne} />
      <Route path={"/blog/prepare-home-for-painting"} component={PrepareHomePainting} />
      <Route path={"/blog/kitchen-cabinet-resurfacing-vs-replacement"} component={KitchenCabinetResurfacingBlog} />
      <Route path={"/blog/mould-remediation-painting-melbourne"} component={MouldRemediationPainting} />
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
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="pb-14 lg:pb-0">
            <Router />
          </div>
          <StickyCallBar />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
