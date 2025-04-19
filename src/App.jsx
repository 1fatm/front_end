import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import ConnexionAgriculteur from './pages/auth/ConnexionAgriculteur'
import ConnexionVendeur from './pages/auth/ConnexionVendeur'
import InscriptionVendeur from './pages/auth/InscriptionVendeur'
import InscriptionAgriculteur from './pages/auth/InscriptionAgriculteur'
import MotDePasseOublieAgriculteur from './pages/auth/MotDePasseOublieAgriculteur'
import MotDePasseOublieVendeur from './pages/auth/MotDePasseOublieVendeur'
import NouveauMotDePasse from './pages/auth/NouveauMotDePasse'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/connexion_Agriculteur" element={<ConnexionAgriculteur />} />
      <Route path="/connexion_vendeur" element={<ConnexionVendeur />} />
      <Route path="//inscription_vendeur" element={<InscriptionVendeur />} />
      <Route path="/inscription_agriculteur" element={<InscriptionAgriculteur />} />
      <Route path="/mot_de_passe_oublie_agriculteur" element={<MotDePasseOublieAgriculteur />} />
      <Route path="/mot_de_passe_oublie_vendeur" element={<MotDePasseOublieVendeur />} />
      <Route path="/nouveau_mot_de_passe/:token" element={<NouveauMotDePasse />} />

    
    </Routes>
  )
}