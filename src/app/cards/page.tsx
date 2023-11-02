import s from './cardsPage.module.scss';
import { users } from '@/app/cards/users';

export default function CardsPage(){
    return (
        <section className={s['cards-page']}>
            <p className={'title-3'}>Данные пользователей:</p>

            <div className={s['cards-block']}>
                {users.map( (user, index) =>
                    <div className={s['card']} key={index}>
                        <p>
                            Имя: {user.name}
                        </p>
                        <p>
                            Фамилия: {user.surname}
                        </p>
                        <p>
                            Возраст: {user.age} лет
                        </p>
                        <p>
                            Пол: {user.gender === 'male' ? 'муж.' : 'жен.'}
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}