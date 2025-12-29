<script setup>
import { portfolioData } from '../data/portfolio'
</script>

<template>
  <section id="about" class="py-24 relative overflow-hidden bg-[#1a1f2c] bg-topo">
    <!-- Top Scroll Indicator -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div class="w-2.5 h-4 rounded-full border-2 border-primary-brand flex items-start justify-center p-0.5 mb-2">
        <div class="w-1 h-1 bg-primary-brand rounded-full animate-bounce"></div>
      </div>
      <div class="w-[1px] h-12 border-l border-dashed border-white/20"></div>
    </div>

    <div class="max-w-7xl lg:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Left Side: Custom Heading & Bio -->
        <div class="space-y-12">
          <!-- Custom Heading Box -->
          <div class="inline-block relative">
             <div class="border-[2px] border-primary-brand rounded-[20px_4px_20px_4px] px-8 py-3 bg-primary-brand/5 shadow-[0_0_20px_rgba(0,242,234,0.1)]">
                <h2 class="text-white text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
             </div>
          </div>

          <!-- Professional Bio Card -->
          <div class="relative">
             <div class="pl-4 border-l-[3px] border-primary-brand/30 space-y-6">
                <!-- Greeting -->
                <h3 class="text-white text-3xl font-bold tracking-tight">
                  Hello!
                </h3>
                
                <!-- Main Narrative -->
                <div class="text-slate-300 text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    I am a <span class="text-primary-brand font-semibold">Mechatronics & AI Systems Engineer</span> passionate about leveraging technology for community empowerment. From leading the development of <span class="text-white font-medium">"RCC Mafishi"</span> (Zambia's first university-built electric vehicle) and serving as Vice President (2023) and President (2024) of the Copperbelt University Robotics Club to co-founding the <span class="text-white font-medium">Mukuba Unipod Tech Expo</span>, I have dedicated myself to fostering innovation.
                  </p>
                  <p>
                    I believe deeply in the <span class="text-primary-brand font-semibold">"Ubuntu Spirit"</span> giving back to the community by mentoring students and supporting innovators through fundraising and prototyping support.
                  </p>
                </div>
             </div>

             <!-- Organic KPI Grid -->
             <div class="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
                <!-- KPI 1 -->
                <div class="flex flex-col">
                   <span class="text-4xl font-extrabold text-white mb-2">2000+</span>
                   <span class="text-xs text-slate-400 uppercase tracking-wider font-medium">Applicants Processed</span>
                </div>
                <!-- KPI 2 -->
                <div class="flex flex-col">
                   <span class="text-4xl font-extrabold text-white mb-2">100+</span>
                   <span class="text-xs text-slate-400 uppercase tracking-wider font-medium">SMEs Supported</span>
                </div>
                <!-- KPI 3 -->
                <div class="flex flex-col">
                   <span class="text-4xl font-extrabold text-white mb-2">150+</span>
                   <span class="text-xs text-slate-400 uppercase tracking-wider font-medium">Provided Funding Platform</span>
                </div>
                 <!-- KPI 4 -->
                 <div class="flex flex-col">
                   <span class="text-4xl font-extrabold text-white mb-2">100+</span>
                   <span class="text-xs text-slate-400 uppercase tracking-wider font-medium">Students Trained</span>
                </div>
                <!-- KPI 5 -->
                <div class="flex flex-col">
                   <span class="text-4xl font-extrabold text-white mb-2">50+</span>
                   <span class="text-xs text-slate-400 uppercase tracking-wider font-medium">Mentored Students</span>
                </div>
                <!-- KPI 6 -->
                <div class="flex flex-col">
                   <span class="text-4xl font-extrabold text-white mb-2">30%</span>
                   <span class="text-xs text-slate-400 uppercase tracking-wider font-medium">Job Placement Rate</span>
                </div>
             </div>
          </div>
        </div>

        <!-- Right Side: Image -->
        <div class="relative group">
          <!-- Background glow -->
          <div class="absolute -inset-4 bg-primary-brand/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div class="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
            <img :src="portfolioData.profileImage" 
                 alt="Professional Work" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
