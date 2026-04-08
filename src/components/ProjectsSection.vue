<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'Job Scraper AI',
    description:
      'Node.js pipeline that aggregates 10+ job board APIs, evaluates listings with a local LLM, and exports results to CSV. Includes an Express.js dashboard with real-time filtering and one-click apply functionality.',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'LLM', 'Dashboard'],
    github: 'https://github.com/Alessandro-git-hub/job-scraping',
  },
  {
    title: 'devMentor',
    description:
      'Local AI developer workbench featuring a code sandbox, Notion API sync, and prompt chains for a "CTO mentorship" workflow. Designed to streamline developer learning and project planning.',
    tags: ['AI', 'Notion API', 'Developer Tools'],
    github: 'https://github.com/Alessandro-git-hub/devMentor',
  },
  {
    title: 'MyAbstractVM',
    description:
      'A custom virtual machine that parses and executes a small assembly language. Manages a typed value stack with safe arithmetic, error handling, and a built-in interpreter — built with interfaces, polymorphism, and strict memory management.',
    tags: ['C++', 'VM', 'Interpreter', 'OOP'],
    github: 'https://github.com/Alessandro-git-hub/cpp_my-abstract-vm',
  },
  {
    title: 'MySQLite',
    description:
      'A simplified SQLite built on CSV files. Features a chainable query interface supporting SELECT, INSERT, UPDATE, DELETE, WHERE, JOIN, and ORDER — plus a CLI that parses SQL-like commands for lightweight, file-based CRUD operations.',
    tags: ['Ruby', 'SQL', 'CLI', 'CSV'],
    github: 'https://github.com/Alessandro-git-hub/my-sqlite',
  },
  {
    title: 'Automation Playbooks',
    description:
      'Suite of ~20 Rundeck API automation jobs built to eliminate manual HR/IT tasks. Covers onboarding, offboarding, account provisioning, and system health checks — saving hours of repetitive work weekly.',
    tags: ['PHP', 'Rundeck', 'REST APIs', 'Automation'],
    github: 'https://github.com/Alessandro-git-hub',
  },
]

// Triple the cards: [set1 | set2 (center) | set3] for seamless infinite loop
const repeatedProjects = [...projects, ...projects, ...projects]

const track = ref<HTMLElement | null>(null)

function getCardStep(): number {
  if (!track.value) return 0
  const card = track.value.querySelector('.carousel-card') as HTMLElement
  if (!card) return 0
  return card.offsetWidth + 24 // gap-6
}

onMounted(async () => {
  await nextTick()
  if (track.value) {
    // Start at the middle set (no animation)
    track.value.scrollLeft = getCardStep() * projects.length
  }
})

function scroll(direction: 'prev' | 'next') {
  if (!track.value) return
  const step = getCardStep()
  track.value.scrollBy({
    left: direction === 'next' ? step : -step,
    behavior: 'smooth',
  })
}

function handleScrollEnd() {
  if (!track.value) return
  const step = getCardStep()
  if (step === 0) return
  const setLen = projects.length
  const logicalIndex = Math.round(track.value.scrollLeft / step)

  // If we've drifted into the first or third set, silently jump to equivalent position in center set
  if (logicalIndex < setLen || logicalIndex >= 2 * setLen) {
    const centerIndex = ((logicalIndex % setLen) + setLen) % setLen + setLen
    track.value.style.scrollBehavior = 'auto'
    track.value.scrollLeft = centerIndex * step
    track.value.offsetHeight // force reflow before re-enabling smooth
    track.value.style.scrollBehavior = ''
  }
}
</script>

<template>
  <section id="projects" class="relative px-6 py-32 overflow-hidden">
    <div class="glow-orb h-[400px] w-[400px] bg-accent/5 -bottom-20 left-1/2" aria-hidden="true" />

    <div class="mx-auto max-w-6xl">
      <div class="mb-20 flex flex-col items-end text-right max-w-xl ml-auto">
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          class="mb-3 font-mono text-sm tracking-widest text-accent uppercase"
        >
          Projects
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="mb-4 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          Built to solve<br />real problems.
        </h2>
      </div>

      <!-- Carousel navigation -->
      <div class="mb-8 flex items-center justify-end gap-3">
        <button
          @click="scroll('prev')"
          aria-label="Previous projects"
          class="rounded-full border border-border p-2.5 text-text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(232,168,56,0.15)]"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          @click="scroll('next')"
          aria-label="Next projects"
          class="rounded-full border border-border p-2.5 text-text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(232,168,56,0.15)]"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <!-- Scrollable track -->
      <div
        ref="track"
        class="carousel-track flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        @scrollend="handleScrollEnd"
      >
        <component
          :is="project.github ? 'a' : 'article'"
          v-for="(project, idx) in repeatedProjects"
          :key="idx"
          :href="project.github || undefined"
          :target="project.github ? '_blank' : undefined"
          :rel="project.github ? 'noopener noreferrer' : undefined"
          class="carousel-card group relative flex w-[85vw] flex-shrink-0 flex-col snap-start rounded-2xl border border-border bg-surface-raised/50 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(232,168,56,0.06)] md:w-[calc((100%-48px)/3)]"
          :class="[project.github ? 'cursor-pointer' : '']"
        >
          <!-- Top row -->
          <div class="mb-5 flex items-center justify-between">
            <div class="rounded-xl border border-border bg-surface p-2.5">
              <svg class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
            </div>
            <div class="flex gap-3">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                class="text-text-faint transition-colors duration-300 hover:text-accent"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                class="text-text-faint transition-colors duration-300 hover:text-accent"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>

          <h3 class="mb-2 font-display text-lg font-bold text-text group-hover:text-accent transition-colors duration-300">
            {{ project.title }}
          </h3>
          <p class="mb-6 flex-1 text-sm leading-relaxed text-text-muted">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-text-faint"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Decorative corner accent -->
          <div class="absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-tr-2xl" aria-hidden="true">
            <div class="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gradient-to-br from-accent/10 to-transparent" />
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-track::-webkit-scrollbar {
  display: none;
}
.carousel-track {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
