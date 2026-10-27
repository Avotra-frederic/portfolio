export function HadiPharmaCover() {
  return <div className="project-art hadipharma-art" aria-hidden="true">
    <div className="pharma-dashboard">
      <div className="pharma-side"><b>H</b><i/><i/><i/><i/></div>
      <div className="pharma-content">
        <div className="pharma-stats"><div><span>Pharmacies</span><b>Actives</b><i>Vue globale</i></div><div><span>Commandes</span><b>Suivies</b><i>En cours</i></div><div><span>Produits</span><b>Gérées</b><i>En stock</i></div></div>
        <div className="pharma-lower"><div className="pharma-chart"><span>Activité</span><div>{[34,52,43,68,51,82,62,92].map((height, index) => <i key={index} style={{ height: `${height}%` }}/>)}</div></div><div className="pharma-store"><b>+</b><span>Pharmacie Centrale</span><small>Antananarivo · Active</small><em>● En ligne</em></div></div>
      </div>
    </div>
  </div>;
}
