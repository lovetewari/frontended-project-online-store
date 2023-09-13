const getUniqueValues = (items, type) => {
  let unique = items.map((item) => item[type]);

  if (type === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};

export default getUniqueValues;
