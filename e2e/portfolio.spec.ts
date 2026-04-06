import { test, expect } from '@playwright/test'

test.describe('Portfolio — core flows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders hero section with name and title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Alessandro Poggio' })).toBeVisible()
    await expect(page.locator('#about').getByText('Frontend Software Engineer')).toBeVisible()
  })

  test('navigation links are visible on desktop', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Main navigation' })
    await expect(nav).toBeVisible()
    await expect(nav.getByText('Timeline')).toBeVisible()
    await expect(nav.getByText('Projects')).toBeVisible()
    await expect(nav.getByText('Skills')).toBeVisible()
    await expect(nav.getByText('Contact')).toBeVisible()
  })

  test('timeline section shows career entries', async ({ page }) => {
    const timeline = page.locator('#timeline')
    await timeline.scrollIntoViewIfNeeded()
    await expect(timeline.getByText('Career Journey')).toBeVisible()
    await expect(timeline.getByText('Helloprint')).toHaveCount(2)
    await expect(timeline.getByText('Mercedes-Benz')).toBeVisible()
  })

  test('projects section shows all three projects', async ({ page }) => {
    const projects = page.locator('#projects')
    await projects.scrollIntoViewIfNeeded()
    await expect(projects.getByText('Job Scraper AI')).toBeVisible()
    await expect(projects.getByText('devMentor')).toBeVisible()
    await expect(projects.getByText('Automation Playbooks')).toBeVisible()
  })

  test('skills section displays tech categories', async ({ page }) => {
    const skills = page.locator('#skills')
    await skills.scrollIntoViewIfNeeded()
    await expect(skills.getByText('Frontend')).toBeVisible()
    await expect(skills.getByText('Vue.js')).toBeVisible()
    await expect(skills.getByText('TypeScript')).toBeVisible()
  })

  test('contact section has email and social links', async ({ page }) => {
    const contact = page.locator('#contact')
    await contact.scrollIntoViewIfNeeded()
    await expect(contact.getByText('poggioale97@gmail.com')).toBeVisible()
    await expect(contact.getByText('alessandro-poggio')).toBeVisible()
  })

  test('smooth scroll navigation works', async ({ page }) => {
    await page.getByRole('navigation').getByText('Projects').click()
    await page.waitForTimeout(800)
    const projectsSection = page.locator('#projects')
    await expect(projectsSection).toBeInViewport()
  })

  test('page has correct title and meta description', async ({ page }) => {
    await expect(page).toHaveTitle(/Alessandro Poggio/)
    const description = page.locator('meta[name="description"]')
    await expect(description).toHaveAttribute('content', /Frontend Software Engineer/)
  })
})

test.describe('Portfolio — mobile', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('mobile menu toggles correctly', async ({ page }) => {
    await page.goto('/')
    const menuButton = page.getByRole('button', { name: 'Toggle navigation menu' })
    await expect(menuButton).toBeVisible()

    // Menu should be hidden initially
    const mobileMenu = page.locator('#mobile-menu')
    await expect(mobileMenu).not.toBeVisible()

    // Open menu
    await menuButton.click()
    await expect(mobileMenu).toBeVisible()

    // Click a link closes menu
    await mobileMenu.getByText('Projects').click()
    await expect(mobileMenu).not.toBeVisible()
  })
})
