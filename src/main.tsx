import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
/** ici j'enlève le strict mode, car ça me les casse plus qu'autre chose, d'après mes souvenirs il refais plusieurs fois l'exec des effects pour s'assurer qu'ils soient visible dans l'environnement de dev ! c'est completment con ce truc :D  */
/** sinon j'aime bien ton aproche d'utiliser les modules css c'est excelent de l'utiliser comme ça surtout si tu ne eux pas de bleeding d'un style sur un déscendant.  En revanche il faut pas systematiqueme le faire si tu veux par exemple appliquer un style en one shot sur plusieurs éléments qui devraient avoir le même style */

createRoot(document.getElementById('root')!).render(<App />);
