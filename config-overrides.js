const { override, addDecoratorsLegacy } = require("customize-cra");
// 修改 create-react-app 的 webpack 的配置
module.exports = override(addDecoratorsLegacy());
