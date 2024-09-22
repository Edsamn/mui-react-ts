import { Link } from 'react-router-dom';
import { NavigationType } from '../config/navigation';
import NavigationMenuItemStyled from './NavigationMenuItemStyled';

interface NavigationMenuItemProps {
  item: NavigationType;
}

function NavigationMenuItem({ item }: NavigationMenuItemProps) {
  return (
    <Link to={item.url}>
      <NavigationMenuItemStyled>{item.label}</NavigationMenuItemStyled>
    </Link>
  );
}

export default NavigationMenuItem;
