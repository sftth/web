/**
 * LG Electronics Biz Library
 
 ● LGE.Biz.getHostName             : 접속경로 반환
 ● LGE.Biz.setFirstRowCombo        : Combo or Dataset First Row를 설정한다.
 ● LGE.Biz.getTranslateStr         : 번역된 값을 리턴한다.(gds_message 연계)
 ● LGE.Biz.makeGridFormat          : Source Dataset의 정보로 Grid Format를 생성.
 ● LGE.Biz.makeDataset             : Source Dataset의 정보로 Target Dataset 구조 생성
  */

if ( !JsNamespace.exist("LGE.Biz") ) {

	/*============================================================================================
	 * @define	 	JSLib.json	 
	 * @memberof 	LgeLibrary	 
	 * @namespace 	LGE.Biz
	 * @author 		admin
	 =============================================================================================*/
	JsNamespace.declare("LGE.Biz", {
		_service: null,
		
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param  N/A
		 * ⓡ return {string}
		 --------------------------------------------------------------------------------------------*/			
		getHostName : function() {
			if(Base.isEmpty(this._service)) {
				this._service = application.services["host"];
			}
			return this._service.url;
		},

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} Combo or Dataset
		 * ⓟ param {String} (A:ALL, S:SELECT, E:Empty)
		 * ⓟ param {String} Desc Column name
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/			 
		setFirstRowCombo : function(obj, sFisrtRowTp, sDescColName) {
			var sName = "";
			if(Base.isEmpty(sFisrtRowTp)) {
				return;
				//sFisrtRowTp = "";
			}

			if(Base.isEmpty(sDescColName)) {
				sDescColName = "CODE_NAME";
			}

			switch(sFisrtRowTp){
				case "A":
					sName = "ALL";
					break;
				case "S":
					sName = "SELECT";
					break;
				case "E":
					sName = "";
					break;
			}

			if(obj == "[object Combo]") {
			
				objDs = LGE.Util.getDataset(obj.innerdataset);
				if(objDs.insertRow(0) > -1) {
					var nColCnt = objDs.getColCount();
					var oColInfo = null;

					for(var i=0; i<nColCnt; i++) {
						objDs.setColumn(0, objDs.getColumnInfo(i).name, "");
					}

					objDs.setColumn(0, sDescColName, sName);

					obj.set_index(0);
				}
			}
			else {
				if(obj.insertRow(0) > -1) {
					var nColCnt = obj.getColCount();
					var oColInfo = null;

					for(var i=0; i<nColCnt; i++) {
						obj.setColumn(0, obj.getColumnInfo(i).name, "");
					}

					obj.setColumn(0, sDescColName, sName);
				}
			}
		},

		 
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	message code
		 * ⓟ param {string} 	치환할 메세지
		 * ⓡ return {string}	치환된 메세지
		 --------------------------------------------------------------------------------------------*/			 
		getTranslateStr : function(sCode, sArg) {
			if(Base.isEmpty(sCode)) {
				return "";
			}

			//var sContent = String(LGE.Util.getLookupData(application.gds_message, "MESSAGE_CODE", sCode, "MESSAGE_CONTENT"));
			var sContent = String(LGE.Util.getLookupData(application.gds_message, "MSG_CD", sCode, "MSG_TRAN"));


// 			if(Base.isEmpty(sContent)) {
// 				sContent = String(LGE.Util.getLookupData(application.gds_TransDefault, "translationCode", sCode, "translationContent"));
// 			}

			if(Base.isEmpty(sContent)) {
				return sCode;
			}

			sContent = nexacro.replaceAll(sContent, "\\n", String.fromCharCode(13)+String.fromCharCode(10));
			sContent = nexacro.replaceAll(sContent, "\n", String.fromCharCode(13)+String.fromCharCode(10));

			if(!Base.isEmpty(sArg)) {
				var aArg = String(sArg).split(",");
				var nFindChar = -1;
				for(var i=0; i<aArg.length; i++) {
					nFindChar = sContent.indexOf("#");
					if(nFindChar == -1) {
						break;
					}

					sContent = sContent.substr(0, nFindChar) + aArg[i] + sContent.substr(nFindChar+1);
				}
			}
			return sContent;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	source dataset
		 * ⓟ param {string} 	source dataset head column
		 * ⓟ param {string} 	source dataset bind column
		 * ⓟ param {string} 	grid format id(Default: "default")
		 * ⓟ param {boolean} 	Check Box 사용여부
		 * ⓟ param {boolean} 	Row Number 사용여부	 		 
		 * ⓡ return {string}	format
		 * ⓔ LGE.Biz.makeGridFormat(this.dsTest, "headColumn", "bindColumn", "default", true, true)
		 --------------------------------------------------------------------------------------------*/			 
		makeGridFormat : function (dsSrc, sHeadColNm, sBindColNm, sFormatId, bShowChk, bShowNo) {
			if(dsSrc == null || dsSrc.rowcount == 0) {
				return "";
			}

			if(Base.isEmpty(sHeadColNm)) {
				sHeadColNm = "displayName";
			}
			
			if(Base.isEmpty(sBindColNm)) {
				sBindColNm = "columnName";
			}

			if(Base.isEmpty(sFormatId)) {
				sFormatId = "default";
			}

			if(Base.isEmpty(bShowChk)) {
				bShowChk = true;
			}

			if(Base.isEmpty(bShowNo)) {
				bShowNo = true;
			}

			var sFormats = "";
			var sColumns = "";
			var sRows = "";
			var sBandHead = "";
			var sBandBody = "";
			var nCol = 0;

			sRows += '<Row size="25" band="head" />\n';
			sRows += '<Row size="23" />\n';

			if(bShowChk) {
				sColumns += '<Column size="40" />\n';
				sBandHead += '<Cell col="'+nCol+'" displaytype="checkbox" style="align:center&#32;middle;"/>\n';
				sBandBody += '<Cell col="'+nCol+'" displaytype="checkbox" edittype="checkbox" style="align:center&#32;middle;" text="bind:chk"/>\n';
				nCol++;
			}

			if(bShowNo) {
				sColumns += '<Column size="80" />\n';
				sBandHead += '<Cell col="'+nCol+'" text="No"/>\n';
				sBandBody += '<Cell col="'+nCol+'" expr="currow+1"/>\n';
				nCol++;
			}

			for(var iRow=0; iRow<dsSrc.rowcount; iRow++) {
				if(dsSrc.getColumn(iRow, sHeadColNm) == "chk") {
					continue;
				}
				sColumns += '<Column size="80" />\n';
				sBandHead += '<Cell col="'+nCol+'" text="'+dsSrc.getColumn(iRow, sHeadColNm)+'"/>\n';
				sBandBody += '<Cell col="'+nCol+'" text="bind:'+dsSrc.getColumn(iRow, sBindColNm)+'"/>\n';
				nCol++;
			}

			sFormats += '<Formats>\n';
			sFormats += '<Format id="'+sFormatId+'">\n';
			sFormats += '<Columns>\n';
			sFormats += sColumns;
			sFormats += '</Columns>\n';
			sFormats += '<Rows>\n';
			sFormats += sRows;
			sFormats += '</Rows>\n';
			sFormats += '<Band id="head">\n';
			sFormats += sBandHead;
			sFormats += '</Band>\n';
			sFormats += '<Band id="body">\n';
			sFormats += sBandBody;
			sFormats += '</Band>\n';
			sFormats += '</Format>\n';
			sFormats += '</Formats>\n';

			return sFormats;
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {string} 	source dataset
		 * ⓟ param {string} 	target dataset
		 * ⓟ param {string} 	bind column
		 * ⓟ param {string} 	column length
		 * ⓟ param {boolean} 	Check Box 사용여부
		 * ⓡ return N/A
		 * ⓔ LGE.Biz.makeDataset(this.dsSrc, this.dsTgt, "bindColumn", "lengthColumn", true)
		 --------------------------------------------------------------------------------------------*/			 
		makeDataset : function (dsSrc, dsTgt, sColNm, sLengthColNm, bShowChk) {
			if(dsSrc == null || dsSrc.rowcount == 0) {
				return "";
			}

			if(Base.isEmpty(sColNm)) {
				sColNm = "columnName";
			}
			
			if(Base.isEmpty(sLengthColNm)) {
				sLengthColNm = "columnLength";
			}

			if(Base.isEmpty(bShowChk)) {
				bShowChk = true;
			}

			dsTgt.clear();

			if(bShowChk) {
				dsTgt.addColumn("chk", "string", 1);
			}

			for(var i=0; i<dsSrc.rowcount; i++){
				dsTgt.addColumn(dsSrc.getColumn(i, sColNm), "string", dsSrc.getColumn(i, sLengthColNm));
			}
		},
		
	});
}