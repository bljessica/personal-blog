# personal-blog

基于Vue.js实现的个人博客前端界面

## 技术
+ vue框架
+ 使用vue-router进行路由管理
+ 使用vuex进行状态管理
+ 使用 postcss-px-to-viewport 适配移动端布局，px自动转换vw
+ 使用axios进行ajax请求
+ 使用element-ui的部分组件
+ 使用mavon-editor编辑器来书写markdown格式的博客

## 个人博客网址
[个人博客网址](http://49.234.89.20:8080)

## 功能
+ 登录注册功能
+ 发表博客
+ 收藏博客
+ 搜索博客
+ 按分类或标签查看博客
+ 修改个人信息
+ 发表留言

## 运行
``` 
# 安装依赖
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 待优化
由于采用了绝对定位，存在不同型号客户端的适配问题

## 性能
+ PageSpeed Insights：PC端得分91，可通过预加载关键请求、缓存静态资源来进一步提高网页加载速度
+ k6性能测试：平均响应时间为448ms，平均请求速率11个请求/秒
