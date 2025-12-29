<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import HackathonsSection from './components/HackathonsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import LeadershipSection from './components/LeadershipSection.vue'
import StoriesSection from './components/StoriesSection.vue'
import BlogsSection from './components/BlogsSection.vue'
import ContactFooter from './components/ContactFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-950 font-sans selection:bg-primary-brand/30">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <EducationSection />
    <HackathonsSection />
    <ProjectsSection />
    <LeadershipSection />
    <StoriesSection />
    <BlogsSection />
    <ContactFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #2dd4bf; 
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  @apply bg-[#0f172a];
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Outfit', sans-serif;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  @apply bg-slate-900;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-800 rounded-full border-2 border-slate-900 hover:bg-teal-500/50 transition-colors;
}
</style>
