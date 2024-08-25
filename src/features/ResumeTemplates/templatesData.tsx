import { ClassicTemplate } from "./ClassicTemplate";
import { TwoColumnsTemplate } from "./TwoColumnsTemplate";

export interface TemplatesData {
  classic: JSX.Element;
  twoCol: JSX.Element;
}

export const templatesData: TemplatesData = {
  classic: <ClassicTemplate />,
  twoCol: <TwoColumnsTemplate />,
};
