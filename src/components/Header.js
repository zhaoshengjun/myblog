import React from "react";
// import styled from "styled-components";
import { Link } from "gatsby";

export const Header = () => (
  <div className="Navigation Navigation--light">
    <div className="Navigation-body">
      <nav className="Navigation-left">
        <h1 className="Navigation-item">
          <a href="/" className="Navigation-logoSubTitle">
            Sam's Blog
          </a>
        </h1>
      </nav>
      <div className="Navigation-center">Types</div>
      <nav className="Navigation-right">Other Links</nav>
    </div>
  </div>
);

// import { Flex, Box } from "@rebass/grid";

// import { Text } from "./Typography";

// const Logo = styled("a")`
//   display: block;
//   color: ${props => props.theme.colors.text};
//   text-decoration: none;
//   border-bottom: 0;
//   font-weight: 500;
//   font-size: 14px;
// `;

// const StyledNav = styled.div`
//   width: 100%;
//   padding: 32px 0 24px;
//   background-color: ${props => props.theme.colors.background};
//   position: sticky;
//   top: 0;
//   z-index: 10;
//   border-bottom: 1px solid #e7eefd;
// `;

// const Nav = styled.div`
//   display: flex;
//   align-items: center;
//   flex-shrink: 0;

//   ul {
//     list-style: none;
//     margin: 0;
//     padding: 0;

//     li {
//       display: inline-block;
//       padding: 0 8px;
//     }
//   }

//   a {
//     color: ${props => props.theme.colors.text};
//     border-bottom: 0;

//     &:hover {
//       color: ${props => props.theme.colors.textHover};
//     }
//   }
// `;

// export const Header = () => (
//   <StyledNav is="header" justify="space-between">
//     <Logo href="/">Sam Zhao | Blog</Logo>
//     <Nav is="nav">
//       <ul>
//         <li>
//           <Text fontSize={[1, 2]} style={{ lineHeight: "1em" }}>
//             <Link to="/">Home</Link>
//           </Text>
//         </li>
//         <li>
//           <Text fontSize={[1, 2]} style={{ lineHeight: "1em" }}>
//             <a
//               href="https://www.github.com/zhaoshengjun/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               GitHub
//             </a>
//           </Text>
//         </li>
//       </ul>
//     </Nav>
//   </StyledNav>
// );
