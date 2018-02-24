		var box = document.getElementById('display');
		var box2 = document.getElementById('display2');
		var history = document.getElementById('textHistory');

		var aux ;

	//FUNCTION FOR DISPLAYING A CARACTER/NUMBER
		var displayKey = function(x){
			box.value += x;

			if(x == 'C'){
				box.value = '';
				box2.value = '';
			}
		}
	//FUNCTION FOR SAVING SOME VALUES ON DISPLAY2
		var saveValue = function(x){
			box2.value += box.value + x;
			box.value = '';
		}
	//FUNCTION FOR - BUTTON
		var btnsub = function (){
			if(box.value == '0' || box.value == '')
			box.value = '-';
			else
			saveValue('-');
		}
	//FUNCTION FOR + BUTTON
		var btnadd = function(){
			saveValue('+');
		}
	//FUNCTION FOR / BUTTON	
		var btndiv = function(x){
			saveValue(x);
		}
	//FUNCTION FOR %(Mod) BUTTON
		var btnrst = function(x){
			saveValue(x);
		}
	//FUNCTION FOR * BUTTON
		var btnmul = function(X){
			saveValue(x);
		}
	//FUNCTION FOR = BUTTON
		var btnequal = function(){
			//find the operation we want to do
			var str1 = box2.value;
			var len = str1.length-1;
			var x = str1.substring(len,len+1);

			//verify and do the correct calculation
			if(x == '^'){
				btnequal2();
			}
			else{
			var expresion = box2.value + box.value;
			box.value =eval(expresion);
			document.history.textHistory.value += expresion + ' = ' + box.value + '\n';
			box2.value = '';
			}
		}
	//FUNCTION FOR CALCULATE X at Y
		var btnequal2 = function(){
			var str1 = box2.value;
			var len = str1.length-1;

			var x = Number(str1.substring(0,len));
			var y = box.value;

			var result = Math.pow(x,y);

			box.value = result;
			document.history.textHistory.value += str1 + y + ' = ' + result + '\n';
			box2.value = '';
		}
	//FUNCTION FOR SQRT BUTTON
		var btnsqrt = function(){
			var x = box.value;
			var result = Math.sqrt(x);

			box.value = result;
			document.history.textHistory.value += '√' + x + ' = ' + result + '\n';
		}
	//FUNCTION FOR SQUARE BUTTON
		var btnsquare = function(){
			document.history.textHistory.value += box.value;
			var x = box.value;
			var result = Math.pow(x,2);

			box.value = result;
			document.history.textHistory.value += '^2 = ' + result + '\n';
		}
	//FUNCTION FOR XatY BUTTON
		var btnxaty = function(x){
			saveValue(x);
		}
	//FUNCTION FOR FACTORIAL BUTTON
		var btnfact = function(){
			var fact=1;
			var n = box.value;

			if(n == 0 || n == 1){
				box.value = 1;
				document.history.textHistory.value += n + '! = ' + 1 +'\n';
			}else{

				for (var i = 1;i<=n;i++)
					fact *= i;

				box.value = fact;
				document.history.textHistory.value += n + '! = ' + fact + '\n';
			}
		}
	//FUNCTION FOR DELET BUTTON/BACKSPACE BUTTON
		var btndel = function(){
				var v = box.value;
				var len = v.length-1;
				var newV = v.substring(0,len);

				box.value = newV;
			}
	//FUNCTION FOR SHOW AND HIDE THE HISTORY OF OPERATION DONE IN CALCULATOR
		var popUpHistory =function(){

		var currentName = document.getElementById('textHistory');

		if (currentName.style.visibility != 'visible')
			currentName.style.visibility = 'visible' ;
		else
			currentName.style.visibility = 'hidden' ;
			
		}
	//FUNCTION FOR NEGATE BUTTON
		var btnneg = function(){
			var x = box.value;
			var x2;
			var stringHistory;

			if(x > 0){
				x2 = ~x + 1;
				stringHistory = 'negate(' + x + ')';
				box.value = x2 ;
				document.history.textHistory.value +=  stringHistory + ' = ' + x2 + '\n';
			}else if (x < 0){
				x2 = ~x + 1;
				stringHistory = 'negate(' + x + ')';
				box.value = x2 ;
				document.history.textHistory.value += stringHistory + ' = ' + x2 + '\n';
			}else if (x == 0){
				stringHistory = 'negate(' + x + ')';
				box.value = x ;
				document.history.textHistory.value += stringHistory + ' = ' + x + '\n';
			}
		}
	//FUNCTION FOR HEXA CONVERTION FOR POZITIVE NUMBERS
		var hexConvertion = function (){
			var number = box.value;
			var rem;
			var valueArray = [];
			var digits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

			while(number > 0){
				rem = number % 16;
				number = Math.floor(number / 16);
				valueArray.push(rem);
			}
			var i = valueArray.length;
			var j = 0;
			var hexValue = [];

			while (i > 0){
				//document.history.textHistory.value +=  digits[valueArray.pop()];
				hexValue[j] = digits[valueArray.pop()];
				j++;
				i--;
			}
			document.history.textHistory.value += hexValue.join("") + '\n';

		}

		var changeButton = function (){
			var a = document.getElementById('hex');
			a.value ='+';
			document.getElementById('hex').onclick = btnadd;
			document.getElementById('bin').value = '-';
			document.getElementById('bin').onclick = btnsub;
		}

	//FUNCTION FOR BINARY CONVERTION
	//----!!!! HALF DONE !!!-----NEGATIVE NUMBERS CONVERTION MISSING
		var binaryConvertion = function(){
			var number = box.value;
			var rem ;
			var bitsArray = [];
			var negbits;
			var i = 0;
			
			if(number > 0)
			{
				do{
					rem = number % 2;
					bitsArray.push(rem);
					number = Math.floor(number / 2);
				}while( number > 0);
				bitsArray.push(number);

				bitsArray.reverse();
				document.history.textHistory.value += bitsArray.join("");
				document.history.textHistory.value +='\n';
			}
		}
				/*else if(number < 0){
					number = ~number +1;
					do{
						rem = number % 2;
						bitsArray.push(rem);
						number = Math.floor(number / 2);
					}while( number > 0);
					bitsArray.push(number);
					bitsArray.reverse();

					document.history.textHistory.value +='bits value = ' + (number).toString(2) +'\n';
				
					negbits = bitsArray.join("");
					
					document.history.textHistory.value +='bits value = ' + negbits +'\n';
					negbits = negbits + 1;

					document.history.textHistory.value +='negbits value = ' + negbits +'\n';
			}
			document.history.textHistory.value +='bits value = ' + (number).toString(2) +'\n';	*/