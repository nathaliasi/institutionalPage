import { NavLink } from 'react-router-dom';
import * as C from './style';

type Props = {
  title: string;
  path: string;
};

export const SidebarItem = ({ title, path }: Props) => {
  return (
    <C.Container>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
      >
        {title}
      </NavLink>
    </C.Container>
  );
};
