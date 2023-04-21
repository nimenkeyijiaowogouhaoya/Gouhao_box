var rule = {
    title: '宝片视频',
    host: 'https://zpsps.com/',
    class_name:'影院&连续剧&综艺&动漫&纪录片',
    class_url:'1&2&3&4&20',
    homeUrl: '',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
    searchable: 2,
    quickSearch: 0,
    headers:{'User-Agent':'MOBILE_UA'},
    // 分类链接fypage参数支持1个()表达式
    url: '/index.php/api/vod#type=fyclass&page=fypage',
	//url: '/index.php/api/vod#type=fyfilter&page=fypage',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}',
    filter:{},    
	filter_def:{
		
	},
    detailUrl:'/index.php/vod/detail/id/fyid.html',
    图片来源:'@Referer=https://zpsps.com/',
    推荐:'.list-vod.flex .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    一级:'',
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=it.vod_pic.replace("mac:","https:");return it});',
    二级:{
		"title":".slide-info-title&&Text;.slide-info:eq(3)--strong&&Text",
		"img":".detail-pic&&data-original",
		"desc":".fraction&&Text;.slide-info-remarks:eq(1)&&Text;.slide-info-remarks:eq(2)&&Text;.slide-info:eq(2)--strong&&Text;.slide-info:eq(1)--strong&&Text",
		"content":"#height_limit&&Text",
		"tabs":".anthology&&.swiper-slide",
		"tab_text":".swiper-slide--i&&Text",
		"lists":".anthology-list-box:eq(#id) li"
	},
    搜索:'json:list;name;pic;;id',
}