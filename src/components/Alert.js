import React from "react";
import styled from "styled-components";

const AlertBox = styled("div")`
  width: 100%;
  border-radius: 4px;
  background-color: #00f;
  font-size: 14px;
  line-height: 1.6em;
  color: #fff;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Alert = props => <AlertBox>{props.children}</AlertBox>;
