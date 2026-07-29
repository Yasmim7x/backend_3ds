// Execurta uma unica vez (em ms)
setTimeout(function(){}, 3000)


// Executa infinitamente (em ms)
setInterval(function(){
    const v = 1
    console.log(`Rodou ${v} vez(s)`)
    v = v + 1
}, 1000)