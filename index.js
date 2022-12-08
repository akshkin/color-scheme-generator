const colors = document.querySelectorAll(".color-name")

document.getElementById("get-scheme-btn").addEventListener("click", function(){

      const seedColor = document.getElementById("seed-color").value
      const colorMode = document.getElementById("color-mode").value
      const seedHex = seedColor.slice(1)
           
      fetch(`https://www.thecolorapi.com/scheme?hex=${seedHex}&mode=${colorMode}`)
        .then(response => response.json())
        .then(data => {
          
          data.colors.forEach((color, index)=>{
            const hex = color.hex.value
            document.getElementById(`color-${index+1}`).style.backgroundColor = hex
            document.getElementById(`color-name-${index+1}`).textContent = hex
          })      
        
        })
})

const copyToClipboard = (event) => {
  const hexCode = event.target.textContent
  console.log(event.target)
  navigator.clipboard.writeText(hexCode)
  const copied = document.getElementById("copied")
  
    copied.style.display = "block"
    setTimeout(() => {
      copied.style.display = "none"
    }, 2000)
  

}

colors && colors.forEach(color => color.addEventListener("click", copyToClipboard))

