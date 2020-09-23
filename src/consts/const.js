// const NAV_ITEMS = ['主页', '标签', '分类', '关于', '我的书单'];
const NAV_ITEMS = [
    { name: '主页', linkTo: '/' },
    { name: '标签', linkTo: '/label' },
    { name: '分类', linkTo: '/' },
    { name: '关于', linkTo: '/' },
    { name: '我的书单', linkTo: '/' },
]

const TITLE = "Deng's Blog";

const ENTRANCE_ITEMS = ['HTML', 'HTML5', 'CSS', 'CSS3', 'JavaScript', 'ES6', 'Node.js', 'MongoDB', 
    '操作系统原理', '计算机网络']

const CLASSIFY_ITEMS = ['基本技能', '前端技术', '后端技术', '运维知识', '读书笔记', '生活小记', '资源整理'];

const ABOUT_ITEMS = ['关于博客', '留言小本'];

export {
    NAV_ITEMS, 
    TITLE,
    ENTRANCE_ITEMS,
    CLASSIFY_ITEMS,
    ABOUT_ITEMS
}