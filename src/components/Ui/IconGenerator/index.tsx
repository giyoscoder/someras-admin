import { FC, memo } from 'react';
import { iconLists } from './iconList';

interface Props {
    icon: string,
    fill?: any
}

const IconGenerator: FC<Props> = ({ icon, fill, ...props }) => {

    const findIcon = iconLists.find((el: any) => el.name == icon);
    if (!findIcon) return null;

    return <findIcon.component fill={'black'} {...props} />
}

export default memo(IconGenerator);