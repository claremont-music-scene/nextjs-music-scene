import SingleColumnLayout from "../../../components/layouts/single-column";
import BulletinList from '../../../components/bulletins/bulletin-list';
import data from '../../../data/bulletins.json';

export default function Bulletins() {
    const { bulletins } = data,
        currentBulletins = bulletins.filter(b => new Date(b.endDate) >= new Date());

    return (
        <SingleColumnLayout>
            <BulletinList bulletins={currentBulletins} />
        </SingleColumnLayout>
    );
}