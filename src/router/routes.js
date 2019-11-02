const routes = [
    {
        path: '/',
        component: () => import('pages/AddressForm.vue'),
    },
    {
        path: '/app',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: 'jobs',
                component: () => import('pages/JobListing.vue'),
                meta: {
                    title: 'Jobs near you',
                },
            },
            {
                path: 'jobs/filter',
                component: () => import('pages/JobsFilter.vue'),
                meta: {
                    title: "Job Search Settings",
                    back: "jobs"
                }
            },
            {
                path: 'jobs/detail',
                component: () => import('pages/JobDetail.vue'),
                meta: {
                    title: "Job Detail",
                    back: "jobs"
                }
            },
            {
                path: 'notifications',
                component: () => import('pages/Notifications.vue'),
                meta: {
                    title: "Notifications"
                }
            },
            {
                path: 'saved-jobs',
                component: () => import('pages/SavedJobs.vue'),
                meta: {
                    title: "Favorite Jobs"
                }
            },
            {
                path: 'events',
                component: () => import('pages/Events.vue'),
                meta: {
                    title: "Events"
                }
            },
            {
                path: 'events/detail',
                component: () => import('pages/EventDetail.vue'),
                meta: {
                    title: "Event Details",
                    back: "events"
                }
            },
            {
                path: 'settings',
                component: () => import('pages/Settings.vue'),
                meta: {
                    title: "Settings"
                }
            },

        ],
    },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue'),
    });
}

export default routes;
