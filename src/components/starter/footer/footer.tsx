import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class={styles.footer}>
      <div class="container">
          <span>{serverTime.value.date}</span>
      </div>
    </footer>
  );
});
