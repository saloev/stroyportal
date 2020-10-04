export default () => {
  const svgContext = require.context(
    "!@/assets/icons", // search this directory
    true, // search subdirectories
    /\w+\.svg$/i // only include SVG files
  );
  const symbols = svgContext.keys().map((path) => {
    // get SVG file content
    const content = svgContext(path);
    // extract icon id from filename
    const id = path.replace(/^\.\/(.*)\.\w+$/, "$1");
    // replace svg tags with symbol tags and id attribute
    return content
      .replace("<svg", `<symbol id="${id}"`)
      .replace("svg>", "symbol>");
  });

  return symbols;
};
