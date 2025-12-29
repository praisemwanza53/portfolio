<script setup>
import { portfolioData } from '../data/portfolio'
import { BookOpen, Clock, ArrowRight, ExternalLink } from 'lucide-vue-next'
</script>

<template>
  <section id="blogs" class="py-24 relative bg-[#111418] border-t border-white/5">
    <div class="max-w-7xl lg:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 class="text-primary-brand font-mono font-bold text-[10px] tracking-[0.5em] mb-4 uppercase">Latest Articles</h2>
          <div class="inline-block relative">
             <div class="border-[2px] border-primary-brand rounded-[20px_4px_20px_4px] px-8 py-3 bg-primary-brand/5">
                <h3 class="text-white text-3xl md:text-4xl font-bold tracking-tight">Blog</h3>
             </div>
          </div>
        </div>
        <div class="md:text-right flex flex-col md:items-end gap-2">
           <p class="text-slate-400 text-[10px] uppercase tracking-widest font-bold">More Articles On</p>
           <div class="flex gap-4">
             <a :href="portfolioData.socials.medium" target="_blank" class="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-[#000000] hover:text-white hover:border-white transition-all duration-300 flex items-center gap-2">
               Medium <ExternalLink :size="12" />
             </a>
             <a :href="portfolioData.socials.linkedin" target="_blank" class="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 flex items-center gap-2">
               LinkedIn <ExternalLink :size="12" />
             </a>
           </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="blog in portfolioData.blogs" :key="blog.title" 
             class="group relative flex flex-col bg-[#1a1f2c] border border-white/5 rounded-[20px] overflow-hidden hover:border-primary-brand/30 transition-all duration-500">
          
          <!-- Image Section -->
          <div class="aspect-[16/9] w-full bg-slate-800 relative overflow-hidden">
             <!-- Overlay -->
             <div class="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             
             <!-- Tech Grid Overlay -->
             <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0"></div>

             <img v-if="blog.image" :src="blog.image" :alt="blog.title" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             
             <!-- Category Badge -->
             <div class="absolute top-4 left-4 z-20">
                <span class="px-3 py-1 bg-primary-brand/90 backdrop-blur-sm text-slate-900 text-[9px] font-bold uppercase tracking-widest rounded-sm border border-white/20">
                   {{ blog.category || 'Engineering' }}
                </span>
             </div>
          </div>
          
          <!-- Content -->
          <div class="p-8 flex flex-col flex-grow relative">
             <!-- Decorative line -->
             <div class="absolute top-0 left-8 right-8 h-[1px] bg-white/5 group-hover:bg-primary-brand/20 transition-colors"></div>

             <div class="flex items-center gap-4 text-[10px] font-mono text-slate-500 mb-4">
               <span class="flex items-center"><Clock :size="12" class="mr-1.5" /> {{ blog.readTime }} Read</span>
               <span class="w-1 h-1 bg-slate-600 rounded-full"></span>
               <span class="text-primary-brand">{{ blog.date }}</span>
             </div>

             <h4 class="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary-brand transition-colors">
               {{ blog.title }}
             </h4>
             
             <p class="text-slate-400 text-xs leading-relaxed font-medium mb-8 flex-grow">
               {{ blog.description }}
             </p>
             
             <div class="mt-auto">
               <a :href="blog.link" target="_blank" 
                  class="inline-flex items-center text-white text-[10px] font-extrabold uppercase tracking-[0.2em] group/btn hover:text-primary-brand transition-colors">
                  Read Article
                  <div class="ml-3 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-primary-brand group-hover/btn:bg-primary-brand/10 transition-all">
                     <ExternalLink :size="14" class="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </div>
               </a>
             </div>
          </div>
        </div>
      </div>
    
    </div>
  </section>
</template>
