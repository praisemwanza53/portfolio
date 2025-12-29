<script setup>
import { portfolioData } from '../data/portfolio'
import { Quote, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <section id="stories" class="py-24 relative overflow-hidden bg-[#1a1f2c] bg-topo">
    <div class="max-w-7xl lg:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-primary-brand font-mono font-bold text-[10px] tracking-[0.5em] mb-4 uppercase">Narrative</h2>
        <div class="relative inline-block">
          <h3 class="text-white text-5xl md:text-6xl font-bold tracking-tight">My Stories</h3>
          <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary-brand rounded-full shadow-[0_0_15px_rgba(0,242,234,0.5)]"></div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto space-y-12">
        <div v-for="(story, index) in portfolioData.stories" :key="story.title" 
             class="relative group">
           <!-- Story Timeline Line -->
           <div v-if="index !== portfolioData.stories.length - 1" class="absolute left-6 top-20 bottom-0 w-[1px] bg-white/5 hidden md:block"></div>
           
           <div class="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
              <!-- Year Bubble -->
              <div class="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-primary-brand/30 bg-primary-brand/5 text-primary-brand text-xs font-bold font-mono group-hover:bg-primary-brand group-hover:text-slate-900 transition-all duration-500">
                 {{ story.year }}
              </div>

              <!-- content box -->
              <div class="bg-[#1f2937]/30 rounded-[35px] p-8 md:p-10 border border-white/5 backdrop-blur-sm group-hover:border-primary-brand/20 transition-all duration-700 relative overflow-hidden">
                 <div class="absolute top-6 right-8 opacity-5 text-primary-brand">
                    <Quote :size="60" />
                 </div>
                 
                 <div class="flex items-center gap-3 mb-6">
                    <Sparkles :size="18" class="text-primary-brand" />
                    <h4 class="text-white text-2xl font-bold group-hover:text-primary-brand transition-colors">{{ story.title }}</h4>
                 </div>
                 <p class="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                    {{ story.content }}
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>
