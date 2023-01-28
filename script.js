let transSumEl = document.getElementById('currency')
let mountEl = document.getElementById('mount')
let sumEl = document.getElementById('sum')
let result = document.getElementById('result')
let tr = new Audio('./true.MOV')
const sumCurrent = ()=>{
    // console.log('click')
    let transSum = parseFloat(transSumEl.value)
    let mount = parseFloat(mountEl.value)
    let res = transSum*mount
    tr.play()
    result.innerHTML = 'Summary:' + res.toFixed(2) + ' сом'
    // console.log(transSum)

}

sumEl.addEventListener('click', sumCurrent)