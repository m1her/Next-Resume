import { ClassicTemplate } from "./ClassicTemplate";
import { TwoColumnsTemplate } from "./TwoColumnsTemplate";

export interface TemplatesDataTypes {
  classic: JSX.Element;
  twoCol: JSX.Element;
}

export const templatesData: TemplatesDataTypes = {
  classic: <ClassicTemplate />,
  twoCol: <TwoColumnsTemplate />,
};
