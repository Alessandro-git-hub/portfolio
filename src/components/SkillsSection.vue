<script setup lang="ts">
interface SkillCategory {
  name: string
  skills: string[]
}

const categories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    name: 'Backend',
    skills: ['PHP (Smarty)', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    name: 'Testing',
    skills: ['Playwright'],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Webpack', 'Vite', 'Contentful', 'Jira', 'Figma', 'Chrome DevTools'],
  },
]
</script>

<template>
  <section id="skills" class="relative border-t border-border px-6 py-32 overflow-hidden">
    <div class="glow-orb h-[350px] w-[350px] bg-accent/5 top-0 -left-20" aria-hidden="true" />

    <div class="mx-auto max-w-5xl">
      <div class="mb-20 text-center">
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          class="mb-3 font-mono text-sm tracking-widest text-accent uppercase"
        >
          Stack
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          Technical Skills
        </h2>
      </div>

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div
          v-for="(category, index) in categories"
          :key="category.name"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 80 } }"
        >
          <h3 class="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {{ category.name }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="rounded-lg border border-border bg-surface-raised px-3 py-1.5 text-sm text-text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_15px_rgba(232,168,56,0.08)]"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
