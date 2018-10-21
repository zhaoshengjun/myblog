import React from "react";

export const Footer = () => (
  <footer className="Footer">
    <div className="Footer-container">
      <div className="Footer-background-image-container">
        <div className="Footer-background-image" />
      </div>
      <div className="Footer-header">footer header</div>
      <div className="Footer-body">footer body</div>
      <div className="Footer-footer">footer footer</div>
    </div>
  </footer>
);
// import styled from "styled-components";

// const CURRENT_YEAR = new Date().getFullYear();

// const StyledFooter = styled.div`
//   width: 100%;
//   padding: 16px 0 32px;
//   margin-top: 40px;
//   border-top: 1px solid #e7eefd;
//   font-size: 14px;
//   color: ${props => props.theme.colors.text};

//   a {
//     margin: 0 8px;
//     color: ${props => props.theme.colors.text};
//     text-decoration: none;
//     border-bottom: 0;
//   }
// `;

// export const Footer = () => (
//   <StyledFooter is="footer">
//     <span itemScope="" itemType="http://schema.org/Organization">
//       <link itemProp="url" href="https://samzhao.gitlab.com" />
//       &copy; {CURRENT_YEAR} -
//       <a
//         target="_blank"
//         rel="noopener noreferrer me"
//         href="https://www.linkedin.com/in/zhaoshengjun/"
//         itemProp="sameAs"
//       >
//         LinkedIn
//       </a>
//       <a
//         target="_blank"
//         rel="noopener noreferrer me"
//         href="http://github.com/zhaoshengjun"
//         itemProp="sameAs"
//       >
//         GitHub
//       </a>
//     </span>
//   </StyledFooter>
// );
