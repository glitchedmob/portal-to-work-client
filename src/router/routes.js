
const routes = [
  {
    path:'/',
    component: () => import('pages/AddressForm.vue'),
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'jobs', component: () => import('pages/Index.vue') },
      { path: 'jobs/detail', component: () => import('pages/JobDetail.vue') },
      { path: 'notifications', component: () => import('pages/Notifications.vue') },
      { path: 'saved-jobs', component: () => import('pages/SavedJobs.vue') },
      { path: 'events', component: () => import('pages/Events.vue') },
      { path: 'events/detail', component: () => import('pages/EventDetail.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
