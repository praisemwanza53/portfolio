<script setup>
import { portfolioData } from '../data/portfolio'
import { Github, Linkedin, Mail, Twitter, Instagram, Youtube, ChevronUp } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-slate-900 border-t border-white/5 pt-16 pb-10 bg-topo">
    <div class="max-w-7xl lg:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
        <!-- Brand & Socials -->
        <div class="sm:col-span-2 lg:col-span-1">
          <span class="text-xl font-bold font-display uppercase tracking-widest mb-6 block text-white text-center sm:text-left">
            <span class="text-primary-brand">&lt;/&gt;</span> Praise
          </span>
          <p class="text-slate-500 mb-8 leading-relaxed font-bold text-[10px] md:text-xs uppercase tracking-wider text-center sm:text-left">
            Advancing intelligent machines, autonomous AI systems, and robotics platforms to solve complex industrial and societal challenges.
          </p>
          <div class="flex flex-wrap justify-center sm:justify-start gap-3">
            <a :href="portfolioData.socials.instagram" target="_blank" class="w-8 h-8 rounded-full glass flex items-center justify-center hover:text-primary-brand transition-all border border-white/5 hover:border-primary-brand/20"><Instagram :size="14" /></a>
            <a :href="portfolioData.socials.youtube" target="_blank" class="w-8 h-8 rounded-full glass flex items-center justify-center hover:text-primary-brand transition-all border border-white/5 hover:border-primary-brand/20"><Youtube :size="14" /></a>
            <a :href="portfolioData.socials.tiktok" target="_blank" class="w-8 h-8 rounded-full glass flex items-center justify-center hover:text-primary-brand transition-all border border-white/5 hover:border-primary-brand/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a :href="portfolioData.socials.x" target="_blank" class="w-8 h-8 rounded-full glass flex items-center justify-center hover:text-primary-brand transition-all border border-white/5 hover:border-primary-brand/20"><Twitter :size="14" /></a>
            <a :href="portfolioData.socials.github" target="_blank" class="w-8 h-8 rounded-full glass flex items-center justify-center hover:text-primary-brand transition-all border border-white/5 hover:border-primary-brand/20"><Github :size="14" /></a>
            <a :href="portfolioData.socials.linkedin" target="_blank" class="w-8 h-8 rounded-full glass flex items-center justify-center hover:text-primary-brand transition-all border border-white/5 hover:border-primary-brand/20"><Linkedin :size="14" /></a>
          </div>
        </div>

          <!-- Quick Links -->
          <div class="text-center sm:text-left">
            <h4 class="text-white font-extrabold uppercase tracking-[0.3em] text-[10px] mb-8">Intelligence</h4>
            <ul class="space-y-4">
              <li v-for="link in ['Home', 'About', 'Skills', 'Hackathons', 'Projects', 'Leadership', 'Stories', 'Blogs']" :key="link">
                <a :href="'#' + link.toLowerCase()" class="text-slate-500 hover:text-primary-brand transition-colors text-[10px] font-extrabold uppercase tracking-widest">{{ link }}</a>
              </li>
            </ul>
          </div>

        <!-- Platforms -->
        <div class="text-center sm:text-left">
          <h4 class="text-white font-extrabold uppercase tracking-[0.3em] text-[10px] mb-8">Platforms</h4>
          <ul class="space-y-4">
            <li><a :href="portfolioData.socials.grabcad" target="_blank" class="text-slate-500 hover:text-primary-brand transition-colors text-[10px] font-extrabold uppercase tracking-widest">GrabCAD</a></li>
            <li><a :href="portfolioData.socials.medium" target="_blank" class="text-slate-500 hover:text-primary-brand transition-colors text-[10px] font-extrabold uppercase tracking-widest">Medium</a></li>
            <li><a href="#" class="text-slate-500 hover:text-primary-brand transition-colors text-[10px] font-extrabold uppercase tracking-widest" :title="portfolioData.socials.discord">Discord</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div id="contact" class="text-center sm:text-left">
          <h4 class="text-white font-extrabold uppercase tracking-[0.3em] text-[10px] mb-8">Transmission</h4>
          <ul class="space-y-6">
            <li class="flex items-start justify-center sm:justify-start text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-wider">
              <Mail :size="16" class="mr-3 text-primary-brand mt-0.5" />
              <div class="flex flex-col text-left">
                <span>{{ portfolioData.socials.email }}</span>
              </div>
            </li>
            <li class="flex items-center justify-center sm:justify-start text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-primary-brand"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {{ portfolioData.socials.phone }}
            </li>
            <li class="pt-2">
              <a :href="'mailto:' + portfolioData.socials.email" class="px-6 py-3 rounded-full bg-primary-brand text-slate-900 font-extrabold uppercase tracking-widest text-[9px] md:text-[10px] hover:bg-white transition-all duration-300 w-full block text-center transform hover:scale-105 shadow-lg shadow-primary-brand/5">
                Establish Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-slate-500 text-sm">
          &copy; 2024 Praise Mwanza. All rights reserved.
        </p>
        
        <div class="flex items-center gap-6">
           <a href="https://wa.me/260970397095" target="_blank" class="flex items-center text-green-500 hover:text-green-400 transition-colors gap-2 text-xs font-bold uppercase tracking-widest bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 hover:border-green-500/50">
             <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             WhatsApp Quick Access
           </a>

           <button @click="scrollToTop" class="flex items-center text-slate-400 hover:text-teal-400 transition-colors group">
             Back to Top 
             <ChevronUp :size="18" class="ml-2 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  </footer>
</template>
