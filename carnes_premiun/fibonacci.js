function fibonacci(n) {
    const serie=[0,1];
    for(let i=2; i<n; i++){
        serie.push(serie[i-1]+serie[i-2]);
    }
    return serie.slice(0,n);
}
console.log (fibonacci(589))