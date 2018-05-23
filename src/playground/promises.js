const promise = new Promise((resolve, reject) =>{
    setTimeout(()  => {
        // resolve({
        //     name: 'andrew',
        //     age: 24
        // })
        reject('error, something went wrong');
    }, 1500)

});

promise.then( (data) => {
    console.log('1', data)
}).catch((error) =>{
    console.log('error', error)
});
//zeby reject zadzialal musimy uzyc catch

console.log('after');
//w przypadku reject wyrzuca blad w consoli
//w promisach moze byc rozwiazany tylko jeden resolve, cala reszta jest ignorowana