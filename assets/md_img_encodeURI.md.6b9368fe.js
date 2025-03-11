import{_ as p,o as s,g as r,Z as l,$ as i,h as a,p as m,v as h,x as _,l as g}from"./chunks/framework.07a32179.js";const y={data(){return{sourceURLInput:"",markdownInput:"",encodedOutput:"",copySuccess:!1,urlIsNull:!1}},methods:{encodeImageUrls(){const e=this.markdownInput,t=/!\[.*?\]\((.*?)\)/g;let c=e,u;for(;(u=t.exec(e))!==null;){const n=u[1],d=encodeURI(n);c=c.replace(n,d)}this.encodedOutput=c},copyEncodedText(){if(this.sourceURLInput==null||this.sourceURLInput===""){this.urlIsNull=!0,setTimeout(()=>{this.urlIsNull=!1},2e3);return}this.encodeImageUrls();const e=document.createElement("textarea");e.value=`

> [原文链接](`+this.sourceURLInput+`)
> [JavaGuide](https://javaguide.net) 

`+this.encodedOutput+`

> [JavaGuide](https://javaguide.net) 

`,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.copySuccess=!0,setTimeout(()=>{this.copySuccess=!1},2e3)},copyWeChatContent(){this.encodeImageUrls();const e=document.createElement("textarea");let t=`![软件方法](https://umlcn.com/mp/header.png)




## <center>[来源](https://javaguide.net)：https://javaguide.net</center>
`,c=`


## <center>[来源](https://javaguide.net)：https://javaguide.net</center>


![我在做什么](https://umlcn.com/mp/footer.png)

## 随手点个“在看”与分享吧~`;e.value=t+this.encodedOutput+c,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.copySuccess=!0,setTimeout(()=>{this.copySuccess=!1},2e3)}}},I=e=>(h("data-v-27219be9"),e=e(),_(),e),k=I(()=>a("h1",null,"markdown图片中文路径转URLEncoder工具",-1)),U={key:0,class:"button_encode_uri",style:{color:"green"}},b={key:1,class:"button_encode_uri",style:{color:"red"}};function x(e,t,c,u,n,d){return s(),r("div",null,[k,l(a("textarea",{"onUpdate:modelValue":t[0]||(t[0]=o=>n.sourceURLInput=o),placeholder:"请输入原文链接",style:{border:"2px solid black",height:"40px","border-radius":"5px"}},null,512),[[i,n.sourceURLInput]]),l(a("textarea",{"onUpdate:modelValue":t[1]||(t[1]=o=>n.markdownInput=o),placeholder:"粘贴你的 Markdown 文本",style:{border:"2px solid black","border-radius":"5px"}},null,512),[[i,n.markdownInput]]),a("button",{onClick:t[2]||(t[2]=(...o)=>d.encodeImageUrls&&d.encodeImageUrls(...o)),class:"button_encode_uri"}," 编码图片URL "),a("button",{onClick:t[3]||(t[3]=(...o)=>d.copyEncodedText&&d.copyEncodedText(...o)),class:"button_encode_uri"}," 复制结果 "),a("button",{onClick:t[4]||(t[4]=(...o)=>d.copyWeChatContent&&d.copyWeChatContent(...o)),class:"button_encode_uri"}," 转化成公众号全文 "),n.copySuccess?(s(),r("button",U," 复制成功！！！ ")):m("",!0),n.urlIsNull?(s(),r("button",b," 原文链接不能为空复制失败 ")):m("",!0),l(a("textarea",{"onUpdate:modelValue":t[5]||(t[5]=o=>n.encodedOutput=o),placeholder:"编码后的 Markdown 文本",style:{border:"2px solid black","border-radius":"5px"},readonly:""},null,512),[[i,n.encodedOutput]])])}const v=p(y,[["render",x],["__scopeId","data-v-27219be9"]]),C=JSON.parse('{"title":"markdown图片中文路径转URLEncoder工具","description":"","frontmatter":{"title":"markdown图片中文路径转URLEncoder工具","layout":"doc","head":[["meta",{"name":"keywords","content":"markdown图片中文路径转URLEncoder工具 | 不止极客,nogeek,educode,教育编程,编程教育|Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发"}],["meta",{"name":"twitter:card","content":"summary"}],["meta",{"name":"twitter:site","content":"https://nogeek.cn"}],["meta",{"name":"twitter:creator","content":"nogeek.cn"}],["meta",{"name":"og:title","content":"markdown图片中文路径转URLEncoder工具 | NoGeek ｜不止极客"}],["meta",{"name":"og:description","content":" | NoGeek ｜不止极客"}],["meta",{"name":"og:image","content":"https://nogeek.cn/NoGeekAvatar.png"}],["meta",{"name":"baidu-site-verification","content":"codeva-FB5idg7Tyk"}],["meta",{"name":"msvalidate.01","content":"9F2D57CFC59E8031212A166878638B15"}]]},"headers":[],"relativePath":"md_img_encodeURI.md","filePath":"md_img_encodeURI.md","lastUpdated":1740062592000}'),R={name:"md_img_encodeURI.md"},f=Object.assign(R,{setup(e){return(t,c)=>(s(),r("div",null,[g(v)]))}});export{C as __pageData,f as default};
