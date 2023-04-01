import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../data/index";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function SocialMedia(props) {
    return (
        <div className="social-media-div">
            {socialMediaLinks.map((media) => {
                return (
                    <a
                        href={media.link}
                        className={`icon-button`}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={media.name}
                    >
                        <FontAwesomeIcon icon={faGithub} className="p-1" color={media.backgroundColor} />
                    </a>
                );
            })}
        </div>
    );
}