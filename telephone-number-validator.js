function telephoneCheck(str) {

  if (/^1? ?[0-9]{3}-? ?[0-9]{3}-? ?[0-9]{4}$/.test(str)) {
    return true
  } else if (/^1? ?\([0-9]{3}\)-? ?[0-9]{3}-? ?[0-9]{4}$/.test(str)) {
    return true
  }

  return false;
}

//telephoneCheck("55 55-55-555-5")
//telephoneCheck("1 (555) 555-5555")
//telephoneCheck("1 555-555-5555")
//telephoneCheck("555-555-5555")
//telephoneCheck("1(555)555-5555")
//telephoneCheck("55555555")
//telephoneCheck("1 555)555-5555")
telephoneCheck("(6054756961)")