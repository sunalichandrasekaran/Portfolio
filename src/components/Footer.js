import React from "react";

//import framer motion
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

//golbal style
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  BlueText,
  IconContainer,
  ContactContainer,
} from "../../src/styles/Global.styled";

//variants
import { fadeInBottomVariant } from "../utils/Variants";

const Footer = () => {
  return (
    <>
      <PaddingContainer left="2%" right="2%" id="Contact" top="5%" bottom="15%">
        <Heading
          as={motion.h4}
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
          size="h4"
          align="center"
        >
          MY CONTACT
        </Heading>

        <Heading
          as={motion.h2}
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
          size="h2"
          align="center"
          top="0.5rem"
        >
          Contact <BlueText>Me Here</BlueText>
        </Heading>
        <PaddingContainer responsiveTop="5rem" top="5rem">
          <FlexContainer responsiveFlex responsiveDirection="column" gap="30px">
            <a
              style={{ textDecoration: "none" }}
              href="mailto:sunalichandrasekaran06@gmail.com"
            >
              <ContactContainer padding="1rem 1rem">
                <IconContainer size="1.4rem">
                  <IoMdMail /> : sunalichandrasekaran06@gmail.com
                </IconContainer>
              </ContactContainer>
            </a>

            <a style={{ textDecoration: "none" }} href="tel:+918610844080">
              <ContactContainer padding="1rem 2rem">
                <IconContainer size="1.5rem">
                  <BsFillTelephoneFill /> : 8610844080
                </IconContainer>
              </ContactContainer>
            </a>

            <ContactContainer padding="1rem 2rem">
              <IconContainer size="1.5rem">
                <IoLocationSharp /> : Salem
              </IconContainer>
            </ContactContainer>
          </FlexContainer>
        </PaddingContainer>
      </PaddingContainer>
    </>
  );
};

export default Footer;
