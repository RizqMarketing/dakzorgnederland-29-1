import React, { useState, useEffect } from 'react';
import { Calculator, Home, Building2, Wrench, Check, ArrowRight, Hammer, HardHat, ShieldCheck, Droplets, Sun } from 'lucide-react';

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    projectType: 'dakrenovatie',
    buildingType: '',
    size: '',
    specifications: {
      flooring: '',
      kitchen: '',
      bathroom: '',
      heating: '',
      insulation: ''
    },
    location: '',
    timeline: ''
  });

  const [estimate, setEstimate] = useState(null);
  const [activeTab, setActiveTab] = useState('dakwerk');

  const projectTypes = [
    { id: 'dakrenovatie', label: 'Dakrenovatie', icon: Hammer, desc: 'Renovatie van bestaand dak' },
    { id: 'nieuwdak', label: 'Nieuw Dak', icon: Home, desc: 'Volledig nieuw dak plaatsen' },
    { id: 'onderhoud', label: 'Dakonhderhoud', icon: ShieldCheck, desc: 'Onderhoud en reparaties' }
  ];

  const buildingTypes = [
    { id: 'schuin', label: 'Schuin Dak', basePrice: 65 },
    { id: 'plat', label: 'Plat Dak', basePrice: 55 },
    { id: 'mansard', label: 'Mansarde Dak', basePrice: 85 },
    { id: 'geen', label: 'Nieuw/Dakopbouw', basePrice: 75 }
  ];

  const specifications = {
    tiles: [
      { id: 'bitumen', label: 'Bitumen', sublabel: 'Klassieke dakbedekking', multiplier: 1.0 },
      { id: 'pannen', label: 'Dakpannen', sublabel: 'Keramiek of beton', multiplier: 1.1 },
      { id: 'metaal', label: 'Metalen Dak', sublabel: 'Zink, koper of staal', multiplier: 1.2 }
    ],
    insulation: [
      { id: 'basic', label: 'Basis Isolatie', sublabel: 'Minimale eisen', multiplier: 1.0 },
      { id: 'good', label: 'Goede Isolatie', sublabel: 'HR++ glas', multiplier: 1.05 },
      { id: 'excellent', label: 'Uitmuntend', sublabel: 'PIR of PUR isolatie', multiplier: 1.1 }
    ],
    guttering: [
      { id: 'pvc', label: 'PVC', sublabel: 'Standaaard afvoer', multiplier: 1.0 },
      { id: 'zink', label: 'Zinken Goten', sublabel: 'Duurzaam materiaal', multiplier: 1.08 },
      { id: 'koper', label: 'Koperen Goten', sublabel: 'Premium afwerking', multiplier: 1.15 }
    ],
    ventilation: [
      { id: 'basic', label: 'Basis Ventilatie', sublabel: 'Traditionele roosters', multiplier: 1.0 },
      { id: 'mechanical', label: 'Mechanische Ventilatie', sublabel: 'Actieve luchtcirculatie', multiplier: 1.08 },
      { id: 'smart', label: 'Slimme Ventilatie', sublabel: 'Automatisch geregelde lucht', multiplier: 1.12 }
    ],
    safety: [
      { id: 'basic', label: 'Basis Beveiliging', sublabel: 'Valbeveiliging aanbrengen', multiplier: 1.0 },
      { id: 'enhanced', label: 'Verbeterde Veiligheid', sublabel: 'Extra bevestiging en conctrol', multiplier: 1.05 },
      { id: 'premium', label: 'Premium Veiligheid', sublabel: 'Volledige valbescherming en liften', multiplier: 1.08 }
    ]
  };

  const specLabels = {
    tiles: 'Dakbedekking',
    insulation: 'Isolatie',
    guttering: 'Goten & Afvoer',
    ventilation: 'Ventilatie',
    safety: 'Veiligheid & Montage'
  };

  const calculateEstimate = () => {
    if (!formData.projectType || !formData.buildingType || !formData.size) return;

    const buildingType = buildingTypes.find(bt => bt.id === formData.buildingType);
    const basePrice = buildingType.basePrice;
    const size = parseInt(formData.size) || 0;

    let totalMultiplier = 1.0;

    // Afhankelijk van projecttype
    if (formData.projectType === 'dakrenovatie') totalMultiplier *= 0.9; // Renovatie is goedkoper
    if (formData.projectType === 'onderhoud') totalMultiplier *= 0.8; // Onderhoud is goedkoopst

    Object.keys(formData.specifications).forEach(spec => {
      const specValue = formData.specifications[spec];
      if (specValue && specifications[spec]) {
        const specOption = specifications[spec].find(s => s.id === specValue);
        if (specOption) totalMultiplier *= specOption.multiplier;
      }
    });

    // Area-based calculation
    let areaMultiplier = 1.0;
    if (size > 100) areaMultiplier *= 0.9;   // Volume discount
    if (size > 200) areaMultiplier *= 0.8;   // Large project discount
    if (size < 50) areaMultiplier *= 1.1;    // Small project surcharge

    // Realistic calculation including materials + labor (60% + overhead 15%)
    let materialCost = basePrice * size * totalMultiplier;
    let laborCost = materialCost * 0.6; // Realistisch: 60% is arbeid (inclusief manuren)
    let overhead = (materialCost + laborCost) * 0.15; // 15% overhead (transport, materiaalafzet, etc.)
    let totalEstimate = (materialCost + laborCost + overhead) * areaMultiplier;

    // Smaller range for more accuracy
    const minEstimate = totalEstimate * 0.92;
    const maxEstimate = totalEstimate * 1.08;

    setEstimate({
      min: Math.round(minEstimate),
      max: Math.round(maxEstimate),
      average: Math.round(totalEstimate)
    });

  };

  useEffect(() => {
    calculateEstimate();
  }, [formData]);

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }

    // Auto-progress removed, users can navigate themselves with next buttons
  };

  const handleRequestQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'dakwerk', label: 'Dakwerk' },
    { id: 'gebouw', label: 'Gebouw' },
    { id: 'afwerking', label: 'Afwerking' }
  ];

  const getCompletionStatus = () => {
    let completed = 0;
    if (formData.projectType) completed++;
    if (formData.buildingType) completed++;
    if (formData.size) completed++;
    const specCount = Object.values(formData.specifications).filter(v => v).length;
    completed += specCount;
    return { completed, total: 8 };
  };

  const status = getCompletionStatus();

  return (
    <section id="cost-calculator" className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-brand-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full roof-pattern"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-brand-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-4 py-2 rounded-full mb-6 border border-brand-400/30">
            <Calculator className="w-5 h-5" />
            <span className="font-medium">Kostencalculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bereken Uw Dakwerken
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Bereken kosten voor uw dakrenovatie of nieuwe dak - direct indicatie online
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Panel - Configuration */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="bg-stone-800/50 backdrop-blur-sm rounded-2xl p-2 inline-flex gap-2 border border-stone-700/50 shadow-md">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-brand-500 text-stone-900'
                      : 'text-stone-300 hover:text-white hover:bg-stone-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 md:p-8 shadow-lg relative">
              {/* Progress indicators */}
              {formData.projectType && activeTab === 'dakwerk' && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              {formData.buildingType && formData.size && activeTab === 'gebouw' && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              {/* Dakwerk Tab */}
              {activeTab === 'dakwerk' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-stone-100 mb-6">Kies uw dakwerk</h3>
                  <div className="grid gap-4">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleInputChange('projectType', type.id)}
                        className={`flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-300 group ${
                          formData.projectType === type.id
                            ? 'border-brand-400 bg-brand-400/10'
                            : 'border-stone-600 hover:border-stone-500 bg-stone-700 hover:bg-stone-600'
                        }`}
                      >
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                          formData.projectType === type.id
                            ? 'bg-brand-400 text-stone-900 shadow-lg shadow-brand-400/30'
                            : 'bg-stone-700 text-stone-200 group-hover:bg-stone-600'
                        }`}>
                          <type.icon className="w-7 h-7" />
                        </div>
                                                <div className="flex-1">
                          <div className={`font-semibold text-lg ${
                            formData.projectType === type.id ? 'text-white' : 'text-stone-100'
                          }`}>{type.label}</div>
                          <div className={`text-sm ${
                            formData.projectType === type.id ? 'text-stone-200' : 'text-stone-300'
                          }`}>{type.desc}</div>
                        </div>
                        {formData.projectType === type.id && (
                          <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
                            <Check className="w-5 h-5 text-stone-900" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Next button */}
                  {formData.projectType && (
                    <div className="mt-6 text-right">
                      <button
                        onClick={() => setActiveTab('gebouw')}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-400 to-brand-500 text-stone-900 rounded-xl font-semibold hover:shadow-lg hover:shadow-brand-400/30 transition-all duration-300 transform hover:scale-105"
                      >
                        Volgende
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Gebouw Tab */}
              {activeTab === 'gebouw' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-stone-100 mb-6">Type gebouw</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {buildingTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => handleInputChange('buildingType', type.id)}
                          className={`p-5 rounded-xl border-2 text-center transition-all duration-300 ${
                            formData.buildingType === type.id
                              ? 'border-brand-400 bg-brand-400/10'
                              : 'border-stone-600 hover:border-stone-500 bg-stone-700 hover:bg-stone-600'
                          }`}
                        >
                          <div className={`font-semibold ${
                            formData.buildingType === type.id ? 'text-white' : 'text-stone-100'
                          }`}>{type.label}</div>
                          <div className={`text-sm mt-1 ${
                            formData.buildingType === type.id ? 'text-brand-200' : 'text-brand-300'
                          }`}>€{type.basePrice}/m²</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-stone-100 mb-4">Oppervlakte</h3>
                    <div className="relative">
                      <input
                        type="number"
                        value={formData.size}
                        onChange={(e) => handleInputChange('size', e.target.value)}
                        placeholder="Voer oppervlakte in"
                        className="w-full p-4 pr-16 bg-stone-700 border border-stone-600 rounded-xl text-stone-100 placeholder-stone-300 focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition-all"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 font-medium">m²</span>
                    </div>
                  </div>

                  {/* Next button */}
                  {(formData.buildingType && formData.size) && (
                    <div className="mt-6 text-right">
                      <button
                        onClick={() => setActiveTab('afwerking')}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-400 to-brand-500 text-stone-900 rounded-xl font-semibold hover:shadow-lg hover:shadow-brand-400/30 transition-all duration-300 transform hover:scale-105"
                      >
                        Volgende
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Afwerking Tab */}
              {activeTab === 'afwerking' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-stone-100 mb-6">Kies uw afwerkingsniveau</h3>
                  {Object.keys(specifications).map((specKey) => (
                    <div key={specKey} className="space-y-3">
                      <label className="text-sm font-medium text-stone-300">
                        {specLabels[specKey]}
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {specifications[specKey].map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleInputChange(`specifications.${specKey}`, option.id)}
                            className={`p-3 rounded-xl border-2 text-center transition-all duration-300 ${
                              formData.specifications[specKey] === option.id
                                ? 'border-brand-400 bg-brand-400/10'
                                : 'border-stone-600 hover:border-stone-500 bg-stone-700 hover:bg-stone-600'
                            }`}
                          >
                            <div className={`font-medium text-sm ${
                              formData.specifications[specKey] === option.id ? 'text-white' : 'text-stone-100'
                            }`}>{option.label}</div>
                            <div className={`text-xs mt-0.5 ${
                              formData.specifications[specKey] === option.id ? 'text-stone-200' : 'text-stone-300'
                            }`}>{option.sublabel}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Navigation buttons */}
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setActiveTab('gebouw')}
                      className="inline-flex items-center px-4 py-2 bg-stone-700 text-white rounded-xl font-medium hover:bg-stone-600 transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                      Vorige: Gebouw
                    </button>
                    <div className="text-sm text-transparent">Klaar!</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Live Estimate */}
          <div className="flex justify-center mt-12">
            <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 md:p-10 sticky top-8 shadow-xl w-full max-w-md">
              {/* Progress */}
              <div className="mb-10 text-center">
                <span className="text-stone-300 font-semibold text-base block mb-3">Configuratie voortgang</span>
                <div className="w-full bg-stone-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-brand-400 to-brand-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(status.completed / status.total) * 100}%` }}
                  />
                </div>
                <span className="text-brand-400 font-bold text-lg">{status.completed}/{status.total} voltooid</span>
              </div>

              {/* Estimate Display */}
              {estimate ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-stone-400 text-sm font-medium mb-2">Geschatte kosten</div>
                    <div className="text-4xl md:text-5xl font-bold text-brand-400 mb-1">
                      €{estimate.average.toLocaleString()}
                    </div>
                    <div className="text-stone-400 text-sm">
                      Range: €{estimate.min.toLocaleString()} - €{estimate.max.toLocaleString()}
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-stone-700/50 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-400">Dakwerk</span>
                      <span className="text-white font-medium">
                        {projectTypes.find(p => p.id === formData.projectType)?.label || '-'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-400">Gebouwtype</span>
                      <span className="text-white font-medium">
                        {buildingTypes.find(b => b.id === formData.buildingType)?.label || '-'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-400">Oppervlakte</span>
                      <span className="text-white font-medium">
                        {formData.size ? `${formData.size} m²` : '-'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleRequestQuote}
                    className="w-full bg-brand-500 hover:bg-brand-600 text-stone-900 font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
                  >
                    <span>Vraag Exacte Offerte Aan</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-stone-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-stone-500" />
                  </div>
                  <div className="text-white font-medium mb-2">Vul de configuratie in</div>
                  <div className="text-stone-400 text-sm">
                    Selecteer projecttype, gebouwtype en oppervlakte voor een kostenraming
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="mt-6 pt-6 border-t border-stone-700">
                <p className="text-stone-500 text-xs leading-relaxed">
                  Dit is een indicatieve raming. Werkelijke kosten kunnen variëren. Prijzen excl. BTW.
                  Neem contact op voor een exacte offerte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sticky bottom bar on mobile - shows estimate */}
      {estimate && (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-stone-900/95 backdrop-blur-md border-t border-stone-700 px-4 py-3 shadow-2xl">
          <div className="flex items-center justify-between max-w-lg mx-auto">
            <div>
              <div className="text-stone-400 text-xs">Geschatte kosten</div>
              <div className="text-brand-400 text-xl font-bold">€{estimate.average.toLocaleString()}</div>
            </div>
            <button
              onClick={handleRequestQuote}
              className="bg-brand-500 hover:bg-brand-600 text-stone-900 font-semibold py-2.5 px-5 rounded-xl transition-all flex items-center gap-2 text-sm"
            >
              <span>Offerte Aanvragen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CostCalculator;
