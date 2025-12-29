<script setup>
import { portfolioData } from '../data/portfolio'
import { Trophy, Calendar, MapPin, Cpu, Target } from 'lucide-vue-next'
</script>

<template>
  <section id="hackathons" class="py-24 relative overflow-hidden bg-slate-950">
    <!-- Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    
    <div class="max-w-7xl lg:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="mb-20">
        <div class="flex items-center gap-4 mb-4">
           <div class="h-[1px] w-12 bg-primary-brand/50"></div>
           <span class="text-primary-brand font-mono text-[10px] uppercase tracking-[0.5em]">Competition Log // 01-04</span>
        </div>
        <h2 class="text-white text-4xl md:text-5xl font-bold font-display uppercase tracking-tighter"><span class="text-primary-brand text-xl block mb-2 opacity-50 font-mono tracking-[0.3em]">Competitions</span> Hackathons</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div v-for="hack in portfolioData.hackathons" :key="hack.id" 
             class="group relative flex flex-col md:flex-row gap-8">
           
           <!-- Large Id Number (Background) -->
           <div class="absolute -left-4 -top-10 text-[120px] font-bold font-display text-white/[0.02] select-none group-hover:text-primary-brand/[0.05] transition-colors duration-700">
             {{ hack.id }}
           </div>

           <!-- Image Component (Slashed Shape) -->
           <div class="relative w-full md:w-56 shrink-0 h-48 md:h-64 overflow-hidden [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)] border border-white/5 group-hover:border-primary-brand/30 transition-colors duration-700">
              <img v-if="hack.image" :src="hack.image" :alt="hack.title" class="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <!-- Floating Tag -->
              <div class="absolute bottom-4 left-4">
                 <span class="text-[8px] font-mono text-primary-brand bg-slate-950/80 px-2 py-1 border border-primary-brand/20 uppercase">
                    Ref: {{ hack.id }}
                 </span>
              </div>
           </div>

           <!-- Content Component -->
           <div class="flex-grow pt-2">
              <div class="flex items-start justify-between mb-4">
                 <div class="space-y-1">
                    <span class="text-primary-brand/50 font-mono text-[9px] uppercase tracking-widest block">Event Title</span>
                    <h4 class="text-white text-xl font-bold font-display uppercase group-hover:text-primary-brand transition-colors">{{ hack.title }}</h4>
                 </div>
                 <div class="flex flex-col items-end">
                    <span class="text-slate-500 font-mono text-[9px] uppercase tracking-widest block mb-1">Status</span>
                    <div class="px-2 py-0.5 border border-primary-brand/20 bg-primary-brand/5 rounded-sm">
                       <span class="text-primary-brand font-mono text-[8px] uppercase animate-pulse">{{ hack.achievement }}</span>
                    </div>
                 </div>
              </div>

              <p class="text-slate-400 text-xs leading-relaxed font-medium mb-8 max-w-md">
                 <span class="text-primary-brand font-mono mr-2">></span> {{ hack.description }}
              </p>

              <!-- Technical Log Metadata -->
              <div class="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                 <div class="space-y-2">
                    <div class="flex items-center gap-2 text-[9px] text-slate-500 font-mono uppercase">
                       <MapPin :size="10" class="text-primary-brand" />
                       Loc // <span class="text-slate-300">{{ hack.location }}</span>
                    </div>
                    <div class="flex items-center gap-2 text-[9px] text-slate-500 font-mono uppercase">
                       <Calendar :size="10" class="text-primary-brand" />
                       Date // <span class="text-slate-300">{{ hack.date }}</span>
                    </div>
                 </div>
                 <div class="space-y-2">
                    <div class="flex items-center gap-2 text-[9px] text-slate-500 font-mono uppercase">
                       <Cpu :size="10" class="text-primary-brand" />
                       Role // <span class="text-slate-300">{{ hack.role }}</span>
                    </div>
                    <div class="flex flex-wrap gap-1.5 mt-1">
                       <span v-for="tag in hack.tags" :key="tag" class="text-[7px] text-primary-brand px-1.5 py-0.5 border border-primary-brand/10 bg-primary-brand/5">
                          {{ tag }}
                       </span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-display { font-family: 'Outfit', sans-serif; }
</style>
