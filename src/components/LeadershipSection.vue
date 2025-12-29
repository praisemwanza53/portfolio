<script setup>
import { portfolioData } from '../data/portfolio'
import { Rocket, Shield, Users, CheckCircle2, Building2 } from 'lucide-vue-next'

const organizationIcons = {
  "Uniplexity AI": Rocket,
  "Gearing Up Business Incubator": Shield,
  "The Copperbelt University Robotics Club": Users
}
</script>

<template>
  <section id="leadership" class="py-24 relative overflow-hidden bg-[#1a1f2c] bg-topo border-y border-white/5">
    <div class="max-w-7xl lg:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 class="text-primary-brand font-mono font-bold text-[10px] tracking-[0.5em] mb-4 uppercase text-center md:text-left">Authority</h2>
          <div class="inline-block relative">
             <div class="border-[2px] border-primary-brand rounded-[20px_4px_20px_4px] px-8 py-3 bg-primary-brand/5">
                <h3 class="text-white text-3xl md:text-4xl font-bold tracking-tight">Leadership & Affiliations</h3>
             </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div v-for="item in portfolioData.leadership" :key="item.organization" 
             class="group flex flex-col bg-[#1f2937]/30 rounded-[40px] border border-white/5 hover:border-primary-brand/20 transition-all duration-700 overflow-hidden hover:-translate-y-2">
           
           <!-- Header -->
           <div class="p-8 pb-4">
              <div class="flex items-start justify-between mb-6">
                 <div class="w-14 h-14 bg-primary-brand/10 rounded-2xl flex items-center justify-center text-primary-brand group-hover:scale-110 transition-transform">
                    <component :is="organizationIcons[item.organization] || Building2" :size="28" />
                 </div>
                 <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-900/50 px-3 py-1.5 rounded-full border border-white/5">
                    {{ item.period }}
                 </span>
              </div>
              <h4 class="text-white text-xl font-bold mb-2 group-hover:text-primary-brand transition-colors">{{ item.organization }}</h4>
              <p class="text-primary-brand text-xs font-bold uppercase tracking-wider mb-4">{{ item.role }}</p>
              <p class="text-slate-400 text-xs leading-relaxed font-medium mb-6 min-h-[40px]">
                {{ item.description }}
              </p>
           </div>

           <!-- Bullet Points -->
           <div class="px-8 pb-10 flex-grow">
              <ul class="space-y-4">
                 <li v-for="point in item.points" :key="point" class="flex items-start text-[11px] text-slate-400 leading-relaxed group/item">
                    <CheckCircle2 :size="14" class="mr-3 text-primary-brand shrink-0 mt-0.5 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                    <span class="group-hover/item:text-slate-300 transition-colors">{{ point }}</span>
                 </li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>
