import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";
import Image from "next/image";

type HeaderProps = {};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Image
            src="/logo_cropped.png"
            alt=""
            height={96}
            width={96}
            unoptimized={true}
          />
          <Style.Name>HD movies at the smallest file size.</Style.Name>
        </Style.Logo>

        <Style.Buttons></Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
