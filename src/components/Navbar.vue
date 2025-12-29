<script setup>
import { ref, onMounted } from 'vue'
import { portfolioData } from '../data/portfolio'
import { Sun, Moon, Menu, X, Github, Linkedin, Mail, Terminal, Cpu, Brain, Target } from 'lucide-vue-next'

import { computed } from 'vue'

const isDark = ref(true)
const isMenuOpen = ref(false)
const searchQuery = ref('')

const searchResults = computed(() => {
  if (!searchQuery.value) return []
  const query = searchQuery.value.toLowerCase()
  const results = []

  // Projects
  portfolioData.projects.forEach(p => {
    if (p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)) {
      results.push({ category: 'Project', title: p.title, link: '#projects' })
    }
  })

  // Hackathons
  portfolioData.hackathons.forEach(h => {
    if (h.title.toLowerCase().includes(query) || h.description.toLowerCase().includes(query)) {
      results.push({ category: 'Hackathon', title: h.title, link: '#hackathons' })
    }
  })
  
  // Leadership
  portfolioData.leadership.forEach(l => {
     if (l.organization.toLowerCase().includes(query) || l.role.toLowerCase().includes(query)) {
        results.push({ category: 'Experience', title: `${l.role} @ ${l.organization}`, link: '#leadership' })
     }
  })

  // Blogs
  portfolioData.blogs.forEach(b => {
     if (b.title.toLowerCase().includes(query)) {
        results.push({ category: 'Blog', title: b.title, link: '#blogs' })
     }
  })

  return results
})

const handleResultClick = (link) => {
   window.location.href = link
   searchQuery.value = ''
}

const toggleDark = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
})

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Projects', href: '#projects' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Stories', href: '#stories' },
  { name: 'Blogs', href: '#blogs' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 transition-all duration-300">
    <div class="max-w-7xl lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <span class="text-xl md:text-2xl font-bold font-display tracking-tight text-white flex items-center">
            <span class="text-primary-brand mr-2 font-mono">&lt;PM/&gt;</span> 
          </span>
        </div>

        <!-- Desktop Nav & Search -->
        <div class="hidden lg:flex items-center flex-grow justify-center space-x-8 relative">
          <div class="hidden lg:flex items-center space-x-0.5">
            <a v-for="link in ['Home', 'About', 'Skills', 'Education', 'Hackathons', 'Projects', 'Leadership', 'Stories', 'Blogs']" 
               :key="link"
               :href="'#' + link.toLowerCase()" 
               class="px-2.5 py-2 text-[9px] xl:text-[10px] font-extrabold text-slate-400 hover:text-primary-brand transition-all uppercase tracking-widest relative group">
               {{ link }}
               <span class="absolute bottom-1 left-2.5 right-2.5 h-[1px] bg-primary-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
          
          <!-- Search Bar with Results -->
          <div class="relative group">
            <input type="text" placeholder="Search..." v-model="searchQuery"
                   class="bg-white/10 text-white placeholder-slate-400 rounded-full px-4 py-1.5 text-xs w-48 focus:w-64 focus:outline-none focus:ring-1 focus:ring-primary-brand transition-all shadow-sm border border-white/5" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            
            <!-- Search Results Dropdown -->
            <div v-if="searchQuery && searchResults.length > 0" class="absolute top-full mt-2 left-0 w-full bg-[#1a1f2c] border border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto w-64 z-50">
               <div v-for="(result, index) in searchResults" :key="index" @click="handleResultClick(result.link)" 
                    class="p-3 hover:bg-white/5 cursor-pointer border-b border-white/5 last:border-0">
                  <p class="text-[10px] text-primary-brand font-bold uppercase mb-0.5">{{ result.category }}</p>
                  <p class="text-xs text-white font-medium truncate">{{ result.title }}</p>
               </div>
            </div>
            <div v-if="searchQuery && searchResults.length === 0" class="absolute top-full mt-2 left-0 w-full bg-[#1a1f2c] border border-white/10 rounded-xl shadow-2xl p-4 text-center z-50">
                <p class="text-xs text-slate-400">No results found.</p>
            </div>
          </div>
        </div>

        <!-- Right Side: Socials (Instagram, Discord, Github) -->
        <div class="hidden lg:flex items-center space-x-5 text-slate-300">
          <a :href="portfolioData.socials.instagram" target="_blank" class="flex items-center text-[10px] font-bold hover:text-primary-brand transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5 opacity-70 group-hover:opacity-100"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Instagram
          </a>
          <a href="#" class="flex items-center text-[10px] font-bold hover:text-primary-brand transition-colors group" :title="portfolioData.socials.discord">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5 opacity-70 group-hover:opacity-100"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M9.9 16.1c3.1 1.1 6.4 1.1 9.5 0"/><path d="M9 18c-4.5 0-8-3.6-8-8 0-4.5 3.6-8 8-8 3.1 0 5.9 1.7 7.4 4.2"/><path d="M22 10c0 4.4-3.6 8-8 8-.1 0-.2 0-.3 0"/><path d="m14 18 4 4"/><path d="m14 18-4-4"/></svg>
            Discord
          </a>
          <a :href="portfolioData.socials.github" target="_blank" class="flex items-center text-[10px] font-bold hover:text-primary-brand transition-colors group">
            <Github :size="14" class="mr-1.5 opacity-70 group-hover:opacity-100" />
            Github
          </a>
          
          <button @click="toggleDark" class="p-2 ml-2 hover:text-primary-brand transition-colors">
            <Sun v-if="isDark" :size="16" />
            <Moon v-else :size="16" />
          </button>
        </div>

        <!-- Mobile/Tablet Menu Button -->
        <div class="lg:hidden flex items-center space-x-4">
           <button @click="toggleDark" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
            <Sun v-if="isDark" :size="18" class="text-primary-brand" />
            <Moon v-else :size="18" class="text-slate-400" />
          </button>
          <button @click="isMenuOpen = !isMenuOpen" class="p-2 rounded-md hover:bg-white/5 text-white">
            <Menu v-if="!isMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="lg:hidden glass border-t border-white/5 px-6 py-10 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
      <a v-for="link in navLinks" :key="link.name" :href="link.href" 
         @click="isMenuOpen = false"
         class="block text-lg font-bold uppercase tracking-widest text-slate-400 hover:text-primary-brand text-center">
        {{ link.name }}
      </a>
      <div class="flex justify-center space-x-8 pt-6 border-t border-white/5">
        <a href="#" class="text-slate-400 hover:text-primary-brand"><Github :size="24" /></a>
        <a href="#" class="text-slate-400 hover:text-primary-brand"><Linkedin :size="24" /></a>
      </div>
    </div>
  </nav>

</template>
