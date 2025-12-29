<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { portfolioData } from '../data/portfolio'
import { Sun, Moon, Menu, X, Github, Linkedin, Mail, Terminal, Cpu, Brain, Target } from 'lucide-vue-next'

const isDark = ref(true)
const isMenuOpen = ref(false)
const searchQuery = ref('')
const isNavbarVisible = ref(true)
const lastScrollPosition = ref(0)
const isScrolled = ref(false)

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

const handleScroll = () => {
  const currentScrollPosition = window.scrollY
  
  // Determine functionality based on scroll direction
  if (currentScrollPosition < 0) {
    return
  }

  // Always show navbar at the very top
  if (currentScrollPosition < 50) {
    isNavbarVisible.value = true
    isScrolled.value = false
  } else {
    isScrolled.value = true
    // Show on scroll UP, Hide on scroll DOWN
    if (Math.abs(currentScrollPosition - lastScrollPosition.value) > 60) {
      isNavbarVisible.value = currentScrollPosition < lastScrollPosition.value
      lastScrollPosition.value = currentScrollPosition
    }
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
  
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 transform"
       :class="[
         isNavbarVisible ? 'translate-y-0' : '-translate-y-full',
         isScrolled ? 'glass border-b border-white/5 py-2' : 'bg-transparent py-4'
       ]">
    <div class="max-w-7xl lg:max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        
        <!-- Left Section: Logo + Nav Links -->
        <div class="flex items-center gap-8 xl:gap-12">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <span class="text-xl md:text-2xl font-bold font-display tracking-tight text-white flex items-center">
              <span class="text-primary-brand mr-2 font-mono">&lt;PM/&gt;</span> 
            </span>
          </div>

          <!-- Desktop Nav Links (Moved to Left) -->
          <div class="hidden lg:flex items-center space-x-1 xl:space-x-4">
            <a v-for="link in navLinks" 
               :key="link.name"
               :href="link.href" 
               class="px-2 xl:px-3 py-2 text-[10px] xl:text-[11px] font-extrabold text-slate-400 hover:text-primary-brand transition-all uppercase tracking-widest relative group whitespace-nowrap">
               {{ link.name }}
               <span class="absolute bottom-1 left-2 right-2 h-[1px] bg-primary-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
        </div>

        <!-- Right Section: Search + Socials + Toggle -->
        <div class="hidden lg:flex items-center gap-4 xl:gap-6">
          
          <!-- Search Bar -->
          <div class="relative group">
            <input type="text" placeholder="Search..." v-model="searchQuery"
                   class="bg-white/5 text-white placeholder-slate-500 rounded-full px-4 py-1.5 text-xs w-40 focus:w-64 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-primary-brand transition-all shadow-sm border border-white/5" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            
            <!-- Search Results Dropdown -->
            <div v-if="searchQuery && searchResults.length > 0" class="absolute top-full mt-2 right-0 w-64 bg-[#1a1f2c] border border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto z-50">
               <div v-for="(result, index) in searchResults" :key="index" @click="handleResultClick(result.link)" 
                    class="p-3 hover:bg-white/5 cursor-pointer border-b border-white/5 last:border-0 text-left">
                  <p class="text-[10px] text-primary-brand font-bold uppercase mb-0.5">{{ result.category }}</p>
                  <p class="text-xs text-white font-medium truncate">{{ result.title }}</p>
               </div>
            </div>
            <div v-if="searchQuery && searchResults.length === 0" class="absolute top-full mt-2 right-0 w-64 bg-[#1a1f2c] border border-white/10 rounded-xl shadow-2xl p-4 text-center z-50">
                <p class="text-xs text-slate-400">No results found.</p>
            </div>
          </div>

          <!-- Socials -->
          <div class="flex items-center space-x-4 border-l border-white/10 pl-4">
            <a :href="portfolioData.socials.instagram" target="_blank" class="text-slate-400 hover:text-primary-brand transition-colors" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" class="text-slate-400 hover:text-primary-brand transition-colors" :title="portfolioData.socials.discord">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M9.9 16.1c3.1 1.1 6.4 1.1 9.5 0"/><path d="M9 18c-4.5 0-8-3.6-8-8 0-4.5 3.6-8 8-8 3.1 0 5.9 1.7 7.4 4.2"/><path d="M22 10c0 4.4-3.6 8-8 8-.1 0-.2 0-.3 0"/><path d="m14 18 4 4"/><path d="m14 18-4-4"/></svg>
            </a>
            <a :href="portfolioData.socials.github" target="_blank" class="text-slate-400 hover:text-primary-brand transition-colors" title="GitHub">
              <Github :size="16" />
            </a>
          </div>

          <!-- Theme Toggle -->
          <button @click="toggleDark" class="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-primary-brand transition-colors ml-2">
            <Sun v-if="isDark" :size="18" />
            <Moon v-else :size="18" />
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
      <div class="space-y-4 pt-6 border-t border-white/5">
        <input type="text" placeholder="Search..." v-model="searchQuery"
               class="w-full bg-white/5 text-white placeholder-slate-500 rounded-lg px-4 py-3 text-sm border border-white/5" />
        
         <!-- Mobile Search Results -->
        <div v-if="searchQuery && searchResults.length > 0" class="bg-[#1a1f2c] border border-white/10 rounded-xl overflow-hidden">
            <div v-for="(result, index) in searchResults" :key="index" @click="handleResultClick(result.link)" 
                class="p-3 border-b border-white/5 last:border-0">
              <p class="text-[10px] text-primary-brand font-bold uppercase">{{ result.category }}</p>
              <p class="text-sm text-white">{{ result.title }}</p>
            </div>
        </div>
      </div>
      <div class="flex justify-center space-x-8 pt-6">
        <a href="#" class="text-slate-400 hover:text-primary-brand"><Github :size="24" /></a>
        <a href="#" class="text-slate-400 hover:text-primary-brand"><Linkedin :size="24" /></a>
      </div>
    </div>
  </nav>
</template>
