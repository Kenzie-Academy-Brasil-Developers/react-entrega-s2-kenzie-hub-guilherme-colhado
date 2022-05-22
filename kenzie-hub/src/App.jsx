import { AppStyle, GlobalStyle } from "./GlobalStyle"
import { RouteComponent } from "./Routes"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <AppStyle>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        style={{
          fontSize: '1.5rem'
        }}
        closeOnClick
        rtl={false}
        theme='dark'
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <GlobalStyle/>
      <RouteComponent/>
    </AppStyle>
  );
}

export default App;
