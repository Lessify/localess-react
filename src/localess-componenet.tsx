import {forwardRef} from "react";
import {ContentData, Links, llEditable} from "@localess/js-client";
import {FONT_BOLD, FONT_NORMAL} from "./console";
import {getComponent, getFallbackComponent, isSyncEnabled} from "./index";

export type LocalessComponentProps = {
  data: ContentData
  links?: Links
}

const LocalessComponent = forwardRef<HTMLElement, LocalessComponentProps>(({data, links, ...restProps}, ref) => {
  if (!data) {
    console.error('LocalessComponent property %cdata%c is not provided.', FONT_BOLD, FONT_NORMAL)
    return <div>LocalessComponent property <b>data</b> is not provided.</div>
  }
  // Find Component from Mapping
  const Comp = getComponent(data._schema || data.schema);
  if (Comp) {
    const attr = isSyncEnabled() ? llEditable(data) : {};
    return <Comp ref={ref} data={data} links={links} {...attr} {...restProps} />;
  }
  // Try to use Fallback Component
  const FallbackComponent = getFallbackComponent()
  if (FallbackComponent) {
    return <FallbackComponent ref={ref} data={data} links={links} {...restProps} />
  }
  // Missing Configuration case
  return (
    <p>
      <b>LocalessComponent</b> could not found component with key <b>{data._schema || data.schema}</b>. <br/>
      Please check if your configuration is correct.
    </p>
  );
});

export default LocalessComponent;
