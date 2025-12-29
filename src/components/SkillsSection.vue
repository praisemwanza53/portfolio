<script setup>
import { portfolioData } from '../data/portfolio'
import { Code, Cpu, Brain, Wifi, Globe, Terminal, Zap, Layers, PenTool } from 'lucide-vue-next'

const skillIcons = {
  programming: Terminal,
  robotics: Cpu,
  design_engineering: PenTool,
  ai: Brain,
  iot: Wifi,
  web: Globe
}

const coreBadges = [
  { name: 'Python', color: 'text-[#3776AB]', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C++', color: 'text-[#00599C]', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'JS', color: 'text-[#F7DF1E]', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue', color: 'text-[#4FC08D]', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'AI', color: 'text-[#00F2EA]', icon: null, component: Brain }
]
</script>

<template>
  <section id="skills" class="py-24 relative overflow-hidden bg-[#1a1f2c] bg-topo">
    <!-- Top Scroll Indicator -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div class="w-2.5 h-4 rounded-full border-2 border-primary-brand flex items-start justify-center p-0.5 mb-2">
        <div class="w-1 h-1 bg-primary-brand rounded-full animate-bounce"></div>
      </div>
      <div class="w-[1px] h-12 border-l border-dashed border-white/20"></div>
    </div>

    <div class="max-w-7xl lg:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <!-- Decorative Header -->
      <div class="flex flex-col items-center mb-20">
        <div class="text-primary-brand mb-6 opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="animate-pulse">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
            <line x1="14" y1="4" x2="10" y2="20"></line>
          </svg>
        </div>
        
        <div class="relative inline-block mb-6">
          <h2 class="text-white text-5xl md:text-6xl font-bold tracking-tight">Skills</h2>
          <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary-brand rounded-full shadow-[0_0_15px_rgba(0,242,234,0.5)]"></div>
        </div>
        
        <p class="text-slate-500 font-mono text-sm uppercase tracking-widest text-center mt-4">
          I am striving to never stop learning and improving
        </p>
      </div>

      <!-- Main Category Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        <div v-for="(skills, category) in portfolioData.technicalSkills" :key="category" 
             class="group relative bg-[#00f2ea]/5 rounded-[24px] p-6 border border-primary-brand/10 hover:border-primary-brand/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-xl">
           
           <!-- Decorative Background Glow -->
           <div class="absolute -right-10 -top-10 w-32 h-32 bg-primary-brand/5 blur-3xl group-hover:bg-primary-brand/10 transition-colors"></div>

           <div class="flex flex-col items-center mb-6">
              <div class="w-14 h-14 bg-white/5 rounded-[18px] flex items-center justify-center mb-4 text-primary-brand group-hover:scale-110 transition-transform">
                <component :is="skillIcons[category] || Code" :size="32" />
              </div>
              <h3 class="text-white text-sm font-bold uppercase tracking-[0.2em] text-center group-hover:text-primary-brand transition-colors">
                {{ category }}
              </h3>
           </div>
           
           <div class="text-slate-400 text-[10px] sm:text-[11px] font-mono leading-relaxed text-center opacity-80 group-hover:opacity-100 uppercase">
             {{ skills.join(' - ') }}
           </div>
        </div>
      </div>

      <!-- Core Knowledge / Badges Section -->
      <div class="flex flex-wrap justify-center gap-10 md:gap-16">
        <div v-for="badge in coreBadges" :key="badge.name" 
             class="flex flex-col items-center group cursor-default">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-800/80 border border-white/5 flex items-center justify-center mb-4 shadow-2xl transition-all duration-500 group-hover:border-primary-brand/40 group-hover:shadow-[0_0_20px_rgba(0,242,234,0.15)] group-hover:-translate-y-1 relative">
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <img v-if="badge.icon" :src="badge.icon" :alt="badge.name" class="w-8 h-8 md:w-10 md:h-10 grayscale group-hover:grayscale-0 transition-all duration-500" />
            <component v-else :is="badge.component" :size="32" class="text-primary-brand" />
          </div>
          <span class="text-slate-500 text-sm font-bold tracking-widest uppercase group-hover:text-white transition-colors duration-300">
            {{ badge.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
