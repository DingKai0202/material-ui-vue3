import { App } from 'vue'
import Icon from './src/icon.vue'
 
// 定义 install 方法， App 作为参数
Icon.install = (app: App): void => {
    app.component(Icon.name, Icon)
}
 
export default Icon