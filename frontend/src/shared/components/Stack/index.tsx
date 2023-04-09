import { PropsWithChildren } from "react";
import "./styles.scss";

function Stack({ children }: PropsWithChildren) {
  return <div className='stack'>{children}</div>;
}

export default Stack;
