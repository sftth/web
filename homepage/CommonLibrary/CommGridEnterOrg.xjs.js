//XJS=CommGridEnterOrg.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        var _pTextArea = nexacro.TextArea.prototype;
        var _pGrid = nexacro.Grid.prototype;

        _pTextArea.on_fire_user_onkeydown = function (keycode,alt_key,ctrl_key,shift_key,fire_comp,refer_comp)
        {
        	if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 8)
        	{
        		if (nexacro._enableaccessibility)
        		{
        			if (keycode == nexacro.Event.KEY_DOWN || keycode == nexacro.Event.KEY_UP)
        			{
        				var direction;
        				if (keycode == nexacro.Event.KEY_DOWN)
        					direction = 1;
        				else if (keycode == nexacro.Event.KEY_UP)
        					direction = 2;

        				var line_text = this._getCaretLineString(null, direction);
        				if (!line_text) line_text = "#text:msg_accessibility_emptyline";
        				this._notifyAccessibility(line_text, "valuechange");
        			}
        		}
        	}
        	return nexacro.Component.prototype.on_fire_user_onkeydown.call(this, keycode, alt_key, ctrl_key, shift_key, fire_comp, refer_comp);
        };
            
        _pGrid.on_fire_user_onkeydown = function (keyCode,altKey,ctrlKey,shiftKey,obj,refer_comp)
        {

        	//obj.moveToNextCell();
        		
        	var accGridHotkey = nexacro.AccessibilityUtil.checkComponentHotkey(this, keyCode, altKey, ctrlKey, shiftKey);

        	if (accGridHotkey)
        	{
        		this._hideEditor();
        		var row = this.currentrow;
        		switch (accGridHotkey)
        		{
        			case nexacro.AccessibilityUtil.Hotkey.FIRSTCELL:
        				this.currentcell = 0;
        				this._currentBand = "grid";
        				if (this.vscrollbar && this.vscrollbar.visible)
        				{
        					this.vscrollbar.set_pos(0);
        				}
        				this._setAccessibilityBandFocus("next", false, true);
        				break;
        			case nexacro.AccessibilityUtil.Hotkey.LASTCELL:
        				this.currentcell = this._getAccessibilityCellIndex() - 1;
        				this._currentBand = "grid";
        				if (this.vscrollbar && this.vscrollbar.visible)
        				{
        					this.vscrollbar.set_pos(this.vscrollbar._max);
        				}
        				this._setAccessibilityBandFocus("prev", false, true);
        				break;
        			case nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINROW:
        				this.currentcol = 0;
        				this._moveToPosAccessibilityCell(row, 0);
        				break;
        			case nexacro.AccessibilityUtil.Hotkey.LASTCELLINROW:
        				this.currentcol = this._curFormat._cols.length - 1;
        				this._moveToPosAccessibilityCell(row, this.currentcol);
        				break;
        			case nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN:
        				this._currentBand = "grid";
        				if (this.vscrollbar && this.vscrollbar.visible)
        				{
        					this.vscrollbar.set_pos(0);
        				}
        				this._setAccessibilityBandFocus("next", false, true);
        				break;
        			case nexacro.AccessibilityUtil.Hotkey.LASTCELLINCOLUMN:
        				this._currentBand = "grid";
        				if (this.vscrollbar && this.vscrollbar.visible)
        				{
        					this.vscrollbar.set_pos(this.vscrollbar._max);
        				}
        				this._setAccessibilityBandFocus("prev", false, true);
        				break;
        				/* accGridHotkey switch end */
        		}
        		return true;
        	}

        	if (!this.enable) return true;

        	var ret = nexacro.Component.prototype.on_fire_user_onkeydown.call(this, keyCode, altKey, ctrlKey, shiftKey, obj, refer_comp);

        	if ((this.onkeydown && this.onkeydown.defaultprevented == true) || !this._is_alive)
        		return ret;

        	this._keydown_elem = this._getWindow()._keydown_element;

        	var areamove = false;

        	if (this._isAreaSelect())
        		areamove = true;

        	if (shiftKey == true)
        	{
        		if (keyCode == nexacro.Event.KEY_SHIFT)
        			return ret;

        		if (this._isMultiSelect() || this._isAreaSelect())
        			this._multiselect = "shift";
        		else
        			this._multiselect = "none";
        	}
        	else if (ctrlKey == true)
        	{
        		if (keyCode == nexacro.Event.KEY_CTRL)
        			return ret;

        		if (this._multiselect != "none")
        			this._selectClear = true;

        		this._multiselect = "none";
        	}
        	else
        	{
        		if (this._multiselect != "none")
        			this._selectClear = true;

        		this._multiselect = "none";
        	}
        	
        	var bEnterDown = false;
        	if (this._isChar(keyCode) && this.autoenter == "key")
        	{
        		if (nexacro.Browser == "Runtime")
        		{
        			if (!this._showEditing)
        			{
        				this._showEditor();

        				if (this._currentCellEditor && this._currentCellEditor._set_absolutelyValue)
        					this._currentCellEditor._set_absolutelyValue("");

        				if (keyCode == nexacro.Event.KEY_ENTER)
        					bEnterDown = true;
        			}
        		}
        	}

        	if (keyCode == nexacro.Event.KEY_ENTER && this._showEditing)
        	{
        		var edit = this._currentCellEditor;
        		var edittype = edit._cellinfo._getEdittype(edit._cellobj._rowidx);
        		if (edittype == "text" || edittype == "mask" || edittype == "date" || edittype == "combo" || edittype == "masknumber")
        		{
        			if (edit.calendaredit)                                    
        				edit.calendaredit._edit_base_api.syncValue();                
        			else if (edit.comboedit)
        				edit.comboedit._edit_base_api.syncValue();                                   
        			else
        				edit._edit_base_api.syncValue();
        			bEnterDown = true;
        			edit._setDataset();
        		}
        	}

        	var firecomp = refer_comp;
        	var postvalue = "";

        	if (keyCode == nexacro.Event.KEY_UP)
        	{
        		if (this._isEditorKeyAction(this._keydown_elem, refer_comp, keyCode, altKey, ctrlKey, shiftKey) == false)
        		{
        			if (ctrlKey)
        			{
        				if (this.vscrollbar && this.vscrollbar.enable)
        				{
        					var newpos;

        					if (this._scrollpixel == "all")
        						newpos = this.vscrollbar.pos - 25;
        					else
        						newpos = this.vscrollbar.pos - 1;

        					if (newpos < 0)
        						newpos = 0;

        					this.vscrollbar.set_pos(newpos);
        				}
        			}
        			else
        			{
        				if (nexacro._enableaccessibility)
        					ret = this._moveToAccessibilityCell("up", false);
        				else
        					this._moveToCell("up");
        			}
        		}
        	}
        	else if (keyCode == nexacro.Event.KEY_DOWN)
        	{
        		if (this._isEditorKeyAction(this._keydown_elem, refer_comp, keyCode, altKey, ctrlKey, shiftKey) == false)
        		{
        			if (ctrlKey)
        			{
        				var newpos;

        				if (this._scrollpixel == "all")
        					newpos = this.vscrollbar.pos + 25;
        				else
        					newpos = this.vscrollbar.pos + 1;

        				if (newpos > this.vscrollbar.max)
        					newpos = this.vscrollbar.max;

        				this.vscrollbar.set_pos(newpos);
        			}
        			else
        			{
        				if (nexacro._enableaccessibility)
        					ret = this._moveToAccessibilityCell("down", false);
        				else
        					this._moveToCell("down");
        			}
        		}
        	}
        	else if (keyCode == nexacro.Event.KEY_SPACE)
        	{
        		if (!nexacro._enableaccessibility || nexacro._enableaccessibility && this._currentBand == "body")
        		{
        			var format = this._curFormat;
        			if (format)
        			{
        				var bodycells = format._bodycells;
        				if (bodycells && bodycells.length)
        				{
        					var cellinfo = bodycells[this._selectinfo.curcell];
        					if (cellinfo)
        					{
        						var editType = cellinfo._getEdittype(this._selectinfo.curdsrow);
        						if (editType == "checkbox" && nexacro._toBoolean(this.readonly) == false)
        						{
        							if (this._toggleVal(this._selectinfo.curdsrow, cellinfo))
        							{
        								this._jumpCurrentRow(this._selectinfo.currow);
        							}
        						}
        					}
        				}
        			}
        		}
        	}
        	else if (keyCode == nexacro.Event.KEY_ENTER)
        	{
        		if (!nexacro._enableaccessibility || nexacro._enableaccessibility && this._currentBand == "body")
        		{
        			if (this.autoenter != "select")
        			{
        				var editType = "";

        				if (refer_comp._type_name == "GridCell")
        				{
        					editType = refer_comp._refobj._getEdittype(refer_comp._rowidx);
        					postvalue = refer_comp._refobj._getValue(refer_comp._rowidx);
        				}
        				else if (refer_comp instanceof nexacro.GridControlCheckbox)
        				{
        					postvalue = refer_comp._cellinfo._getValue(refer_comp._cellobj._rowidx);
        				}
        				else if (refer_comp.parent instanceof nexacro.GridControlCheckbox)
        				{
        					postvalue = refer_comp.parent._cellinfo._getValue(refer_comp.parent._cellobj._rowidx);
        				}

        				if (refer_comp instanceof nexacro.GridControlEdit ||
        					refer_comp instanceof nexacro.GridControlTextArea ||
        					refer_comp instanceof nexacro.GridControlMaskEdit ||
        					refer_comp instanceof nexacro.GridControlCheckbox || refer_comp.parent instanceof nexacro.GridControlCheckbox || editType == "checkbox" ||
        					refer_comp instanceof nexacro.GridControlCalendar || refer_comp.parent instanceof nexacro.GridControlCalendar ||
        					refer_comp instanceof nexacro.GridControlCombo || refer_comp.parent instanceof nexacro.GridControlCombo)
        				{

        					if (nexacro.Browser == "IE")
        					{
        						if (refer_comp instanceof nexacro.GridControlCombo)
        							firecomp = refer_comp.comboedit;
        					}
        					// ================================================================= 수정 여기다 넣으면 다음 cell 로 이동 / 다음cell 이 edit 활성화 됨.
        					if(refer_comp instanceof nexacro.GridControlEdit || 
        					   refer_comp instanceof nexacro.GridControlMaskEdit ||
        					   refer_comp instanceof nexacro.GridControlCalendar || refer_comp.parent instanceof nexacro.GridControlCalendar ||
        					   refer_comp instanceof nexacro.GridControlCombo || refer_comp.parent instanceof nexacro.GridControlCombo
        					   )
        					{

        						this._moveToCell("next", false, areamove, undefined, undefined, true);
        					}
        					// ================================================================= 수정
        					
        					if (this._showEditing || editType == "checkbox" )
        						bEnterDown = true;
        					else
        						this._showEditor();
        					// ================================================================= 위에꺼 주석 처리 하고 이걸 풀경우 cell 만이동함. 
        // 					if(refer_comp instanceof nexacro.GridControlEdit || 
        // 					   refer_comp instanceof nexacro.GridControlMaskEdit ||
        // 					   refer_comp instanceof nexacro.GridControlCalendar || refer_comp.parent instanceof nexacro.GridControlCalendar ||
        // 					   refer_comp instanceof nexacro.GridControlCombo || refer_comp.parent instanceof nexacro.GridControlCombo
        // 					   )
        // 					{
        // 						this._moveToCell("next", false, areamove, undefined, undefined, true);
        // 					}
        					// ================================================================= 수정
        					
        						
        				}
        				else
        				{
        					if (!this._showEditing)
        						this._showEditor();
        				}
        			}
        		}
        	}
        	else if (keyCode == nexacro.Event.KEY_LEFT)
        	{
        		var format = this._curFormat;
        		if (format)
        		{
        			var bodycells = format._bodycells;
        			if (bodycells && bodycells.length)
        			{
        				var cellinfo = this._getBodyCellInfo(this._selectinfo.curcell);
        				if (cellinfo)
        				{
        					var editType = cellinfo._getEdittype(this._selectinfo.curdsrow);
        					if (editType == "tree" && this.treeuseexpandkey)
        					{
        						this._is_editor_keyaction = false;
        						this._setTreeState(this._selectinfo.currow, 0, true);
        					}
        					else if (editType == "combo" &&
        						cellinfo._getAttrValue(cellinfo.combotype, this._getDataRow(this._selectinfo.curdsrow)) == "dropdown")
        					{
        						this._is_editor_keyaction = false;
        						if (nexacro._enableaccessibility)
        							ret = this._moveToAccessibilityCell("prev", false, undefined, areamove);
        						else
        							this._moveToCell("prev", false, areamove, undefined, undefined, true);
        					}
        				}
        			}

        			if (this._isEditorKeyAction(this._keydown_elem, refer_comp, keyCode, altKey, ctrlKey, shiftKey) == false)
        			{
        				if (nexacro._enableaccessibility)
        					ret = this._moveToAccessibilityCell("prev", false, undefined, areamove);
        				else
        					this._moveToCell("prev", false, areamove, undefined, undefined, true);
        			}
        		}
        	}
        	else if (keyCode == nexacro.Event.KEY_RIGHT)
        	{
        		var format = this._curFormat;
        		if (format)
        		{
        			var bodycells = format._bodycells;
        			if (bodycells && bodycells.length)
        			{
        				var cellinfo = this._getBodyCellInfo(this._selectinfo.curcell);
        				if (cellinfo)
        				{
        					var editType = cellinfo._getEdittype(this._selectinfo.curdsrow);
        					if (editType == "tree" && this.treeuseexpandkey)
        					{
        						this._is_editor_keyaction = false;
        						this._setTreeState(this._selectinfo.currow, 1, true);
        					}
        					else if (editType == "combo" &&
        						cellinfo._getAttrValue(cellinfo.combotype, this._getDataRow(this._selectinfo.curdsrow)) == "dropdown")
        					{                            
        							this._is_editor_keyaction = false;
        							if (nexacro._enableaccessibility)
        								ret = this._moveToAccessibilityCell("next", false, undefined, areamove);
        							else
        								this._moveToCell("next", false, areamove, undefined, undefined, true);                         
        					}
        					else
        					{
        						var expandshow = cellinfo._getAttrValue(cellinfo.expandshow, this._selectinfo.curdsrow);
        						if (expandshow == "show" && altKey)
        						{
        							this._is_editor_keyaction = false;
        							this.on_fire_onexpanddown("none", altKey, ctrlKey, shiftKey, -1, -1, -1, -1, -1, -1, obj, refer_comp);
        						}
        					}
        				}
        			}

        			if (this._isEditorKeyAction(this._keydown_elem, refer_comp, keyCode, altKey, ctrlKey, shiftKey) == false)
        			{
        				if (nexacro._enableaccessibility)
        					ret = this._moveToAccessibilityCell("next", false, undefined, areamove);
        				else
        					this._moveToCell("next", false, areamove, undefined, undefined, true);
        			}
        		}
        	}
        	else if (keyCode == nexacro.Event.KEY_PAGE_UP)
        	{
        		if (this.vscrollbar && this.vscrollbar.enable)
        		{
        			var newpos = this.vscrollbar._pos - this.vscrollbar.page;

        			if (this._scrollpixel != "all")
        				newpos = this.vscrollbar._scroll_reverse_convert(newpos)[0];

        			if (newpos < 0)
        				newpos = 0;

        			this.vscrollbar.set_pos(newpos);
        		}
        	}
        	else if (keyCode == nexacro.Event.KEY_PAGE_DOWN)
        	{
        		if (this.vscrollbar && this.vscrollbar.enable)
        		{
        			var newpos = this.vscrollbar._pos + this.vscrollbar.page;

        			if (this._scrollpixel != "all")
        				newpos = this.vscrollbar._scroll_reverse_convert(newpos)[0];

        			if (newpos > this.vscrollbar.max)
        				newpos = this.vscrollbar.max;

        			this.vscrollbar.set_pos(newpos);
        		}
        	}
        	else if (keyCode == nexacro.Event.KEY_TAB)
        	{
        		this._keydown_elem._event_stop = true;

        		if (nexacro._enableaccessibility)
        		{
        			if (shiftKey)
        				this._acceptstab = this._moveToAccessibilityCell("prev", true);
        			else
        				this._acceptstab = this._moveToAccessibilityCell("next", true);
        		}
        		else
        		{
        			if (shiftKey == true)
        				this._acceptstab = this._moveToCell("prev", true, false, undefined, undefined, true);
        			else
        				this._acceptstab = this._moveToCell("next", true, false, undefined, undefined, true);
        		}

        		if (this._acceptstab && this._iskey_movetocell)
        		{
        			this._moveCellAfterFocus();
        			this._iskey_movetocell = false;
        		}
        		return this._acceptstab;
        	}
        	else
        	{
        		if (this._isChar(keyCode) && this.autoenter == "key")
        		{
        			if (nexacro.Browser == "Runtime")
        			{
        				if (!this._showEditing)
        				{
        					this._showEditor();

        					if (nexacro.Browser == "Gecko")
        					{
        						if (bEnterDown)
        							this.on_fire_onenterdown(keyCode, altKey, ctrlKey, shiftKey, obj, firecomp, postvalue);

        						return true;
        					}
        					else if (nexacro.Browser == "IE")
        					{
        						// this._currentCellEditor._on_sys_keypress(this._currentCellEditor._outer_elem, e);
        					}
        				}
        			}
        		}
        	}

        	if (bEnterDown)
        		this.on_fire_onenterdown(keyCode, altKey, ctrlKey, shiftKey, obj, firecomp, postvalue);

        	return ret;
        };
        
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
