const inp = document.getElementById("memo-input")
const addbtn = document.getElementById("add-button")
const list1 = document.getElementById("memo-container")
//const memo12 = inp.value 出ない、、、

addbtn.onclick = function () {
  const memo = document.createElement("div")
  memo.textContent = inp.value
  list1.append(memo)
  inp.value = null
}

console.log(list1)
