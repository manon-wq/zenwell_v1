import React from 'react';

const OnboardingStepOne = () => {
  return (
    <div className="min-h-screen bg-obsidienne text-menthe font-sans flex flex-col px-6 py-8 md:px-12">
      
      {/* --- Header Navigation --- */}
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <span className="text-xl font-bold tracking-premium text-menthe">
          ZENWELL
        </span>
        <button className="text-eucalyptus text-sm hover:opacity-80 transition-opacity">
          Passer
        </button>
      </nav>

      {/* --- Main Content Container --- */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md flex flex-col gap-8">
          
          {/* Progress Bar (1/4) */}
          <div className="w-full space-y-3">
            <div className="h-[2px] w-full bg-eucalyptus/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-sunlight transition-all duration-700 ease-out" 
                style={{ width: '25%' }}
              ></div>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-eucalyptus/60">Étape 1 sur 4</p>
          </div>

          {/* Text Content */}
          <section className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-premium leading-tight">
              Le début de <br /> 
              <span className="text-sunlight">votre équilibre.</span>
            </h1>
            <p className="text-eucalyptus text-lg leading-relaxed max-w-[90%]">
              Quelques questions pour adapter nos séances à votre rythme et à vos objectifs personnels.
            </p>
          </section>

          {/* CTA Action */}
          <div className="pt-4">
            <button className="w-full py-5 bg-sunlight text-obsidienne font-bold rounded-full 
                             hover:scale-[1.02] active:scale-[0.98] transition-all 
                             duration-200 shadow-lg shadow-sunlight/10 text-lg">
              Commencer l'expérience
            </button>
          </div>

        </div>
      </main>

      {/* --- Footer Branding (Optional) --- */}
      <footer className="text-center md:text-left text-[10px] text-eucalyptus/30 uppercase tracking-[0.2em]">
        © 2026 ZenWell Digital
      </footer>
    </div>
  );
};

export default OnboardingStepOne;
