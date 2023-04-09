import { PropsWithChildren } from "react";
import "./styles.scss";

function Container({ children }: PropsWithChildren) {
  return <div className='container'>{children}</div>;
}

export default Container;
