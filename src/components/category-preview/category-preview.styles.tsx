import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleLink = styled(Link)`
  display: block;
  border-bottom: 2px black dashed;

  text-transform: uppercase;
  font-size: 38px;
  margin-bottom: 25px;

  transition: color 0.2s linear, border-color 0.2s linear;

  &:hover {
    color: orangered;
    border-color: orangered;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`

export const PreviewHead = styled.h2`
`


//
// function HeaderLink(props: HeaderLinkProps) {
//   const {className, children, to} = props;
//
//   return (
//     <Header className={className}>
//       <Link to={to}>
//         {children}
//       </Link>
//     </Header>
//   )
// }
//
// export const Header = styled.h2`
//   cursor: pointer;
// `
//
// export interface HeaderLinkProps {
//   className?: string
//   children: string
//   to: string
// }
