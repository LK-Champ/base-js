import { declare } from "@babel/helper-plugin-utils";

export default declare((api, options, dirname) => {
  api.assertVersion(7);
  return {};
});