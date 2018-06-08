//QUESTION 1

//For s = "weather" and t = "therapyw" sortByString(s, t) = "theeraw"


const sortByString = function (s, t) {
  let result = ''
  let hash = {}
  for(let j = 0; j < s.length; j++) {
    if(hash[s[j]]) {
      hash[s[j]][1] += 1
    } else {
      hash[s[j]] = [s[j], 1]
    }
  }
  let i = 0
  let y = 0
  while(i < t.length){
    if(hash[t[i]]) {
      result += hash[t[i]][0].repeat(hash[t[i]][1])
      y++
    }
    i++
  }
  return result
}
