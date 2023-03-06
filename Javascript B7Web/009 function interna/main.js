

function adicionar(a, b){
    function raiz(x){
        return x * x;
    }
    const square = (x) => {
        return x*x;
    }
    
    let sqrA = raiz(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

document.write(adicionar(2, 4))