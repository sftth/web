/**
 * @fileoverview 넥사크로  공통 Library interface
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Base.string"))
{

    /**
     * @namespace
     * @name LGE.Interface
     * @author
     * @memberof!  Base.string
     */
    JsNamespace.declare("Base.string", {

		/**
		 * 문자열 길이계산.
		 * @param {string} str 대상 문자열.
		 * @param {string=} unit 문자열의 길이를 검사하는 단위 . 
						   "utf16" - 한문자당 1의 값으로 합산함(default).
						   "utf8"  - 한 문자당 영문1, 다국어 2~5의 값으로 합산함.
						   "ascii" - 한문자당 영문 1, 한글 2의 값으로 합산함.
		 * @return {number} 문자열 길이.
		 * @example
		 * var str = "unit 문자열";
		 * var len = Base.string.getLength(str);
		 * trace(len); // output : 8
		 * len = Base.string.getLength(str, "ascii");
		 * trace(len); // output : 11
		 * len = Base.string.getLength(str, "utf8");
		 * trace(len); // output : 14
		 * @memberOf Base..string
		 */	 		 
		getLength: function(str, unit)
		{
			if ( !str ) return 0;
			
			var pThis = Base.string;
			
			if ( unit == "utf8" )
			{
				return pThis._utf8ByteCount(str);
			}
			else if ( unit == "ascii" )
			{
				return pThis._asciiByteCount(str);
			}
			else
			{
				return str.length;
			}
		},
		
		/**
		 * utf8을 기준으로 문자열 길이계산.
		 * @private
		 * @param {string} str 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Base..string
		 */	 		 
		_utf8ByteCount: function(str)
		{
			if (str === undefined) return 0;
			
			var pThis = Base.string;
			var count = 0,
				ch,
				high,
				low,
				isHighSurrogate = pThis._isHighSurrogate,
				utf8Len = pThis._utf8Len,
				toCodepoint = pThis._toCodepoint;

			for(var i=0, n = str.length; i< n; i++) 
			{
				ch = str.charCodeAt(i);
				
				if(isHighSurrogate(ch)) 
				{
					high = ch;
					low = str.charCodeAt(++i);
					count += utf8Len(toCodepoint(high, low));
				} 
				else 
				{
					count += utf8Len(ch);
				}
			}
			return count;
		}, 			
		

		/**
		 * ascii를 기준으로 문자열 길이계산.
		 * @private
		 * @param {string} str 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Base..string
		 */	 		 
		_asciiByteCount: function(str)
		{
			if (str === undefined) return 0;
			
			var i, j=0, val; 
			for(i=0, n = str.length; i< n; i++) 
			{ 
				val = str.charCodeAt(i);
				if ( val > 255 ) j++;
				j++; 
			}
			return j;
		},		
		
		
		/**
		 * 유니코드 보충언어판(Supplementary Plane)의 상위 대행코드(High Surrogate) 여부.
		 * @private
		 * @param {string} codeUnit 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Base..string
		 */	 		 
		_isHighSurrogate: function(codeUnit)
		{
			return codeUnit >= 0xD800 && codeUnit <= 0xDBFF;
		},		
		
		
		/**
		 * [내부함수]uft8 문자열 길이계산.
		 * @private
		 * @param {string} codePoint 문자셋 수치보정값.
		 * @return {number} 문자열 길이.
		 * @memberOf Base..string
		 */	 		 
		_utf8Len: function(codePoint)
		{
			if(codePoint >= 0xD800 && codePoint <= 0xDFFF)
			{
				//trace({"message":"Illegal argument: "+codePoint, "stack":true});
			}
			if(codePoint < 0)
			{
				//trace({"message":"Illegal argument: "+codePoint, "stack":true});
			}
			if(codePoint <= 0x7F) return 1;
			if(codePoint <= 0x7FF) return 2;
			if(codePoint <= 0xFFFF) return 3;
			if(codePoint <= 0x1FFFFF) return 4;
			if(codePoint <= 0x3FFFFFF) return 5;
			if(codePoint <= 0x7FFFFFFF) return 6;

			//trace({"message":"Illegal argument: "+codePoint, "stack":true});
		},		
		
		
		/**
		 * 문자셋의 수치보정값 처리
		 * @private
		 * @param {number} highCodeUnit 상위 대행코드.
		 * @param {number} lowCodeUnit 하위 대행코드.
		 * @return {number} 문자열 길이.
		 * @memberOf Base..string
		 */
		_toCodepoint: function(highCodeUnit, lowCodeUnit)
		{
			var pThis = Base.string;
			
			if(!pThis._isHighSurrogate(highCodeUnit))
			{
				//trace({"message":"Illegal argument: "+highCodeUnit, "stack":true});
			}
			if(!pThis._isLowSurrogate(lowCodeUnit))
			{
				//trace({"message":"Illegal argument: "+lowCodeUnit, "stack":true});
			}
			highCodeUnit = (0x3FF & highCodeUnit) << 10;
			var u = highCodeUnit | (0x3FF & lowCodeUnit);
			return u + 0x10000;	 	
		},		
		
		/**
		 * 유니코드 보충언어판(Supplementary Plane)의 하위 대행코드(Low Surrogate) 여부.
		 * @private
		 * @param {string} codeUnit 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Base..string
		 */	 		 
		_isLowSurrogate: function(codeUnit)
		{
			return codeUnit >= 0xDC00 && codeUnit <= 0xDFFF;
		},		
		
		
		/**
		 * escapeXML cache.
		 * @private
		 * @memberOf Base.string
		 */		
		_cacheEscapeXML: {},
		
		/**
		 * XML 의 예약문자,특수문자를 치환하여 반환.<br><br>
		 * 대상문자 : &, <, >, ', ", \t, \r, \n
		 * @param {string} str 문자열.
		 * @return {string} 치환된 문자열.
		 * @example
		 *
		 * trace(Base.string.escapeXML("1 > 0")); // output : 1 &gt; 0
		 * trace(Base.string.escapeXML("Q&A")); // output : Q&amp;A
		 *
		 * @memberOf Base.string
		 */
		escapeXML: function(str) 
		{
			var pThis = Base.string;
			
			if ( typeof str != "string") {
				str = new String(str);
			}
			
			var ret = pThis._cacheEscapeXML[str];
			if ( Base.isEmpty(ret) )
			{
				/* 개행전에 한글 존재시 확인 필요 (속도는 이게 너 빠름)
				var ch = {
					'&': '&amp;',
					'<': '&lt;',
					'>': '&gt;',
					"'": '&apos;',
					'"': '&quot;',
					'\t': '&#9;',
					'\r': '&#13;',
					'\n': '&#10;'
				};
				ret = str.replace(/[<>&"'\t\r\n]/g, function(c) {
					return ch[c];
				});
				*/
				
				ret = str.replace(/&/g, "&amp;")
						.replace(/</g, "&lt;")
						.replace(/>/g, "&gt;")
						.replace(/'/g, "&apos;")
						.replace(/\"/g, "&quot;")
						.replace(/\t/g, "&#9;")
						.replace(/\r/g, "&#13;")
						.replace(/\n/g, "&#10;");

				pThis._cacheEscapeXML[str] = ret;
			}
			
			return ret;
		},		
		
		/**
		 * 지정된 문자로 시작하는지 여부.
		 * @param {string} str 문자열.
		 * @param {string} target 대상문자열.
		 * @return {boolean} 시작하는지 여부.
		 * @example
		 * var str = "Hello World!";
		 * var result = Base.string.startsWith(str, "He");
		 * trace(result); // output : true
		 * result = Base.string.startsWith(str, "hew");
		 * trace(result); // output : false
		 * @memberOf Base.string
		 */
		startsWith: function(str, target) 
		{
			return str.lastIndexOf(target, 0) == 0;
		},		
		
		/**
		 * 주어진 문자열을 첫 문자만 대문자 변경
		 * @param {string} str
		 * @return {string} 첫 문자 대문자 처리된 문자
		 * @example
		 *
		 * trace(Base.string.capitalize("point")); // output : Point
		 *		 
		 * @memberOf Base.string
		 */
		capitalize: function(str)
		{
			if ( !str ) //trace({message:"str is null!", stack: true});
			return str.replace(/\b[a-z]/g, function(match) {
				return match.toUpperCase();
			});
		},		     
    });

}
