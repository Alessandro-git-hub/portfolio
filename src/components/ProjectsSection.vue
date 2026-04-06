<script setup lang="ts">
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
    tags: ['Node.js', 'AI', 'Notion API', 'Developer Tools'],
    github: 'https://github.com/Alessandro-git-hub/devMentor',
  },
  {
    title: 'Automation Playbooks',
    description:
      'Suite of ~20 Rundeck API automation jobs built to eliminate manual HR/IT tasks. Covers onboarding, offboarding, account provisioning, and system health checks — saving hours of repetitive work weekly.',
    tags: ['PHP', 'Rundeck', 'REST APIs', 'Automation'],
    github: 'https://github.com/Alessandro-git-hub',
  },
]
</script>

<template>
  <section id="projects" class="bg-slate-50 px-6 py-24">
    <div class="mx-auto max-w-5xl">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        class="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900"
      >
        Projects
      </h2>
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 } }"
        class="mb-16 text-center text-slate-500"
      >
        Things I've built to solve real problems.
      </p>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
        >
          <div class="mb-4 flex items-center justify-between">
            <svg class="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            <div class="flex gap-3">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                class="text-slate-400 transition-colors hover:text-primary-600"
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
                class="text-slate-400 transition-colors hover:text-primary-600"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>

          <h3 class="mb-2 text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
            {{ project.title }}
          </h3>
          <p class="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
