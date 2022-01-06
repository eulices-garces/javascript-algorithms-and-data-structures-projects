function convertToRoman(num) {
 let resultado = '';
	let romano = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
	let decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
	

		for ( let i = 0; i < decimal.length; i++ ) {
		while ( decimal[i] <= num ) {
			resultado += romano[i]
			num -= decimal[i]
		}
	}

	return resultado
}

convertToRoman(36);