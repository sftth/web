/**
 * LG Electronics Base Library
 
 ● LGE.Base.isEmpty			: 입력값이 null이거나 빈값인지 체크한다
 ● LGE.Base.length				: 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
 ● LGE.Base.toString			: 입력값을 String으로 변경한다.
 ● LGE.Base.left				: 문자열의 왼쪽부분을 지정한 길이만큼 Return 한다.
 ● LGE.Base.right				: 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
 ● LGE.Base.nvl				: 입력값을 null일 경우 지정값으로 치환한다.
 ● LGE.Base.trim				: 입력된 문자열의 좌우측 공백을 제거한 문자열을 구함.
 ● LGE.Base.allTrim			: 문자열 전체의 공백 제거	
 ● LGE.Base.lpad				: 왼쪽 채우기 함수
 ● LGE.Base.rpad				: 오른쪽 채우기 함수
 ● LGE.Base.split				: 특정 문자열을 기준으로 전체 문자열을 나누어서 하나의 배열(Array)로 만들어 반납하는 함수
 ● LGE.Base.split2				: 입력된 문자열을 strDelimiter1과 strDelimiter2로 2 번 Parsing 한 2차원 배열을 Return
 ● LGE.Base.setDistinct		: Array에 있는 값들을 Distinct(중복제거)한다.
 ● LGE.Base.getFileExt			: 파일 확장자를 가져온다.
 ● LGE.Base.getFileName		: 파일 경로에서 파일명만 가져온다.
 ● LGE.Base.nullToEmpty		: null 일 경우 빈 값을 리턴한다.
 ● LGE.Base.isValidObject		: 객체가 있는지 없는지 여부 판단하여 반환
 ● LGE.Base.replace			: 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
 ● LGE.Base.indexOf			: 전체 문자열 중 특정 문자열이 포함된 위치를 반납
 */
 
if (!JsNamespace.exist("LGE.Base"))
{
	/*============================================================================================
	 * @define	 	JSLib.json	 
	 * @memberof 	LgeLibrary	 
	 * @namespace 	LGE.Base
	 * @author 		admin
	 =============================================================================================*/     
    JsNamespace.declare("LGE.Base", {

	
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/		 
		isEmpty : function (val)
		{
			var rtnVal = (Base.isEmpty(val)) ? "" : val;
			return rtnVal;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/			 
		length : function (val)
		{
			return this.toString(val).length;
		},
		

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/			 
		toString : function (val)
		{
			if (Base.isEmpty(val)){
				return new String();
			}
			return new String(val);
		},
				

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/			 
		left : function (val, nSize)
		{
			return this.toString(val).substr(0, nSize);
		},
					
							
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/			 
		right : function (val, nSize)
		{
			var nStart = this.toString(val).length;
			var nEnd = Number(nStart) - Number(nSize);
			var rtnVal = val.substring(nStart, nEnd);
			
			return rtnVal;
		},							

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	 
		nvl : function(val,val2)
		{
			var rtnVal = (Base.isEmpty(val)) ? val2 : val;
			return rtnVal;
		},
		

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	 		 
		trim : function(sValue)
		{
			if (sValue == null) return "";
			if (new String(sValue).valueOf() == "undefined") return "";
			if (new String(sValue) == null) return "";
			
			var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, '');

			return retVal;
		},
			
			
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/			 		
		allTrim : function(strText)
		{
			var tStr = new String(strText);
			var tReturnStr="";
			var i;

			if ( strText != null ) {
				for ( var i = 0; i < tStr.length; i++ ) {
					if ( tStr.charAt(i) != " " ) {
						tReturnStr = tReturnStr + tStr.charAt(i);
					}
				}
			} else {
				return -1;
			}
			
			return tReturnStr;
		},
				

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/				 
		_getByteLength : function(sValue) 
		{
			var byteLength = 0;
			if (Base.isEmpty(sValue)){
				return 0;
			}
			var c;
			for (var i=0; i<sValue.length; i++){
				c = escape(sValue.charAt(i));
				if (c.length == 1){ // when English then 1byte
					byteLength++;
				} else if (c.indexOf("%u") != -1){ // when Korean then 3byte
					byteLength += 2; 				// utf-8 : 3
				} else if (c.indexOf("%") != -1){ 	// else 3byte
					byteLength += c.length/3;
				}
			}
			return byteLength;
		},					
					
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/			 
		lpad : function (sValue, nLength, sChar)
		{
			if (new String(sValue).valueOf() == "undefined") sValue = "";
			if (Base.isEmpty(sValue)) sValue = "";

			var strRetVal = new String(sValue);
			var strChar = "";
			var nIteration = nLength - this._getByteLength(strRetVal);
			for (var i=0; i<nIteration; i++){
				strChar = sChar + strChar;
			}
			return (strChar + strRetVal);
		},
						
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	
		rpad : function(sValue, nLength, Char) 
		{
			if (new String(sValue).valueOf() == "undefined") sValue = "";
			if (Base.isEmpty(sValue)) sValue = "";
			
			var strRetVal  = new String(sValue);
			var nIteration = nLength - this._getByteLength(strRetVal);
			
			for (var i=0; i<nIteration; i++){
				strRetVal = strRetVal + Char;
			}
			return strRetVal;
		},
		
		
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	
		split : function()
		{
			var rtnArr = new Array();
			var arrArgument = this.split.arguments;

			if (arrArgument.length < 1) {
			} else if (arrArgument.length < 2) {
				if (!Base.isEmpty(arrArgument[0])) {
					rtnArr[0] = arrArgument[0];
				}
			} else if (arrArgument.length == 2) {
				if (!Base.isEmpty(arrArgument[0])) {
					rtnArr = arrArgument[0].toString().split(arrArgument[1]);
				}
			}
			
			return rtnArr;
		},	


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	 
		split2 : function (val, strDelimiter1, strDelimiter2)
		{
			var split2Arr = new Array();
			val = this.toString(val);
			
			var splitArr = val.split(strDelimiter1);
			for (var i=0; i<splitArr.length; i++){
				split2Arr.getSetter(i).set(splitArr[i].split(strDelimiter2));
			}
			return split2Arr;
		}, 

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	 
		setDistinct : function (aOrg)
		{
			var i,j;
			var flag;
			var aDist = new Array();
			var vDist;

			if (Base.isEmpty(aOrg)){
				return aDist;
			}

			for (i=0; i<aOrg.length; i++){
				vDist = aOrg[i];
				flag = false;
				for (j=0; j<aDist.length; j++){
					if ("x" + aDist[j] == "x" + vDist){
						flag = true;
						break;
					}
				}
				if (flag == false){
					aDist.getSetter(aDist.length).set(vDist);
				}
			}
			return aDist;
		},

		     
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	  
		getRandom : function (nStart, nEnd)
		{
			var range_unit,rand,tmp;

			if (Base.isEmpty(nStart) 
			 || Base.isEmpty(nEnd)){
				return -1;
			}
			
			nStart = Math.floor(nStart);
			nEnd = Math.floor(nEnd);
			if (nStart > nEnd){
				tmp = nStart;
				nStart = nEnd;
				nEnd = tmp;
			}
			range_unit = nEnd - nStart + 1;

			var dt = new Date();
			rand = (dt.getMilliseconds() + (Math.random() * 2000)) / 3000;

			return Math.floor(rand * range_unit * 2) % range_unit + nStart;
		},		     
		     
		     
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	
		getFileExt : function (strFileName)
		{
			strFileName = "" + strFileName;
			var arrFileName = strFileName.split(".");
			var strFileExt = arrFileName[arrFileName.length - 1];
			
			return strFileExt.trim();
		},

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	
		getFileName : function (strFilePath)
		{
			var strFileName = "";
			strFilePath = this.toString(strFilePath);
			for (var i=0; i<strFilePath.length; i++){
				if (this.right(strFilePath, i + 1).indexOf("\\") > -1){
					break;
				}
				if (this.right(strFilePath, i + 1).indexOf("\/") > -1){
					break;
				}
				strFileName = this.right(strFilePath, i + 1);
			}
			return strFileName;
		},
				     
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	
		nullToEmpty : function(sValue, sEmptyVal)
		{
			if (Base.isEmpty(sEmptyVal)){
				sEmptyVal = "";
			}
			if (Base.isEmpty(sValue)){
				return sEmptyVal;
			}
			return sValue;
		},
						     
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	 
		isValidObject : function(sObjNm,oThis)
		{
			var oItem = Base.XComp.query(oThis, "prop[name] == '"+sElement+"'", 0)[0];
			return Base.isEmpty(oItem);
		},
			
								     
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return
		 --------------------------------------------------------------------------------------------*/	
		replace : function (val, strOld, strNew)
		{
			val = this.toString(val);
			val = val.split(eval("/" + strOld + "/g")).join(strNew);
			// val = val.split(strOld).join(strNew);
			return val;
		},

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓟ param
		 * ⓟ param
		 * ⓡ return {int}
		 --------------------------------------------------------------------------------------------*/	 
		indexOf : function (val, strOld, index)
		{
			if (Base.isEmpty(index)){
				index = 0;
			}
			return this.toString(val).indexOf(strOld, index);
		}, 
    });

}
