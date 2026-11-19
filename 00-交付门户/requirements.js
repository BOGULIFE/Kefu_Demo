// Add future requirements here. Client tabs are rendered only for entries in clients.
// Do not assign new requirement IDs automatically; the requirement owner supplies each ID.
window.DELIVERY_REQUIREMENTS=[{
 id:'FR-wenkf-001',name:'客服累计接待与详细数据',description:'从今日服务数据，延伸到单客服历史汇总、每日记录与Excel导出。',
 status:'待评审',updated:'2026-11-19',version:'V1.0',business:'在线客服',
 scope:'仅当前组织 · 沿用客服列表模块权限',
 documents:[{name:'需求单',file:'../01-需求档案/FR-wenkf-001-客服详细数据/01-需求单/需求单.md',description:'业务背景、需求范围与确认口径'},{name:'PRD',file:'../01-需求档案/FR-wenkf-001-客服详细数据/02-PRD/PRD.md',description:'功能规则、统计口径与验收标准'},{name:'UX设计需求表',file:'../01-需求档案/FR-wenkf-001-客服详细数据/03-UX设计/UX设计需求表.md',description:'页面、模块、交互及状态要求'}],
 clients:[{id:'admin',name:'管理后台',icon:'▣',viewport:'desktop',scenes:[
 {id:'list',name:'客服列表',description:'累计接待列与详细数据入口',category:'主要场景'},
 {id:'all',name:'客服详细数据',description:'默认全部汇总与每日记录',category:'主要场景'},
 {id:'seven',name:'按日期查询',description:'近7天汇总，包含今日',category:'主要场景'},
 {id:'custom',name:'自定义日期',description:'编辑、校验与查询生效',category:'主要场景'},
 {id:'exporting',name:'导出数据',description:'点击导出，查看生成与下载反馈',category:'主要场景'},
 {id:'zero',name:'无服务数据',description:'保留日期记录，各指标为0',category:'状态与异常'},
 {id:'loading',name:'数据加载中',description:'汇总与每日记录加载占位',category:'状态与异常'},
 {id:'error',name:'数据加载失败',description:'保留条件，支持重试',category:'状态与异常'},
 {id:'pageError',name:'每日记录加载失败',description:'仅表格失败，汇总保持',category:'状态与异常'},
 {id:'expired',name:'统计结果失效',description:'刷新后继续查询或导出',category:'状态与异常'},
 {id:'exportFail',name:'导出失败',description:'点击导出触发失败，可重试',category:'状态与异常'},
 {id:'permission',name:'无访问权限',description:'隐藏数据，明确权限反馈',category:'状态与异常'},
 {id:'missing',name:'客服不可访问',description:'目标不可用，返回列表',category:'状态与异常'}
 ].map(scene=>({...scene,url:'../01-需求档案/FR-wenkf-001-客服详细数据/04-静态Demo/FR-wenkf-001-客服详细数据Demo.html?scene='+scene.id}))}],
 flow:{title:'客服数据查询与导出流程',description:'从客服列表进入单客服数据，按日期查看统计，导出与页面一致的Excel。',notes:[
 '仅当前组织，沿用客服列表模块权限；无权限或客服不可访问时阻断查询。',
 '接待按开始接待日期、评价按提交日期、工单按创建日期统计。',
 '处理中仅计该客服当前接取且正在处理的工单；已完结按曾接取经手关系统计。',
 '历史起点2026-10-30；自定义跨度最多1年，全部汇总覆盖完整可统计历史。',
 '导出与当前成功查询使用同一统计截至时间，包含所选范围全部每日记录。'
 ]}
}];
