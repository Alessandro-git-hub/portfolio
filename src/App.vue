<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <TimelineSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>
