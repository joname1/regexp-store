/**
 * author is your github personal home page
 */
export default [
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配中文字符',
    // eslint-disable-next-line
    regex: /[\u4e00-\u9fa5]/,
    id: 0,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配双字节字符',
    // eslint-disable-next-line
    descs: ['包括汉字在内'],
    regex: /[^\x00-\xff]/,
    id: 1,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配空白行',
    // eslint-disable-next-line
    regex: /\n\s*\r/,
    id: 2,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配Email地址',
    // eslint-disable-next-line
    regex: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    id: 3,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配网址URL',
    // eslint-disable-next-line
    regex: /[a-zA-z]+:\/\/[^\s]*/,
    id: 4,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配国内电话号码',
    regex: /\d{3}-\d{8}|\d{4}-\{7,8}/,
    id: 5,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配QQ号',
    regex: /[1-9][0-9]{4,}/,
    id: 6,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配中国邮政编码',
    regex: /[1-9]\d{5}(?!\d)/,
    id: 7,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配18位身份证号',
    regex: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,
    id: 8,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配(年-月-日)格式日期',
    regex: /([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))/,
    id: 9,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配正整数',
    regex: /^[1-9]\d*$/,
    id: 10,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配负整数',
    regex: /^-[1-9]\d*$/,
    id: 11,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配整数',
    regex: /^-?[1-9]\d*$/,
    id: 12,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配非负整数（正整数 + 0）',
    regex: /^[1-9]\d*|0$/,
    id: 13,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配非正整数（负整数 + 0）',
    regex: /^-[1-9]\d*|0$/,
    id: 14,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配正浮点数',
    regex: /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/,
    id: 15,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '匹配负浮点数',
    regex: /^-[1-9]\d*\.\d*|-0\.\d*[1-9]\d*$/,
    id: 16,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '数字',
    regex: /^[0-9]*$/,
    id: 17,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: 'n位的数字',
    regex: /^\d{n}$/,
    id: 18,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '至少n位的数字',
    regex: /^\d{n,}$/,
    id: 19,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: 'm到n位的数字',
    regex: /^\d{m,n}$/,
    id: 20,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '零和非零开头的数字',
    regex: /^(0|[1-9][0-9]*)$/,
    id: 21,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '非零开头的最多带两位小数的数字',
    regex: /^([1-9][0-9]*)+(.[0-9]{1,2})?$/,
    id: 22,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '带1到2位小数的正数或负数',
    regex: /^(\-)?\d+(\.\d{1,2})?$/,
    id: 23,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '正数，负数，和小数',
    regex: /^(\-|\+)?\d+(\.\d+)?$/,
    id: 24,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '有两位小数的正实数',
    regex: /^[0-9]+(.[0-9]{2})?$/,
    id: 25,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '有1到3位小数的正实数',
    regex: /^[0-9]+(.[0-9]{1,3})?$/,
    id: 26,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '非零的正整数',
    regex: /^[1-9]\d*$/,
    id: 27,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '非零的负整数',
    regex: /^\-[1-9]0-9"*$/,
    id: 28,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '非负整数',
    regex: /^\d+$/,
    id: 29,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '非正整数',
    regex: /^-[1-9]\d*|0$/,
    id: 30,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '非负浮点数',
    regex: /^\d+(\.\d+)?$/,
    id: 31,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '非正浮点数',
    regex: /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/,
    id: 32,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '正浮点数',
    regex: /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/,
    id: 33,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '负浮点数',
    regex: /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/,
    id: 34,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '浮点数',
    regex: /^(-?\d+)(\.\d+)?$/,
    id: 35,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '汉字',
    regex: /^[\u4e00-\u9fa5]{0,}$/,
    id: 36,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '英文和数字',
    regex: /^[A-Za-z0-9]+$/,
    id: 37,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '长度为3到20的所有字符',
    regex: /^.{3,20}$/,
    id: 38,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '由26个英文字母组成的字符串',
    regex: /^[A-Za-z]+$/,
    id: 39,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '由26个大写英文字母组成的字符串',
    regex: /^[A-Z]+$/,
    id: 40,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '由26个小写英文字母组成的字符串',
    regex: /^[a-z]+$/,
    id: 41,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '由数字和26个英文字母组成的字符串',
    regex: /^[A-Za-z0-9]+$/,
    id: 42,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '由数字，26个英文字母或者下划线组成的字符串',
    regex: /^\w+$/,
    id: 43,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '中文，英文，数字包括下划线',
    regex: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
    id: 44,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '中文，英文，数字但不包括下划线等符号',
    regex: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
    id: 45,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '可以输入含有^%&\',;=?$"等字符',
    regex: /[^%&',;=?$\x22]+/,
    id: 46,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '禁止输入含有~的字符',
    regex: /[^~\x22]+/,
    id: 47,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: 'Email地址',
    regex: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    id: 48,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '域名',
    regex: /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\/.?/,
    id: 49,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: 'InternetURL',
    regex: /[a-zA-z]+:\/\/[^\s]*/,
    id: 50,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '手机号码',
    regex: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
    id: 51,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '国内电话号码',
    descs: ['051-4405222，021-87888822'],
    regex: /\d{3}-\d{8}|\d{4}-\d{7}/,
    id: 52,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '身份证号',
    descs: ['15位，18位数字'],
    regex: /^\d{15}|\d{18}$/,
    id: 53,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '短身份证号码',
    descs: ['数字，字母x结尾'],
    regex: /^([0-9]){7,18}(x|X)?$/,
    id: 54,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '帐号是否合法',
    descs: ['字母开头，允许5到16字节，允许字母数字下划线'],
    regex: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
    id: 55,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '密码',
    descs: ['以字母开头，长度在6到18之间，只能包含字母，数字和下划线'],
    regex: /^[a-zA-Z]\w{5,17}$/,
    id: 56,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '强密码',
    descs: ['必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8到10之间'],
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
    id: 57,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '日期格式',
    regex: /^\d{4}-\d{1,2}-\d{1,2}/,
    id: 58,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '一年的12个月（01到09和1到12）',
    regex: /^(0?[1-9]|1[0-2])$/,
    id: 59,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '一个月的31天（01到09和1到31）',
    regex: /^((0?[1-9])|((1|2)[0-9])|30|31)$/,
    id: 60,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '货币，钱的输入格',
    regex: / ^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/,
    id: 61,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: 'xml文件',
    regex: /^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$/,
    id: 62,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '中文字符的正则表达式',
    regex: /[\u4e00-\u9fa5]/,
    id: 63,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '双字节字符',
    regex: /[^\x00-\xff]/,
    descs: ['包括汉字在内，可以用来计算字符串的长度', '一个双字节字符长度计2，ASCII字符计1'],
    id: 64,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '空白行的正则表达式',
    regex: /\n\s*\r/,
    id: 65,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: 'HTML标记的正则表达式',
    regex: /<(\S*?)[^>]*>.*?<\/\1>|<.*?\/>/,
    desc: ['网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力'],
    id: 66,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '首尾空白字符的正则表达式',
    regex: /^\s*|\s*$/,
    descs: ['可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式'],
    id: 67,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '腾讯QQ号',
    regex: /[1-9][0-9]{4,}/,
    descs: ['腾讯QQ号从10000开始'],
    id: 68,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: '中国邮政编码',
    regex: /[1-9]\d{5}(?!\d)/,
    descs: ['中国邮政编码为6位数字'],
    id: 69,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: 'IP地址',
    regex: /\d+\.\d+\.\d+\.\d+/,
    descs: ['提取IP地址时有用'],
    id: 70,
  },
  {
    author: 'https://github.com/tolerance-go',
    title: 'IP地址',
    regex: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
    id: 71,
  },
];
