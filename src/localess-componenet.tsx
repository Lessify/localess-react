import {forwardRef} from "react";
import {ContentData, Links} from "@localess/js-client";

export type LocalessComponentProps = {
  data: ContentData
  links?: Links
}

const LocalessComponent = forwardRef<HTMLElement, LocalessComponentProps>((props, ref) => {




  return (<></>);
}

export default LocalessComponent;
