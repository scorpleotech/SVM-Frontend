import React, {  Suspense,useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "./routes";
import store from "./Redux/store";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// export const isPrerendering = navigator.userAgent === 'ReactSnap';

// export function useIsPrerendering() {
//   const [isPrerender, setIsPrerender] = useState(true);
//   useEffect(() => {
//     if (!isPrerendering) {
//       setIsPrerender(false);
//     }
//   }, []);

//   return isPrerender;
// }

function App() {
  // const placeholder = <LoadingPlaceholder />;
  // const isPrerendering = useIsPrerendering();
  // if (isPrerendering) {
  //   return placeholder;
  // }

  // const LoadingPlaceholder = () => {
  //   return (
  //     <div>
  //       Loading...
  //     </div>
  //   );
  // }
  return (
    // <Suspense fallback={placeholder}>
    // </Suspense>
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </div>
  );
}

export default App;
