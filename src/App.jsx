import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import ConnexionAgriculteur from './pages/auth/ConnexionAgriculteur'
import ConnexionVendeur from './pages/auth/ConnexionVendeur'
import InscriptionVendeur from './pages/auth/InscriptionVendeur'
import InscriptionAgriculteur from './pages/auth/InscriptionAgriculteur'
import MotDePasseOublieAgriculteur from './pages/auth/MotDePasseOublieAgriculteur'
import MotDePasseOublieVendeur from './pages/auth/MotDePasseOublieVendeur'
import NouveauMotDePasse from './pages/auth/NouveauMotDePasse'
import PageClientP from './pages/client/accueil/AccueilPage'
import ProduitPage from './pages/client/produits/id/ProduitPage'
import AvisPage from './pages/client/support/AvisPage'
import PageClientDashboard from './pages/client/produits/ListeProduitsPage'
import PageClientSupport from './pages/client/support/AvisPage'
import PageClientPanier from './pages/client/panier/PanierPage'
import PageClientProduitsPrmo from './pages/client/produits/Promotions'
import PageClientHistorique from './pages/client/commande/Historique'
import PageClientCompte from './pages/client/compte/ComptePage'








export default function App() {
  return (
    <Routes>
     <Route path="/" element={<Accueil />} />
<Route path="/connexion_Agriculteur" element={<ConnexionAgriculteur />} />
<Route path="/connexion_vendeur" element={<ConnexionVendeur />} />
<Route path="/inscription_vendeur" element={<InscriptionVendeur />} />
<Route path="/inscription_agriculteur" element={<InscriptionAgriculteur />} />
<Route path="/mot_de_passe_oublie_agriculteur" element={<MotDePasseOublieAgriculteur />} />
<Route path="/mot_de_passe_oublie_vendeur" element={<MotDePasseOublieVendeur />} />
<Route path="/nouveau_mot_de_passe/:token" element={<NouveauMotDePasse />} />
<Route path="/client" element={<PageClientP />} />
<Route path="/client/dashboard" element={<PageClientDashboard />} />
<Route path="/client/historique" element={<PageClientHistorique />} />

<Route path="/client/promotions" element={<PageClientProduitsPrmo />} />
<Route path="/client/support" element={<PageClientSupport />} />
<Route path="/client/panier" element={<PageClientPanier />} />
<Route path="/client/produits/:category/:id/avis" element={<AvisPage />} />
<Route path="/client/compte" element={< PageClientCompte/>} />


      
    
     

    
    </Routes>
  )
}