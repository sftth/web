/**
 * LG Electronics Date Library

 ● LGE.Date.isDate      	: 날짜에 대한 형식 체크
 ● LGE.Date.isDate6     	: 날짜 형태의 6자리 입력값 인지 체크하는 함수
 ● LGE.Date.isDate8     	: 날짜 형태의 8자리 입력값 인지 체크하는 함수
 ● LGE.Date.today       	: 해당 PC의 오늘 날짜를 가져온다.
 ● LGE.Date.todayTime   	: 해당 PC의 오늘 날짜+시간를 가져온다.
 ● LGE.Date.firstDate   	: 해당월의 시작 날짜를 yyyyMMdd형태로 구하기
 ● LGE.Date.lastDate    	: 해당월의 마지막 날짜를 yyyyMMdd형태로 구하기
 ● LGE.Date.lastDateNum 	: 해당월의 마지막 날짜를 숫자로 구하기
 ● LGE.Date.addDate     	: 입력된 날자에 OffSet 으로 지정된 만큼의 일을 더한다.
 ● LGE.Date.addMonth    	: 입력된 날자에 OffSet 으로 지정된 만큼의 달을 더한다.
 ● LGE.Date.minusMonth  	: 입력된 날자에 OffSet 으로 지정된 만큼의 일을 뺀다.
 ● LGE.Date.datetime    	: MiPlatform에서 사용하던 Datetime형식으로 변환
 ● LGE.Date.makeDate    	: MiPlatform에서 사용하던 Datetime형식으로 변환
 ● LGE.Date.getDiffDay  	: 2개의 날짜간의 Day count
 ● LGE.Date.diffMonth   	: 두 월간의 차이 월수 계산
 ● LGE.Date.getDay      	: 입력된 날자로부터 요일을 구함
 ● LGE.Date.getDayName  	: 입력된 날자로부터 요일명을 구함
 ● LGE.Date.strToDate   	: String 타입의 형식을 날짜형식으로 변환
 ● LGE.Date.isLeapYear  	: 윤년여부 확인
 ● LGE.Date.solar2Lunar 	: 양력을 음력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년)
 ● LGE.Date.lunar2Solar 	: 음력을 양력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년)
 ● LGE.Date.getHolidays 	: 양력 nYear에 해당하는 년도의 법정 공휴일(양력) List 모두 구하기
 ● LGE.Date.solarBase   	: 각 월별 음력 기준 정보를 처리하는 함수(처리가능 기간  1841 - 2043년) 단, 내부에서 사용하는 함수임
 */
 
 
if (!JsNamespace.exist("LGE.Date"))
{
	/*============================================================================================
	 * @define	 	JSLib.json	 
	 * @memberof 	LgeLibrary	 
	 * @namespace 	LGE.Date
	 * @author 		admin
	 =============================================================================================*/
    JsNamespace.declare("LGE.Date", {

		 
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상날짜
		 * ⓡ return {boolean}	
		 --------------------------------------------------------------------------------------------*/			 
		isDate : function (sDate)
		{
		
			var stringWrapper = new String(sDate);
			
			
			stringWrapper = stringWrapper.replace("/","").replace("/","");
			stringWrapper = stringWrapper.replace("-","").replace("-","");
			stringWrapper = stringWrapper.replace(".","").replace(".","");
			

			
			if (stringWrapper.toString().length !== 8) return false;
			
			
			
			
			var iMonth  = Math.floor(stringWrapper.slice(4,6), 10);
			var iDate   = Math.floor(stringWrapper.slice(6,8), 10);
			
			
			if (iMonth < 1 || iMonth > 12) return false;	
			if (iDate < 1 || iDate > this.lastDateNum(stringWrapper)) return false;	
			

			return true;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상날짜
		 * ⓡ return {boolean}	
		 --------------------------------------------------------------------------------------------*/			 
		isDate6 : function (strValue)
		{
			if (LGE.Base.length(strValue) != 6){
				return false;
			} else if (!this.isDate(strValue + "01")){
				return false;
			}
			return true;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상날짜
		 * ⓡ return {boolean}	
		 --------------------------------------------------------------------------------------------*/		   
		isDate8 : function (strValue)
		{
			if (LGE.Base.length(strValue) != 8){
				return false;
			} else if (!this.isDate(strValue)){
				return false;
			}
			return true;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param N/A
		 * ⓡ return {string}		
		 --------------------------------------------------------------------------------------------*/			   
		today : function ()
		{
			var strToday = "";
			var objDate = new Date();

			var strToday = objDate.getFullYear().toString();
			strToday += LGE.Base.right("0" + (objDate.getMonth() + 1), 2);
			strToday += LGE.Base.right("0" + objDate.getDate(), 2);
			
			//strToday = this.getServerTime().substr(0,8);

			return strToday;
		},



		/*--------------------------------------------------------------------------------------------
		 * ⓟ param N/A
		 * ⓡ return {string}		
		 --------------------------------------------------------------------------------------------*/			   
		todayMonth : function ()
		{
			var sDate = this.today();
			var sMonth = sDate.substr(4, 2);
			return sMonth;
		},

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param N/A
		 * ⓡ return {string}		
		 --------------------------------------------------------------------------------------------*/			 
		todayTime : function ()
		{
			var strToday = "";
			var objDate = new Date();
			var sToday = objDate.getFullYear().toString();
			sToday += LGE.Base.right("0" + (objDate.getMonth() + 1), 2);
			sToday += LGE.Base.right("0" + objDate.getDate(), 2);
			sToday += LGE.Base.right("0" + objDate.getHours(), 2);
			sToday += LGE.Base.right("0" + objDate.getMinutes(), 2);
			sToday += LGE.Base.right("0" + objDate.getSeconds(), 2);
			//strToday += objDate.getMilliseconds();
			strToday = sToday;
			
			//strToday = this.getServerTime();
			
			return strToday;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상날짜
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/			  
		firstDate : function (sDate)
		{
			if (Base.isEmpty(sDate)){
				return "";
			}
			
			return sDate.substr(0, 6) + "01";
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상날짜
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/			  
		lastDate : function (sDate)
		{
			if (Base.isEmpty(sDate)){
				return "";
			}
			
			var nLastDate = this.lastDateNum(sDate);
			return sDate.substr(0, 6) + nLastDate.toString();
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상날짜
		 * ⓡ return {int}	
		 --------------------------------------------------------------------------------------------*/		  
		lastDateNum : function (sDate)
		{
			var nMonth,nLastDate;

			if (Base.isEmpty(sDate)){
				return -1;
			}

			nMonth = parseInt(sDate.substr(4, 2), 10);
			if (nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7 || nMonth == 8 || nMonth == 10 || nMonth == 12){
				nLastDate = 31;
			} else if (nMonth == 2){
				if (this.isLeapYear(sDate) == true){
					nLastDate = 29;
				} else {
					nLastDate = 28;
				}
			} else {
				nLastDate = 30;
			}

			return nLastDate;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상날짜
		 * ⓟ param {int} 		증가/감소 값, default Value:1
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/			  
		addDate : function (date, nOffSet)
		{
			var nYear = parseInt(date.substr(0, 4));
			var nMonth = parseInt(date.substr(4, 2));
			var nDate = parseInt(date.substr(6, 2)) + nOffSet;

			return this.datetime(nYear, nMonth, nDate);
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상날짜
		 * ⓟ param {int} 		증가/감소 값, default Value:1
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/		 
		addMonth : function (date, nOffSet)
		{
			var nYear = parseInt(date.substr(0, 4));
			var nMonth = parseInt(date.substr(4, 2)) + nOffSet;
			var nDate = parseInt(date.substr(6, 2));

			return this.datetime(nYear, nMonth, nDate);
		},

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	대상날짜
		 * ⓟ param {int} 		증가/감소 값, default Value:1
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/			 
		minusMonth : function (date, nOffSet)
		{
			var nYear = parseInt(date.substr(0, 4));
			var nMonth = parseInt(date.substr(4, 2)) - nOffSet;
			var nDate = parseInt(date.substr(6, 2));
			
			return this.datetime(nYear, nMonth, nDate);
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {int}	 	year
		 * ⓟ param {int} 		month
		 * ⓟ param {int} 		date
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/			  
		datetime : function (nYear, nMonth, nDate)
		{
			if (nYear.toString().trim().length >= 5){
				var sDate = new String(nYear);
				var nYear = sDate.substr(0, 4);
				var nMonth = sDate.substr(4, 2);
				var nDate = ((sDate.substr(6, 2) == "") ? 1 : sDate.substr(6, 2));
				var nHours = ((sDate.substr(8, 2) == "") ? 0 : sDate.substr(8, 2));
				var nMinutes = ((sDate.substr(10, 2) == "") ? 0 : sDate.substr(10, 2));
				var nSeconds = ((sDate.substr(12, 2) == "") ? 0 : sDate.substr(12, 2));

				var objDate = new Date(parseInt(nYear), parseInt(nMonth) - 1, parseInt(nDate), parseInt(nHours), parseInt(nMinutes), parseInt(nSeconds));
			} else {
				var objDate = new Date(parseInt(nYear), parseInt(nMonth) - 1, parseInt(((nDate == null) ? 1 : nDate)));
			}
			
			var strYear = objDate.getYear().toString();
			var strMonth = (objDate.getMonth() + 1).toString();
			var strDate = objDate.getDate().toString();

			if (strMonth.length == 1){
				strMonth = "0" + strMonth;
			}
			if (strDate.length == 1){
				strDate = "0" + strDate;
			}

			return strYear + strMonth + strDate;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {int}	 	year
		 * ⓟ param {int} 		month
		 * ⓟ param {int} 		date
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/		  
		makeDate : function (nYear, nMonth, nDate)
		{
			if (Base.isEmpty(nYear) || Base.isEmpty(nMonth) || Base.isEmpty(nDate)){
				return "";
			}
			
			var objDate = new Date(nYear, nMonth - 1, nDate);
			var sYear = objDate.getFullYear().toString();
			var sMonth = LGE.Base.right("0" + (objDate.getMonth() + 1), 2);
			var sDate = LGE.Base.right("0" + objDate.getDate(), 2);
			
			return sYear + sMonth + sDate;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}	 	시작일자
		 * ⓟ param {string} 		종료일자
		 * ⓡ return {int}	
		 --------------------------------------------------------------------------------------------*/			   
		getDiffDay : function (sFdate, sTdate)
		{
			sFdate = new String(sFdate);
			sFdate = sFdate.split(" ").join("").split("-").join("").split("/").join("");
			sTdate = new String(sTdate);
			sTdate = sTdate.split(" ").join("").split("-").join("").split("/").join("");
			
			sFdate = LGE.Base.left(sFdate, 8);
			sTdate = LGE.Base.left(sTdate, 8);
			
			if (sFdate.length != 8 || sTdate.length != 8
				 || nexacro.isNumeric(sFdate) == false || nexacro.isNumeric(sTdate) == false
				 || this.getDay(sFdate) == -1 || this.getDay(sTdate) == -1){
				return null;
			}
			
			var nDiffDate = this.strToDate(sTdate) - this.strToDate(sFdate);
			var nDay = 1000 * 60 * 60 * 24;
			
			nDiffDate = parseInt(nDiffDate / nDay);
			if (nDiffDate < 0){
				nDiffDate = nDiffDate - 1;
			} else {
				nDiffDate = nDiffDate + 1;
			}
			
			return nDiffDate;
		},


		 
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}	 	시작일자
		 * ⓟ param {string} 		종료일자
		 * ⓡ return {int}	
		 --------------------------------------------------------------------------------------------*/		 
		diffMonth : function (sStartDate, sEndDate)
		{
			var nStartMon,nEndMon;

			if (Base.isEmpty(sStartDate) || Base.isEmpty(sEndDate)){
				return NaN;
			}

			nStartMon = parseInt(sStartDate.substr(0, 4), 10) * 12 + parseInt(sStartDate.substr(4, 2), 10);
			nEndMon = parseInt(sEndDate.substr(0, 4), 10) * 12 + parseInt(sEndDate.substr(4, 2), 10);

			return (nEndMon - nStartMon);
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}	 	대상일자
		 * ⓡ return {int}	
		 --------------------------------------------------------------------------------------------*/			 
		getDay : function (sDate)
		{
			var objDate = this.strToDate(sDate);
			return objDate.getDay();
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}	 	대상일자
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/	
		getDayName : function (sDate)
		{
			var objDayName = new Array("일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일");
			var objDate = this.getDay(sDate);

			return objDayName[objDate];
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}	 	대상일자
		 * ⓡ return {object}	
		 --------------------------------------------------------------------------------------------*/			 
		strToDate : function (sDate)
		{
			var nYear = parseInt(sDate.substr(0, 4));
			var nMonth = parseInt(sDate.substr(4, 2)) - 1;
			var nDate = parseInt(sDate.substr(6, 2));

			return new Date(nYear, nMonth, nDate);
		},

		  
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}	 	대상일자
		 * ⓡ return {boolean}	
		 --------------------------------------------------------------------------------------------*/			  
		isLeapYear : function (sDate)
		{
			var ret;
			var nY;

			if (Base.isEmpty(sDate)){
				return false;
			}

			nY = parseInt(sDate.substring(0, 4), 10);

			if ((nY % 4) == 0){
				if ((nY % 100) != 0 || (nY % 400) == 0){
					ret = true;
				} else {
					ret = false;
				}
			} else {
				ret = false;
			}

			return ret;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}	 	대상일자
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/			 
		solar2Lunar : function (sDate)
		{
			var sMd = "31,0,31,30,31,30,31,31,30,31,30,31";
			var aMd = new Array();

			var aBaseInfo = new Array();
			var aDt = new Array();
			var td;
			var td1;
			var td2;
			var mm,m1,m2;
			var nLy,nLm,nLd;
			var sLyoon;
			if (Base.isEmpty(sDate)){
				return "";
			}

			var sY = parseInt(sDate.substr(0, 4), 10);
			var sM = parseInt(sDate.substr(4, 2), 10);
			var sD = parseInt(sDate.substr(6, 2), 10);
			if (sY < 1841 || sY > 2043){
				return "";
			}

			aBaseInfo = this.solarBase();
			aMd = sMd.split(",");
			if (this.isLeapYear(sDate) == true){
				aMd[1] = 29;
			} else {
				aMd[1] = 28;
			}

			td1 = 672069; //672069 = 1840 * 365 + 1840/4 - 1840/100 + 1840/400 + 23  //1840년까지 날수

			// 1841년부터 작년까지의 날수
			td2 = (sY - 1) * 365 + parseInt((sY - 1) / 4) - parseInt((sY - 1) / 100) + parseInt((sY - 1) / 400);

			// 전월까지의 날수를 더함
			for (var i=0; i <= sM - 2; i++){
				td2 = td2 + parseInt(aMd[i]);
			}

			// 현재일까지의 날수를 더함
			td2 = td2 + sD;

			// 양력현재일과 음력 1840년까지의 날수의 차이
			td = td2 - td1 + 1;

			// 1841년부터 음력날수를 계산
			for (var i=0; i<=sY-1841; i++){
				aDt[i] = 0;
				for (j=0; j<=11; j++){
					switch (parseInt(aBaseInfo[i*12 + j])){
						case 1: 
							mm = 29;
							break;
						case 2:
							mm = 30;
							break;				
						case 3:
							mm = 58;	// 29 + 29
							break;				
						case 4:
							mm = 59;	// 29 + 30
							break;				
						case 5:
							mm = 59;	// 30 + 29
							break;				
						case 6:
							mm = 60;	// 30 + 30
							break;				
					}
					aDt[i] = aDt[i] + mm;
				}
			}

			// 1840년 이후의 년도를 계산 - 현재까지의 일수에서 위에서 계산된 1841년부터의 매년 음력일수를 빼가면수 년도를 계산
			nLy = 0;
			do{
				td = td - aDt[nLy];
				nLy = nLy + 1;
			} while (td > aDt[nLy]);

			nLm = 0;
			sLyoon = "0"; //현재월이 윤달임을 표시할 변수 - 기본값 평달
			do{
				if (parseInt(aBaseInfo[nLy * 12 + nLm]) <= 2){
					mm = parseInt(aBaseInfo[nLy * 12 + nLm]) + 28;
					if (td > mm){
						td = td - mm;
						nLm = nLm + 1;
					} else {
						break;
					}
				} else {
					switch (parseInt(aBaseInfo[nLy * 12 + nLm])){
						case 3:
							m1 = 29;
							m2 = 29;
							break;
						case 4:
							m1 = 29;
							m2 = 30;
							break;
						case 5:
							m1 = 30;
							m2 = 29;
							break;
						case 6:
							m1 = 30;
							m2 = 30;
							break;
					}

					if (td > m1){
						td = td - m1;
						if (td > m2){
							td = td - m2;
							nLm = nLm + 1;
						} else {
							sLyoon = "1";
						}
					} else {
						break;
					}
				}
			} while (1);
			
			nLy = nLy + 1841;
			nLm = nLm + 1;
			nLd = td;
			
			return sLyoon + nLy + LGE.Base.right("0" + nLm, 2) + LGE.Base.right("0" + nLd, 2);
		},


		/*--------------------------------------------------------------------------------------------
		 * Flag(1 Byte)+yyyyMMdd형태의 음력일자 ( 예 : "020121122" ) ( Flag : 평달 = "0", 윤달 = "1" )
		 * ⓟ param {string}	 	대상일자
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/			  
		lunar2Solar : function (sDate)
		{
			var sMd = "31,0,31,30,31,30,31,31,30,31,30,31";
			var aMd = new Array();	
			var aBaseInfo = new Array();	
			
			var nLy, nLm, nLd, sLflag;		// 전해온 음력 인자값을 저장할 년, 월, 일, 윤달여부 임시변수
			var nSy, nSm, nSd;				// 계산된 양력 년, 월, 일을 저장할 변수
			var y1, m1, i, j, y2, y3;	// 임시변수	
			var leap;

			if (Base.isEmpty(sDate))	return "";
			if (sDate.length != 9)		return "";
			
			sLflag = sDate.substr(0,1);
			nLy = parseInt(sDate.substr(1,4), 10);
			nLm = parseInt(sDate.substr(5,2), 10);
			nLd = parseInt(sDate.substr(7,2), 10);
			if (nLy < 1841 || nLy > 2043)			return "";
			if (sLflag != "0" && sLflag != "1")	return "";
				
			aBaseInfo = this.solarBase();
			aMd = sMd.split(",");
			if (this.isLeapYear(sDate.substr(1,8)) == true){				
				aMd[1] = 29;
			} else {
				aMd[1] = 28;	
			}
			y1 = nLy - 1841;
			m1 = nLm - 1;
			leap = 0;
			if (parseInt(aBaseInfo[y1*12 + m1]) > 2){
				leap = this.isLeapYear(nLy+"0101");
			}
			if (leap == 1){
				switch (parseInt(aBaseInfo[y1*12 + m1])){
					case 3:
						mm = 29;
						break;
					case 4:
						mm = 30;
						break;			
					case 5:
						mm = 29;
						break;			
					case 6:
						mm = 30;
						break;
				}
			} else {
				switch (parseInt(aBaseInfo[y1*12 + m1])){
					case 1:
						mm = 29;
						break;			
					case 2:
						mm = 30;
						break;			
					case 3:
						mm = 29;
						break;			
					case 4:
						mm = 29;
						break;			
					case 5:
						mm = 30;
						break;			
					case 6:
						mm = 30;
						break;			
				}
			}

			td = 0;
			for (i=0; i<=y1-1; i++){
				for(j=0; j<=11; j++){
					switch (parseInt(aBaseInfo[i*12+j])){
						case 1:
							td = td + 29;
							break;
						case 2:
							td = td + 30;
							break;				
						case 3:
							td = td + 58;
							break;				
						case 4:
							td = td + 59;
							break;				
						case 5: 
							td = td + 59;
							break;				
						case 6:
							td = td + 60;
							break;				
					}
				}
			}

			for (j=0; j<=m1-1; j++){
				switch (parseInt(aBaseInfo[y1*12+j])){
					case 1:
						td = td + 29;
						break;			
					case 2:
						td = td + 30;
						break;						
					case 3:
						td = td + 58;
						break;						
					case 4:
						td = td + 59;
						break;						
					case 5:
						td = td + 59;
						break;						
					case 6:
						td = td + 60;
						break;						
				}
			}

			if (leap == 1){
				switch (parseInt(aBaseInfo[y1*12+m1])){
					case 3:
						mm = 29;
						break;						
					case 4:
						mm = 29;
						break;						
					case 5:
						mm = 30;
						break;						
					case 6:
						mm = 30;
						break;						
				}
			}
			
			td = td + nLd + 22;
			if (sLflag == "1"){
				switch (parseInt(aBaseInfo[y1*12+m1])){
					case 3:
						td = td + 29;
						break;						
					case 4:
						td = td + 30;
						break;						
					case 5:
						td = td + 29;
						break;						
					case 6:
						td = td + 30;
						break;						
				}
			}
			
			y1 = 1840;
			do{
				y1 = y1 + 1;
				leap = this.isLeapYear(y1+"0101");

				if (leap == 1){
					y2 = 366;
				} else {
					y2 = 365;
				}
				if (td <= y2){
					break;
				}
				td = td - y2;
			} while(1);

			nSy = y1;
			aMd[1] = y2 - 337;
			m1 = 0;
			do{
				m1 = m1 + 1;
				if (td <= parseInt(aMd[m1-1])){
					break;
				}
				td = td - parseInt(aMd[m1-1]);
			} while(1);
			
			nSm = m1;
			nSd = td;
			y3 = nSy;
			td = y3 * 365 + parseInt(y3/4) - parseInt(y3/100) + parseInt(y3/400);
			for (i=0; i<=nSm-1; i++){
				td = td + parseInt(aMd[i]);
			}
			td = td + nSd;
			
			return y3 + LGE.Base.right("0" + nSm, 2)+LGE.Base.right("0" + nSd, 2);
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string}	 	대상년도
		 * ⓡ return {array}	
		 --------------------------------------------------------------------------------------------*/			   
		getHolidays : function (nYear)
		{
			var nYear;
			var aHoliday = new Array();

			if (Base.isEmpty(nYear)){
				return aHoliday;
			}

			// ///// 음력 체크
			// 구정
			aHoliday[0] = this.lunar2Solar("0" + (nYear - 1) + "1230") + "설날";
			aHoliday[1] = this.addDate(aHoliday[0], 1) + "설날";
			aHoliday[2] = this.addDate(aHoliday[1], 1) + "설날";
			// 석가탄신일
			aHoliday[3] = this.lunar2Solar("0" + nYear + "0408") + "석가탄신일";
			// 추석
			aHoliday[4] = this.lunar2Solar("0" + nYear + "0814") + "추석";
			aHoliday[5] = this.addDate(aHoliday[4], 1) + "추석";
			aHoliday[6] = this.addDate(aHoliday[5], 1) + "추석";
			
			// ///// 양력 체크
			aHoliday[7] = nYear + "0101" + "신정";
			aHoliday[8] = nYear + "0301" + "삼일절";
			aHoliday[9] = nYear + "0505" + "어린이날";
			aHoliday[10] = nYear + "0606" + "현충일";
			aHoliday[11] = nYear + "0815" + "광복절";
			aHoliday[12] = nYear + "1003" + "개천절";
			aHoliday[13] = nYear + "1009" + "한글날";
			aHoliday[14] = nYear + "1225" + "성탄절";

			return aHoliday.sort();
		},


		/*--------------------------------------------------------------------------------------------
		 * 각 월별 음력 기준 정보를 처리하는 함수(처리가능 기간  1841 - 2043년) 내부함수
		 * ⓡ return {array}	
		 --------------------------------------------------------------------------------------------*/			  
		solarBase : function ()
		{
			var kk;

			// 1841
			kk = "1,2,4,1,1,2,1,2,1,2,2,1,";
			kk += "2,2,1,2,1,1,2,1,2,1,2,1,";
			kk += "2,2,2,1,2,1,4,1,2,1,2,1,";
			kk += "2,2,1,2,1,2,1,2,1,2,1,2,";
			kk += "1,2,1,2,2,1,2,1,2,1,2,1,";
			kk += "2,1,2,1,5,2,1,2,2,1,2,1,";
			kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
			kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
			kk += "2,1,2,3,2,1,2,1,2,1,2,2,";
			kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
			// 1851
			kk += "2,2,1,2,1,1,2,1,2,1,5,2,";
			kk += "2,1,2,2,1,1,2,1,2,1,1,2,";
			kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
			kk += "1,2,1,2,1,2,5,2,1,2,1,2,";
			kk += "1,1,2,1,2,2,1,2,2,1,2,1,";
			kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
			kk += "1,2,1,1,5,2,1,2,1,2,2,2,";
			kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
			kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
			kk += "2,1,6,1,1,2,1,1,2,1,2,2,";
			// 1861
			kk += "1,2,2,1,2,1,2,1,2,1,1,2,";
			kk += "2,1,2,1,2,2,1,2,2,3,1,2,";
			kk += "1,2,2,1,2,1,2,2,1,2,1,2,";
			kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
			kk += "2,1,1,2,4,1,2,2,1,2,2,1,";
			kk += "2,1,1,2,1,1,2,2,1,2,2,2,";
			kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
			kk += "1,2,2,3,2,1,1,2,1,2,2,1,";
			kk += "2,2,2,1,1,2,1,1,2,1,2,1,";
			kk += "2,2,2,1,2,1,2,1,1,5,2,1,";
			// 1871
			kk += "2,2,1,2,2,1,2,1,2,1,1,2,";
			kk += "1,2,1,2,2,1,2,1,2,2,1,2,";
			kk += "1,1,2,1,2,4,2,1,2,2,1,2,";
			kk += "1,1,2,1,2,1,2,1,2,2,2,1,";
			kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
			kk += "2,2,1,1,5,1,2,1,2,2,1,2,";
			kk += "2,2,1,1,2,1,1,2,1,2,1,2,";
			kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
			kk += "2,2,4,2,1,2,1,1,2,1,2,1,";
			kk += "2,1,2,2,1,2,2,1,2,1,1,2,";
			// 1881
			kk += "1,2,1,2,1,2,5,2,2,1,2,1,";
			kk += "1,2,1,2,1,2,1,2,2,1,2,2,";
			kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
			kk += "2,1,1,2,3,2,1,2,2,1,2,2,";
			kk += "2,1,1,2,1,1,2,1,2,1,2,2,";
			kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
			kk += "2,2,1,5,2,1,1,2,1,2,1,2,";
			kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
			kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
			kk += "1,5,2,1,2,2,1,2,1,2,1,2,";
			// 1891
			kk += "1,2,1,2,1,2,1,2,2,1,2,2,";
			kk += "1,1,2,1,1,5,2,2,1,2,2,2,";
			kk += "1,1,2,1,1,2,1,2,1,2,2,2,";
			kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
			kk += "2,1,2,1,5,1,2,1,2,1,2,1,";
			kk += "2,2,2,1,2,1,1,2,1,2,1,2,";
			kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
			kk += "2,1,5,2,2,1,2,1,2,1,2,1,";
			kk += "2,1,2,1,2,1,2,2,1,2,1,2,";
			kk += "1,2,1,1,2,1,2,5,2,2,1,2,";
			// 1901
			kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
			kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
			kk += "1,2,1,2,3,2,1,1,2,2,1,2,";
			kk += "2,2,1,2,1,1,2,1,1,2,2,1,";
			kk += "2,2,1,2,2,1,1,2,1,2,1,2,";
			kk += "1,2,2,4,1,2,1,2,1,2,1,2,";
			kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
			kk += "2,1,1,2,2,1,2,1,2,2,1,2,";
			kk += "1,5,1,2,1,2,1,2,2,2,1,2,";
			kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
			// 1911
			kk += "2,1,2,1,1,5,1,2,2,1,2,2,";
			kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
			kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
			kk += "2,2,1,2,5,1,2,1,2,1,1,2,";
			kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
			kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
			kk += "2,3,2,1,2,2,1,2,2,1,2,1,";
			kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
			kk += "1,2,1,1,2,1,5,2,2,1,2,2,";
			kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
			// 1921
			kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
			kk += "2,1,2,2,3,2,1,1,2,1,2,2,";
			kk += "1,2,2,1,2,1,2,1,2,1,1,2,";
			kk += "2,1,2,1,2,2,1,2,1,2,1,1,";
			kk += "2,1,2,5,2,1,2,2,1,2,1,2,";
			kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
			kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
			kk += "1,5,1,2,1,1,2,2,1,2,2,2,";
			kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
			kk += "1,2,2,1,1,5,1,2,1,2,2,1,";
			// 1931
			kk += "2,2,2,1,1,2,1,1,2,1,2,1,";
			kk += "2,2,2,1,2,1,2,1,1,2,1,2,";
			kk += "1,2,2,1,6,1,2,1,2,1,1,2,";
			kk += "1,2,1,2,2,1,2,2,1,2,1,2,";
			kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
			kk += "2,1,4,1,2,1,2,1,2,2,2,1,";
			kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
			kk += "2,2,1,1,2,1,4,1,2,2,1,2,";
			kk += "2,2,1,1,2,1,1,2,1,2,1,2,";
			kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
			// 1941
			kk += "2,2,1,2,2,4,1,1,2,1,2,1,";
			kk += "2,1,2,2,1,2,2,1,2,1,1,2,";
			kk += "1,2,1,2,1,2,2,1,2,2,1,2,";
			kk += "1,1,2,4,1,2,1,2,2,1,2,2,";
			kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
			kk += "2,1,1,2,1,1,2,1,2,2,1,2,";
			kk += "2,5,1,2,1,1,2,1,2,1,2,2,";
			kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
			kk += "2,2,1,2,1,2,3,2,1,2,1,2,";
			kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
			// 1951
			kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
			kk += "1,2,1,2,4,2,1,2,1,2,1,2,";
			kk += "1,2,1,1,2,2,1,2,2,1,2,2,";
			kk += "1,1,2,1,1,2,1,2,2,1,2,2,";
			kk += "2,1,4,1,1,2,1,2,1,2,2,2,";
			kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
			kk += "2,1,2,1,2,1,1,5,2,1,2,2,";
			kk += "1,2,2,1,2,1,1,2,1,2,1,2,";
			kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
			kk += "2,1,2,1,2,5,2,1,2,1,2,1,";
			// 1961
			kk += "2,1,2,1,2,1,2,2,1,2,1,2,";
			kk += "1,2,1,1,2,1,2,2,1,2,2,1,";
			kk += "2,1,2,3,2,1,2,1,2,2,2,1,";
			kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
			kk += "1,2,1,2,1,1,2,1,1,2,2,1,";
			kk += "2,2,5,2,1,1,2,1,1,2,2,1,";
			kk += "2,2,1,2,2,1,1,2,1,2,1,2,";
			kk += "1,2,2,1,2,1,5,2,1,2,1,2,";
			kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
			kk += "2,1,1,2,2,1,2,1,2,2,1,2,";
			// 1971
			kk += "1,2,1,1,5,2,1,2,2,2,1,2,";
			kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
			kk += "2,1,2,1,1,2,1,1,2,2,2,1,";
			kk += "2,2,1,5,1,2,1,1,2,2,1,2,";
			kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
			kk += "2,2,1,2,1,2,1,5,2,1,1,2,";
			kk += "2,1,2,2,1,2,1,2,1,2,1,1,";
			kk += "2,2,1,2,1,2,2,1,2,1,2,1,";
			kk += "2,1,1,2,1,6,1,2,2,1,2,1,";
			kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
			// 1981
			kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
			kk += "2,1,2,3,2,1,1,2,2,1,2,2,";
			kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
			kk += "2,1,2,2,1,1,2,1,1,5,2,2,";
			kk += "1,2,2,1,2,1,2,1,1,2,1,2,";
			kk += "1,2,2,1,2,2,1,2,1,2,1,1,";
			kk += "2,1,2,2,1,5,2,2,1,2,1,2,";
			kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
			kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
			kk += "1,2,1,1,5,1,2,1,2,2,2,2,";
			// 1991
			kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
			kk += "1,2,2,1,1,2,1,1,2,1,2,2,";
			kk += "1,2,5,2,1,2,1,1,2,1,2,1,";
			kk += "2,2,2,1,2,1,2,1,1,2,1,2,";
			kk += "1,2,2,1,2,2,1,5,2,1,1,2,";
			kk += "1,2,1,2,2,1,2,1,2,2,1,2,";
			kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
			kk += "2,1,1,2,3,2,2,1,2,2,2,1,";
			kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
			kk += "2,2,1,1,2,1,1,2,1,2,2,1,";
			// 2001
			kk += "2,2,2,3,2,1,1,2,1,2,1,2,";
			kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
			kk += "2,2,1,2,2,1,2,1,1,2,1,2,";
			kk += "1,5,2,2,1,2,1,2,2,1,1,2,";
			kk += "1,2,1,2,1,2,2,1,2,2,1,2,";
			kk += "1,1,2,1,2,1,5,2,2,1,2,2,";
			kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
			kk += "2,1,1,2,1,1,2,1,2,2,1,2,";
			kk += "2,2,1,1,5,1,2,1,2,1,2,2,";
			kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
			// 2011
			kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
			kk += "2,1,6,2,1,2,1,1,2,1,2,1,";
			kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
			kk += "1,2,1,2,1,2,1,2,5,2,1,2,";
			kk += "1,2,1,1,2,1,2,2,2,1,2,2,";
			kk += "1,1,2,1,1,2,1,2,2,1,2,2,";
			kk += "2,1,1,2,3,2,1,2,1,2,2,2,";
			kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
			kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
			kk += "2,1,2,5,2,1,1,2,1,2,1,2,";
			// 2021
			kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
			kk += "2,1,2,1,2,2,1,2,1,2,1,2,";
			kk += "1,5,2,1,2,1,2,2,1,2,1,2,";
			kk += "1,2,1,1,2,1,2,2,1,2,2,1,";
			kk += "2,1,2,1,1,5,2,1,2,2,2,1,";
			kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
			kk += "1,2,1,2,1,1,2,1,1,2,2,2,";
			kk += "1,2,2,1,5,1,2,1,1,2,2,1,";
			kk += "2,2,1,2,2,1,1,2,1,1,2,2,";
			kk += "1,2,1,2,2,1,2,1,2,1,2,1,";
			// 2031
			kk += "2,1,5,2,1,2,2,1,2,1,2,1,";
			kk += "2,1,1,2,1,2,2,1,2,2,1,2,";
			kk += "1,2,1,1,2,1,5,2,2,2,1,2,";
			kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
			kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
			kk += "2,2,1,2,1,4,1,1,2,1,2,2,";
			kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
			kk += "2,2,1,2,1,2,1,2,1,1,2,1,";
			kk += "2,2,1,2,5,2,1,2,1,2,1,1,";
			kk += "2,1,2,2,1,2,2,1,2,1,2,1,";
			// 2041
			kk += "2,1,1,2,1,2,2,1,2,2,1,2,";
			kk += "1,5,1,2,1,2,1,2,2,2,1,2,";
			kk += "1,2,1,1,2,1,1,2,2,1,2,2";

			var arr = new Array();
			arr = kk.split(",");

			return arr;
		}
    });
}
