import * as firebase from 'firebase';




  const config = {
    apiKey: "AIzaSyAh4SB_0-cDegle1ZubxsTxoNvW8jJSQLQ",
    authDomain: "wydatki-6096c.firebaseapp.com",
    databaseURL: "https://wydatki-6096c.firebaseio.com",
    projectId: "wydatki-6096c",
    storageBucket: "wydatki-6096c.appspot.com",
    messagingSenderId: "155905905568"
  };
  firebase.initializeApp(config);


  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export { firebase, googleAuthProvider, database as default };




  // child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
// database.ref('expenses').on('child_changed', (snapshot) =>{
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


  // database.ref('expenses')
  // .on('value', (snapshot) =>{
    
  // })((snapshot) => {
  //   const expenses = [];
    
  //  snapshot.forEach((childsnapshot) => {
  //     expenses.push({
  //       id: childsnapshot.key,
  //       ...childsnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // })

// database.ref('expenses')
// .on('value', (snapshot) =>{
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses)
// });

  // database.ref('notes').push({
  //   title: 'course kurwaa',
  //   body: 'lubie wutke za 500zl'
  // })
  // database.ref('notes/-LD7UMRkZK0Z1ob3fkxE').remove() //tak sie dostaje do danego note
  // database.ref('expenses').push({
  //   description: 'expense 2',
  //   note: 'mam kase',
  //   amount: 500,
  //   createdAt: 0
  // })
  // database.ref('expenses/-LD7V_bbjpmZCJYuXYFd').remove()


  // database.ref('')
  // .once('value')
  // .then((snapshot) => {
  //  const val = snapshot.val();
  //  console.log(val)
  // }).catch((error) => {
  //   console.log('error', error)
  // });
// jak nizej -- bez promise zmiana danych wykonuje sie od razu
//promise wykonuje sie tylko raz
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   const print =  `${val.name} is working in ${val.job.company} as ${val.job.title}`
//   console.log(print)
// }, (error) => {
//   console.log('error', error)
// });

// setTimeout(() => {
//   database.ref('job/title').set('dziwka')
// }, 3000);

// setTimeout(() => {
//   database.ref('')
//   .on('value')
// });

// setTimeout(() => {
//     database.ref('age').set(34);
// }, 3500);
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);
// setTimeout(() => {
//   database.ref('age').set(40);
// }, 10500);

// database.ref()
// .once('value')
// .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e)=>{
//     console.log('errorrr', e)
// })
//WW^^ jak uzyc firebase w javascripcie




// database.ref('age').remove()
// .then(() =>{
//     console.log('removed')
// })
// .catch( (e)=> {
//     console.log(e, 'error');
// });
//   }).then(() => {
//       console.log('data is saved');
//   }).catch((error) => {
//     console.log('failed', e)
//   });
// //   database.ref().set('this is my data');
//   database.ref('location/city').set('poznan')
//   database.ref('attr').set({
//     height: 180,
//     weight: 120
//   }).then(() => {
//       console.log(' 2. data saved again')
//   }).catch((error) => {
//       console.log('failed 2', e)
//   });

//   database.ref().update({
//      stressLevel: 9,
//      "job/company": 'amazon',
//      'location/city': 'szczury'

// });