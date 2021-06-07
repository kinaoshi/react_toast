import "../styles/globals.css";
import { Toaster } from "react-hot-toast";



function MyApp({ Component, pageProps }) {
  return (
    <div>

      (<Component {...pageProps} />)
      <Toaster
  position="top-left"
  reverseOrder={false}
  gutter={30}
  containerClassName=""
  containerStyle={{top: 150,}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 1000,
    style: {
      background: '#363636',
      color: '#99094c',
    },
    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>

    </div>
  );
}

export default MyApp;
