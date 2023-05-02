import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/starter/hero/hero';

export default component$(() => {
  return (
    <>
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title: 'My First App',
  meta: [
    {
      name: 'description',
      content: 'This is my first app using qwik',
    },
  ],
};
