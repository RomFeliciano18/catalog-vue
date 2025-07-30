import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UploadLogo from '../views/UploadLogo.vue';
import EnterEmail from '../views/EnterEmail.vue';
import i18n from '@/i18n';
import { useLookbookStore } from '@/stores/lookbook';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:locale',
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'upload-logo',
          name: 'upload-logo',
          component: UploadLogo,
          meta: { requiresSelectedLookbook: true },
        },
        {
          path: 'enter-email',
          name: 'enter-email',
          component: EnterEmail,
          meta: { requiresSelectedLookbook: true },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/us',
    },
  ],
});

router.beforeEach((to, from, next) => {
  const locale = to.params.locale;
  const storeLB = useLookbookStore();

  if (!['us', 'ca', 'fr'].includes(locale)) {
    return next('/us');
  }

  if (i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale;
  }

  if (to.meta.requiresSelectedLookbook) {
    if (!storeLB.selectedLookbooks || storeLB.selectedLookbooks.length === 0) {
      return next({ name: 'home', params: { locale } });
    }
  }

  next();
});

export default router;
