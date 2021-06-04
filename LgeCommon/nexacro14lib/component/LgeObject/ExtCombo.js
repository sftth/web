//	==============================================================================
//	nexacro.ExtCombo
//	==============================================================================
if (!nexacro.ExtCombo) {
	nexacro.ExtCombo = function (id, position, left, top, width, height, right, bottom, parent) {
		nexacro.Div.call(this, id, position, left, top, width, height, right, bottom, parent);

		this.required = "";

		this._btn_width = this._btn_height = 21;

		this._pdv_maxWidth = 800;
		this._pdv_height = 240;
		this._pdv_id = "pdvPopupCombo";

		this._objBindDataset = null;
		this._objInnerDataset = null;
		this._objEdit = null;
		this._objButton = null;
		this._objPopupDiv = null;
		this._objGrid = null;

		this._valueInfo = [];
		this._aBindColumns = [];
		this._aInnerColumns = [];

		this._selectCode = "";
		this._selectText = "";
		this._index = -1;
		this._valueSet = null;

		this.inputmode = "normal";
		this.grid_width = 0;

		this._objForm = this.parent;
		while(this._objForm && !this._objForm.getOwnerFrame){
			this._objForm = this._objForm.parent;
		}

		this._objFrame = this._objForm.getOwnerFrame();
		while(this._objFrame && !this._objFrame._window){
			//this._objFrame = this._objFrame.getOwnerFrame();
			if(this._objFrame.getOwnerFrame() == null) break;
			else this._objFrame = this._objFrame.getOwnerFrame();
		}
	};

	var _pCombo = nexacro._createPrototype(nexacro.Div);
	nexacro.ExtCombo.prototype = _pCombo;
	_pCombo._type = "ExtCombo";
	_pCombo._type_name = "ExtCombo";

	_pCombo.on_created_contents = function () {
		this.addEventHandler("onsize", this._onSizeExtCombo, this);
		this.addEventHandler("onsetfocus", this._onSetFocusExtCombo, this);
		this.addEventHandler("onkillfocus", this._onKillFocusExtCombo, this);

		this._show();
	};

	_pCombo._onSizeExtCombo = function(obj, e) {
		var nThisWidth = this.getOffsetWidth();
		this._objButton.move(nThisWidth-this._btn_width-1, Math.round((this.getOffsetHeight()-this._btn_height)/2), this._btn_width, this._btn_height);
		this._objEdit.move(0, 0, nThisWidth-this._btn_width, this.getOffsetHeight(), null, null);
		this.resetScroll();
	};

	_pCombo._onSetFocusExtCombo = function(obj, e) {
		if(this._objEdit != null) {
			//this.set_enableevent(false);
			this.removeEventHandler("onsetfocus", this._onSetFocusExtCombo, this);
			this._objEdit.setFocus();
			this.addEventHandler("onsetfocus", this._onSetFocusExtCombo, this);
			//this.set_enableevent(true);

		}
	};

	_pCombo._onKillFocusExtCombo = function(obj, e) {
		if(this._objEdit != null && Base.isEmpty(this._objEdit.value)) {
			this._setIndex(-1, true);
		}
		else {
			if(!Base.isEmpty(this._selectCode)) {
				this._objEdit.set_value("[" + this._selectCode + "] " + this._selectText);
			}
		}
	};

	_pCombo.set_bindColumn = function (v) {
		if(v != this.bindColumn) {
			this.bindColumn = v;
		}
	};

	_pCombo.set_bindColumnSet = function (v) {
		if(v != this.bindColumnSet) {
			this.bindColumnSet = v;

			var aVal = String(this.bindColumnSet).split(",");
			var aColInfo = null;

			this._aBindColumns = [];
			this._aInnerColumns = [];

			for(var i=0; i<aVal.length; i++){
				aColInfo = String(aVal[i]).split("=");
				this._aBindColumns[i] = aColInfo[0];
				this._aInnerColumns[i] = aColInfo[1];
			}
		}
	};

	_pCombo.set_bindDataset = function (v) {
		if(v != this.bindDataset) {
			this.bindDataset = v;
			if(this._objBindDataset != null) {
				this._objBindDataset.removeEventHandler("onrowposchanged", this._onRowPosChangedBindDs, this);
			}
			this._objBindDataset = null;

			if(!Base.isEmpty(this.bindDataset)) {
				this._createBindDataset();
			}
		}
	};

	_pCombo.set_codeColumn = function (v) {
		if(v != this.codeColumn) {
			this.codeColumn = v;
		}
	};

	_pCombo.set_gridFormats = function (v) {
		if(v != this.gridFormats) {
			this.gridFormats = v;

			if(this._objGrid != null) {
				this._objGrid.set_formatid(this.gridFormats);
			}
		}
	};

	_pCombo.set_inputmode = function (v) {
		if (v != this.inputmode) {
			this.inputmode = v;

			if(this._objEdit != null) {
				this._objEdit.set_inputmode(this.inputmode);
			}
		}
	};

	_pCombo.set_value = function (v) {
		if (v != this._selectCode) {
			this._selectCode = v;
			this.setValue(v);
		}
	};

	_pCombo.set_innerDataset = function (v) {
		if (v != this.innerDataset) {
			this.innerDataset = v;
			this._objInnerDataset = null;

			if(Base.isEmpty(this.innerDataset)) {
				if(this._objGrid != null) {
					this._objGrid.set_binddataset("");
				}
			}
			else{
				this._createInnerDataset();

				if(this._objGrid != null) {
					this._objGrid.set_binddataset(this.innerDataset);
				}
			}
		}
	};

	_pCombo.set_required = function (v) {
		this.required = v;

		if(this._objEdit != null) {
			switch(this.required) {
			case "true":
				this._objEdit.set_displaynulltext(LGE.Biz.getTranslateStr("GMselect"));
				this._objEdit.set_cssclass("essential");
				break;
			case "false":
				this._objEdit.set_displaynulltext(LGE.Biz.getTranslateStr("GMall"));
				this._objEdit.set_cssclass("");
				break;
			default:
				this._objEdit.set_displaynulltext("");
				this._objEdit.set_cssclass("");
				break;
			}
		}

		if(this._objButton != null) {
			switch(this.required) {
			case "true":
				this._objButton.set_cssclass("btn_WF_ComboBtnE");
				break;
			case "false":
			default:
				this._objButton.set_cssclass("btn_WF_ComboBtn");
			}
		}
	};

	_pCombo.set_textColumn = function (v) {
		if (v != this.textColumn) {
			this.textColumn = v;
		}
	};

	_pCombo._show = function() {
		this._objButton = new Button();
		this._objButton.init("btnSelect", "absolute", this.getOffsetWidth()-this._btn_width, Math.round((this.getOffsetHeight()-this._btn_height)/2), this._btn_width, this._btn_height);
		this._objButton.addEventHandler("onclick", this._onclick_cmbSelect, this);
		this._objButton.set_tabstop(false);
		switch(this.required) {
		case "true":
			this._objButton.set_cssclass("btn_WF_ComboBtnE");
			break;
		case "false":
		default:
			this._objButton.set_cssclass("btn_WF_ComboBtn");
		}
		this.addChild(this._objButton.name, this._objButton);
		this._objButton.show();

		this._objEdit = new Edit();
		this._objEdit.init("edtDisplay", "absolute", 0, 0, this.getOffsetWidth()-this._btn_width+1, this.getOffsetHeight(), null, null);
		this._objEdit.set_inputmode(this.inputmode);
		this._objEdit.addEventHandler("onkeydown", this._onKeyDownEdit, this);
		this._objEdit.set_value("[" + this._selectCode + "] " + this._selectText);
		switch(this.required) {
		case "true":
			this._objEdit.set_displaynulltext(LGE.Biz.getTranslateStr("GMselect"));
			this._objEdit.set_cssclass("essential");
			break;
		case "false":
			this._objEdit.set_displaynulltext(LGE.Biz.getTranslateStr("GMall"));
			this._objEdit.set_cssclass("");
			break;
		default:
			this._objEdit.set_displaynulltext("");
			this._objEdit.set_cssclass("");
			break;
		}
		this.addChild(this._objEdit.name, this._objEdit);
		this._objEdit.show();

		this._createPopupDiv();
	};

	_pCombo._onKeyDownEdit = function(obj, e) {
		if(e.keycode == 13){
			this._createInnerDataset();

			this._objInnerDataset.filter("");

			if(Base.isEmpty(obj.value)) {
				this._setIndex(-1, true);
			}
			else {
				if(this._objInnerDataset != null && this._objInnerDataset.rowcount > 0) {
					this._objInnerDataset.filter("String(" + this.textColumn + ").indexOf('" + obj.value + "')  > -1 || String(" + this.codeColumn + ").indexOf('" + obj.value + "') > -1");
				}
			}

			this._openPopupDiv();
		}
	};

	_pCombo._onclick_cmbSelect = function(obj, e) {
		if(this._objInnerDataset != null) {
			this._objInnerDataset.filter("");
		}

		this._openPopupDiv();
	};

	/**
	 *	PopupDiv	창을 호출함
	 */
	_pCombo._openPopupDiv =	function() {
		if(this._objPopupDiv == null) {
			this._createPopupDiv();
		}

		this._createInnerDataset();

		if(!this._objPopupDiv.isPopup()) {
			//this._objInnerDataset.set_rowposition(-1);
			if(this._objGrid.vscrollbar) {
				this._objGrid.vscrollbar.set_pos(0);
			}

			if(this._objInnerDataset != null) {
				if(this._objInnerDataset.rowcount == 0) {
					this._objPopupDiv.set_height(this._pdv_height + 2);
					this._objGrid.set_height(this._pdv_height);
					this._objPopupDiv.set_width(this.grid_width + 2);
					this._objGrid.set_width(this.grid_width);
				}
				else if(this._objInnerDataset.rowcount > 9) {
					if(this.grid_width < (this._pdv_maxWidth - 10)
						&& this.grid_width < (Number(this._objGrid.width) + 10)) {
							this._objPopupDiv.set_width(this.grid_width + 12);
							this._objGrid.set_width(this.grid_width + 10);
					}
					this._objPopupDiv.set_height(this._pdv_height + 2);
					this._objGrid.set_height(this._pdv_height);
				}
				else {
					var nHeight = this._objGrid.getRealRowFullSize("head") + this._objGrid.getRealRowFullSize("body") + 3;
					if(this._pdv_height > 240) {
						nHeight = nHeight + 10;
					}
					this._objPopupDiv.set_height(nHeight + 2);
					this._objGrid.set_height(nHeight);
					this._objPopupDiv.set_width(this.grid_width + 2);
					this._objGrid.set_width(this.grid_width);
				}
			}
			this._objPopupDiv.resetScroll();

			var nX = 0;
			var nY = this.getOffsetHeight() + 1;

			var nMaxY = system.clientToScreenY(this._objFrame, this._objFrame.height);
			var nCheckY = system.clientToScreenY(this, Number(this.getOffsetHeight() + this._objPopupDiv.height));
			if(nMaxY < nCheckY)	{
				nY = 0 - (this._objPopupDiv.height + 1);
			}

			var nMaxX = system.clientToScreenX(this._objFrame, this._objFrame.width);
			var nCheckX = system.clientToScreenX(this, Number(this._objPopupDiv.width));
			if(nMaxX < nCheckX) {
				nX = 0 - (this._objPopupDiv.width - this.getOffsetWidth());
			}
			this._objPopupDiv.trackPopupByComponent(this, nX, nY, this._objPopupDiv.width, this._objPopupDiv.height);
		}
	};

	/**
	 *	@desc	: popupdiv 를 생성 기존에 존재하면 있는것	그대로 불러오기
	 */
	_pCombo._createPopupDiv	= function() {
		if(this._objPopupDiv	==	null)	{
			this._objPopupDiv	= new	PopupDiv();
			this._objPopupDiv.init(this._pdv_id, "absolute", 0, 0, 100,	this._pdv_height+2);
			this.addChild(this._pdv_id, this._objPopupDiv);
			this._objPopupDiv.style.set_border("1 solid #cececeff");
			this._objPopupDiv.set_style("background: #f3f3f3ff");
			this._objPopupDiv.show();
		}

		this._createGrid();
	};

	_pCombo._createBindDataset = function() {
		if(!Base.isEmpty(this.bindDataset) && Base.isEmpty(this._objBindDataset)) {
			this._objBindDataset = this._findDataset(this.bindDataset);
			this._objBindDataset.addEventHandler("onrowposchanged", this._onRowPosChangedBindDs, this);
		}
	};

	_pCombo._onRowPosChangedBindDs = function(obj, e) {
		var nFindRow = this._objInnerDataset.findRow(this.codeColumn, obj.getColumn(e.newrow, this.bindColumn));
		this._setIndex(nFindRow, false);
	};

	_pCombo._createInnerDataset = function() {
		if(!Base.isEmpty(this.innerDataset) && Base.isEmpty(this._objInnerDataset)) {
			this._objInnerDataset = this._findDataset(this.innerDataset);

			this._valueInfo = [];

			if(this._objInnerDataset != null) {
				var nColCnt = this._objInnerDataset.getColCount();
				var objColInfo = null;

				for(var i=0; i<nColCnt; i++) {
					this._valueInfo[i] = this._objInnerDataset.getColumnInfo(i).name;
				}
			}
		}
	};

	_pCombo._createGrid = function() {
		if(this._objGrid == null){
			this._objGrid = new Grid();
			this._objGrid.init("grdExtCombo", "absolute", 0, 0, 100, this._pdv_height);

			if(!Base.isEmpty(this.gridFormats)) {
			
				this.gridFormats = this.gridFormats.replace("CODE",this.codeColumn);  
				this.gridFormats = this.gridFormats.replace("VALUE",this.textColumn);  
				this._objGrid.set_formats(this.gridFormats);

				this.grid_width = this._objGrid.getRealColFullSize("body") + 2;

				if(this.grid_width > this._pdv_maxWidth) {
					this.grid_width = this._pdv_maxWidth;
					this._pdv_height = Number(this._pdv_height) + 10;
				}

				this._objPopupDiv.set_width(this.grid_width + 2);
				this._objGrid.set_width(this.grid_width);
			}

			this._objGrid.addEventHandler("oncellclick", this._selectValue);
			this._objPopupDiv.addChild(this._objGrid.name, this._objGrid);
			this._objGrid._useSort = "N";
			this._objGrid._useAllCheck = "N";
			this._objGrid._useCopy = "N";
			this._objGrid._useContextMenu = "N";
			this._objGrid._useMovePos = "N";
			this._objGrid.set_scrollbars("autovert");
			//this._objGrid.set_locale(application.gds_UserInfo.getColumn(0, "localecode"));
			this._objGrid.show();

			if(!Base.isEmpty(this.innerDataset))	{
				this._objGrid.set_binddataset(this.innerDataset);
			}

			this._createInnerDataset();
		}
	};

	/**
	 *	@desc	: 값을 [선택]한 다음	popup	div 를 close
	 */
	_pCombo._selectValue = function(obj, e) {
		var that = this.parent.parent;	//	ExtCombo	Div

		that._objPopupDiv.closePopup();

		that.setIndex(e.row);
	};

	_pCombo._setIndex = function(idx, bSetBind) {
		this.removeEventHandler("onkillfocus", this._onKillFocusExtCombo, this);

		this._createInnerDataset();

		if(!Base.isEmpty(this.bindColumnSet)) {
			this._valueSet = {};

			for(var iCol=0; iCol<this._valueInfo.length; iCol++) {
				this._valueSet[this._valueInfo[iCol]] = LGE.Util.isNvl(this._objInnerDataset.getColumn(idx, this._valueInfo[iCol]), "");
			}

			this._selectCode = this._valueSet[this.codeColumn];
			this._selectText = this._valueSet[this.textColumn];
			this._index = idx;

			if(bSetBind && !Base.isEmpty(this._objBindDataset) && this._objBindDataset.rowcount > 0) {
				for(var i=0; i<this._aBindColumns.length; i++) {
					this._objBindDataset.setColumn(this._objBindDataset.rowposition, this._aBindColumns[i], this._valueSet[this._aInnerColumns[i]]);
				}
			}
		}
		else {
			this._selectCode = LGE.Util.isNvl(this._objInnerDataset.getColumn(idx, this.codeColumn), "");
			this._selectText = LGE.Util.isNvl(this._objInnerDataset.getColumn(idx, this.textColumn), "");
			this._index = idx;

			this._createBindDataset();

			if(bSetBind && !Base.isEmpty(this.bindColumn)
				&& !Base.isEmpty(this._objBindDataset)
				&& this._objBindDataset.rowcount > 0) {
				this._objBindDataset.setColumn(this._objBindDataset.rowposition, this.bindColumn, this._selectCode);
			}
		}

		if(this._objEdit !== null) {
			this._objEdit.set_value("[" + this._selectCode + "] " + this._selectText);
		}

		if(idx > -1 && idx < this._objInnerDataset.rowcount) {
			this._objInnerDataset.set_rowposition(idx);
		}
		else {
			this._objInnerDataset.set_rowposition(-1);
		}

		this.addEventHandler("onkillfocus", this._onKillFocusExtCombo, this);
	};

	_pCombo.getIndex = function() {
		return this._index;
	};
	/**
	 *	[선택]한	코드을 리턴한다.
	 */

	_pCombo.getValue = function()	{
		return this._selectCode;
	};

	/**
	 *	[선택]한	코드을 리턴한다.
	 */
	_pCombo.getValueSet = function(sColName) {
		if(Base.isEmpty(sColName)) {
			return this._valueSet;
		}
		else {
			if(Base.isEmpty(this._valueSet)) {
				return null;
			}

			return this._valueSet[sColName];
		}
	};

	/**
	 *	[선택]한	이름을 리턴한다.
	 */
	_pCombo.getText =	function() {
		return this._objEdit.value;
	};

	/**
	 *	Index를 설정한다.
	 */
	_pCombo.setIndex = function(i) {
		this._setIndex(i, true);
	};

	/**
	 *	Value를 설정한다.
	 */
	_pCombo.setValue = function(v) {
		this._createInnerDataset();

		if(this._objInnerDataset == null) {
			return;
		}

		if(Base.isEmpty(this.codeColumn)) {
			return;
		}

		var nFindRow =	this._objInnerDataset.findRow(this.codeColumn, v);

		this.setIndex(nFindRow);
	};

	_pCombo.openPopup = function() {
		this._openPopupDiv();
	};

	_pCombo.closePopup = function() {
		if(this._objPopupDiv != null && this._objPopupDiv.isPopup()) {
			this._objPopupDiv.closePopup();
		}
	};

	delete _pCombo;
}
