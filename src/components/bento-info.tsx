'use client'

import React from 'react'

export default function BentoInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#00334E] tracking-tight">
          The SmartScreening Advantage
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[340px]">
          {/* Tarjeta 1: Screening Solutions - Ocupa 2 columnas */}
          <div className="md:col-span-2 md:row-span-1 bg-[#00334E] rounded-[3.5rem] p-10 text-white relative overflow-hidden group">
            <div className="relative z-10 max-w-lg h-full flex flex-col justify-center">
              <span className="inline-block w-fit px-4 py-1 rounded-full bg-white/10 text-white/80 text-[10px] uppercase font-bold mb-6 backdrop-blur-sm border border-white/10 tracking-[0.2em]">
                Tailored Solutions
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Screening solutions that meet your needs</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                We partner with you to design a screening program that fits your hiring objectives, or help you choose from our pre-bundled packages.
              </p>
            </div>
            {/* Elemento Decorativo */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AEEF]/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-[#00AEEF]/30 transition-colors duration-700" />
            <div className="absolute -bottom-10 right-10 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
               <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                 <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
               </svg>
            </div>
          </div>

          {/* Tarjeta 2: 100% Paper-free - Ocupa 1 col x 2 filas */}
          <div className="md:col-span-1 md:row-span-2 bg-[#00AEEF] rounded-[3.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">100% Paper-free process</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Our state-of-the-art software allows for a fully automated process, ensuring direct and secure communication.
              </p>
            </div>
            
            <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20 shadow-2xl mt-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div className="h-3 w-24 bg-white/40 rounded-full" />
              </div>
              <div className="space-y-3">
                <div className="h-2.5 w-full bg-white/20 rounded-full" />
                <div className="h-2.5 w-3/4 bg-white/20 rounded-full" />
                <div className="h-2.5 w-1/2 bg-white/20 rounded-full" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Tarjeta 3: Bilingual Team */}
          <div className="md:col-span-1 md:row-span-1 bg-slate-50 border border-slate-100 rounded-[3.5rem] p-10 flex flex-col justify-center relative overflow-hidden group hover:bg-slate-100 transition-all duration-500">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#00334E] mb-4">Bilingual Experts</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                A well trained team of researchers in Puerto Rico with 10+ years of experience in US and local markets.
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00334E]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Tarjeta 4: Local Advantage */}
          <div className="md:col-span-1 md:row-span-1 bg-white border border-slate-200 shadow-sm rounded-[3.5rem] p-10 flex flex-col justify-center relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#00334E] mb-4 text-balance">The Local Advantage</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                In-person requests at government offices that only a company with staff on the field can handle.
              </p>
            </div>
            <div className="absolute bottom-10 right-10 opacity-[0.03] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-700 pointer-events-none">
              <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
