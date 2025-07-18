import React from "react";
import sanitizeHTML from "sanitize-html";
import parser from "html-react-parser";

const HtmlParser = ({ html }: { html: string }) => {
  return parser(sanitizeHTML(html));
};

export default HtmlParser;
