import Link from 'next/link';
import styled from 'styled-components';

const StyledNavigation = styled.ul`
  display: flex;
  flex-direction: row;
  
  &>li{
    margin-left: 20px;
  }
`

const Navigation = () => {
  return (
    <StyledNavigation>
      <li><Link href="/"><a >HOME</a></Link></li>
      <li><Link href="/posts"><a >POST</a></Link></li>
    </StyledNavigation>
  );
}



export default Navigation;