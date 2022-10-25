import DefaultTheme from "vitepress/theme";

import { MuiIcon } from '../../../packages/index'
import '../../../theme-chalk/src/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MuiIcon)  // 在 vitepress 中注册全局组件
  }
}
