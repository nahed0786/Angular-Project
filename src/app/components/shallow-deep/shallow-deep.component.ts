import { Component, OnInit } from '@angular/core';
const _ = require('lodash');
@Component({
  selector: 'app-shallow-deep',
  templateUrl: './shallow-deep.component.html',
  styleUrls: ['./shallow-deep.component.css']
})
export class ShallowDeepComponent implements OnInit {

  constructor() {

    //shallow copy

    // let obj = {
    //   name: "wasim"
    // }

    // let user=obj
    // user.name="nahed"  
    // console.log(obj);





    // no 1 solution

      // let obj = {
      //   name: "wasim"
      // }

      // let user=Object.assign({},obj)
      // user.name="nahed"  
      // console.log("Object is",obj);
      // console.log("User is",user);




    //no 2 solution

    //   let obj = {
    //     name: "wasim"
    //   }
    //   let user = { ...obj }    //distruching
    //   user.name = "nahed"
    //   console.log("Object is", obj);
    //   console.log("User is", user);





    // let obj = {
    //   name: "wasim",
    //   address: {
    //     city: 'mohali',
    //     state: 'chandighar'
    //   }
    // }
    // let user = { ...obj }    //distruching
    // user.address.city = "kolkata"
    // console.log("Object is", obj);



    // ata problem er jonno deep copy use korbo


    // deep copy
    // object ko string may convert karengee, then string ko fir say object bana dengee


    // let obj = {
    //   name: "wasim",
    //   address: {
    //     city: 'mohali',
    //     state: 'chandighar'
    //   }
    // }
    // let user = JSON.parse(JSON.stringify(obj))
    // user.address.city = "kolkata"
    // console.log("Object is", obj);
    // // console.log("User is", user);



//  let obj = {
//       name: "wasim",
//       address: {
//         city: 'mohali',
//         state: 'chandighar'
//       },
//       getData:function(){                   // ai khane function ba date kam korbe na deep copy tee
//         return "aa data is here"
//       }
//     }
//     let user = JSON.parse(JSON.stringify(obj))
//     user.address.city = "kolkata"
//     console.log("Object is", obj);
//     console.log("User is", user);

   

//  let obj = {                      
//       name: "wasim",
//       address: {
//         city: 'mohali',
//         state: 'chandighar'
//       },
//       getData:function(){                   
//         return "all data is here"
//       }
//     };

//     let user = _.cloneDeep(obj);     //npm install lodash
//     user.address.city = "kolkata"
//     console.log("Object is", obj);
//     console.log("User is", user);




  }



  ngOnInit(): void {
  }





}
