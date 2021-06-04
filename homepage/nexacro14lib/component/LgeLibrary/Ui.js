/**
 * LG Electronics Ui Library
 
 ● LGE.Ui.createButton				: Button 동적생성
 ● LGE.Ui.createGrid				: Grid 동적생성 
 ● LGE.Ui.createPopupdiv			: Popupdiv 동적생성
 ● LGE.Ui.freezeColumn				: Column 고정 
 ● LGE.Ui.unfreezeColumn			: Column 고정취소
 ● LGE.Ui.hideColumn            	: Column 숨김
 ● LGE.Ui.undoHide					: Column 숨김취소
 */

if ( !JsNamespace.exist("LGE.Ui") ) {

	/*============================================================================================
	 * @define	 	JSLib.json	 
	 * @memberof 	LgeLibrary	 
	 * @namespace 	LGE.Ui
	 * @author 		admin
	 =============================================================================================*/
	JsNamespace.declare("LGE.Ui", {
		/**
		 * this formFile object 선언 변수
		 * @private
		 * @type string
		 */
		_collapseHeight : 25,

		_termHeight : 15,
		
		_openClassName : "btn_WF_AcodiOpen",
		
		_closeClassName : "btn_WF_AcodiClose",
		/**
		 * Button을 생성해서 리턴.
		 * @param {Object} Parent Object(Form, Div, Popupdiv...)
		 * @param {String} Button ID
		 * @param {String} Button Display Text
		 * @param {String} Button Position 정보("Left,Top,Width,Height,Right,Bottom")
		 * @param {String} Button cssClass Name
		 * @return {Object} 생성된 Button
		 * @example
		 * $(LGE.Ui.createButton(this, "btnTest", "TEST", "0,0,60,20,,", "cssName"));
		 * @memberOf LGE.Ui
		 */
		createButton : function (obj, sName, sText, sPosition, sCssClass) {
			if(obj[sName] != null) {
				return obj[sName];
			}

			var objBtn = new Button();
			var aPosition = String(sPosition).split(",");
			objBtn.init(sName,
				"absolute",
				aPosition[0] == "" ? null : aPosition[0],
				aPosition[1] == "" ? null : aPosition[1],
				aPosition[2] == "" ? null : aPosition[2],
				aPosition[3] == "" ? null : aPosition[3],
				aPosition[4] == "" ? null : aPosition[4],
				aPosition[5] == "" ? null : aPosition[5]);
			objBtn.set_text(sText);
			if(!Base.isEmpty(sCssClass)) {
				objBtn.set_cssclass(sCssClass);
			}
			obj.addChild(sName, objBtn);
			objBtn.show();

			return objBtn;
		},
		/**
		 * Grid를 생성해서 리턴.
		 * @param {Object} Parent Object(Form, Div, Popupdiv...)
		 * @param {String} Button ID
		 * @param {String} Button Position 정보("Left,Top,Width,Height,Right,Bottom")
		 * @param {String} Button cssClass Name
		 * @param {String} Grid Format (Grid의 formats Property)
		 * @param {String} Bind Dataset Name
		 * @return {Object} 생성된 Grid
		 * @example
		 * $(LGE.Ui.createGrid(this, "grdTest", "0,0,600,400,,", "gridClass", "{Grid.formats}", "dsTest"));
		 * @memberOf LGE.Ui
		 */
		createGrid : function(obj, sName, sPosition, sCssClass, sGridFormats, sBindDsName) {
			var oGrid = null;
			if(obj[sName] != null) {
				oGrid = obj[sName];
			}
			else {
				oGrid = new Grid();
				var aPosition = String(sPosition).split(",");
				oGrid.init(sName,
					"absolute",
					aPosition[0] == "" ? null : aPosition[0],
					aPosition[1] == "" ? null : aPosition[1],
					aPosition[2] == "" ? null : aPosition[2],
					aPosition[3] == "" ? null : aPosition[3],
					aPosition[4] == "" ? null : aPosition[4],
					aPosition[5] == "" ? null : aPosition[5]);
				obj.addChild(oGrid.name, oGrid);
				oGrid.show();
			}

			if(!Base.isEmpty(sCssClass)) {
				oGrid.set_cssclass(sCssClass);
			}

			if(!Base.isEmpty(sGridFormats)) {
				oGrid.set_formats(sGridFormats);
			}

			if(!Base.isEmpty(sBindDsName)) {
				oGrid.set_binddataset(sBindDsName);
			}
			
			return oGrid;
		},
		createGridByDs : function(obj, sGridName, sGridPosition, objDs, sHeadColName, sBindColName) {
			var sFormats = "";
			if(Base.isEmpty(sHeadColName) && Base.isEmpty(sBindColName)) {
				sFormats = LGE.Ui.makeGridFormatByDs(objDs);
				
				return LGE.Ui.createGrid(obj, sGridName, sGridPosition, null, sFormats, objDs.name);
			}
			else {
				sFormats = LGE.Biz.makeGridFormat(objDs, sHeadColName, sBindColName, "", false, false);

				return LGE.Ui.createGrid(obj, sGridName, sGridPosition, null, sFormats);
			}
		},
		makeGridFormatByDs : function (dsSrc, sFormatId, bShowChk, bShowNo) {
			if(dsSrc == null) {
				return "";
			}

			if(Base.isEmpty(sFormatId)) {
				sFormatId = "default";
			}

			var sFormats = "", sColumns = "", sRows = "", sBandHead = "", sBandBody = "";
			var oColInfo = null;
			var iCol = 0;
			sRows += '<Row size="25" band="head" />\n';
			sRows += '<Row size="23" />\n';

			if(bShowChk) {
				sColumns += '<Column size="40" />\n';
				sBandHead += '<Cell col="'+iCol+'" displaytype="checkbox" style="align:center&#32;middle;"/>\n';
				sBandBody += '<Cell col="'+iCol+'" displaytype="checkbox" edittype="checkbox" style="align:center&#32;middle;" text="bind:chk"/>\n';
				iCol++;
			}

			if(bShowNo) {
				sColumns += '<Column size="80" />\n';
				sBandHead += '<Cell col="'+iCol+'" text="No"/>\n';
				sBandBody += '<Cell col="'+iCol+'" expr="currow+1"/>\n';
				iCol++;
			}

			for(var i=0; i<dsSrc.colcount; i++) {
				oColInfo = dsSrc.getColumnInfo(i);
				if(oColInfo.name == "chk") {
					continue;
				}
				sColumns += '<Column size="80" />\n';
				sBandHead += '<Cell col="'+iCol+'" text="'+oColInfo.name+'"/>\n';
				sBandBody += '<Cell col="'+iCol+'" text="bind:'+oColInfo.name+'"/>\n';
				iCol++;
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
		/**
		 * Popupdiv를 생성해서 리턴.
		 * @param {Object} Parent Object(Form, Div, Popupdiv...)
		 * @param {String} Popupdiv ID
		 * @param {Number} Popupdiv 넓이
		 * @param {Number} Popupdiv 높이
		 * @return {Object} 생성된 Popupdiv
		 * @example
		 * $(LGE.Ui.createPopupdiv(this, "pdvTest", 300, 200));
		 * @memberOf LGE.Ui
		 */
		createPopupdiv : function(obj, sName, nWidth, nHeight) {
			var objPopupDiv = new PopupDiv();
			objPopupDiv.init(sName, "absolute", 0, 0, nWidth, nHeight);
			objPopupDiv.style.set_border("1 solid #cececeff");
			objPopupDiv.set_style("background: #f3f3f3ff");
			obj.addChild(sName, objPopupDiv);
			objPopupDiv.show();

			return objPopupDiv;
		},
		
		/**
		 * Grid의 Column을 고정.
		 * @param {object} Grid Object
		 * @param {EventInfo} GridMouseEventInfo('col' property가 존재해야 함)
		 * @return N/A
		 * @example
		 * $(LGE.Ui.freezeColumn(this.grdTest, e));
		 * @memberOf LGE.Ui
		 */
		freezeColumn : function(oGrd, e) {
			var nCol = Number(e.col) - 1;
			if(nCol < 0) {
				return;
			}

			for (var i=nCol; i>=0; i--) {
				oGrd.setFormatColProperty(i, "band", "left");
			}

			oGrd.isFreezeColumn = true;
		},
		/**
		 * 고정된 Grid의 Column을 해제.
		 * @param {object} Grid Object
		 * @param {EventInfo} GridMouseEventInfo(optional)
		 * @return N/A
		 * @example
		 * $(LGE.Ui.unfreezeColumn(this.grdTest, e));
		 * @memberOf LGE.Ui
		 */
		unfreezeColumn : function(oGrd, e) {
			if(!Base.isEmpty(oGrd.isFreezeColumn) && !oGrd.isFreezeColumn) {
				return;
			}

			var nColCnt = oGrd.getCellCount("head") - 1;

			for (var i=nColCnt; i>=0; i--) {
				oGrd.setFormatColProperty(i, "band", "body");
			}

			oGrd.isFreezeColumn = false;
		},
		
		/**
		 * Grid의 Column을 숨긴다(Size를 0으로 변경).
		 * @param {object} Grid Object
		 * @param {EventInfo} GridMouseEventInfo('col' property가 존재해야 함)
		 * @return N/A
		 * @example
		 * $(LGE.Ui.hideColumn(this.grdTest, e));
		 * @memberOf LGE.Ui
		 */
		hideColumn : function(oGrd, e) {
			if(e.col < 0) {
				return;
			}

			if(Base.isEmpty(oGrd.hideColumn)){
				oGrd.hideColumn = [];
			}

			oGrd.hideColumn.push(e.col + "_" + oGrd.getFormatColProperty(e.col, "size"));
			oGrd.setFormatColProperty(e.col, "size", 0);
			oGrd.isHideColumn = true;
		},
		/**
		 * 숨겨진 Grid의 Column을 해제.
		 * @param {object} Form Object
		 * @param {EventInfo} GridMouseEventInfo(optional)
		 * @return N/A
		 * @example
		 * $(LGE.Ui.undoHide(this.grdTest, e));
		 * @memberOf LGE.Ui
		 */
		undoHide : function(oGrd, e) {
			if(!oGrd.isHideColumn || oGrd.hideColumn.length == 0) {
				return;
			}

			var aValus = null;
			for(var i=0; i<oGrd.hideColumn.length; i++) {
				aValus = String(oGrd.hideColumn[i]).split("_");

				oGrd.setFormatColProperty(Number(aValus[0]), "size", Number(aValus[1]));
			}

			oGrd.hideColumn = null;
			oGrd.isHideColumn = false;
		},
		copyCellText : function(oGrd, e) {
			if (nexacro.Browser != "IE" && nexacro.Browser != "Runtime") {
				//LGE.Core.showMsg(this,"alert","_clipboardCopy","해당 기능은 인터넷 익스플로러만 지원합니다.","","default","","this.gfn_callBackMsg");
				return;
			}

			sClipboard = oGrd.getCellText(e.row, e.cell);

			system.setClipboard("CF_TEXT", sClipboard);
		},
	});
}