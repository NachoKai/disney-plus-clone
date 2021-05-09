import React from "react";
import styled from "styled-components";

const HeaderLink = ({ link, icon, title }) => {
  return (
    <Link href={link}>
      <Icon src={icon} alt={title} />
      <Text>{title}</Text>
    </Link>
  );
};

export default HeaderLink;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 0 8px;
  text-decoration: none;
  color: #fff;
  gap: 4px;

  &:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;
      transition: 0.2s transform ease-out;
    }
  }
`;

const Icon = styled.img`
  height: 20px;
`;

const Text = styled.span`
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  position: relative;

  &:after {
    content: "";
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left center;
  }
`;
