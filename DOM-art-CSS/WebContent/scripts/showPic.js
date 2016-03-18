//改变class名----1，通过setAttribute；2、通过修改className属性，此属性所有节点都有，
function addClass(tagele,value){ //function(tagele,"name")没函数名，参数不会写
	if(tagele.className){
		tagele.className=value;
	}else{
		tagele.className+=" 'value'";
		var newClassName;
		newClassName=tagele.className;
		newClassName += " ";
		newClassName +=value;
		tagele.className=newClassName;
	}
}
function getNextElement(node){
	if(node.nodeType==1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null; 
}
function styleHeaderSibling(){
	if(!document.getElemntsByTagName) return false;
	var header=document.getElemntsByTagName("h3");
	var elem;
	for(var i=0;i<header.length;i++){
		elem=getNextElement(header[i].nextSibling);
		//elem=header[i].nextSibling;//自己想的
		addClass(elem,"intro");
	}
}

function stripeTables(){
	if(!document.getElementsByTagName) return false;
	var star=document.getElementsByTagName("table");
	var odd,rows;
	//star.get
	for(var i=0;i<star.length;i++){
		odd=false;
		rows=star[i].getElementsByTagName("tr");     //不太懂
		for(var j=0;j<rows.length;j++){
			if(odd==true){
				//rows[j].style.backgroundColor="#ffc";
				addClass(rows[j],"odd"); 		//通过css的方式修改奇偶异色
				odd=false; 					 	//通过dom的方式修改奇偶异色
			}else{
				odd=true;
			}
		}
	}
}
function addEvent(func){
	var oldLoad=window.onload;
	if(typeof oldLoad!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldLoad();
			func();
		}
	}
}
//window.onload=styleHeaderSibling();
addEvent(stripeTables);
addEvent(styleHeaderSibling);