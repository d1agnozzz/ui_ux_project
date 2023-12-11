import React from "react";
import dynamic from "next/dynamic";
import { MdOutlineDarkMode } from "react-icons/md";
import * as Style from "./index.styled";
import Image from "next/image";
import Button from "@/components/common/Button/Button";
import SearchBar from "@/components/common/TextInput/TextInput";

type HeaderProps = {
  switchTheme: () => void;
};
export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Image
            src="/logo_cropped.png"
            alt=""
            height={64}
            width={64}
            unoptimized={true}
          />
          <Style.LogoName>КиноСфера</Style.LogoName>
        </Style.Logo>
        <Style.SearchContainer>
          <SearchBar></SearchBar>
        </Style.SearchContainer>

        <Style.Buttons>
          <Button
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
export default Header;
