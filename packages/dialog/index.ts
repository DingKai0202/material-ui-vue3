import { App } from 'vue'
import Dialog from './src/dialog.vue'
 
// 定义 install 方法， App 作为参数
Dialog.install = (app: App): void => {
    app.component(Dialog.name, Dialog)
}
 
export default Dialog
