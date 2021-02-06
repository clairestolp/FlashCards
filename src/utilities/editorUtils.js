import { convertToHTML } from "draft-convert";

export function convertHTML(content) {
  return convertToHTML({
    styleToHTML: (style) => {
      console.log(style);
    },
  })(content);
}
