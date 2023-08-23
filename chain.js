//array in object in object: think carefully


const student = {
    name: 'Md. Aminur Sarker',
    location : {
        permanantAddress:'Pirgong',
        presentAddress : 'Ashulia',
        Country : 'Bangladesh'
    },
    study:{
        SSC:'JHS',
        HSC :'RGC',
        Honours: ['Daffodil', 'BSc in CSE' , 'Js']
    },
    phone: '01723636'
}

// find out the honours level
// find out the second property of Honours level
console.log(student.study.Honours);
console.log(student.study.Honours[1]);