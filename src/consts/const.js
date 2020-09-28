// const NAV_ITEMS = ['主页', '标签', '分类', '关于', '我的书单'];
const NAV_ITEMS = [
    { name: '主页', linkTo: '/' },
    { name: '标签', linkTo: '/label' },
    // { name: '分类', linkTo: '/kind/ ' },
    { name: '分类', linkTo: {name: 'kind', params: {kind: '/'}} },
    { name: '关于', linkTo: '/about' },
    { name: '我的书单', linkTo: '/' },
];

const NAV_ICONS = ['icon-fl-jia', 'icon-biaoqian', 'icon-shuqian', 'icon-touxiang', 'icon-shu'];

const TITLE = "Deng's Blog";

const SLOGON = 'Learn a little every day';

const ENTRANCE_ITEMS = ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'Node.js', 'MongoDB', 
    '操作系统原理', '计算机网络', 'Vue.js', 'Git']

const CLASSIFY_ITEMS = ['基本技能', '前端技术', '后端技术', '运维知识', '读书笔记', '生活小记', '资源整理'];

const ABOUT_ITEMS = [{name: '关于博客', linkTo: '/about'}, {name: '留言小本', linkTo: '/leaveMsg'}];

// const LABELS = ['Web开发', 'windows', '工具', 'HTML5/CSS3', 'Git', '规范', '回顾', '总结', 
//     '阅读', '小记', 'JavaScript', 'MySQL', 'Linux', 'MongoDB', 'Node.js', '数据结构', 
//     'Python', 'Vue.js', '浏览器'];

const LABELS = [
    {name: 'Web开发', left: '400px', top: '150px', color: '#00CCFF', fontSize: '50px'},
    {name: 'windows', left: '300px', top: '120px', color: '#90c5f0', fontSize: '30px'},
    {name: '工具', left: '200px', top: '100px', color: '#0cf', fontSize: '12px'},
    {name: 'HTML5', left: '500px', top: '130px', color: '#90c5f0', fontSize: '12px'},
    {name: 'CSS3', left: '750px', top: '170px', color: '#90c5f0', fontSize: '20px'},
    {name: 'Git', left: '310px', top: '90px', color: '#0cf', fontSize: '24px'},
    {name: '规范', left: '530px', top: '260px', color: '#90c5f0', fontSize: '30px'},
    {name: '回顾', left: '450px', top: '120px', color: '#AAB5F0', fontSize: '12px'},
    {name: '总结', left: '370px', top: '210px', color: '#0cf', fontSize: '12px'},
    {name: '阅读', left: '590px', top: '220px', color: '#90c5f0', fontSize: '24px'},
    {name: '小记', left: '380px', top: '80px', color: '#AAB5F0', fontSize: '30px'},
    {name: 'JavaScript', left: '210px', top: '160px', color: '#AAB5F0', fontSize: '30px'},
    {name: 'MySQL', left: '630px', top: '120px', color: '#AAB5F0', fontSize: '24px'},
    {name: 'Linux', left: '560px', top: '110px', color: '#0cf', fontSize: '12px'},
    {name: 'MongoDB', left: '670px', top: '190px', color: '#0cf', fontSize: '12px'},
    {name: 'Node.js', left: '390px', top: '230px', color: '#90c5f0', fontSize: '24px'},
    {name: '数据结构', left: '690px', top: '230px', color: '#AAB5F0', fontSize: '30px'},
    {name: 'ES6', left: '430px', top: '270px', color: '#AAB5F0', fontSize: '20px'},
    {name: 'Python', left: '670px', top: '80px', color: '#0cf', fontSize: '24px'},
    {name: 'Vue.js', left: '520px', top: '70px', color: '#0cf', fontSize: '24px'},
    {name: '操作系统原理', left: '280px', top: '50px', color: '#90c5f0', fontSize: '16px'},
    {name: '浏览器', left: '300px', top: '250px', color: '#AAB5F0', fontSize: '24px'},
    {name: '计算机网络', left: '250px', top: '220px', color: '#0cf', fontSize: '16px'}
];

const ABOUT = `这是我的个人博客，技术还比较不成熟，欢迎大家指点~`;

export {
    NAV_ITEMS, 
    NAV_ICONS,
    TITLE,
    SLOGON,
    ENTRANCE_ITEMS,
    CLASSIFY_ITEMS,
    ABOUT_ITEMS,
    LABELS,
    ABOUT
}