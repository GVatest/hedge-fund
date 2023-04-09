import Main, { sections } from "pages/main";
import { Container } from "shared/components";
import Account from "widgets/Account";
import { Footer, Navigation, Sidebar } from "./components";
import { withProviders } from "./providers";

function App() {
  return (
    <Container>
      <Sidebar>
        <Account />
        <Navigation sections={sections} />
      </Sidebar>
      <Main />
      <Footer />
    </Container>
  );
}

export default withProviders(App);
