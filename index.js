const colorOne = document.getElementById("color-name-1")
const colorTwo = document.getElementById("color-name-2")
const colorThree = document.getElementById("color-name-3")
const colorFour = document.getElementById("color-name-4")
const colorFive = document.getElementById("color-name-5")


document.getElementById("get-scheme-btn").addEventListener("click", function(){

      const seedColor = document.getElementById("seed-color").value
      const colorMode = document.getElementById("color-mode").value
      const seedHex = seedColor.slice(1)
           
      fetch(`https://www.thecolorapi.com/scheme?hex=${seedHex}&mode=${colorMode}`)
        .then(response => response.json())
        .then(data => {      
        document.getElementById("color-1").style.backgroundColor = data.colors[0].hex.value
        colorOne.textContent = data.colors[0].hex.value
        document.getElementById("color-2").style.backgroundColor = data.colors[1].hex.value
        colorTwo.textContent = data.colors[1].hex.value
        document.getElementById("color-3").style.backgroundColor = data.colors[2].hex.value
        colorThree.textContent = data.colors[2].hex.value
        document.getElementById("color-4").style.backgroundColor = data.colors[3].hex.value
        colorFour.textContent = data.colors[3].hex.value
        document.getElementById("color-5").style.backgroundColor = data.colors[4].hex.value
        colorFive.textContent = data.colors[4].hex.value 
        
        })
})

 colorOne.addEventListener("click", function(){
     colorOne.select()
     document.execCommand("copy")
 })

