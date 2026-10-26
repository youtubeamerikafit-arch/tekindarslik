"use strict";

const p = (text) => ({ type: "p", text, html: text });
const h = (text) => ({ type: "h", text, html: text });
const note = (text, variant) => ({
  type: "note",
  text,
  html: text,
  variant: variant || "info",
});
const ul = (items) => ({ type: "ul", items });
const code = (title, source, output) => ({
  type: "code",
  lang: "scala",
  title,
  code: source,
  output,
});
const table = (headers, rows) => ({ type: "table", headers, head: headers, rows });
const quiz = (q, options, answer, explanation) => ({
  q,
  options,
  answer,
  explanation,
  explain: explanation,
});

module.exports = { p, h, note, ul, code, table, quiz };
