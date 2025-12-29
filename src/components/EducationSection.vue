<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolio'
import { BookOpen, Award, CheckCircle2 } from 'lucide-vue-next'

const education = portfolioData.education[0]
const activeYear = ref(education.years[3].year) // Set final year as default active
</script>

<template>
  <section id="education" class="py-24 relative overflow-hidden bg-[#0F1218] border-y border-white/5">
    <div class="max-w-7xl lg:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 class="text-primary-brand font-mono font-bold text-[10px] tracking-[0.5em] mb-4 uppercase">Academic Foundation</h2>
          <div class="inline-block relative">
             <div class="border-[2px] border-primary-brand rounded-[20px_4px_20px_4px] px-8 py-3 bg-primary-brand/5">
                <h3 class="text-white text-3xl md:text-4xl font-bold tracking-tight">Education</h3>
             </div>
          </div>
        </div>
        <div class="text-right hidden md:block">
           <div class="text-2xl font-bold text-white">{{ education.period }}</div>
           <div class="text-slate-400 text-sm font-mono">B.Eng (Honors)</div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left: Summary & Degree Info -->
        <div class="lg:col-span-4 space-y-8">
           <div class="p-8 bg-[#1a1f2c] border border-white/10 rounded-[30px] relative overflow-hidden group">
              <div class="absolute inset-0 bg-primary-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="w-16 h-16 bg-primary-brand/10 rounded-2xl flex items-center justify-center mb-6 border border-primary-brand/20">
                 <Award :size="32" class="text-primary-brand" />
              </div>

              <h4 class="text-xl font-bold text-white mb-2 leading-tight">Mechatronics Engineering</h4>
              <p class="text-slate-400 text-sm font-medium mb-6">{{ education.institution }}</p>
              
              <div class="space-y-4">
                 <div class="flex items-start gap-3">
                    <CheckCircle2 :size="16" class="text-primary-brand mt-0.5 shrink-0" />
                    <p class="text-slate-300 text-xs leading-relaxed">
                       <span class="text-white font-bold">Honors Degree</span> recipient acting as a testament to academic excellence.
                    </p>
                 </div>
                 <div class="flex items-start gap-3">
                    <CheckCircle2 :size="16" class="text-primary-brand mt-0.5 shrink-0" />
                    <p class="text-slate-300 text-xs leading-relaxed">
                       Top of class in <span class="text-white font-bold">Control Systems</span>, <span class="text-white font-bold">Embedded Systems</span>, and <span class="text-white font-bold">Robotics</span>.
                    </p>
                 </div>
              </div>
           </div>

           <!-- Navigation for Years (Mobile Only - or simplify interaction) -->
           <div class="flex flex-col gap-2">
              <button v-for="yearData in education.years" :key="yearData.year" 
                      @click="activeYear = yearData.year"
                      :class="['text-left px-6 py-4 rounded-xl text-sm font-bold transition-all border', 
                               activeYear === yearData.year ? 'bg-primary-brand/10 border-primary-brand/30 text-white' : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/5']">
                 <div class="flex items-center justify-between">
                    <span>{{ yearData.year }}</span>
                    <span v-if="activeYear === yearData.year" class="text-primary-brand">→</span>
                 </div>
              </button>
           </div>
        </div>

        <!-- Right: Modules Grid -->
        <div class="lg:col-span-8">
           <div class="bg-[#1a1f2c] border border-white/10 rounded-[40px] p-8 md:p-10 relative min-h-[500px]">
              
              <transition name="fade" mode="out-in">
                 <div :key="activeYear">
                    <div class="flex items-center justify-between mb-8">
                       <h3 class="text-2xl font-bold text-white font-display">{{ activeYear }} Modules</h3>
                       <BookOpen :size="20" class="text-slate-500" />
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div v-for="(module, index) in education.years.find(y => y.year === activeYear).modules" :key="index"
                            class="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-primary-brand/20 transition-all group">
                          <div class="flex items-start gap-3">
                             <div class="w-1.5 h-1.5 rounded-full bg-primary-brand mt-2 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                             <p class="text-slate-300 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                                {{ module }}
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>
              </transition>

           </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
