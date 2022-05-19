import { AppStyle, GlobalStyle } from "./GlobalStyle";
import { RouteComponent } from "./Routes";


function App() {
  return (
    <AppStyle>
      <GlobalStyle/>
      <RouteComponent/>
    </AppStyle>
  );
}

export default App;
