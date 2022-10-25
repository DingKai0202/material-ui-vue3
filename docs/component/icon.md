## 图标

mui 推荐使用 xicons 作为图标库

```
$ pnpm install @vicons/ionicons5
```

## 使用图标


<script setup lang="ts">
import { CashOutline, AddCircle } from '@vicons/ionicons5'
</script>

<mui-icon color="red" size='40'>
  <AddCircle />
</mui-icon>

<mui-icon color="blue" size='40'>
  <CashOutline />
</mui-icon>
<div>

<mui-icon color="green" size='60'>
  <AddCircle />
</mui-icon>

<mui-icon color="blue" size='60'>
  <CashOutline />
</mui-icon>
</div>

```vue
<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5'
</script>
<template>
  <mui-icon color="red" size='40'>
    <AddCircle />
  </mui-icon>
</template>
```

## API

### Icon Props

<!-- ｜ 名 称  | 类型              | 默认值    | 说明     |
｜ ----- | ---------------- | --------- | -------  |
｜ color | string           | undefined | 图标颜色 |
｜ size  | number \| string | undefined | 图片大小 | -->


