function palindrome(str) {

  let limpioStr = str.slice().toLowerCase().match(/[^_ -/]/g).join("")

  const reverse = (str) => {
    return str.split('').reverse().join('')
  }

  if(limpioStr == reverse(limpioStr)) {
    return true
  } else {
    return false
  }


}

palindrome("E_ye_");
palindrome("not a palindrome")
palindrome("0_0 (: /-\ :) 0-0")
palindrome("_eye")