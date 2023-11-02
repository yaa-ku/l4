import { ShowingBlock } from '@/components/showingBlock/showingBlock';
import s from './homePage.module.scss';

export default function Home() {

  return (
    <main className={s['home-page']}>
      <ShowingBlock/>
    </main>
  )
}
