<script setup>
import { portfolioData } from '../data/portfolio'
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section id="projects" class="py-24 relative overflow-hidden bg-[#0a0c10]">
    <!-- Ambient Background -->
    <div class="absolute inset-0 z-0 text-white">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-brand/5 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
    </div>

    <div class="max-w-7xl lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-[1px] bg-primary-brand/50"></div>
            <span class="text-primary-brand font-mono text-[10px] uppercase tracking-[0.4em]">Proprietary Works // Innovation</span>
          </div>
          <h2 class="text-white text-5xl md:text-6xl font-bold font-display tracking-tighter uppercase italic">The <span class="text-primary-brand">Gallery</span></h2>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
        <div v-for="project in portfolioData.projects" :key="project.title" 
             class="group relative flex flex-col bg-[#111418] border border-white/5 [clip-path:polygon(0_0,100%_0,100%_92%,92%_100%,0_100%)] hover:border-primary-brand/30 transition-all duration-500">
           
           <!-- Card Content -->
           <div class="p-1">
             <div class="aspect-video w-full overflow-hidden bg-slate-900 relative [clip-path:polygon(0_0,100%_0,100%_90%,94%_100%,0_100%)]">
                <!-- Image Swap Logic -->
                <img v-if="project.image" :src="project.image" :alt="project.title" 
                     :class="['absolute inset-0 w-full h-full object-cover transition-all duration-700', project.images && project.images.length > 1 ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105']" />
                
                <img v-if="project.images && project.images.length > 1" :src="project.images[1]" :alt="project.title" 
                     class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />

                <!-- Badge Overlay -->
                <div v-if="project.status" class="absolute top-4 right-4 z-20">
                  <div class="bg-slate-950/80 backdrop-blur-md border border-primary-brand/20 px-3 py-1 text-[8px] font-mono text-primary-brand uppercase tracking-widest">
                    {{ project.status }}
                  </div>
                </div>
             </div>
           </div>

           <div class="p-8 flex flex-col flex-grow">
              <div class="flex justify-between items-start mb-6">
                <h4 class="text-white text-xl font-bold font-display leading-tight uppercase group-hover:text-primary-brand transition-colors">{{ project.title }}</h4>
              </div>

              <p class="text-slate-400 text-xs leading-relaxed font-medium mb-8 line-clamp-3">
                 {{ project.description }}
              </p>

              <!-- Impact Section -->
              <div v-if="project.impact" class="mb-8 p-4 bg-white/[0.02] border-l-2 border-primary-brand/30">
                 <span class="text-[9px] font-mono text-primary-brand/50 uppercase block mb-2">Technical Impact</span>
                 <p class="text-slate-300 text-[10px] italic leading-relaxed">{{ project.impact }}</p>
              </div>

              <!-- Tags Layout -->
              <div class="flex flex-wrap gap-2 mb-10 pt-6 border-t border-white/5">
                 <span v-for="tag in project.tags" :key="tag" 
                       class="text-[8px] font-mono text-slate-500 uppercase border border-white/10 px-2 py-1 group-hover:border-primary-brand/20 group-hover:text-slate-300 transition-colors">
                    #{{ tag }}
                 </span>
              </div>

              <!-- CTA -->
              <div class="mt-auto">
                 <a :href="project.link" target="_blank" 
                    class="inline-flex items-center gap-4 text-primary-brand font-mono text-[10px] uppercase tracking-[0.2em] group/link">
                    <span class="w-8 h-[1px] bg-primary-brand/30 group-hover/link:w-12 transition-all"></span>
                    {{ project.linkText || 'Initiate System' }}
                 </a>
              </div>
           </div>
        </div>
      </div>
      <div class="mt-16 text-center">
         <p class="text-slate-500 text-xs font-mono uppercase tracking-widest mb-6">For more engineering prototypes & code</p>
         <div class="flex justify-center gap-6">
            <a :href="portfolioData.socials.github" target="_blank" class="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300 group">
               <span class="opacity-70 group-hover:opacity-100">GitHub</span>
               <ArrowRight :size="14" />
            </a>
            <a :href="portfolioData.socials.grabcad" target="_blank" class="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-[#C8202B] hover:text-white hover:border-[#C8202B] transition-all duration-300 group">
               <span class="opacity-70 group-hover:opacity-100">GrabCAD</span>
               <ArrowRight :size="14" />
            </a>
         </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.font-display { font-family: 'Outfit', sans-serif; }
</style>
