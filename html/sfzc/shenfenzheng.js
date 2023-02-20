function showselect()
{
	var opt;
	var selectOptions=document.all.citys.options;
	var i;
	for(i=selectOptions.length-1;i>=0;i--)
	{
		//if(document.all.citys.options[i].value!="")
		//{
			document.all.citys.options.remove(i);
		//}
	}
	var selectOptions2=document.all.citys2.options;
	for(i=selectOptions2.length-1;i>=0;i--)
	{
		//if(document.all.citys2.options[i].value!="")
		//{
			document.all.citys2.options.remove(i);
		//}
	}
	var province,city_name,city_code;
	var selectOptions3=document.all.province.options;
	for(i=selectOptions3.length-1;i>=0;i--)
	{
		if(document.all.province.options[i].selected==true)
		{
			province=document.all.province.options[i].text;
		}
	}
	for(i=1; i<citys[province].length; i++)
	{
		for(var key in citys[province][i])
		{
			city_name=citys[province][i][key][0]["cityname"];
			city_code=citys[province][i][key][0]["cityid"];
			opt = document.createElement("OPTION");
			opt.value = city_code;
			opt.text = city_name;
			document.getElementById("citys2").add(opt);
		}
	}
	for(var key in citys[province][1])
	{
		for(i=1; i<citys[province][1][key].length; i++)
		{
			city_name=citys[province][1][key][i]["cityname"];
			city_code=citys[province][1][key][i]["cityid"];
			opt = document.createElement("OPTION");
			opt.value = city_code;
			opt.text = city_name;
			document.getElementById("citys").add(opt);
		}
	}
}
function showselect3()
{
	var opt;
	var selectOptions=document.all.citys.options;
	var i;
	for(i=selectOptions.length-1;i>=0;i--)
	{
		//if(document.all.citys.options[i].value!="")
		//{
			document.all.citys.options.remove(i);
		//}
	}
	var province,cityid,city_name,city_code;
	var selectOptions2=document.all.province.options;
	for(i=selectOptions2.length-1;i>=0;i--)
	{
		if(document.all.province.options[i].selected==true)
		{
			province=document.all.province.options[i].text;
		}
	}
	var selectOptions3=document.all.citys2.options;
	for(i=selectOptions3.length-1;i>=0;i--)
	{
		if(document.all.citys2.options[i].selected==true)
		{
			cityid=document.all.citys2.options[i].text;
		}
	}
	var city_name,city_code;
	for(i=1; i<citys[province].length; i++)
	{
		for(var key in citys[province][i])
		{
			city_name=citys[province][i][key][0]["cityname"];
			if(city_name==cityid)
			{
				for(var j=1; j<citys[province][i][key].length; j++)
				{
					city_name=citys[province][i][key][j]["cityname"];
					city_code=citys[province][i][key][j]["cityid"];
					opt = document.createElement("OPTION");
					opt.value = city_code;
					opt.text = city_name;
					document.getElementById("citys").add(opt);
				}
			}
		}
	}
}
function showID()
{
	var citystr1="",citystr2="",citystr3="";
	for(i=document.all.province.options.length-1;i>=0;i--)
	{
		if(document.all.province.options[i].selected==true)
		{
			citystr1=document.all.province.options[i].text;
		}
	}
	for(i=document.all.citys2.options.length-1;i>=0;i--)
	{
		if(document.all.citys2.options[i].selected==true)
		{
			citystr2=document.all.citys2.options[i].text;
		}
	}
	for(i=document.all.citys.options.length-1;i>=0;i--)
	{
		if(document.all.citys.options[i].selected==true)
		{
			citystr3=document.all.citys.options[i].text;
		}
	}
	var citystr="";
	if(citystr1!="")
	{
		citystr+=(citystr!="")?" "+citystr1:citystr1;
	}
	if(citystr2!="")
	{
		citystr+=(citystr!="")?" "+citystr2:citystr2;
	}
	if(citystr3!="")
	{
		citystr+=(citystr!="")?" "+citystr3:citystr3;
	}
	
	var baseArray=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2);
	var reArray=new Array('1','0','X','9','8','7','6','5','4','3','2');
	var strArray1=new Array(1,3,5,7);
	var strArray2=new Array(2,4,6,8);
	var resultArray=new Array();
	
	var i,cityid="",ok=1;
	var selectOptions=document.all.citys.options;
	for(i=selectOptions.length-1;i>=0;i--)
	{
		if(document.all.citys.options[i].selected==true)
		{
			cityid=document.all.citys.options[i].value;
			ok=0;
		}
	}
	if(ok)
	{
		var selectOptions2=document.all.citys2.options;
		for(i=selectOptions2.length-1;i>=0;i--)
		{
			if(document.all.citys2.options[i].selected==true)
			{
				cityid=document.all.citys2.options[i].value;
				ok=0;
			}
		}
	}
	if(ok)
	{
		var selectOptions3=document.all.province.options;
		for(i=selectOptions3.length-1;i>=0;i--)
		{
			if(document.all.province.options[i].selected==true)
			{
				cityid=document.all.province.options[i].value;
			}
		}
	}
	if(cityid=="")
	{
		alert("请选择城市！");
		return;
	}
	
	var years="1900",months="01",days="01";
	var selectOptions4=document.all.years.options;
	for(i=selectOptions4.length-1;i>=0;i--)
	{
		if(document.all.years.options[i].selected==true)
		{
			years=document.all.years.options[i].value;
		}
	}
	var selectOptions5=document.all.months.options;
	for(i=selectOptions5.length-1;i>=0;i--)
	{
		if(document.all.months.options[i].selected==true)
		{
			months=document.all.months.options[i].value;
			if(months<10) months="0"+String(months)
		}
	}
	var selectOptions6=document.all.days.options;
	for(i=selectOptions6.length-1;i>=0;i--)
	{
		if(document.all.days.options[i].selected==true)
		{
			days=document.all.days.options[i].value;
			if(days<10) days="0"+String(days)
		}
	}
	var nums=1;
	var selectOptions7=document.all.nums.options;
	for(i=selectOptions7.length-1;i>=0;i--)
	{
		if(document.all.nums.options[i].selected==true)
		{
			nums=document.all.nums.options[i].value;
		}
	}
	var sex;
	var sexs = document.getElementsByName("sexs");
	for(var i=0;i<sexs.length;i++)
	{
		if(sexs[i].checked==true) sex=sexs[i].value;
	}
	var sexstr=(sex==1)?"男":"女";
	var str="",str1="",str2="",str3,result,isok;
	str=String(cityid)+String(years)+String(months)+String(days);
	var m;
	for(m=0;m<nums;)
	{
		str3="";
		str1=String(parseInt(Math.random()*3))+String(parseInt(Math.random()*10));
		if(sex==1)
		{
			str2=String(strArray1[parseInt(Math.random()*4)]);
		}
		else
		{
			str2=String(strArray2[parseInt(Math.random()*4)]);
		}
		str3=str+str1+str2;
		result=0;
		for(var i=0;i<17;i++)
		{
			result=result+parseInt(str3.substr(i,1))*baseArray[i];
		}
		result %= 11;
		str3=str3+reArray[result];
		isok=1;
		for(var k=0;k<resultArray.length;k++)
		{
			if(resultArray[k]==str3)
			{
				isok=0;
				break;
			}
		}
		if(isok)
		{
			resultArray[m]=str3;
			m++;
		}
	}
	str="";
	for(var i=0;i<resultArray.length;i++)
	{
		str=str+"<div><div>性　　别： "+sexstr+"</div><div>出生日期： "+years+"年"+months+"月"+days+"日</div><div>发 证 地： "+citystr+"</div><div>身 份 证： "+resultArray[i]+"</div><div></div></div>";
	}
	document.getElementById("showID").innerHTML=str;
}

function showprovinces()
{
	var opt;
	var provinces_name,provinces_code;
	for(var i=0; i<provinces.length; i++) 
	{
		provinces_name=provinces[i];
		provinces_code=citys[provinces_name][0]["cityid"];
		opt = document.createElement("OPTION");
		opt.value = provinces_code;
		opt.text = provinces_name;
		document.getElementById("province").add(opt);
	}
}
function showdate()
{
	var opt;
	var i;
	for(i=1900; i<2050; i++)
	{
		opt = document.createElement("OPTION");
		opt.value = i;
		opt.text = i;
		document.getElementById("years").add(opt);
	}
	for(i=1; i<13; i++)
	{
		opt = document.createElement("OPTION");
		opt.value = i;
		opt.text = i;
		document.getElementById("months").add(opt);
	}
	for(i=1; i<32; i++)
	{
		opt = document.createElement("OPTION");
		opt.value = i;
		opt.text = i;
		document.getElementById("days").add(opt);
	}
}
function showsex()
{
	var sexs = document.getElementsByName("sexs");
	for(var i=0;i<sexs.length;i++)
	{
		sexs[i].checked=(sexs[i].value==1)?true:false;
	}
}
function shownum()
{
	var opt;
	var i;
	for(i=1; i<11; i++)
	{
		opt = document.createElement("OPTION");
		opt.value = i;
		opt.text = i;
		document.getElementById("nums").add(opt);
	}
}
window.onload=function(){showprovinces();showdate();showsex();shownum();}