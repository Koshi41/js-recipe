// HTML要素を取得する
const bbt = document.getElementById("buy-button-tea")
const ditem = document.getElementById("display-items")

const irerub = document.getElementById("add-button-100")
const saif = document.getElementById("display-saifu")
let saifz = 1000
const put = document.getElementById("display-jihanki-money")
let money1 = 0

irerub.onclick = function () {
  if (saifz > 0) {
    saifz -= 100
    saif.textContent -= 100
    money1 += 100
    put.textContent = money1
  }
}

// buyButtonTea を押した時の処理
bbt.onclick = function () {
  if (money1 > 0) {
    money1 -= 100
    put.textContent = money1
    ditem.textContent += "🍵"
  }
}

//const sec = document.getElementById("section1")
//const slot = document.createElement("h3")
//slot.textContent = "自販機にお金を入れる"
//sec.prepend(slot)

//const slotbtn = document.createElement("button")
//slotbtn.textContent = "100円入れる"
//slot.appendChild(slotbtn)
