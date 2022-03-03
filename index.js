module.exports = function ({ e, addUtilities, config }) {
  let newUtilities = {};
  let margins = config("theme.margin", {});

  for (const key in margins) {
    let classNameRow = `.${e(`opt-gap-x-${key}`)} > :not(:last-child)`;
    let classNameColumn = `.${e(`opt-gap-y-${key}`)} > :not(:first-child)`;
    let marginRight = margins[key];
    let marginTop = margins[key];

    if (marginRight == "auto") {
      continue;
    }

    newUtilities[classNameRow] = { marginRight };
    newUtilities[classNameColumn] = { marginTop };
  }

  addUtilities(newUtilities);
};
