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
  <section id="skills" class="px-6 py-24">
    <div class="mx-auto max-w-4xl">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        class="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900"
      >
        Technical Skills
      </h2>
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 } }"
        class="mb-16 text-center text-slate-500"
      >
        Technologies I work with day to day.
      </p>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div
          v-for="(category, index) in categories"
          :key="category.name"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 80 } }"
        >
          <h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
            {{ category.name }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 transition-colors hover:border-primary-300 hover:text-primary-700"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
