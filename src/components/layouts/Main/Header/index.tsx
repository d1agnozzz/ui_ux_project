import React from "react";
import dynamic from "next/dynamic";
import { MdOutlineDarkMode } from "react-icons/md";
import * as Style from "./index.styled";
import Image from "next/image";
import ThemeButton from "@/components/common/ThemeButton";
import SearchBar from "./SearchBar";

type HeaderProps = {
  switchTheme: () => void;
};
export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo href="/">
          <Style.Icon src="/logo_cropped.png" alt="" />
          <Style.LogoName>КиноСфера</Style.LogoName>
        </Style.Logo>
        <Style.SearchContainer>
          <SearchBar></SearchBar>
        </Style.SearchContainer>

        <Style.Buttons>
          <ThemeButton
            name={<MdOutlineDarkMode />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export const DynamicHeader = dynamic(() => Promise.resolve(Header), {
  ssr: false,
});
export default DynamicHeader;
