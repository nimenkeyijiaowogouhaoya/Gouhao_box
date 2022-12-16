var rule={
    title:'核桃影院',
    host:'https://kkkk.plus',
    // host:'https://zaoii.com',
    // homeUrl:'/',
    url:'/vodshow/fyclass--------fypage---.html',
    searchUrl:'/so/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    //class_parse:'.conch-nav&&ul&&li;a&&Text;a&&href;./(\\d+).html',
    //cate_exclude:'',
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module;.module-main&&.module-item;a&&title;.lazy&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'body&&.module-item;a&&title;.lazy&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;.module-info-tag-link&&Text","img":".lazy&&data-original","desc":";;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text;.module-info-item:eq(4)&&Text","content":".module-info-item&&Text","tabs":".module-tab-items-box span","lists":".module-play-list:eq(#id) a"},
    搜索:'body&&.module-card-item;img&&alt;.lazy&&data-original;.module-item-note&&Text;a&&href',
}