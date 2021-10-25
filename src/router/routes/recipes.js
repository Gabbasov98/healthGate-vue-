export default [{
        path: '/feed',
        name: 'recipes-feed',
        component: () =>
            import ('@/views/recipes/RecipesFeed'),
        meta: {
            layout: 'full',
        },
    },
    {
        path: '/feed-bloger',
        name: 'recipes-feed-bloger',
        component: () =>
            import ('@/views/recipes/RecipesFeedBloger'),
        meta: {
            layout: 'full',
        },
    },
    {
        path: '/feed/recipe',
        name: 'recipe-detail',
        component: () =>
            import ('@/views/recipes/RecipeDetail'),
        meta: {
            layout: 'full',
        },
    },
    {
        path: '/cart',
        name: 'cart',
        component: () =>
            import ('@/views/cart/Cart'),
        meta: {
            layout: 'full',
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: () =>
            import ('@/views/lk/BlogerProfile'),
        meta: {
            layout: 'full',
        },
    },
    {
        path: '/profile/edit',
        name: 'profile-edit',
        component: () =>
            import ('@/views/lk/BlogerProfileEdit'),
        meta: {
            layout: 'full',
        },
    },
    {
        path: '/create',
        name: 'create-recipe',
        component: () =>
            import ('@/views/lk/CreateRecipe'),
        meta: {
            layout: 'full',
        },
    },
    {
        path: '/draft',
        name: 'draft',
        component: () =>
            import ('@/views/lk/Draft'),
        meta: {
            layout: 'full',
        },
    },
    {
        path: '/publish',
        name: 'publish',
        component: () =>
            import ('@/views/lk/PublishRecipe'),
        meta: {
            layout: 'full',
        },
    },
    {
        path: '/referal',
        name: 'referal',
        component: () =>
            import ('@/views/lk/Referals'),
        meta: {
            layout: 'full',
        },
    },
]