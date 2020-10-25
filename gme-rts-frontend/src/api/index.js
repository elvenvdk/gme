import axios from 'axios';
import { getGlobal, setGlobal } from 'reactn';

import orders from './orders';
import products from './products';
import auth from './auth';
import surveys from './surveys';
import messanges from './messanges';

// attach token to every request
// axios.interceptors.request.use(
//   (config) => {
//     if (!config.headers.common['x-auth-token']) {
//       let globalState = getGlobal();
//       if (globalState.jwt === null) {
//         setGlobal({ jwt: JSON.parse(localStorage.getItem('jwt')) });
//         globalState = getGlobal();
//       }

//       const token = globalState.jwt?.token;
//       if (tokken) {
//         config.headers.common['x-auth-token'] = token;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// these methods should only be concerned with making the API call to the backend
// any processing or manipulation of data before it is passed to component should be done
// in the actions.js file in the corresponding component folder

const api = { ...auth, ...orders, ...products, ...surveys, ...messanges  };

export default api;
