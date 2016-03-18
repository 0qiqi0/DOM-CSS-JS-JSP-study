/** 
 */
function displayAbbreviations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;    //这两句create忘记
	if(!document.createTextNode)  return false;
	
	var abbrs=document.getElementsByTagName("abbr");									//var abbr=document.getElementsByName("abbr");
	if (abbrs.length<1) return false;
	var defs=new Array();
	for(var i=0;abbrs<abbrs.length;i++){
		//var dt=document.createElement("dt");   //创建了，没插入，是个孤儿
		//dt.nodeValue=abbr[i].nodeValue;
		//var dd=document.createElement("dd");
		//dd.nodeValue=abbr[i].getAttribute("title");
		//遍历缩略语
		var current_abbr=abbrs[i];
		if (current_abbr.childNodes.length<1) continue;
		var definition=current_abbr.getAttribute("title");
		var key=current_abbr.lastChild.nodeValue; //<abbr>中的文本节点是此节点中的第一个子节点，也是唯一一个子节点。
		defs[key]=definition;
	}
	var dlist=document.createElement("dl");
	//创建定义标题和描述
	for(key in defs){
		var definition=defs[key];
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChid(ddesc_text);
		
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	//if(dlist.childNodes.length<1) return false;
	var header=document.createElement("h2");
	var header_text =document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//把标题和列表添加到主题页面
	//document.getElementsByTagName("body")[0].appendChild(header).appendChild(dlist);//如果不加【0】，得到是body及其子元素	
	document.getElementsByTagName("body")[0].appendChild(header);
	document.getElementsByTagName("body")[0].appendChild(dlist);
}
//显示文献来源标注
function displayCite(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementsByTagName) return false;
	var quotes=document.getElementsByTagName("blockquote");
	for(var i=0;i<quotes.length;i++){
		if(!quotes[i].getAttribute("cite")){
			continue;
		}
		var url=quotes[i].getAttribute("cite");
		var quoteChildren=quotes[i].getElementsByTagName('*');
		if(quoteChildren.length<1) continue;
		var elem=quoteChildren[quoteChildren.length-1];
		var link=document.createElement("a");
		var link_text=document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var supp=document.createElement("sup");
		supp.appendChild(link);
		elem.appendChild(supp);  //插在了《p》</p>的之间
	}
}
function displayAccessKeys(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementsByTagName) return false;
	//var title=document.createElement(h2);
	//document.getElementsByTagName("body")[0].appendChild(title);
	var links=document.getElementsByTagName("a");
	var akeys=new Array();
	for(var i=0;i<links.length;i++){
		var current_link=links[i];
		if(!current_link.getAttribute("accesskey"))  continue;//if(current_link.getAttribute("accesskey"))  continue;
		var text=current_link.lastChild.nodeValue;//var text=current_link.nodeValue;
		var key=current_link.getAttribute("accesskey");
		akeys[key]=text;
	}
	var list =document.createElement("ul");
	for(key in akeys){
		var text=akeys[key];
		var str =key +":"+text;
		var ll=document.createElement("li");
		//var pp=document.createElement("p");  多余的
		//pp.nodeValue=akeys[key];
		//pp.createTextNode=
		var ll_text=document.createTextNode(str);
		ll.appendChild(ll_text);
		list.appendChild(ll);
	}
	var header=document.createElement("h3");
	var header_text=document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	
	document.body.appendChild(header);
	document.body.appendChild(list);
}
function addEvent(func){
	var oldLoad=window.onload;
	if ( typeof window.onload!='function'){
		window.onload=func;
	}else{
		//oldLoad();
		//func();
		window.onload=function(){
			oldLoad();
			func();
		}
	}
}
addEvent(displayAbbreviations);
addEvent(displayCite);
addEvent(displayAccessKeys);
