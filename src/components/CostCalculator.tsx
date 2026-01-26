import React, { useState, useEffect } from 'react';
import { Calculator, Home, Building2, Wrench, Check, ArrowRight } from 'lucide-react';

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    projectType: '',
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
  const [activeTab, setActiveTab] = useState('project');

  const projectTypes = [
    { id: 'new', label: 'Nieuwbouw', icon: Building2, desc: 'Volledig nieuw gebouw' },
    { id: 'renovation', label: 'Renovatie', icon: Wrench, desc: 'Bestaand pand vernieuwen' },
    { id: 'extension', label: 'Uitbouw', icon: Home, desc: 'Aanbouw of uitbreiding' }
  ];

  const buildingTypes = [
    { id: 'house', label: 'Woonhuis', basePrice: 1800 },
    { id: 'apartment', label: 'Appartement', basePrice: 1600 },
    { id: 'commercial', label: 'Commercieel', basePrice: 2200 },
    { id: 'office', label: 'Kantoor', basePrice: 2000 }
  ];

  const specifications = {
    flooring: [
      { id: 'basic', label: 'Standaard', sublabel: 'Laminaat', multiplier: 1.0 },
      { id: 'mid', label: 'Midden', sublabel: 'Parket', multiplier: 1.2 },
      { id: 'high', label: 'Luxe', sublabel: 'Natuursteen', multiplier: 1.5 }
    ],
    kitchen: [
      { id: 'basic', label: 'Standaard', sublabel: 'Basis keuken', multiplier: 1.0 },
      { id: 'mid', label: 'Midden', sublabel: 'Design keuken', multiplier: 1.3 },
      { id: 'high', label: 'Luxe', sublabel: 'Maatwerk', multiplier: 1.8 }
    ],
    bathroom: [
      { id: 'basic', label: 'Standaard', sublabel: 'Basis sanitair', multiplier: 1.0 },
      { id: 'mid', label: 'Midden', sublabel: 'Design sanitair', multiplier: 1.25 },
      { id: 'high', label: 'Luxe', sublabel: 'Wellness', multiplier: 1.6 }
    ],
    heating: [
      { id: 'basic', label: 'CV Ketel', sublabel: 'Traditioneel', multiplier: 1.0 },
      { id: 'mid', label: 'Vloerverwarming', sublabel: 'Comfort', multiplier: 1.15 },
      { id: 'high', label: 'Warmtepomp', sublabel: 'Duurzaam', multiplier: 1.3 }
    ],
    insulation: [
      { id: 'basic', label: 'Standaard', sublabel: 'Bouwbesluit', multiplier: 1.0 },
      { id: 'mid', label: 'Verbeterd', sublabel: 'Energielabel A', multiplier: 1.1 },
      { id: 'high', label: 'Passief', sublabel: 'Energieneutraal', multiplier: 1.4 }
    ]
  };

  const specLabels = {
    flooring: 'Vloeren',
    kitchen: 'Keuken',
    bathroom: 'Badkamer',
    heating: 'Verwarming',
    insulation: 'Isolatie'
  };

  const calculateEstimate = () => {
    if (!formData.projectType || !formData.buildingType || !formData.size) return;

    const buildingType = buildingTypes.find(bt => bt.id === formData.buildingType);
    const basePrice = buildingType.basePrice;
    const size = parseInt(formData.size) || 0;

    let multiplier = 1.0;

    if (formData.projectType === 'renovation') multiplier *= 0.8;
    if (formData.projectType === 'extension') multiplier *= 0.9;

    Object.keys(formData.specifications).forEach(spec => {
      const specValue = formData.specifications[spec];
      if (specValue && specifications[spec]) {
        const specOption = specifications[spec].find(s => s.id === specValue);
        if (specOption) multiplier *= specOption.multiplier;
      }
    });

    const totalEstimate = basePrice * size * multiplier;
    const minEstimate = totalEstimate * 0.85;
    const maxEstimate = totalEstimate * 1.15;

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
  };

  const handleRequestQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'project', label: 'Project' },
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
    <section id="cost-calculator" className="py-20 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-600 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-5 h-5" />
            <span className="font-medium">Kostencalculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Bereken Uw Projectkosten
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Configureer uw project en ontvang direct een indicatieve kostenraming
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Panel - Configuration */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="bg-white rounded-2xl p-2 inline-flex gap-2 shadow-md">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-brand-500 text-stone-900'
                      : 'text-stone-500 hover:text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-lg">
              {/* Project Tab */}
              {activeTab === 'project' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-6">Kies uw projecttype</h3>
                  <div className="grid gap-4">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleInputChange('projectType', type.id)}
                        className={`flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-300 group ${
                          formData.projectType === type.id
                            ? 'border-brand-500 bg-brand-50'
                            : 'border-stone-200 hover:border-stone-300 bg-stone-50'
                        }`}
                      >
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                          formData.projectType === type.id
                            ? 'bg-brand-500 text-stone-900'
                            : 'bg-stone-200 text-stone-500 group-hover:bg-stone-300'
                        }`}>
                          <type.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-stone-800 text-lg">{type.label}</div>
                          <div className="text-stone-500 text-sm">{type.desc}</div>
                        </div>
                        {formData.projectType === type.id && (
                          <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
                            <Check className="w-5 h-5 text-stone-900" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Gebouw Tab */}
              {activeTab === 'gebouw' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-6">Type gebouw</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {buildingTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => handleInputChange('buildingType', type.id)}
                          className={`p-5 rounded-xl border-2 text-center transition-all duration-300 ${
                            formData.buildingType === type.id
                              ? 'border-brand-500 bg-brand-50'
                              : 'border-stone-200 hover:border-stone-300 bg-stone-50'
                          }`}
                        >
                          <div className="font-semibold text-stone-800">{type.label}</div>
                          <div className="text-brand-600 text-sm mt-1">€{type.basePrice}/m²</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">Oppervlakte</h3>
                    <div className="relative">
                      <input
                        type="number"
                        value={formData.size}
                        onChange={(e) => handleInputChange('size', e.target.value)}
                        placeholder="Voer oppervlakte in"
                        className="w-full p-4 pr-16 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 placeholder-stone-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 font-medium">m²</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Afwerking Tab */}
              {activeTab === 'afwerking' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-6">Kies uw afwerkingsniveau</h3>
                  {Object.keys(specifications).map((specKey) => (
                    <div key={specKey} className="space-y-3">
                      <label className="text-sm font-medium text-stone-600">
                        {specLabels[specKey]}
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {specifications[specKey].map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleInputChange(`specifications.${specKey}`, option.id)}
                            className={`p-3 rounded-xl border-2 text-center transition-all duration-300 ${
                              formData.specifications[specKey] === option.id
                                ? 'border-brand-500 bg-brand-50'
                                : 'border-stone-200 hover:border-stone-300 bg-stone-50'
                            }`}
                          >
                            <div className="font-medium text-stone-800 text-sm">{option.label}</div>
                            <div className="text-stone-400 text-xs mt-0.5">{option.sublabel}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Live Estimate */}
          <div className="flex justify-center">
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
                      <span className="text-stone-400">Projecttype</span>
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
    </section>
  );
};

export default CostCalculator;
