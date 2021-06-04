/**
 * LG Electronics Valid Library
 
 ● LGE.Valid.checkValidObject	: object validation  check(Grid 가능)
 */
 
 
if (!JsNamespace.exist("LGE.Valid"))
{
	/*============================================================================================
	 * @define	 	JSLib.json	 
	 * @memberof 	LgeLibrary	 
	 * @namespace 	LGE.Valid
	 * @author 		admin
	 =============================================================================================*/
    JsNamespace.declare("LGE.Valid", {

		checkValidObject : function(oForm, oValidObjList)
		{
			if(Base.isEmpty(oValidObjList)) return;
			
			var oValidObj;
			
			//컴포넌트 Object 목록체크
			if(Base.isArray(oValidObjList))
			{		
				for(var i = 0; i < oValidObjList.length; i++)
				{			
					oValidObj = oValidObjList[i];
					if(!this._checkValid(oForm, oValidObj))
					{
						return false;
					}
				}
			}	
			//하나의 컴포넌트만 체크(필수체크만 수행)
			else if(Base.isXComponent(oValidObjList))
			{
				oValidObj = oValidObjList;
				
				if(Base.isEmpty(oValidObj.value)){
					oValidObj.setFocus();
					application.alert("VALID_REQUIRED");			
					return false;
				}
			}
			else
			{
				oValidObj = oValidObjList;
				if(Base.isEmpty(oValidObj)){
					application.alert("VALID_REQUIRED");			
					return false;
				}
			}
			return true;
		},

		//유효성체크(Validation)
		_checkValid : function(oForm, oValidObj)
		{
			var oComp = oValidObj.objid;
			var sComp = oComp.toString();
			var sValue, sRtn;
			
			if(sComp == "[object Div]" || sComp == "[object Tab]" || sComp == "[object Tabpage]")
			{	
				trace("컴포넌트 오류");
				return false;
			}

			var sColumn = Base.iif(Base.isEmpty(oValidObj.column), "", oValidObj.column);	
			var sTitle, oTitle;
				
				
				
			if(sComp == "[object Grid]")
			{
				var objBindDs = oForm.objects[oComp.binddataset];
				
				var nCellIdx = -1;
				
				for(var i = 0; i < objBindDs.rowcount; i++)
				{
					nCellIdx = oComp.getBindCellIndex("body", sColumn);
					
					
					//해당컬럼을 에디트 가능한 경우에만 체크
		// 			if(oComp.getCellProperty("body", nCellIdx, "edittype") == "none")
		// 			{
		// 				trace(sColumn + " 의 edittype = none 상태");
		// 				continue;
		// 			}
					
					if(Base.isEmpty(sColumn))
					{
						trace("체크할 컬럼정보가 없습니다.");
						return false;
					}
					
					//title설정
					if(Base.isEmpty(oValidObj.title))
					{
						sTitle = oComp.getCellProperty("head", nCellIdx, "text");
					}
					else
					{
						sTitle = oValidObj.title;
					}
					sValue = objBindDs.getColumn(i, sColumn);
					//trace("sColumn = "+ sColumn +" nCellIdx = "+ nCellIdx + " sValue = " + sValue);
					//validation체크
					sRtn = this._checkValidComp(oComp, sValue, sTitle, oValidObj);
					
					if(sRtn != true)
					{				
						//해당 셀로 커서이동
						objBindDs.set_rowposition(i);
						//rowposition 선 이동 후 cellPos이동 (2016.05.24 수정)
						//oComp.setFocus();
						oComp.setCellPos(nCellIdx);
						oComp.showEditor(true);

						


						var aRtn = sRtn.split(":");
						var sMsgCode = aRtn[0];
						Base.array.removeAt(aRtn, 0);

						application.alert(sMsgCode, aRtn);
						return false;
					}
				}
				
				//데이타셋 중복체크
				if(!Base.isEmpty(oValidObj.duplicate) && !Base.isEmpty(sColumn))
				{
					nCellIdx = oComp.getBindCellIndex("body", sColumn);
					
					var arrDup = [];
					for(var i = 0; i < objBindDs.rowcount; i++)
					{
						arrDup.push(objBindDs.getColumn(i, sColumn));
					}

					var rtn = Base.array.unique(arrDup);
					if(objBindDs.rowcount != rtn.length)
					{
						objBindDs.set_rowposition(0);
						//rowposition 선 이동 후 cellPos이동 (2016.05.24 수정)
						oComp.setFocus();
						oComp.setCellPos(nCellIdx);


						application.alert("VALID_DUPLICATE", ["VALIDITEM"]);
						return false;
					}
				}
			}
			else
			{		
				//에디트가 불가능한 상태인 경우 체크하지않음
				if(oComp.readonly == true || oComp.enable == false)
				{
					trace(oComp.name+"은 readonly = true or enable = false 상태");
					return true;
				}
				oTitle = "";
				
				//title설정
				if(oTitle.toString() == "[object Static]") sTitle = oTitle.text;
				else if(typeof(oTitle) == "string") sTitle = oTitle;
				else sTitle = "VALIDITEM";
				
				sValue = oComp.value;
				
				sRtn = this._checkValidComp(oComp, sValue, sTitle, oValidObj);

				if(sRtn != true)
				{
					oComp.setFocus();
					var aRtn = sRtn.split(":");			
					var sMsgCode = aRtn[0];
					Base.array.removeAt(aRtn, 0);
					application.alert(sMsgCode, aRtn);
					return false;
				}		
			}
			return true;
		},

		//유효성체크(Validation)
		_checkValidComp : function(oComp, sValue, sTitle, oValidObj)
		{		
			//체크속성
			//required
			//number, zero, min, max
			//minlength, maxlength, specialchar
			//email, resident, business, corporate, cellphone, phone, interphone
			//lessthan, greaterthan
			//hhmm, hhmmss
			
			var oRtn;
			//필수입력
			if(!Base.isEmpty(oValidObj.required))
			{
				if(Base.isEmpty(sValue))
				{
					return "VALID_REQUIRED:"+sTitle;
				}
			}
			//숫자
			if(!Base.isEmpty(oValidObj.number))
			{
				if(!Base.isEmpty(sValue) && !nexacro.isNumeric(String(sValue)))
				{			
					return "VALID_NUMBER:"+sTitle;			
				}
			}
			//0
			if(!Base.isEmpty(oValidObj.zero))
			{
				if(!Base.isEmpty(sValue) && (!nexacro.isNumeric(String(sValue)) || parseInt(sValue) != 0))
				{			
					return "VALID_ZERO:"+sTitle;			
				}
			}
			//특수문자
			if(!Base.isEmpty(oValidObj.specialchar))
			{
				if(!Base.isEmpty(sValue) && !this._isSpecialChar(sValue))
				{			
					return "VALID_SPECIAL:"+sTitle;			
				}	
			}
			//최소값
			if(!Base.isEmpty(oValidObj.min))
			{		
				if(!Base.isEmpty(sValue) && oValidObj.min > Base.iif(nexacro.isNumeric(sValue), parseInt(sValue), 0))
				{
					return "VALID_MIN_VALUE:"+sTitle+":"+oValidObj.min;			
				}
			}
			//최대값
			if(!Base.isEmpty(oValidObj.max))
			{	
				if(!Base.isEmpty(sValue) && oValidObj.max < Base.iif(nexacro.isNumeric(sValue), parseInt(sValue), 0))
				{
					return "VALID_MAX_VALUE:"+sTitle+":"+oValidObj.max;
				}	
			}
			//최소길이
			if(!Base.isEmpty(oValidObj.minlength))
			{
				//Base.string.getLength(str); //"utf16"
				//Base.string.getLength(str, "ascii"); //"ascii"
				//Base.string.getLength(str, "utf8"); //"utf8"
				if(Base.isEmpty(sValue))
				{
					return "VALID_REQUIRED:"+sTitle;
				}		
				if(oValidObj.minlength > Base.string.getLength(sValue))
				{
					return "VALID_MIN_LENGTH:"+sTitle+":"+oValidObj.minlength;
				}
			}
			//최대길이
			if(!Base.isEmpty(oValidObj.maxlength))
			{
				if(!Base.isEmpty(sValue) && oValidObj.maxlength < Base.string.getLength(sValue))
				{
					return "VALID_MAX_LENGTH:"+sTitle+":"+oValidObj.maxlength;		
				}	
			}
			//이메일
			if(!Base.isEmpty(oValidObj.email))
			{
				if(!Base.isEmpty(sValue) && !this._isEmail(sValue))
				{
					return "VALID_EMAIL:"+sTitle;
				}	
			}
			//주민번호(resident registration number)
			if(!Base.isEmpty(oValidObj.resident))
			{	
				if(!Base.isEmpty(sValue) && !this._isResidentNo(sValue))
				{
					return "VALID_RESIDENT_NO:"+sTitle;
				}
			}
			//사업자등록번호(business registration number)
			if(!Base.isEmpty(oValidObj.business))
			{	
				if(!Base.isEmpty(sValue) && !this._isBusinessNo(sValue))
				{
					return "VALID_BUSINESS_NO:"+sTitle;
				}
			}
			//법인등록번호(corporate registration number)
			if(!Base.isEmpty(oValidObj.corporate))
			{	
				if(!Base.isEmpty(sValue) && !this._isCorporateNo(sValue))
				{
					return "VALID_CORPORATE_NO:"+sTitle;
				}	
			}
			//핸드폰
			if(!Base.isEmpty(oValidObj.cellphone))
			{	
				if(!Base.isEmpty(sValue) && !this._isCellPhoneNo(sValue))
				{
					return "VALID_CELLPHONE_NO:"+sTitle;
				}		
			}
			//전화번호
			if(!Base.isEmpty(oValidObj.phone))
			{			
				if(!Base.isEmpty(sValue) && !this._isPhoneNo(sValue))
				{
					return "VALID_PHONE_NO:"+sTitle;
				}		
			}
			//국제전화번호(internation phone)
			if(!Base.isEmpty(oValidObj.interphone))
			{			
				if(!Base.isEmpty(sValue) && !this._isInterPhoneNo(sValue))
				{
					return "VALID_INTERPHONE_NO:"+sTitle;
				}		
			}
			//보다작다
			if(!Base.isEmpty(oValidObj.lessthan))
			{	
				if(Base.isEmpty(sValue))
				{
					return "VALID_REQUIRED:"+sTitle;
				}		
				if(oValidObj.lessthan.toString() == "[object Calendar]")
				{
					var sFromDt = Base.date.strToDate(sValue.toString());
					var sToDt = Base.date.strToDate(oValidObj.lessthan.toString());

					var nDay = Base.date.getDiffDay(sFromDt, sToDt);

					if(nDay <= 0)
					{
						return "VALID_LESSTHAN:"+sTitle+":"+sValue+":"+oValidObj.lessthan;
					}
				}
				else if(nexacro.toNumber(oValidObj.lessthan) <= nexacro.toNumber(sValue))
				{
					return "VALID_LESSTHAN:"+sTitle+":"+sValue+":"+oValidObj.lessthan;
				}
			}
			//보다크다
			if(!Base.isEmpty(oValidObj.greaterthan))
			{
				if(Base.isEmpty(sValue))
				{
					return "VALID_REQUIRED:"+sTitle;
				}	
				if(oComp.toString() == "[object Calendar]")
				{
					var sFromDt = Base.date.strToDate(sValue.toString());
					var sToDt = Base.date.strToDate(oValidObj.greaterthan.toString());

					var nDay = Base.date.getDiffDay(sFromDt, sToDt);

					if(nDay >= 0)
					{
						return "VALID_GREATERTHAN:"+sTitle+":"+sValue+":"+oValidObj.greaterthan;
					}
				}	
				if(nexacro.toNumber(oValidObj.greaterthan) >= nexacro.toNumber(sValue))
				{
					return "VALID_GREATERTHAN:"+sTitle+":"+sValue+":"+oValidObj.greaterthan;
				}	
			}
			//시분
			if(!Base.isEmpty(oValidObj.hhmm))
			{
				if(Base.isEmpty(sValue))
				{
					return "VALID_REQUIRED:"+sTitle;
				}	
				if(!this._isTimeHHmm(sValue))
				{
					return "VALID_HHMM:"+sTitle;
				}
			}
			//시분초
			if(!Base.isEmpty(oValidObj.hhmmss))
			{
				if(Base.isEmpty(sValue))
				{
					return "VALID_REQUIRED:"+sTitle;
				}	
				if(!this._isTimeHHmmss(sValue))
				{
					return "VALID_HHMMSS:"+sTitle;
				}	
			}
			//IP
			if(!Base.isEmpty(oValidObj.ip))
			{
				if(Base.isEmpty(sValue))
				{
					return "VALID_REQUIRED:"+sTitle;
				}
				if(!this._isIp(sValue))
				{
					return "VALID_IP:"+sTitle;
				}
			}
			return true;
		},


		/**
		 * @class 주민등록번호 확인
		 * @param rsrno - 주민등록번호 13자리
		 * @return N/A
		 */
		_isResidentNo : function(rsrno)
		{
			var juminNo = rsrno.replace("-", "");
			juminNo = juminNo.trim();
			
			if (!nexacro.isNumeric(juminNo) || juminNo.length != 13){
				return false;
			}
			
			var juminChkDgt = [2,3,4,5,6,7,8,9,2,3,4,5];
			var fNum = new Number();
			var lNum = new Number();
			var iSum = new Number();
			var yy, lnumf;
			
			fNum = juminNo.substr(0, 6).toString();
			lNum = juminNo.substr(6).toString();
			lnumf = lNum.substr(0,1);
			
			if (lnumf == '1' ||  lnumf == '2' ||  lnumf == '5' ||  lnumf == '6'){
				yy  = '19';
			} else if (lnumf == '3' ||  lnumf == '4' ||  lnumf == '7' ||  lnumf == '8'){
				yy  = '20';
			} else if (lnumf == '9' ||  lnumf == '0') {
				yy  = '18';
			} else {
				return false;
			}
			
			if (!Base.isStringDate(yy + fNum)){
				return false;
			}
			
			var bForeignerYN = "N";
			if (lNum.substr(0,1) == '5' || lNum.substr(0,1) == '6' || lNum.substr(0,1) == '7' ||  lNum.substr(0,1) == '8'){
				bForeignerYN = "Y";
			}
			
			for (var ix=0; ix<12; ix++){
				iSum += (parseInt(juminNo.substr(ix, 1)) * juminChkDgt[ix]);
			}
			
			iSum = 11 - (iSum%11);
			iSum = iSum % 10;
			
			if (bForeignerYN == "Y"){
				iSum += 2;
			}
			
			if (iSum != (parseInt(juminNo.substr(12, 1)))){
				return false;
			}
			
			return true;
		},

		/**
		 * @class 사업자등록번호 확인
		 * @param compRegNo - 사업자등록번호
		 * @return N/A
		 */
		_isBusinessNo : function(compRegNo)
		{
			var compNo = compRegNo.replace("-", "");
			compNo = compNo.trim();
			
			var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
			var i, Sum=0, c2, remander;
			
			if (compNo.length != 10){
				return false;
			}
			
			for (i=0; i<=7; i++){
				Sum += checkID[i] * compNo.charAt(i);
			}
			
			c2 = "0" + (checkID[8] * compNo.charAt(8));
			c2 = c2.substring(c2.length - 2, c2.length);
			
			Sum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
			remander = (10 - (Sum % 10)) % 10;
			
			if (Math.floor(compNo.charAt(9)) != remander){
				return false;
			}
			
			return true;
		},

		/**
		 * @class 법인등록번호 확인
		 * @param corpRegNo - 법인등록번호
		 * @return N/A
		 */
		_isCorporateNo : function(corpRegNo)
		{
			var corpNo = corpRegNo.replace("-", "");
			corpNo = corpNo.trim();
			if (corpNo.length != 13){
				return false;
			}
			
			var i = 0;
			// Check Sum 코드의 유효성 검사
			var buf = new Array(13);
			for (i = 0; i < 13; i++) buf[i] = parseInt(corpNo.charAt(i));
		 
			var multipliers = [1,2,1,2,1,2,1,2,1,2,1,2];
			for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

			if(10 - sum.toString().substring(sum.toString().length*1 - 1,sum.toString().length*1)*1 != buf[12]) return false;
		 
			return true;
		},

		/**
		 * @class 이메일 주소 체크
		 * @param email - 이메일 value
		 * @return Boolean
		 */
		_isEmail : function(email)
		{
			if (Base.isEmpty(email)){
				return false;
			}
			
			var match = email.match(/^(\".*\"|[A-Za-z0-9_-]([A-Za-z0-9_-]|[\+\.])*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z0-9][A-Za-z0-9_-]*(\.[A-Za-z0-9][A-Za-z0-9_-]*)+)$/);
			if (match == null){
				return false;
			} else {
				return true;
			}
		},

		/**
		 * @class 특수문자가 있는지 체크(영자,한글,숫자,간격 문자 이외의 문자로 임의 지정)
		 * @param value 체크 value
		 * @return Boolean
		 */
		_isSpecialChar : function(value)
		{
			if (Base.isEmpty(value)){
				return false;
			}
			
			//var pattern = new RegExp('[^-가-힣a-zA-Z0-9./ ,.:;!&()]');
			var pattern = new RegExp('[^-가-힣a-zA-Z0-9 ]');
			if (pattern.exec(value) != null){
				return false;
			}
			
			return true;
		},

		/**
		 * @class 핸드폰 체크
		 * @param phone 핸드폰 value
		 * @return Boolean
		 */
		_isCellPhoneNo : function(phone)
		{
			if (Base.isEmpty(phone)){
				return false;
			}
			
			var match = phone.match(/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/);
			if (match == null){
				return false;
			} else {
				return true;
			}
		},

		/**
		 * @class 일반전화번호 체크
		 * @param phone 일반전화번호 value
		 * @return Boolean
		 */
		_isPhoneNo : function(phone)
		{
			if (Base.isEmpty(phone)){
				return false;
			}
			var match = phone.match(/^\d{2,3}-?\d{3,4}-?\d{4}$/);
			if (match == null){
				return false;
			} else {
				return true;
			}
		},

		/**
		 * @class 국제전화번호 체크
		 * @param phone 국제전화번호 value
		 * @return Boolean
		 */
		_isInterPhoneNo : function(phone)
		{
			if (Base.isEmpty(phone)){
				return false;
			}
			
			var match = phone.match(/^\+82\d{1,2}-?\d{3,4}-?\d{4}$/);
			if (match == null){
				return false;
			} else {
				return true;
			}
		},

		/**
		 * @class 시분 체크
			
		 * @return Boolean
		 */
		_isTimeHHmm : function(value)
		{
			if (Base.isEmpty(value)){
				return false;
			}
			
			if (value.trim().toString().length != 4){
				return false;
			}
			
			var nHH = nexacro.toNumber(value.toString().substr(0,2));
			var nMM = nexacro.toNumber(value.toString().substr(2,2));
			   
			if (Base.isEmpty(nHH)||Base.isEmpty(nMM)){
				return false;
			}
			
			if (nHH>23||nHH<0){
				return false;
			}
			
			if (nMM>59||nMM<0){
				return false;
			}
			
			return true;
		},

		/**
		 * @class 시분초 체크
		 * @param value 시분초 value
		 * @return Boolean
		 */
		_isTimeHHmmss : function(value)
		{
			if (Base.isEmpty(value)){
				return false;
			}
			
			if (value.trim().toString().length != 6){
				return false;
			}
			
			var nHH = nexacro.toNumber(value.toString().substr(0,2));
			var nMM = nexacro.toNumber(value.toString().substr(2,2));
			var nSS = nexacro.toNumber(value.toString().substr(4,2));

			if (Base.isEmpty(nHH)||Base.isEmpty(nMM)||Base.isEmpty(nSS)){
				return false;
			}
			
			if (nHH>23||nHH<0){
				return false;
			}
			
			if (nMM>59||nMM<0){
				return false;
			}
			
			if (nSS>59||nSS<0){
				return false;
			}
			
			return true;
		},

				
		/**
		 * @class 주민등록번호로 성별을 Return 한다.
		 * @param rsrno - 주민등록번호 13자리
		 * @return string M(남자)/W(여자)/X
		 */
		_getSex : function(rsrno)
		{
			if (!this._isRsrNo(rsrno)){
				return false;
			}
			
			var vSexGb = rsrno.substr(6,1);

			if (vSexGb == '1' || vSexGb == '3' || vSexGb == '5' || vSexGb == '7'){
				return "M";	// 남자
			} else if (vSexGb == '2' || vSexGb == '4' || vSexGb == '6' || vSexGb == '8'){
				return "W";	// 여자
			} else {
				return "X";
			}
		},

		/**
		 * @class 주민등록번호 뒷 첫번째 자리로 년대를 return 한다
		 * @param rsrno - 주민등록번호 13자리
		 * @return string 년도 2자리
		 */
		_getBirthYear : function(rsrno)
		{
			if (!this._isRsrNo(rsrno)){
				return false;
			}
			
			// ## 주민등록은 100년 단위로 갱신
			// 식별번호 9 : 1800년도부터 1899년에 태어난 남성
			// 식별번호 0 : 1800년도부터 1899년에 태어난 여성	
			// 식별번호 1 : 1900년도부터 1999년에 태어난 남성
			// 식별번호 2 : 1900년도부터 1999년에 태어난 여성	
			// 식별번호 3 : 2000년도부터 2099년에 태어난 남성
			// 식별번호 4 : 2000년도부터 2099년에 태어난 여성	
			// 식별번호 5 : 1900년도부터 1999년에 외국에서 태어난 남성 (귀화/체류/이중국적 남성)
			// 식별번호 6 : 1900년도부터 1999년에 외국에서 태어난 여성 (귀화/체류/이중국적 여성)	
			// 식별번호 7 : 2000년도부터 2099년에 외국에서 태어난 남성 (귀화/체류/이중국적 남성)
			// 식별번호 8 : 2000년도부터 2099년에 외국에서 태어난 여성 (귀화/체류/이중국적 여성)
			
			var lNum = rsrno.substr(6,1);
			if (lNum == '1' ||  lNum == '2' ||  lNum == '5' ||  lNum == '6'){
				yy  = '19';
			} else if (lNum == '3' ||  lNum == '4' ||  lNum == '7' ||  lNum == '8'){
				yy  = '20';
			} else if (lNum == '9' ||  lNum == '0'){
				yy  = '18';
			}
			
			return yy;
		},

		/**
		 * @class 생년월일 또는 주민등록번호로 법적연령-만나이를 구한다.
		 * @param birth - 주민등록번호 13자리
		 * @param date - 생년월일
		 * @return string 법적연령-만나이
		 */
		_getAge : function(birth, date)
		{
			var year;
			var month;
			var day;

			if (birth.length == 13){
				if (!this._isRsrNo(birth)){
					return false;
				}
				
				var vBefor = this._getBirthYear(birth);
				if (vBefor == false){
					return false;
				}
				
				birth = vBefor + birth;
				year = parseInt(birth.substr(0,4),10);
				month = parseInt(birth.substr(4,2),10);
				day = parseInt(birth.substr(6,2),10);
			} else if (birth.length == 8){
				year = parseInt(birth.substr(0,4),10);
				month = parseInt(birth.substr(4,2),10);
				day = parseInt(birth.substr(6,2),10);
				
				if (!Base.isStringDate(birth)){
					return false;
				}
			} else {
				return false;
			}
			
			if (!Base.isStringDate(date)){
				return false;
			}
			
			var dateYear = parseInt(date.substr(0,4),10);
			var dateMonth = parseInt(date.substr(4,2),10);
			var dateDay = parseInt(date.substr(6,2),10);
			var age = dateYear - year;
			
			if (month > dateMonth){
				age = age - 1;
			} else if (month == dateMonth){
				if (day > dateDay){
					age = age - 1;
				}
			}
			
			if (age < 0){
				age = 0;
			}
			
			return age;
		},

		/**
		 * @class 문자열이 알파벳(a~z, A~Z)만으로 구성되어 있는지 체크
		 * @param sVal: 체크할 문자열 (예 : "aAzZ")
		 * @return - 알파벳만 있는경우 = true
		 *		   - 알파벳이 아닌 글자가 하나라도 있는 경우 = false
		 */  
		_isAlpha : function (sVal)
		{
			if (Base.isEmpty(sVal)){
				return false;
			}
			
			if (sVal.search("[^A-Za-z]") >= 0){
				return false;
			} else {
				return true;
			}
		},

		/**
		 * @class 문자열이 알파벳(a~z, A~Z), 숫자만으로 구성되어 있는지 체크
		 * @param sVal: 체크할 문자열 (예 : "aAzZ09")
		 * @return - 알파벳, 숫자만 있는경우 = true
		 *		   - 알파벳, 숫자가 아닌 글자가 하나라도 있는 경우 = false
		 */  
		_isAlNum : function (sVal)
		{
			if (Base.isEmpty(sVal)){
				return false;
			}
			
			if (sVal.search("[^A-Za-z0-9]") >= 0){
				return false;
			} else {
				return true;
			}
		},

		/**
		 * @class 문자열이 한글로만 구성되어 있는지 체크
		 * @param sVal: 체크할 문자열 (예 : "가나다")
		 * @return - 한글만 있는경우 = true
		 *		   - 한글이 아닌 글자가 하나라도 있는 경우 = false
		 */  
		_isKor : function (sVal)
		{
			if (Base.isEmpty(sVal)){
				return false;
			}
			for (var i=0; i<sVal.length; i++){
				if (!((sVal.charCodeAt(i) > 0x3130 && sVal.charCodeAt(i) < 0x318F) 
				   || (sVal.charCodeAt(i) >= 0xAC00 && sVal.charCodeAt(i) <= 0xD7A3))){
					return false;
				}
			}
			return true;
		},

		/**
		 * @class IP체크
		 * @param sVal: 체크할 문자열 (예 : "225.225.225.0")
		 * @return - IP유형인경우 = true
		 *		   - IP유형이 아닌경우 = false
		 */  
		_isIp : function(sVal)
		{
			if(Base.isEmpty(sVal)){
				return false;
			}
			
			var aVal = sVal.split(".");
			if(aVal.length < 4){
			   return false;
			}
			
			var nValue;
			for(var i = 0; i < aVal.length; i++){
				nValue = parseInt(aVal[i]);
			   if(!Base.isNumber(nValue)){
				  return false;
			   }
			   if(nValue > 256 || nValue < 0){
				  return false;
			   }
			}
			
			return true;
		},



		     
    });

}
