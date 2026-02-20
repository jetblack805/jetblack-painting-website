import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ExteriorPainting from "./pages/ExteriorPainting";
import KeysboroughPainters from "./pages/KeysboroughPainters";
import FAQ from "./pages/FAQ";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services/exterior-painting"} component={ExteriorPainting} />
      <Route path={"/keysborough-painters"} component={KeysboroughPainters} />
      <Route path={"/faq"} component={FAQ} />
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
