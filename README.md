# student-manager

## 基于vue的简易学生信息管理系统

### 简介
- 之前使用jQuery写过一个版本，这个版本使用vue进行了重构。

- 首先将项目进行拆分，分为了页面级组件和页面所依赖的子组件。

- 页面级组件包括了新增学生页面，学生列表展示页面，这两个页面的跳转使用 vue-router 实现。

- 主页面包含了四个子组件：头部导航，侧边导航，遮罩层和修改学生信息的表单。

- 此项目使用css媒体查询实现了简单的响应式布局，简单来说就是当页面宽度小于768px像素时，切换路由的菜单会在头部展示，通过一个按钮控制显示与隐藏；宽度大于768px像素时，菜单于侧边显示。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
