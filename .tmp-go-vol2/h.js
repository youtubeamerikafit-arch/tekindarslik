"use strict";

const p = (text) => ({ type: "p", html: text });
const h = (text) => ({ type: "h", html: text });
const c = (title, code, output, lang = "go") => ({
  type: "code",
  lang,
  title,
  code: code.trim(),
  output: output.trim(),
});
const u = (items) => ({ type: "ul", items });
const n = (text, title = "", variant = "info") => {
  const block = { type: "note", variant, html: text };
  if (title) block.title = title;
  return block;
};
const t = (head, rows) => ({ type: "table", head, headers: head, rows });
const q = (text, options, answer, explain) => ({ q: text, options, answer, explain });

module.exports = { p, h, c, u, n, t, q };
