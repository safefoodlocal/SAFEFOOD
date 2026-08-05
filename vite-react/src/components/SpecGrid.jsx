export default function SpecGrid({ specs }) {
  const fieldLabels = {
    // Fresh produce fields
    categories: 'Categories',
    season: 'Season',
    packing: 'Packing',
    weight: 'Weight',
    temperature: 'Temperature',
    humidity: 'Humidity',
    storagePeriod: 'Storage Period',
    size: 'Size',
    // Dehydrated fields
    degreeOfPurity: 'Degree of Purity',
    percentageOfForeignMatter: 'Percentage of Foreign Matter',
    // Frozen fields
    category: 'Category',
    // Jams fields
    concentration: 'Concentration',
    fcl: 'F.C.L',
    // Juice fields
    // Legumes fields
    numberOfBeads: 'Number of Beads',
    // Olive oil fields
    acidity: 'Acidity',
    // Tomato paste fields
    // Generic fallback
  }

  return (
    <div className="spec-grid">
      {Object.entries(specs).map(([key, value]) => {
        if (!value) return null
        
        return (
          <div key={key} className="spec-row">
            <div className="spec-label">{fieldLabels[key] || key.charAt(0).toUpperCase() + key.slice(1)}</div>
            <div className="spec-value">
              {Array.isArray(value) ? (
                value.map((item, index) => (
                  <div key={index} className="spec-value-item">{item}</div>
                ))
              ) : (
                <div className="spec-value-item">{value}</div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
