import { PropsWithChildren, useContext } from "react";

import Header from "./Header/Header";
import * as Style from "./index.styled";
export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Style.App>
      <Style.Content>
        <Header></Header>
        {children}
      </Style.Content>
    </Style.App>
  );
};
