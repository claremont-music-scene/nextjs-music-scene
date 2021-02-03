import BulletinCard from './bulletin-card';
import styles from './bulletin-list.module.css'
import CategoryAndDescriptionCard from "../cards/category-and-description";
import CardRowWithShadowContainer from "../cards/row-with-shadow-container";
import {citrusDreams, rollerDerby, skynet} from "../cards/themes"

export default function BulletinList({bulletins, length = null}) {
    if (length) {
        bulletins = bulletins.slice(0, length)
    }
    return (

        <CardRowWithShadowContainer>
            {bulletins.map((b, idx) => {
                let theme = citrusDreams
                if (idx % 3  == 2) {
                    theme = rollerDerby
                } else if (idx % 3 == 1) {
                    theme = skynet
                }
                return (<CategoryAndDescriptionCard
                    key={b.id}
                    headline={b.title}
                    description={b.content}
                    author={b.user.username}
                    category="General"
                    theme={theme}
                />)
            }
            )}
        </CardRowWithShadowContainer>
    );
}