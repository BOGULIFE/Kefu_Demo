// Add future requirements here. Client tabs are rendered only for entries in clients.
// Do not assign new requirement IDs automatically; the requirement owner supplies each ID.
window.DELIVERY_REQUIREMENTS=[{
 id:'FR-wenkf-001',name:'客服累计接待与详细数据',description:'从今日服务数据，延伸到单客服历史汇总、每日记录与Excel导出。',
 status:'待评审',updated:'2026-11-20',version:'V1.0',business:'在线客服',
 scope:'仅当前组织 · 沿用客服列表模块权限',
 documents:[{name:'需求单',file:'../01-需求档案/FR-wenkf-001-客服详细数据/01-需求单/需求单.md',description:'业务背景、需求范围与确认口径'},{name:'PRD',file:'../01-需求档案/FR-wenkf-001-客服详细数据/02-PRD/PRD.md',description:'功能规则、统计口径与验收标准'},{name:'UX设计需求表',file:'../01-需求档案/FR-wenkf-001-客服详细数据/03-UX设计/UX设计需求表.md',description:'页面、模块、交互及状态要求'}],
 clients:[{id:'admin',name:'管理后台',icon:'▣',viewport:'desktop',rules:[
 {title:'查看范围与入口',items:[
 '有「客服列表」模块权限即可查看，仅限当前组织，不新增角色或权限。',
 '列表新增「累计接待」；在「操作」中点击「详细数据」查看单个客服，保留原有「调整容量」。'
 ]},
 {title:'接待与评价怎么算',items:[
 '接待按会话次数计，同一客服对同一会话只计1次；转接时，实际接待过的客服各计1次。',
 '接待按该客服首次开始接待的日期统计；评价按提交日期统计，归属最后接待的客服。',
 '好评为4—5星，中评为3星，差评为1—2星。满意率=好评数÷评价总数×100%，保留两位小数，无评价显示—。历史满意率不受筛选影响，范围满意率按所选日期计算，两者均纳入导出汇总。每日记录在评价数右侧展示当日满意率，并同步导出；评价汇总中的满意率与好评、中评、差评同行。'
 ]},
 {title:'工单怎么算',items:[
 '工单按创建日期筛选，展示当前状态；创建工单数只计本人创建的工单。',
 '实际接取才算经手。处理中只计该客服已接取、当前仍在处理的工单，不含待接取或已转交工单。',
 '已完结计该客服曾接取经手且目前已完结的工单，同一工单只计1次。不同客服的经手完结数不能直接相加，三个工单指标也不做加总。'
 ]},
 {title:'日期查询与每日记录',items:[
 '默认查看全部，历史从2026-10-30起；可选今日、昨日、近7天、近一月或自定义日期。',
 '近7天含今日；近一月为最近30天含今日，仅统计历史起点后的日期；自定义含首尾日、跨度最多1年；全部历史不受1年限制，按北京时间归日。',
 '历史累计接待不随日期选择变化；无数据的日期保留并显示0，每页20条，按日期从近到远展示。'
 ]},
 {title:'刷新与导出',items:[
 '手动刷新数据。累计、汇总、每日记录与导出使用同一次统计结果；加载失败不能显示成0。',
 '导出Excel包含客服与组织、日期范围、历史累计、范围汇总及全部每日记录，不仅是当前页；不导出逐条会话或工单明细。',
 '查询未成功时不可导出；导出中避免重复操作，失败可重试。本次不做跨组织、多客服批量导出或统一统计页。'
 ]}
 ],scenes:[
 {id:'list',name:'客服列表',description:'累计接待列与详细数据入口',category:'主要场景'},
 {id:'all',name:'客服详细数据',description:'默认全部汇总与每日记录',category:'主要场景'},
 {id:'seven',name:'按日期查询',description:'近7天汇总，包含今日',category:'主要场景'},
 {id:'month',name:'近一月查询',description:'最近30天含今日，展示可统计历史',category:'主要场景'},
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

window.DELIVERY_REQUIREMENTS.push({
  "id": "FR-wenkf-002",
  "name": "用户提交工单与统一工单处理",
  "description": "用户填写表单提交反馈，自动指派客服，在现有工单处理统一流转并公开处理结果。",
  "status": "待评审",
  "updated": "2026-11-20",
  "version": "V1.2",
  "business": "在线客服",
  "scope": "管理后台 + 移动端H5 · 沿用现有用户身份",
  "documents": [
    {
      "name": "需求单",
      "file": "../01-需求档案/FR-wenkf-002-用户工单/01-需求单/需求单.md",
      "description": "业务范围与已确认口径"
    },
    {
      "name": "PRD",
      "file": "../01-需求档案/FR-wenkf-002-用户工单/02-PRD/PRD.md",
      "description": "统一处理、模板及用户提交规则"
    },
    {
      "name": "UX设计需求表",
      "file": "../01-需求档案/FR-wenkf-002-用户工单/03-UX设计/UX设计需求表.md",
      "description": "页面、交互与状态设计"
    }
  ],
  "clients": [
    {
      "id": "admin",
      "name": "管理后台",
      "icon": "▣",
      "viewport": "desktop",
      "rules": [
        {
          "title": "统一入口与来源",
          "items": [
            "复用现有工单处理列表和详情，以来源区分客服创建和用户提交，不新增独立用户工单处理菜单。",
            "来源、归属、状态和关键词组合查询；来源不会因移交或完结改变。",
            "客服创建工单保留原权限、接收与处理流程，不强制套用用户表单。"
          ]
        },
        {
          "title": "权限与流转",
          "items": [
            "管理员可查看授权范围内全部用户工单，移交、完结及配置模板；默认指派给我，可切换全部。",
            "普通客服仅查看和处理当前指派给自己的用户工单；移交后原客服失去访问权限。",
            "用户提交和移交后均直接处理中，无需接收；已完结用户工单只读。"
          ]
        },
        {
          "title": "表单模板",
          "items": [
            "仅管理员创建类型；每个模板配置一个有效默认处理人，用户提交后自动指派。",
            "字段支持文本、单选项、多选项、图片、视频、长文本；可配置顺序、选项及是否必填。",
            "保存成功的模板可在H5选择；默认处理人不可用时不创建无处理人的工单。"
          ]
        },
        {
          "title": "沿用现有完结弹窗",
          "items": [
            "处理结果为已解决、未解决或转需求，默认已解决；三种分类均使工单完结，转需求不自动创建产品需求。",
            "内部处理结论、处理依据／验证记录、面向用户的结果说明均必填；前两项仅后台可见。",
            "用户仅看到处理分类和面向用户的结果说明；管理员代完结不改变当前处理人。",
            "本次不扩展FR-wenkf-001统计口径；原型权限及异常仅为模拟。"
          ]
        }
      ],
      "scenes": [
        {
          "id": "unified-list",
          "name": "统一工单列表",
          "description": "客服创建与用户提交在同一列表处理",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=unified-list"
        },
        {
          "id": "source-query",
          "name": "来源组合查询",
          "description": "来源、归属、状态与关键词筛选",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=source-query"
        },
        {
          "id": "user-detail",
          "name": "用户工单详情",
          "description": "提交内容、附件及处理记录",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=user-detail"
        },
        {
          "id": "transfer",
          "name": "移交工单",
          "description": "移交后保持处理中，无需接收",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=transfer"
        },
        {
          "id": "finish",
          "name": "完结工单",
          "description": "沿用现有弹窗，分别填写内部和公开说明",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=finish"
        },
        {
          "id": "templates",
          "name": "工单类型配置",
          "description": "管理员查看模板及默认处理人",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=templates"
        },
        {
          "id": "template-create",
          "name": "创建表单模板",
          "description": "六类字段、必填项及单一处理人",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=template-create"
        },
        {
          "id": "legacy-detail",
          "name": "原客服工单·待接收",
          "description": "保留原有接收流程",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=legacy-detail"
        },
        {
          "id": "legacy-processing",
          "name": "原客服工单·处理中",
          "description": "保留既有操作与详情",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=legacy-processing"
        },
        {
          "id": "legacy-completed",
          "name": "原客服工单·已完结",
          "description": "查看既有完结内容",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=legacy-completed"
        },
        {
          "id": "admin-errors",
          "name": "查询失败与恢复",
          "description": "失败提示及重试",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=admin-errors"
        },
        {
          "id": "empty",
          "name": "筛选无结果",
          "description": "调整查询条件后重试",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=empty"
        },
        {
          "id": "permission",
          "name": "无访问权限",
          "description": "阻断无权限访问",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=permission"
        },
        {
          "id": "loading",
          "name": "加载中",
          "description": "查询加载占位",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=admin&scene=loading"
        }
      ]
    },
    {
      "id": "h5",
      "name": "移动端H5",
      "icon": "▯",
      "viewport": "mobile",
      "rules": [
        {
          "title": "入口与身份",
          "items": [
            "在快捷问题金刚区下方、常见问题上方增加工单记录和提交工单反馈卡片，保留人工客服入口。",
            "沿用现有客服用户身份；仅可查看本人主动提交的工单，不展示关联本人的客服内部工单。"
          ]
        },
        {
          "title": "填写与提交",
          "items": [
            "先选择后台已配置的反馈类型，再填写对应表单；必填规则与模板一致，选填字段可留空。",
            "支持文本、选择、图片、视频及长文本；未完成或失败的附件需处理后提交。",
            "成功后自动指派模板处理人，直接进入处理中；成功页展示工单编号并可查看详情。",
            "无可用模板或默认处理人不可用时不创建工单；提交结果未知时核实同次提交，避免重复创建。"
          ]
        },
        {
          "title": "记录与处理结果",
          "items": [
            "记录仅展示处理中、已完结两种状态；可查看提交内容及附件。",
            "完结后展示处理分类及面向用户的结果说明，不公开内部处理结论、验证记录和后台操作日志。",
            "用户不能移交或完结工单，也不能访问其他用户或客服创建工单的详情与附件。"
          ]
        }
      ],
      "scenes": [
        {
          "id": "home",
          "name": "客服首页",
          "description": "快捷问题下方新增记录和反馈卡片",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=home"
        },
        {
          "id": "type-select",
          "name": "选择反馈类型",
          "description": "选择后台配置的表单模板",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=type-select"
        },
        {
          "id": "form",
          "name": "填写反馈表单",
          "description": "文本、选择、图片及视频输入",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=form"
        },
        {
          "id": "submit-success",
          "name": "提交成功",
          "description": "确认编号，进入工单详情",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=submit-success"
        },
        {
          "id": "records",
          "name": "工单记录",
          "description": "仅查看本人提交，可按状态筛选",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=records"
        },
        {
          "id": "record-detail",
          "name": "处理中详情",
          "description": "查看提交内容及当前处理状态",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=record-detail"
        },
        {
          "id": "completed-detail",
          "name": "已完结与处理结果",
          "description": "展示处理分类及面向用户的说明",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=completed-detail"
        },
        {
          "id": "mobile-errors",
          "name": "上传失败与重试",
          "description": "保留表单内容并恢复上传",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=mobile-errors"
        },
        {
          "id": "no-types",
          "name": "暂无反馈类型",
          "description": "无模板时不允许提交",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=no-types"
        },
        {
          "id": "no-records",
          "name": "暂无工单记录",
          "description": "引导提交反馈",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=no-records"
        },
        {
          "id": "permission",
          "name": "工单不可访问",
          "description": "不可查看他人或内部客服工单",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-002-用户工单/04-静态Demo/FR-wenkf-002-用户工单Demo.html?client=h5&scene=permission"
        }
      ]
    }
  ],
  "flow": {
    "title": "用户提交工单与统一处理流程",
    "description": "模板配置、H5申请、后台处理与用户回查；客服创建工单沿用原流程。",
    "height": 1110,
    "nodes": [
      {
        "id": "template",
        "x": 410,
        "y": 30,
        "w": 280,
        "h": 66,
        "label": "管理员：配置工单类型",
        "sub": "六类字段、必填与一个默认处理人",
        "client": "admin",
        "scene": "template-create",
        "kind": "action"
      },
      {
        "id": "home",
        "x": 410,
        "y": 140,
        "w": 280,
        "h": 66,
        "label": "用户：进入H5提交反馈",
        "sub": "快捷问题下方的新增卡片",
        "client": "h5",
        "scene": "home",
        "kind": "action"
      },
      {
        "id": "form",
        "x": 410,
        "y": 250,
        "w": 280,
        "h": 66,
        "label": "用户：选类型并填写表单",
        "sub": "沿用现有用户身份",
        "client": "h5",
        "scene": "form",
        "kind": "action"
      },
      {
        "id": "error",
        "x": 35,
        "y": 360,
        "w": 280,
        "h": 66,
        "label": "提交未成功：保留填写内容",
        "sub": "必填、上传或处理人不可用时修正重试",
        "client": "h5",
        "scene": "mobile-errors",
        "kind": "blocked"
      },
      {
        "id": "submit",
        "x": 410,
        "y": 360,
        "w": 280,
        "h": 66,
        "label": "校验成功：创建并自动指派",
        "sub": "来源为用户提交，直接处理中",
        "client": "h5",
        "scene": "submit-success",
        "kind": "system"
      },
      {
        "id": "list",
        "x": 410,
        "y": 470,
        "w": 280,
        "h": 66,
        "label": "客服：在原工单处理统一处理",
        "sub": "来源筛选，管理员全部／指派给我",
        "client": "admin",
        "scene": "unified-list",
        "kind": "action"
      },
      {
        "id": "legacy",
        "x": 785,
        "y": 470,
        "w": 280,
        "h": 66,
        "label": "客服创建工单沿用原流程",
        "sub": "保留待接收，不自动公开到H5",
        "client": "admin",
        "scene": "legacy-detail",
        "kind": "neutral"
      },
      {
        "id": "detail",
        "x": 410,
        "y": 580,
        "w": 280,
        "h": 66,
        "label": "客服：查看提交内容与附件",
        "sub": "普通客服仅可处理当前指派给自己的工单",
        "client": "admin",
        "scene": "user-detail",
        "kind": "action"
      },
      {
        "id": "transfer",
        "x": 35,
        "y": 690,
        "w": 280,
        "h": 66,
        "label": "移交其他客服",
        "sub": "保持处理中，原普通客服失去访问权",
        "client": "admin",
        "scene": "transfer",
        "kind": "action"
      },
      {
        "id": "finish",
        "x": 410,
        "y": 800,
        "w": 280,
        "h": 66,
        "label": "客服或管理员：填写完结弹窗",
        "sub": "已解决／未解决／转需求；三项说明必填",
        "client": "admin",
        "scene": "finish",
        "kind": "action"
      },
      {
        "id": "done",
        "x": 410,
        "y": 910,
        "w": 280,
        "h": 66,
        "label": "完结成功：状态更新为已完结",
        "sub": "分类与说明一并保存，不自动创建需求",
        "client": "h5",
        "scene": "completed-detail",
        "kind": "system"
      },
      {
        "id": "history",
        "x": 410,
        "y": 1020,
        "w": 280,
        "h": 66,
        "label": "用户：从工单记录查看结果",
        "sub": "仅本人提交；展示分类和公开说明",
        "client": "h5",
        "scene": "records",
        "kind": "action"
      },
      {
        "id": "private",
        "x": 785,
        "y": 910,
        "w": 280,
        "h": 66,
        "label": "内部信息仅后台可见",
        "sub": "内部处理结论、处理依据／验证记录",
        "client": "admin",
        "scene": "user-detail",
        "kind": "neutral"
      }
    ],
    "edges": [
      {
        "d": "M550 96 V140",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M550 206 V250",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M550 316 V360",
        "label": "有效",
        "x": 575,
        "y": 342,
        "negative": false
      },
      {
        "d": "M410 283 H175 V360",
        "label": "校验失败",
        "x": 220,
        "y": 272,
        "negative": true
      },
      {
        "d": "M175 360 V330 H410",
        "label": "修正重试",
        "x": 225,
        "y": 348,
        "negative": false
      },
      {
        "d": "M550 426 V470",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M785 503 H690",
        "label": "同一列表",
        "x": 740,
        "y": 490,
        "negative": false
      },
      {
        "d": "M550 536 V580",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M550 646 V800",
        "label": "直接完结",
        "x": 595,
        "y": 735,
        "negative": false
      },
      {
        "d": "M410 613 H175 V690",
        "label": "需要移交",
        "x": 230,
        "y": 601,
        "negative": false
      },
      {
        "d": "M175 756 V773 H390 V613 H410",
        "label": "新处理人继续处理",
        "x": 210,
        "y": 795,
        "negative": false
      },
      {
        "d": "M550 866 V910",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M550 976 V1020",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M690 943 H785",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      }
    ],
    "notes": [
      "管理员配置单一默认处理人；表单校验或处理人不可用时保留输入并提示恢复，不创建未指派工单。",
      "用户提交及移交均直接处理中，无需接收；普通客服仅可处理当前指派工单。",
      "完结三项说明均必填；内部处理信息不对用户公开，未解决／转需求同样结束工单。",
      "H5仅展示当前用户主动提交的工单及公开结果；客服创建工单沿用原流程。"
    ]
  }
});

// FR-wenkf-003: admin only; initial status reflects delivery review.
window.DELIVERY_REQUIREMENTS.push({
  "id": "FR-wenkf-003",
  "name": "每日高频咨询与回复话术总结",
  "description": "按日归纳人工客服聊天Top 5及实际回复，查看昨日并回查已保存的历史单日。",
  "status": "待评审",
  "updated": "2026-11-25",
  "version": "V1.0",
  "business": "在线客服",
  "scope": "仅管理后台 · 当前组织 · 数据统计权限",
  "documents": [
    {
      "name": "需求单",
      "file": "../01-需求档案/FR-wenkf-003-每日高频咨询/01-需求单/需求单.md",
      "description": "已确认业务范围与日期边界"
    },
    {
      "name": "PRD",
      "file": "../01-需求档案/FR-wenkf-003-每日高频咨询/02-PRD/PRD.md",
      "description": "生成、保存、权限及异常方案（待评审）"
    },
    {
      "name": "UX设计需求表",
      "file": "../01-需求档案/FR-wenkf-003-每日高频咨询/03-UX设计/UX设计需求表.md",
      "description": "页面、单日导航与状态设计"
    }
  ],
  "clients": [
    {
      "id": "admin",
      "name": "管理后台",
      "icon": "▣",
      "viewport": "desktop",
      "rules": [
        {
          "title": "入口、权限与组织",
          "items": [
            "管理后台沿用数据统计权限，仅查看当前组织全部人工客服聊天的总结，不限本人接待；H5和用户端无新增入口。",
            "沿用现有「管理与运营 → 数据统计」，服务数据概览在前，昨日高频咨询在其下方；模块右上角进入独立历史页。",
            "切换组织或识别到权限撤销时立即撤下旧内容，旧请求不能覆盖当前组织结果。"
          ]
        },
        {
          "title": "总结范围与排名",
          "items": [
            "按北京时间消息发送时间截取前一自然日文本，含00:00起点、不含次日00:00；不按会话开始或结束日期归日。",
            "仅分析人工客服与用户的聊天文本，不纳入工单、图片、语音或知识库答案。",
            "同类问题合并，按涉及会话数排序取最多5类；同一会话同类问题当日只计1次，不足5类按实际展示。",
            "同一会话不同问题分别计数，转接不重复计数；同频保持固定顺序，页面不增加频次列。"
          ]
        },
        {
          "title": "回复话术",
          "items": [
            "每个问题仅归纳统计日内客服实际回复，保留适用条件及限制，不虚构承诺，不跨日补全。",
            "无对应回复时提示「暂无可归纳的客服回复」；不原样展示个人信息，长话术可展开阅读。",
            "生成后直接展示，无人工审核；不增加自动回复、快捷应用或知识库写入。"
          ]
        },
        {
          "title": "每日生成与保存",
          "items": [
            "每日凌晨自动生成，前一日总结应于次日02:00前可查看，任务不依赖打开页面。",
            "从上线日逐日保存；首份在上线次日生成，覆盖上线日完整自然日，包含上线时刻之前的当日文本；不补算上线日前历史。",
            "同组织同日期仅一份可见结果，查看与刷新只读取保存结果；失败和重复任务不能覆盖已成功或已完成无数据结果。"
          ]
        },
        {
          "title": "历史日期与恢复",
          "items": [
            "历史仅支持上线日至昨日的单日查看，禁止今日、未来和上线日前日期，不合并多日总结。",
            "日期列表倒序每页20日，选择日期立即查询并定位所在页；翻页选该页首日，刷新保留合法日期及页码，返回统计页重查昨日。",
            "待生成、生成中、无咨询、生成失败和查询失败分别展示；02:00后未成功标明未按计划完成，不拿前天结果冒充昨日。",
            "同日刷新失败可保留上次读取结果并明确标注；换日撤下旧详情，非法日期和翻页失败保留原有效选择。",
            "后台自动重试补齐原组织原日期；页面刷新只查询，无手动重生成、导出、个人排行或跨组织总榜。"
          ]
        }
      ],
      "scenes": [
        {
          "id": "success",
          "name": "昨日高频咨询",
          "description": "服务概览下方展示Top 5及长话术",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=success"
        },
        {
          "id": "history",
          "name": "历史高频咨询",
          "description": "单日查看、20日分页及返回昨日",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=history"
        },
        {
          "id": "history-page-two",
          "name": "历史指定日期",
          "description": "深链接直达第二页2026-11-04",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=success&view=history&date=2026-11-04"
        },
        {
          "id": "three",
          "name": "不足5类",
          "description": "按实际3类展示",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=three"
        },
        {
          "id": "tie",
          "name": "同频稳定排名",
          "description": "保存顺序固定，不展示频次",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=tie"
        },
        {
          "id": "crossday",
          "name": "跨日与缺失回复",
          "description": "不使用次日回复补全当日话术",
          "category": "主要场景",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=crossday"
        },
        {
          "id": "pending",
          "name": "待生成",
          "description": "01:20尚未生成",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=pending"
        },
        {
          "id": "generating",
          "name": "生成中",
          "description": "真实生成状态与查询加载分开",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=generating"
        },
        {
          "id": "empty",
          "name": "当日无咨询",
          "description": "完成但无有效咨询",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=empty"
        },
        {
          "id": "failed",
          "name": "生成失败",
          "description": "02:00后未按计划完成",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=failed"
        },
        {
          "id": "overdue",
          "name": "生成超时",
          "description": "超时保留真实生成中状态",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=overdue"
        },
        {
          "id": "first",
          "name": "上线当天",
          "description": "首份未到，日期控件禁用",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=first"
        },
        {
          "id": "firstNext",
          "name": "上线次日首份",
          "description": "覆盖上线日完整自然日",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=firstNext"
        },
        {
          "id": "loading",
          "name": "查询加载中",
          "description": "不显示其他日期结果",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=loading"
        },
        {
          "id": "readError",
          "name": "首次读取失败",
          "description": "重试恢复读取",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=readError"
        },
        {
          "id": "staleError",
          "name": "同日刷新失败",
          "description": "保留上次结果并标注",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=staleError"
        },
        {
          "id": "pageError",
          "name": "历史翻页失败",
          "description": "保留原页与日期，支持重试",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=pageError"
        },
        {
          "id": "permission",
          "name": "无数据统计权限",
          "description": "撤下受限内容",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=permission"
        },
        {
          "id": "orgRace",
          "name": "组织切换竞态",
          "description": "切组织后忽略过期响应",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=orgRace"
        },
        {
          "id": "midnight",
          "name": "跨北京时间零点",
          "description": "推进时钟后刷新重算昨日",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=midnight"
        },
        {
          "id": "recovered",
          "name": "后台自动补齐",
          "description": "所属日期不变，刷新只读结果",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=recovered"
        },
        {
          "id": "protected",
          "name": "成功结果保护",
          "description": "后续失败不能覆盖已完成结果",
          "category": "状态与异常",
          "url": "../01-需求档案/FR-wenkf-003-每日高频咨询/04-静态Demo/FR-wenkf-003-每日高频咨询Demo.html?scene=protected"
        }
      ]
    }
  ],
  "flow": {
    "title": "每日高频咨询生成与历史回查流程",
    "description": "系统自动归纳和保存，后台校验权限后读取昨日或历史单日；异常分开恢复。",
    "height": 900,
    "nodes": [
      {
        "id": "day",
        "x": 410,
        "y": 25,
        "w": 280,
        "h": 66,
        "label": "系统：北京时间自然日结束",
        "sub": "按组织及消息发送时间截取当日文本",
        "client": "admin",
        "scene": "",
        "kind": "system"
      },
      {
        "id": "ai",
        "x": 410,
        "y": 135,
        "w": 280,
        "h": 66,
        "label": "系统：归并问题与实际回复",
        "sub": "会话去重、固定排名、最多5类",
        "client": "admin",
        "scene": "",
        "kind": "system"
      },
      {
        "id": "decision",
        "x": 410,
        "y": 245,
        "w": 280,
        "h": 66,
        "label": "校验：是否完整生成",
        "sub": "不展示半成品，不用失败覆盖成功",
        "client": "admin",
        "scene": "",
        "kind": "decision"
      },
      {
        "id": "fail",
        "x": 35,
        "y": 245,
        "w": 280,
        "h": 66,
        "label": "生成失败／超时",
        "sub": "02:00后标明未按计划完成",
        "client": "admin",
        "scene": "failed",
        "kind": "blocked"
      },
      {
        "id": "save",
        "x": 410,
        "y": 355,
        "w": 280,
        "h": 66,
        "label": "系统：保存所属日期结果",
        "sub": "含成功及无咨询；同组织同日一份",
        "client": "admin",
        "scene": "empty",
        "kind": "system"
      },
      {
        "id": "retry",
        "x": 35,
        "y": 355,
        "w": 280,
        "h": 66,
        "label": "系统：自动重试补齐原日期",
        "sub": "不改变组织及所属日，刷新仅查询",
        "client": "admin",
        "scene": "recovered",
        "kind": "system"
      },
      {
        "id": "access",
        "x": 410,
        "y": 465,
        "w": 280,
        "h": 66,
        "label": "账号：校验数据统计权限",
        "sub": "仅当前组织，组织切换撤下旧内容",
        "client": "admin",
        "scene": "orgRace",
        "kind": "decision"
      },
      {
        "id": "denied",
        "x": 785,
        "y": 465,
        "w": 280,
        "h": 66,
        "label": "权限不足：撤下受限内容",
        "sub": "返回可访问页面，不保留旧内容",
        "client": "admin",
        "scene": "permission",
        "kind": "blocked"
      },
      {
        "id": "yesterday",
        "x": 410,
        "y": 575,
        "w": 280,
        "h": 66,
        "label": "运营：查看昨日高频咨询",
        "sub": "先服务概览，再阅读问题与对应话术",
        "client": "admin",
        "scene": "success",
        "kind": "action"
      },
      {
        "id": "history",
        "x": 410,
        "y": 685,
        "w": 280,
        "h": 66,
        "label": "运营：回查历史单日",
        "sub": "上线日至昨日，每页20个日期",
        "client": "admin",
        "scene": "history",
        "kind": "action"
      },
      {
        "id": "readFail",
        "x": 35,
        "y": 685,
        "w": 280,
        "h": 66,
        "label": "查询失败：保留有效选择",
        "sub": "同日保留结果并标注；可重试",
        "client": "admin",
        "scene": "staleError",
        "kind": "blocked"
      },
      {
        "id": "back",
        "x": 410,
        "y": 795,
        "w": 280,
        "h": 66,
        "label": "运营：选择日期／返回昨日",
        "sub": "读取保存结果，不调用AI重新生成",
        "client": "admin",
        "scene": "history-page-two",
        "kind": "action"
      }
    ],
    "edges": [
      {
        "d": "M550 91 V135",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M550 201 V245",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M550 421 V465",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M550 641 V685",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M550 751 V795",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M550 311 V355",
        "label": "完整",
        "x": 580,
        "y": 338,
        "negative": false
      },
      {
        "d": "M410 278 H315",
        "label": "失败",
        "x": 360,
        "y": 264,
        "negative": true
      },
      {
        "d": "M175 311 V355",
        "label": "",
        "x": 0,
        "y": 0,
        "negative": false
      },
      {
        "d": "M175 355 V168 H410",
        "label": "自动重试",
        "x": 210,
        "y": 190,
        "negative": false
      },
      {
        "d": "M690 498 H785",
        "label": "无权限",
        "x": 738,
        "y": 485,
        "negative": true
      },
      {
        "d": "M550 531 V575",
        "label": "通过",
        "x": 580,
        "y": 559,
        "negative": false
      },
      {
        "d": "M410 718 H315",
        "label": "读取失败",
        "x": 355,
        "y": 704,
        "negative": true
      },
      {
        "d": "M175 685 V608 H410",
        "label": "重试读取",
        "x": 220,
        "y": 594,
        "negative": false
      },
      {
        "d": "M690 828 H735 V608 H690",
        "label": "返回昨日",
        "x": 790,
        "y": 721,
        "negative": false
      }
    ],
    "notes": [
      "按北京时间消息时间归日，同会话同类问题每日去重；仅归纳当日实际回复。",
      "首份覆盖上线日完整自然日，次日02:00前提供；不补算上线日前历史。",
      "查看与刷新只读取保存结果，后台自动重试失败日期，成功结果受保护。",
      "待评审包含PRD与UX的方案设计；本Demo不实现真实AI、调度、数据库或权限服务。"
    ]
  }
});
