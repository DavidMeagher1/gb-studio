const l10n = require("../helpers/l10n").default;

const id = "EVENT_SAVE_DATA";
const group = "EVENT_GROUP_SAVE_DATA";

const fields = [
  {
    label: l10n("FIELD_SAVE_DATA"),
  },
  {
    key: "__scriptTabs",
    type: "tabs",
    values: {
      end: l10n("FIELD_ON_SAVE"),
    },
  },
  {
    key: "true",
    type: "events",
  },
];

const compile = (input, helpers) => {
  const { dataSave } = helpers;
  dataSave(0, input.true);
};

module.exports = {
  id,
  group,
  fields,
  compile,
};
