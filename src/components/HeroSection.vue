<script setup>
import { portfolioData } from '../data/portfolio'
import { ArrowRight, Download, Terminal } from 'lucide-vue-next'

const stats = [
  { label: 'Programming Languages', value: '4' },
  { label: 'Intelligent Tools', value: '6' },
  { label: 'Years of Experience', value: '2+' },
]
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-10 overflow-hidden bg-[#1a1f2c]">
    <!-- Background Title from Image -->
    <div class="absolute top-[15%] left-1/2 -translate-x-1/2 font-display font-extrabold text-[12vw] text-primary-brand opacity-[0.15] pointer-events-none select-none">
      Engineer
    </div>

    <!-- Vertical Sidebar Icons (Visible on lg+) -->
    <div class="fixed left-6 top-[40%] -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-8 p-4 glass rounded-full border-white/10">
       <a href="#projects" class="text-slate-400 hover:text-primary-brand transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg></a>
       <a href="#about" class="text-slate-400 hover:text-primary-brand transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></a>
       <a href="#skills" class="text-slate-400 hover:text-primary-brand transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></a>
       <a href="#contact" class="text-slate-400 hover:text-primary-brand transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>
       <a href="#blogs" class="text-slate-400 hover:text-primary-brand transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18"/><path d="M3 12h18"/><path d="M3 17h18"/></svg></a>
    </div>

    <div class="max-w-[90%] mx-auto px-4 z-10 w-full pt-16">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <!-- Left: Profile Card (Specific Image Style) -->
        <div class="w-full lg:w-[320px] shrink-0">
          <div class="bg-[#1f2937] border-[3px] border-primary-brand rounded-[40px_80px_40px_80px] p-8 relative shadow-2xl overflow-hidden">
            <!-- Plectrum-ish background decoration -->
            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-brand opacity-10 rounded-full blur-2xl"></div>
            
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 rounded-full border-2 border-primary-brand/30 p-1 mb-4">
                 <img :src="portfolioData.profileImage" :alt="portfolioData.name" class="w-full h-full rounded-full object-cover grayscale" />
              </div>
              <div class="mb-1">
                   <h3 class="text-2xl font-bold text-white inline-flex flex-wrap justify-center gap-1">
                     <span v-for="(char, index) in 'Praise'.split('')" :key="index"
                           class="robotic-text inline-block opacity-0 animate-type"
                           :style="{ animationDelay: `${index * 50}ms` }">
                       {{ char }}
                     </span>
                   </h3>
              </div>
              <p class="text-slate-400 text-xs mb-8">Mechatronics & AI Systems Engineer</p>
              
              <div class="w-full space-y-4 mb-8">
                <div class="flex items-start text-[10px] text-slate-300">
                  <Mail :size="14" class="mr-3 text-primary-brand mt-0.5" />
                  <div class="flex flex-col gap-1">
                    <span>{{ portfolioData.socials.email }}</span>
                    <span>{{ portfolioData.socials.secondaryEmail }}</span>
                  </div>
                </div>
                <div class="flex items-center text-[10px] text-slate-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-primary-brand"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {{ portfolioData.socials.phone }}
                </div>
                <div class="flex items-center text-[10px] text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-primary-brand"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                  Engineer / Innovator
                </div>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-4 justify-center">
                <span v-for="tag in ['AI', 'ROBOTICS', 'MECHATRONICS']" :key="tag" 
                      class="px-3 py-1 bg-primary-brand/10 text-primary-brand text-[9px] font-bold rounded-full border border-primary-brand/20">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Middle: Bio Content -->
        <div class="flex-grow max-w-2xl text-left">
          <div class="mb-4 text-slate-600 font-mono text-xs opacity-50">&lt;h1&gt;</div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hey<br />
            I'm <span class="text-primary-brand">Praise,</span><br />
            Mechatronics & AI Systems Engineer <span class="text-slate-600 font-mono text-xs opacity-50 ml-2">&lt;/h1&gt;</span>
          </h1>
          
          <div class="mb-2 text-slate-600 font-mono text-xs opacity-50">&lt;p&gt;</div>
          <p class="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            {{ portfolioData.summary.split('\n')[0] }}
            <span class="text-slate-600 font-mono text-xs opacity-50 ml-2">&lt;/p&gt;</span>
          </p>
          
          <a href="#" class="inline-flex items-center text-primary-brand text-2xl font-bold group">
            Let's Talk
            <div class="ml-3 w-10 h-10 rounded-full border border-primary-brand flex items-center justify-center group-hover:bg-primary-brand group-hover:text-slate-900 transition-all">
              <Mail :size="18" />
            </div>
          </a>
        </div>

        <!-- Right: Stats Pill -->
        <div class="hidden lg:flex items-center">
          <div class="bg-[#1a1f2c] border border-white/5 rounded-[50px] p-6 xl:p-10 flex flex-col space-y-6 xl:space-y-12 shadow-xl">
             <div v-for="stat in stats" :key="stat.label" class="flex items-center space-x-4 xl:space-x-6">
                <span class="text-4xl xl:text-5xl font-extrabold text-primary-brand">{{ stat.value }}</span>
                <span class="text-white text-[9px] xl:text-[10px] font-bold uppercase tracking-widest leading-tight block w-16 xl:w-20">
                  {{ stat.label.split(' ').join('\n') }}
                </span>
             </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.robotic-text {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: reveal 0.5s forwards;
}

@keyframes reveal {
  0% {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
</style>
