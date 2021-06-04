/**
 * LG Electronics Util Library
 
 ● LGE.Util.searchParentFunc			: 부모에 존재하는 함수명 검색하여 호출
 ● LGE.Util.isCheckDs					: 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
 ● LGE.Util.getDataset					: 해당 데이터셋명으로 검색하여 데이터셋 찾아서 반환.
 ● LGE.Util.splitDsName				: = 을 배열로 분리 처리
 ● LGE.Util.deleteData					: dataset object에서 키에 해당되는 Row를 찾아서 삭제
 ● LGE.Util.findData					: dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 반환.
 ● LGE.Util.moveData					: dataset object에서 키에 해당되는 Row를 찾아서 이동
 ● LGE.Util.editData					: dataset object에서 키에 해당되는 Row를 찾아서 값을 변경.
 ● LGE.Util.getData					: 해당 데이터셋명으로 검색하여 데이터셋 찾아서 반환.
 ● LGE.Util.getLookupData				: dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 반환
 ● LGE.Util.isUpdated					: dataSet의 Row 중에서 변경된 내용이 있는지 여부를 반환
 ● LGE.Util.isUpdatedRow				: dataSet의 Row가 변경되었는지 여부를 반환
 ● LGE.Util.isUpdateColumn				: dataSet의 Row 에서 해당 칼럼이 변경되었는지 여부를 반환.
 ● LGE.Util.isUpdatedCHK				: CHK컬럼을 제외하고, dataSet의 Row 중에서 변경된 내용이 있는지 여부를 반환
 ● LGE.Util.isUpdatedRowCHK			: CHK컬럼을 제외하고, dataSet의 Row가 변경되었는지 여부를 반환
 ● LGE.Util.getDistinctDataset			: 데이타셋 특정컬럼에 대해서 Distinct한 데이타셋 얻기
 ● LGE.Util.dsFilter					: Dataset의 필터한 정보를 대상 Dataset으로 Copy
 ● LGE.Util.getColumnIdx				: Dataset의 컬럼명으로 Column index 반환
 ● LGE.Util.removeSpecialChar			: 문자열에서 특수문자 제거
 ● LGE.Util.getObjFont					: Font Object 생성 후 반환.
 ● LGE.Util.decode						: Decode 처리
 ● LGE.Util.getOS						: 현재 플랫폼을 실행중인 디바이스 반환
 ● LGE.Util.htmlToChars				: html형식의 문자열에서 태그문자를 특수문자로 변형
 ● LGE.Util.specToChars				: 특수문자가 들어있는 문자열에서 html형식의 문자로 변형
 ● LGE.Util.setComma					: 숫자에 ","를 집어넣기
 ● LGE.Util.findArray					: 1차원 배열에서 입력된 문자열이 있는 index를 반환
 ● LGE.Util.findArray2					: 2차원 배열에서 입력된 문자열이 있는 index를 반환
 ● LGE.Util.isNvl						: 입력값이 null에 해당되면 val2(대체문자열)로 리턴
 */
 
 
 



if (!JsNamespace.exist("LGE.Util")) {

	/*============================================================================================
	 * @define	 	JSLib.json	 
	 * @memberof 	LgeLibrary	 
	 * @namespace 	LGE.Util
	 * @author 		admin
	 =============================================================================================*/  	 
	JsNamespace.declare("LGE.Util", {

		/*--------------------------------------------------------------------------------------------
		 * 호출 form
		 * ⓥ var
		 --------------------------------------------------------------------------------------------*/			 
		ffobj : undefined,
		

		/*--------------------------------------------------------------------------------------------
		 * Msg Box 사이즈
		 * ⓥ json
		 --------------------------------------------------------------------------------------------*/			 
		_msgFormSize : {
			width : "400",
			height : "210",
			middle :{
				width : "400",
				height : "280"
			},
			max :{
				width : "600",
				height : "280"
			}
		},


		/*--------------------------------------------------------------------------------------------
		 *  초기 init
		 * ⓟ param object form
		 --------------------------------------------------------------------------------------------*/
		init : function(formObj) {
			this.ffobj = formObj; 
		},


		/*--------------------------------------------------------------------------------------------
		 *  Msg Box 사이즈 설정
		 * ⓟ param {string} Size Type(max, min, middle)
		 --------------------------------------------------------------------------------------------*/		 
		setOpenMsg : function(sSizeType) {
			var strWidth, strHeight;

			if (Base.isEmpty(sSizeType)) {
				sSizeType = "min";
			}
			
			switch(sSizeType) {
				case "max":
					strWidth = this._msgFormSize.max.width;
					strHeight = this._msgFormSize.max.height;
					break;
				case "middle":
					strWidth = this._msgFormSize.middle.width;
					strHeight = this._msgFormSize.middle.height;
					break;
				default:
					strWidth = this._msgFormSize.width;
					strHeight = this._msgFormSize.height;
					break;
			}

			return {width: strWidth, height: strHeight};
		},
		
		
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param
		 * ⓡ return {function}
		 --------------------------------------------------------------------------------------------*/	
		searchParentFunc : function(fnName) {
			if(Base.isEmpty(fnName)) {
				return;
			}

			var idx = 1, i = 0;
			var parentStr = "";
			var pThis = "this.ffobj.";
            var isFind = false;

			while(idx < 5) {
				if(Base.isFunction(eval(pThis + parentStr + fnName)) == true) {
					isFind= true;
					break;
				}
				else {
					parentStr =  "parent." + parentStr;
					idx++;
				}
			}

			if(isFind) {
				isFind = eval(pThis + parentStr + fnName);
			}
			else {
				isFind = null;
			}

			return isFind;
	    },
	    

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}
		 * ⓟ param {object}
		 * ⓡ return {object} dataset
		 --------------------------------------------------------------------------------------------*/			 
		isCheckDs : function(sDsNm, oForm) {
			if(Base.isEmpty(oForm)) {
				oForm = this.ffobj;
			}

			var oDs = Base.XComp.lookup(oForm, sDsNm);

			if (Base.isEmpty(oDs)) {
				oDs = new Dataset;
				oDs.name = sDsNm;

				oForm.addChild(sDsNm, oDs);
			}
			else {
				oDs.clearData();
			}

			return oDs;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}
		 * ⓡ return {object} dataset
		 --------------------------------------------------------------------------------------------*/			 
		getDataset : function(sDsNm) {
			return Base.XComp.query(this.ffobj, "typeOf == 'Dataset' && prop[name] == '"+sDsNm+"'")[0];
		},

		 
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}
		 * ⓡ return {string}
		 --------------------------------------------------------------------------------------------*/			 
		splitDsName : function(objString, type) {
			var objReturn = new Array();

			if(Base.isEmpty(objString)) {
				return objReturn;
			}

			var strDsMapping = objString.split(" ");			//mapping string
			var objArr;					//dataset name array

			for (var i=0; i<strDsMapping.length; i++ ) {
				objArr = strDsMapping[i].split("=");    // objArr = a,cd
				if (type == 0) {
					objReturn[i] = objArr[0];
				}
				else {
					objReturn[i] = objArr[1];
				}
			}

			return objReturn;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} dataset
		 * ⓟ param {string} 키칼럼
		 * ⓟ param {string} 키값
		 * ⓟ param {string} 서브키칼럼
		 * ⓟ param {string} 서브 키값
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/			 
		deleteData : function (ObjDs, strIdCol, strId, strSubCol, strSubId) {
			var curRow = this.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);

			ObjDs.deleteRow(curRow);
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} dataset
		 * ⓟ param {string} 키칼럼
		 * ⓟ param {string} 키값
		 * ⓟ param {string} 서브키칼럼
		 * ⓟ param {string} 서브 키값
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/			  
		findData : function (ObjDs, strIdCol, strId, strSubCol, strSubId) {
			if (Base.isEmpty(strSubCol)) {
				return ObjDs.findRow(strIdCol, strId.toString());
			}

			return ObjDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	dataset
		 * ⓟ param {string} 	키칼럼
		 * ⓟ param {string} 	키값
		 * ⓟ param {int} 	  	이동할 Row
		 * ⓟ param {string} 	서브키칼럼
		 * ⓟ param {string} 	서브 키값
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/		 
		moveData : function (ObjDs, strIdCol, strId, newRow, strSubCol, strSubId) {
			var curRow = this.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);

			ObjDs.moveRow(curRow, newRow);
		},
		
		
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	dataset
		 * ⓟ param {string} 	키칼럼
		 * ⓟ param {string} 	키값
		 * ⓟ param {string} 	변경할 칼럼
		 * ⓟ param {string} 	변경값
		 * ⓟ param {string} 	서브키칼럼
		 * ⓟ param {string} 	서브 키값
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/		 
		editData : function (ObjDs, strIdCol, strId, valCol, newVal, strSubCol, strSubId) {
			var curRow = this.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			
			return ObjDs.setColumn(curRow, valCol, newVal);
		},
		

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	dataset
		 * ⓟ param {string} 	키칼럼
		 * ⓟ param {string} 	키값
		 * ⓟ param {string} 	dataSet 칼럼
		 * ⓟ param {string} 	서브키칼럼
		 * ⓟ param {string} 	서브 키값
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/			 
		getLookupData : function (ObjDs, strIdCol, strId, strInfo, strSubCol, strSubId) {
			var strVal;
			var curRow = this.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);

			if (curRow < 0) {
				return "";
			}

			strVal = ObjDs.getColumn(curRow, strInfo);

			return Base.isEmpty(strVal) ? "" : strVal;
		},

		
		 
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	dataset
		 * ⓡ return {Boolean}
		 --------------------------------------------------------------------------------------------*/			 
		isUpdated : function (objDs) {
			if(objDs.getDeletedRowCount() > 0) {
				return true;
			}

			if(objDs.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1) {
				return true;
			}

			return false;
		},
		

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	dataset
		 * ⓟ param {int} 		대상 row
		 * ⓡ return {Boolean}
		 --------------------------------------------------------------------------------------------*/			 
		isUpdatedRow : function (objDs, nRow) {
			if (objDs.updatecontrol == true) {
				if (objDs.getRowType(nRow) == 2 || objDs.getRowType(nRow) == 4) {
					return true;
				}

				return false;
			}
			else {
				for (var i = 0; objDs.getColCount(); i++) {
					if (this.isUpdateColumn(objDs, nRow, i) == true) {
						return true;
					}
				}
			}

			return false;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	dataset
		 * ⓟ param {int} 		대상 row
		 * ⓟ param {string} 	대상 column
		 * ⓡ return {Boolean}
		 --------------------------------------------------------------------------------------------*/			 
		isUpdateColumn : function (objDs, nRow, Column) {
			if (objDs.getRowType(nRow) == 2) {
				if (Base.isEmpty(objDs.getColumn(nRow, Column))) {
					return false;
				}
			}
			else {
				if (objDs.getColumn(nRow, Column) == objDs.getOrgColumn(nRow, Column)) {
					return false;
				}
			}

			return true;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	dataset
		 * ⓟ param {string} 	CHK Column
		 * ⓡ return {Boolean}
		 --------------------------------------------------------------------------------------------*/	
		isUpdatedCHK : function (objDs, sChkCol) {
			var sCol;
			if(Base.isEmpty(sChkCol)) sChkCol = "CHK";
			
			//insert check
			if (objDs.findRowExpr("this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT") > -1){
				return true;
			}
			
			//update check - CHK 컬럼을 제외하고 체크함
			for(var i = 0; i < objDs.rowcount; i++)
			{
				for(var j = 0; j < objDs.getColCount(); j++)
				{
					sCol = objDs.getColID(j);
					//CHK 컬럼 제외
					if(sCol != sChkCol)
					{
						if(objDs.getColumn(i, sCol) != objDs.getOrgColumn(i, sCol))
						{
							return true;
						}
					}
				}
			}
			
			//delete check
			if (objDs.getDeletedRowCount() > 0){
				return true;
			}

			return false;
		},



		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	dataset
		 * ⓟ param {int} 		대상 row
		 * ⓟ param {string} 	CHK Column
		 * ⓡ return {Boolean}
		 --------------------------------------------------------------------------------------------*/	
		isUpdatedRowCHK : function (dsObj, nRow, sChkCol) {
			var sCol;
			if(Base.isEmpty(sChkCol)) sChkCol = "CHK";
			
			//insert check
			if (objDs.getRowType(nRow) == Dataset.ROWTYPE_INSERT){
				return true;
			}
			
			//update check - CHK 컬럼을 제외하고 체크함
			for(var i = 0; i < objDs.getColCount(); i++)
			{
				sCol = objDs.getColID(i);
				//CHK 컬럼 제외
				if(sCol != sChkCol)
				{
					if(objDs.getColumn(nRow, sCol) != objDs.getOrgColumn(nRow, sCol))
					{
						return true;
					}
				}
			}
			return false;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	dataset
		 * ⓟ param {int} 		대상 Column
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/			 
		getDistinctDataset : function (objDs, sDistCol) {
			var aDistValues = [];
			var nRowCnt = objDs.rowcount;
			var sValue = "";
			
			objDs.set_enableevent(false);
			for(var i = nRowCnt - 1; i >= 0; i--)
			{	
				sValue = objDs.getColumn(i, sDistCol);		

				if(!Base.array.contains(aDistValues, sValue))
				{
					aDistValues.push(sValue);
				}
				else
				{
					objDs.deleteRow(i);
				}
			}
			//objDs.applyChange();
			objDs.set_enableevent(true);		
		},



		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	필터될 dataset
		 * ⓟ param {object}	복사될 dataset
		 * ⓟ param {string}	필터expr
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/			 
		dsFilter : function(dsSc, dsTg, sFilterExpr) {
			var sKeyString = dsSc.keystring;
			
			if (!Base.isEmpty(sKeyString)) {
				sKeyString = sKeyString.toString();
			}

			dsSc.set_keystring("");
			dsSc.filter(sFilterExpr);
			dsTg.copyData(dsSc, true);
			dsSc.filter("");

			if (!Base.isEmpty(sKeyString)) {
				dsSc.set_keystring(sKeyString);
			}
		},
		
		
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	대상 dataset
		 * ⓟ param {string}	대상 column
		 * ⓡ return {Boolean}
		 --------------------------------------------------------------------------------------------*/			
		getColumnIdx : function(objDs, sColumnId) {
			var nColumnCnt = (objDs.getColCount() - objDs.getConstCount());
			if(objDs == null || nColumnCnt == 0) {
				return -1;
			}

			for(var i=0; i<nColumnCnt; i++) {
				if(objDs.getColID(i) == sColumnId) {
					return i;
				}
			}

			return -1;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상 문자열
		 * ⓟ param {string}	대상 특수문자
		 * ⓡ return {string}
		 --------------------------------------------------------------------------------------------*/
		removeSpecialChar : function(sVal, sSpecial) {
			if(Base.isEmpty(sVal)) {
				return sVal;
			}

			if(Base.isEmpty(sSpecial)) {
				sSpecial = "~!@#$%^&*-+:;,./=_`{|}()[]\\?<>";
			}

			var sRetValue = "";

			for(var i=0; i<sVal.length; i++){
				if(sSpecial.indexOf(sVal.charAt(i)) == -1)
					sRetValue += sVal.charAt(i);
			}
			trace(sRetValue);
			return sRetValue;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상 object
		 * ⓟ param {int}		iFontSize
		 * ⓟ param {string}	폰트명
		 * ⓟ param {string}	sType
		 * ⓡ return {array}	변형문자열
		 --------------------------------------------------------------------------------------------*/		 
		getObjFont : function (obj, iFontSize, sFontName, sType) {
			var objFont = obj.currentstyle.font;
			
			sType = (Base.isEmpty(sType)) ? "normal" : sType;
			objFont.set_size(iFontSize);
			objFont.set_face(sFontName);
			objFont.set_type(sType);

			return objFont;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상 문자열
		 --------------------------------------------------------------------------------------------*/			 
		decode : function() {
		   	var varRtnValue = null;
		   	var arrArgument = arguments;
		   	var varValue = arrArgument[0];
		   	var bIsDefault = false;
		   	var nCount = 0;

		   	if ((arrArgument.length % 2) == 0) {
				nCount = arrArgument.length - 1;
				bIsDefault = true;
		   	}
		   	else {
				nCount = arrArgument.length;
				bIsDefault = false;
			}

			for (var i = 1; i < nCount; i+=2) {
				if (varValue == arrArgument[i]) {
					varRtnValue = arrArgument[i+1];
					i = nCount;
				}
			}

			if (varRtnValue == null && bIsDefault) {
				varRtnValue = arrArgument[arrArgument.length-1];
			}

			return varRtnValue;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param N/A 	
		 --------------------------------------------------------------------------------------------*/		 
		getOS : function() {
			var osVersion = system.osversion;
			
			if (Base.isEmpty(osVersion)) {
				return "ETC";
			}

			osVersion = osVersion.toUpperCase();

			if (osVersion.indexOf("ANDROID") >= 0) {	// android 
				return "ANDROID";
			}
			else if ( osVersion.indexOf("IOS") >= 0 ) {
				return "IOS";
	   		}
			else if ( osVersion.indexOf("WINDOWS") >= 0 ) {
				return "WINDOWS";
			}
			else {
				return "ETC";
			}
		},
		
		

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	
		 * ⓡ return {string}	변경된 문자열
		 --------------------------------------------------------------------------------------------*/		 
		htmlToChars : function (str)
		{
			str = "" + str;
			if (Base.isEmpty(str)){
				return "";
			}
			str = LGE.Base.replace(str, "\&", '&amp;');
			str = LGE.Base.replace(str, "\'", '&apos;');
			str = LGE.Base.replace(str, "\"", '&quot;');
			str = LGE.Base.replace(str, "\'", '&#39;');
			str = LGE.Base.replace(str, "<", '&lt;');
			str = LGE.Base.replace(str, ">", '&gt;');
			return str;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	
		 * ⓡ return {string}	변경된 문자열
		 --------------------------------------------------------------------------------------------*/			  
		specToChars : function (str)
		{
			str = "" + str;
			if (Base.isEmpty(str)){
				return "";
			}
			str = LGE.Base.replace(str, "\&amp;", '&');
			str = LGE.Base.replace(str, "\&quot;", '"');
			str = LGE.Base.replace(str, "\&#39;", '\'');
			str = LGE.Base.replace(str, "\&lt;", '<');
			str = LGE.Base.replace(str, "\&gt;", '>');
			return str;
		},



		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {int}		대상 실수 	
		 * ⓟ param {int}		출력할 소수점 이하 자릿수
		 * ⓡ return {string}	변경된 문자열
		 --------------------------------------------------------------------------------------------*/			 
		numFormat : function (dNumber, nDetail)
		{
			var strVal = "" + dNumber;
			var rtnStr;
			var arrStr;
			
			if (Base.isEmpty(nDetail) == false){
				strVal = nexacro.round(nexacro.toNumber(dNumber),nDetail);
			}
			return this.setComma(strVal);
		},



		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {int}		대상 문자열
		 * ⓡ return {string}	변경된 문자열
		 --------------------------------------------------------------------------------------------*/		 
		setComma : function (sNum)
		{
			sNum = LGE.Base.replace(sNum, ",", "");
			var ppos,sDigit,nEnd,nStart = 0,sRet = "";
			if (sNum.charAt(0) == "+" || sNum.charAt(0) == "-"){
				sRet += sNum.charAt(0);
				nStart = 1;
			}

			ppos = sNum.indexOf(".", nStart);
			if (ppos < 0){
				nEnd = sNum.length;
			} else {
				nEnd = ppos;
			}

			sDigit = sNum.substr(nStart, nEnd - nStart);
			for (this.getSetter("pos").set(0); this.lookup("pos") < sDigit.length; this.lookupSetter("pos", "set_pos").postInc()){
				if (this.lookup("pos") != 0 && (sDigit.length - this.lookup("pos")) % 3 == 0){
					sRet += ",";
				}
				sRet += sDigit.charAt(this.lookup("pos"));
			}
			sRet += sNum.substr(nEnd);

			return sRet;
		},

		 
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {array}		대상 array
		 * ⓟ param {string}	검색문자열
		 * ⓡ return {int}		array index
		 --------------------------------------------------------------------------------------------*/		 
		findArray : function (ArrObj, strKey)
		{
			for (var i=0; i<ArrObj.length; i++){
				if (strKey == ArrObj[i]){
					return i;
				}
			}
			return -1;
		},
		

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {array}		대상 2차원 array
		 * ⓟ param {string}	검색문자열
		 * ⓟ param {string}	검색 index
		 * ⓡ return {int}		array index
		 --------------------------------------------------------------------------------------------*/			 
		findArray2 : function (Arr2Obj, strKey, index)
		{
			for (var i=0; i<Arr2Obj.length; i++){
				if (strKey == Arr2Obj[i][index]){
					return i;
				}
			}
			return -1;
		},
		
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}	대상 문자열
		 * ⓟ param {string}	치환할  문자
		 * ⓡ return {int}		지환된 문자
		 --------------------------------------------------------------------------------------------*/			
		isNvl : function(val, val2) {
			var rtnVal = (Base.isEmpty(val)) ? val2 : val;
			return rtnVal;
		},		
		
		
	});
}