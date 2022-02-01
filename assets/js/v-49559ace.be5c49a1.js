"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[702],{1284:(e,a,n)=>{n.r(a),n.d(a,{data:()=>l});const l={key:"v-49559ace",path:"/guide/vue/%E5%88%9D%E8%AF%86Vue.html",title:"初识Vue",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"安装",slug:"安装",children:[]},{level:3,title:"命名规则",slug:"命名规则",children:[]},{level:3,title:"模板插值",slug:"模板插值",children:[]},{level:3,title:"指令",slug:"指令",children:[]}],filePathRelative:"guide/vue/初识Vue.md",git:{updatedTime:1643678699e3,contributors:[{name:"Lynn",email:"Linmy0221@gmail.com",commits:1}]}}},8400:(e,a,n)=>{n.r(a),n.d(a,{default:()=>r});var l=n(6252),s=n(3577);const i=(0,l.uE)('<h1 id="初识vue" tabindex="-1"><a class="header-anchor" href="#初识vue" aria-hidden="true">#</a> 初识Vue</h1><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 全局安装 vue</span>\n<span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli\n\n<span class="token comment"># 创建 myProject 项目</span>\nvue create <span class="token punctuation">[</span>myProject<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h3><p>camelCase: videoExampleComponent</p><ul><li>js函数 变量</li></ul><p>PascalCase: VideoExampleComponent</p><ul><li>JS类 组件文件</li></ul><p>kebab-case: video-example-component</p><ul><li>HTML(HTML大小写不敏感) 组件名</li></ul><h3 id="模板插值" tabindex="-1"><a class="header-anchor" href="#模板插值" aria-hidden="true">#</a> 模板插值</h3>',11),c=(0,l.uE)('<h3 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h3><p>v- 前缀的特殊特性</p><ul><li>v-bind</li><li>v-on:click</li><li>v-if</li><li>v-show</li></ul><blockquote><ul><li><code>v-if</code> 和 <code>v-show</code><br><code>v-if</code> 真正的条件渲染，在切换过程中条件块内的事件监听器和子组件会被适当地被销毁和重建<br><code>v-show</code> 地元素始终会被渲染并保留在 <code>DOM</code> 中，<code>v-show</code> 只是简单地切换元素的 <code>CSS</code> 属性 <code>display</code></li></ul></blockquote><ul><li>v-for<br> 不推荐在同意元素上使用 v-if 和 v-for<br> 非要用，记住 v-for 的优先级高于 v-if *ref</li></ul>',5),o={},r=(0,n(3744).Z)(o,[["render",function(e,a){return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,(0,l._)("p",null,[(0,l._)("code",null,(0,s.zw)(),1)]),c],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,l]of a)n[e]=l;return n}}}]);