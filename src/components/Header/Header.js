/* eslint-disable */
//import Clock from './Clock';
//import Flags from '../Flags/Flags';
import Separador from './Separador';
import SelectHemisphere from '../SelectHemisphere';
import WithLove from '../WithLove'
import { Block, HStack, Spacer, Container } from '../Layout'

//images
import Logo from '../../assets/static/img/header/logo/Logo_Fish_Inc.png';

const Header = () => {
  return (
    <header>
      <Container>
        <Block>
          <HStack>
            <figure className="logo w-auto">
              <img  src={Logo} alt="FishInc." />
            </figure>
            <Separador />
            <SelectHemisphere />
            <Spacer/>
            <WithLove/>
          </HStack>
        </Block>
      </Container>
    </header>
  );
};

export default Header
