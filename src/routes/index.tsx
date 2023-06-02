import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Home from './Home';

export default component$(() => {
  return  <Home />;
});

export const head: DocumentHead = {
  title: 'Chess',
  meta: [
    {
      name: 'description',
      content: 'Chess site designed with Qwik',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://github.com/philoem',
    }
  ]
};
