<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Recommendation {
  name: string
  role: string
  company: string
  date: string
  relation: string
  source: 'linkedin' | 'letter'
  text: string
}

const TRUNCATE_LENGTH = 320

const recommendations: Recommendation[] = [
  {
    name: 'Andrew MacLean',
    role: 'Software Engineer',
    company: 'Helloprint',
    date: 'April 2026',
    relation: 'Senior colleague',
    source: 'linkedin',
    text: `I had the pleasure of mentoring Alessandro as a junior developer, and I was consistently impressed by his growth, mindset, and contributions to the team.\n\nHe showed strong self starter initiative from the beginning, quickly getting up to speed and actively seeking out opportunities to learn. He made creative and effective use of AI tools to deepen his understanding and accelerate his development, while still maintaining a high level of ownership and attention to detail in his work.\n\nHe also demonstrated a strong ability to work within legacy codebases, identifying opportunities to refactor and improve structure for better extensibility and maintainability. He consistently left the codebase in a better state than he found it.\n\nAlessandro played a key role in a particularly challenging rebrand of our international web store. This involved working across a complex stack including Vue.js, PHP, Contentful as a headless CMS, and Sass, while delivering pixel perfect, mobile first implementations based on Figma designs. He also developed a strong understanding of content modeling within Contentful, helping establish efficient and reusable content structures in collaboration with content teams.\n\nWhat made this work especially challenging was the need to keep the sites fully operational while coordinating with multiple teams that were continuously shipping new features. He handled this with a high level of care and ownership, collaborating closely with product and design teams, and communicating clearly throughout to ensure the rebrand did not negatively impact the business.\n\nHe is self motivated, brings positive energy to the team, and consistently pushes himself to overcome challenges and improve. His mindset and work ethic set him up for strong continued growth as an engineer.\n\nI would highly recommend Alessandro to any team looking for a driven and thoughtful developer with a lot of potential.`,
  },
  {
    name: 'Basma Benlatreche',
    role: 'QA Engineer',
    company: 'Helloprint',
    date: 'April 2026',
    relation: 'Team colleague',
    source: 'linkedin',
    text: `I collaborated with Alessandro as a QA engineer for over a year, working together across a wide range of features, and he consistently stood out as one of the most quality-minded developers I've worked with.\n\nWhat impressed me most was how he approached bug reports. Rather than just applying a quick fix, he took the time to understand the root cause of issues. That kind of thoroughness made a real difference in the quality of what we shipped.\n\nDay-to-day he was a pleasure to work with: easy to communicate with, always positive, and genuinely proactive. He didn't just build what was asked of him. He actively looked for things to improve in the product beyond his immediate scope, which is rare and valuable, especially from a QA perspective.`,
  },
  {
    name: 'Maarten Lelijveld',
    role: 'Chief Operating Officer',
    company: 'HelloPrint',
    date: 'April 2026',
    relation: 'Company leadership',
    source: 'letter',
    text: `It is a distinct pleasure to recommend Alessandro Poggio for a position within your organization. Having worked closely with Alessandro, I have witnessed his exceptional trajectory at HelloPrint, defined by continuous evolution and a total commitment to technical excellence.\n\nAlessandro began his journey with us in the IT team, where he quickly proved that his potential extended far beyond technical support. Driven by his extraordinary self-learning capacity and proactivity, he successfully transitioned into the development team as a Front End Developer. In this role, he didn't just write code; he challenged and improved the way we build our products.\n\nKey attributes: Autonomy & Ownership — He possesses a remarkable ability to work autonomously, solving complex problems with minimal supervision and maximum efficiency. Growth Mindset — His transition from IT to Development embodies a relentless hunger for learning new technologies. Professionalism & Rigor — Even under high pressure or tight deadlines, Alessandro maintains a very high standard of quality and ensures clear communication with the team.\n\nThe combination of his technical background in systems and his vision as a developer makes him a highly valuable hybrid profile. I have no doubt that Alessandro will bring the same level of innovation and energy to your company that he consistently demonstrated at HelloPrint.`,
  },
]

const active = ref<Recommendation | null>(null)

function open(rec: Recommendation) {
  active.value = rec
  document.body.style.overflow = 'hidden'
}

function close() {
  active.value = null
  document.body.style.overflow = ''
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

function preview(text: string) {
  return text.length > TRUNCATE_LENGTH ? text.slice(0, TRUNCATE_LENGTH).trimEnd() + '…' : text
}

function paragraphs(text: string) {
  return text.split('\n\n').filter(Boolean)
}
</script>

<template>
  <section id="recommendations" class="relative border-t border-border px-6 py-32 overflow-hidden">
    <div class="glow-orb h-[400px] w-[400px] bg-accent/5 top-0 right-0" aria-hidden="true" />

    <div class="mx-auto max-w-6xl">
      <div class="mb-20 text-center">
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          class="mb-3 font-mono text-sm tracking-widest text-accent uppercase"
        >
          Social Proof
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="mb-4 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          What colleagues say about me.
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-sm text-text-muted"
        >
          Recommendations from people I've worked with closely.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-3 items-start">
        <article
          v-for="(rec, index) in recommendations"
          :key="rec.name"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="relative flex flex-col rounded-2xl border border-border bg-surface-raised/50 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(232,168,56,0.06)]"
        >
          <!-- Header -->
          <div class="mb-5 flex items-start justify-between gap-4">
            <div>
              <p class="font-display text-base font-bold text-text">{{ rec.name }}</p>
              <p class="mt-0.5 text-xs text-text-muted">{{ rec.role }}, {{ rec.company }}</p>
              <p class="mt-1 text-xs text-text-faint">{{ rec.date }} · {{ rec.relation }}</p>
            </div>

            <!-- Source badge -->
            <div
              class="flex-shrink-0 rounded-xl border border-border bg-surface p-2.5"
              :title="rec.source === 'linkedin' ? 'LinkedIn recommendation' : 'Reference letter'"
            >
              <svg v-if="rec.source === 'linkedin'" class="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <svg v-else class="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-label="Reference letter">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
          </div>

          <!-- Quote mark -->
          <span class="mb-3 font-display text-3xl leading-none text-accent/30 select-none" aria-hidden="true">"</span>

          <!-- Preview text -->
          <p class="flex-1 text-sm leading-relaxed text-text-muted">{{ preview(rec.text) }}</p>

          <!-- Open modal button -->
          <button
            v-if="rec.text.length > TRUNCATE_LENGTH"
            class="mt-4 self-start text-xs font-medium text-accent transition-opacity duration-200 hover:opacity-70"
            @click="open(rec)"
          >
            Read full recommendation
          </button>

          <!-- Decorative corner accent -->
          <div class="absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-tr-2xl" aria-hidden="true">
            <div class="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gradient-to-br from-accent/10 to-transparent" />
          </div>
        </article>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="active"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          :aria-label="`Recommendation from ${active.name}`"
        >
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-black/70 backdrop-blur-sm"
            @click="close"
          />

          <!-- Panel -->
          <div class="relative z-10 w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border border-border bg-surface shadow-2xl">
            <!-- Modal header -->
            <div class="flex items-start justify-between gap-4 border-b border-border p-6">
              <div>
                <p class="font-display text-base font-bold text-text">{{ active.name }}</p>
                <p class="mt-0.5 text-xs text-text-muted">{{ active.role }}, {{ active.company }}</p>
                <p class="mt-1 text-xs text-text-faint">{{ active.date }} · {{ active.relation }}</p>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="flex-shrink-0 rounded-xl border border-border bg-surface-raised p-2.5"
                  :title="active.source === 'linkedin' ? 'LinkedIn recommendation' : 'Reference letter'"
                >
                  <svg v-if="active.source === 'linkedin'" class="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <svg v-else class="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>

                <button
                  class="rounded-lg border border-border p-2 text-text-muted transition-colors duration-200 hover:border-accent/40 hover:text-accent"
                  aria-label="Close"
                  @click="close"
                >
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Modal body -->
            <div class="overflow-y-auto p-6">
              <span class="mb-4 block font-display text-4xl leading-none text-accent/30 select-none" aria-hidden="true">"</span>
              <div class="space-y-4">
                <p
                  v-for="(para, i) in paragraphs(active.text)"
                  :key="i"
                  class="text-sm leading-relaxed text-text-muted"
                >
                  {{ para }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .relative.z-10,
.modal-leave-active .relative.z-10 {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative.z-10,
.modal-leave-to .relative.z-10 {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}
</style>
