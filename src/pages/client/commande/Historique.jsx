import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaExclamationTriangle, FaClock, FaSearch } from 'react-icons/fa';
import DashboardLayout from '../../client/accueil/DashboardLayout';
import { SectionTitle } from '../../../styles/StyledComponents';

// Données fictives des commandes
const commandes = [
  {
    id: 1,
    date: '2025-04-15',
    statut: 'Livrée',
    total: 45000,
    modePaiement: 'Carte bancaire',
    produits: [
      { nom: 'Casque Minier', quantite: 1, prix: 25000 },
      { nom: 'Gants de sécurité', quantite: 2, prix: 10000 },
    ],
  },
  {
    id: 2,
    date: '2025-04-18',
    statut: 'En préparation',
    total: 60000,
    modePaiement: 'Orange Money',
    produits: [
      { nom: 'Lunettes de protection', quantite: 1, prix: 10000 },
      { nom: 'Casque Minier', quantite: 1, prix: 25000 },
      { nom: 'Gants de sécurité', quantite: 2, prix: 10000 },
    ],
  },
  {
    id: 3,
    date: '2025-04-20',
    statut: 'En attente',
    total: 30000,
    modePaiement: 'Wave',
    produits: [
      { nom: 'Casque Minier', quantite: 1, prix: 25000 },
    ],
  },
];

const HistoriquePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCommandes, setFilteredCommandes] = useState(commandes);

  const filtrerCommandes = () => {
    const commandesFiltrees = commandes.filter((commande) =>
      commande.produits.some((produit) =>
        produit.nom.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredCommandes(commandesFiltrees);
  };

  return (
    <DashboardLayout>
      <SectionTitle>Historique des Commandes</SectionTitle>

      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Rechercher une commande..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={filtrerCommandes}><FaSearch /></SearchButton>
      </SearchBar>

      {filteredCommandes.length === 0 ? (
        <Message>Aucune commande trouvée pour cette recherche.</Message>
      ) : (
        <CommandesList>
          {filteredCommandes.map((commande) => (
            <CommandeCard key={commande.id}>
              <Header>
                <CommandeInfo>
                  <span>Commande #{commande.id}</span>
                  <span>{commande.date}</span>
                </CommandeInfo>
                <Status statut={commande.statut}>
                  {commande.statut === 'Livrée' ? <FaCheckCircle /> : 
                   commande.statut === 'En préparation' ? <FaClock /> : 
                   <FaExclamationTriangle />}
                  {commande.statut}
                </Status>
              </Header>

              <Detail>
                <span><strong>Total :</strong> {commande.total.toLocaleString()} FCFA</span>
                <span><strong>Mode de paiement :</strong> {commande.modePaiement}</span>
              </Detail>

              <Produits>
                {commande.produits.map((produit, index) => (
                  <Produit key={index}>
                    <span>{produit.nom} (x{produit.quantite})</span>
                    <span>{(produit.prix * produit.quantite).toLocaleString()} FCFA</span>
                  </Produit>
                ))}
              </Produits>

              <Actions>
                {commande.statut === 'En attente' && <ButtonAnnuler>Annuler la commande</ButtonAnnuler>}
                <ButtonDetails>Détails</ButtonDetails>
              </Actions>
            </CommandeCard>
          ))}
        </CommandesList>
      )}
    </DashboardLayout>
  );
};

export default HistoriquePage;

// STYLES
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  padding: 0.75rem;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SearchButton = styled.button`
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #888;
`;

const CommandesList = styled.div`
  margin-top: 2rem;
`;

const CommandeCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommandeInfo = styled.div`
  font-size: 1.1rem;
`;

const Status = styled.div`
  color: ${({ statut }) => (statut === 'Livrée' ? 'green' : statut === 'En préparation' ? 'orange' : 'red')};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Detail = styled.div`
  margin-top: 1rem;
`;

const Produits = styled.div`
  margin-top: 1rem;
`;

const Produit = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const ButtonAnnuler = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e60000;
  }
`;

const ButtonDetails = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;
