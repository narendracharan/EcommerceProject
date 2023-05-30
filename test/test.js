const server = require("../index");
const chai = require("chai");

const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("USER API  ", () => {
  // describe("User signup api ",()=>{
  // it("it should signup a user",(done)=>{
  //     const data={
  //         userEmail:"kkdsddaams@gmail.com",
  //         password:"Nc@25753"
  //     }
  //     chai.request(server)
  //     .post("/admin/user/signup")
  //     .send(data)
  //         .end((err,res)=>{
  //                 res.should.have.status(201);
  //                 res.should.be.a("object");
  //                 res.body.should.have.property("status_code")
  //                 res.body.should.have.property("message").eq("Signup Successfully");
  //           done()
  //             })
  //             })
  //             it("it should signup a user with email already exist",(done)=>{
  //                 const data={
  //                     userEmail:"tugrp99@example.com",
  //                     password:"Nc@25753"
  //                 }
  //                 chai.request(server)
  //                 .post("/admin/user/signup")
  //                 .send(data)
  //                     .end((err,res)=>{
  //                         res.should.have.status(403)
  //                         res.should.be.a("object");
  //                         res.body.should.have.property("status")
  //                         res.body.should.have.property("message").eq("userEmail Already Exited");
  //                         done()
  //                         })
  //})
  // describe("User Login Api",()=>{
  //  it("it should login a user",(done)=>{
  //         const data={
  //             userEmail:"kkdsddaams@gmail.com",
  //             password:"Nc@25753"
  //         }
  //         chai.request(server)
  //         .post("/admin/user/login")
  //         .send(data)
  //             .end((err,res)=>{
  //                     res.should.have.status(201);
  //                     res.should.be.a("object");
  //                     res.body.should.have.property("status_code")
  //                     res.body.should.have.property("message").eq("Successs");
  //                    done()
  //                 })
  //                 })
  //                     it("userEmail are incorrect",(done)=>{
  //                         const data={
  //                             userEmail:"kkdsdssdaams@gmail.com",
  //                             password:"Nc@25753"
  //                         }
  //                         chai.request(server)
  //                         .post("/admin/user/login")
  //                         .send(data)
  //                             .end((err,res)=>{
  //                                     res.should.have.status(403);
  //                                     res.should.be.a("object");
  //                                     res.body.should.have.property("status_code")
  //                                     res.body.should.have.property("message").eq("User Email Are Incorrect");
  //                                    done()
  //                                 })
  //                                 })
  // it("password are incorrect",(done)=>{
  //     const data={
  //         userEmail:"kkdsddaams@gmail.com",
  //         password:"Nc@2f5753"
  //     }
  //     chai.request(server)
  //     .post("/admin/user/login")
  //     .send(data)
  //         .end((err,res)=>{
  //                 res.should.have.status(403);
  //                 res.should.be.a("object");
  //                 res.body.should.have.property("status_code")
  //                 res.body.should.have.property("message").eq("User Password Are Incorrect");
  //                done()
  //             })
  //             })
  //  })
  // it("password and Email are not valid",(done)=>{
  //     const data={
  //         userEmail:"",
  //         password:""
  //     }
  //     chai.request(server)
  //     .post("/admin/user/login")
  //     .send(data)
  //         .end((err,res)=>{
  //                 res.should.have.status(403);
  //                 res.should.be.a("object");
  //                 res.body.should.have.property("status_code")
  //                 res.body.should.have.property("message").eq("User Email and Password Are Not Valid");
  //                done()
  //             })
  //             })
  //  })

  //    describe("send mail for reset passsword",()=>{
  // it("send mail ",(done)=>{
  //         const data={
  //             userEmail:"tugrp99@example.com",
  //         }
  //         chai.request(server)
  //         .post("/admin/user/sendMail")
  //         .send(data)
  //             .end((err,res)=>{
  //                    res.should.have.status(200);
  //                     res.should.be.a("object");
  //                     res.body.should.have.property("status_code")
  //                     res.body.should.have.property("message").eq("Success");
  //                    done()
  //                 })
  //                 })
  //                     it("userEmail are empty ",(done)=>{
  //                         const data={
  //                             userEmail:"",
  //                         }
  //                         chai.request(server)
  //                         .post("/admin/user/sendMail")
  //                         .send(data)
  //                             .end((err,res)=>{
  //                                    res.should.have.status(400);
  //                                     res.should.be.a("object");
  //                                     res.body.should.have.property("status_code")
  //                                     res.body.should.have.property("message").eq("userEmail are empty");
  //                                    done()
  //                                 })
  //                                 })

  // describe(" reset passsword",()=>{
  //     it("reset-paaword",(done)=>{
  //                 const data={
  //                     password:"Nc@1234",
  //                     confirmPassword :"Nc@1234"
  //                 }
  //                 chai.request(server)
  //                 .post("/admin/user/reset-password/6475a22529d6ef7676d7df53/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDc1YTIyNTI5ZDZlZjc2NzZkN2RmNTMiLCJpYXQiOjE2ODU0MzQyNjgsImV4cCI6MTY4NTY5MzQ2OH0.3VoagcR3vxO1R3PecoxIix_O8lkKUNKXzebRgP_65N4")
  //                 .send(data)
  //                 .end((err,res)=>{
  //                                     res.should.have.status(200);
  //                                     res.should.be.a("object");
  //                                     res.body.should.have.property("status_code")
  //                                     res.body.should.have.property("message").eq("Success");
  //                                    done()
  //                                 })
  //                         })

  // it("password and conformpasswornd are not same",(done)=>{
  //     const data={
  //         password:"Nc@1234",
  //         confirmPassword :"Nc@134"
  //     }
  //     chai.request(server)
  //     .post("/admin/user/reset-password/6475a22529d6ef7676d7df53/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDc1YTIyNTI5ZDZlZjc2NzZkN2RmNTMiLCJpYXQiOjE2ODU0MzQyNjgsImV4cCI6MTY4NTY5MzQ2OH0.3VoagcR3vxO1R3PecoxIix_O8lkKUNKXzebRgP_65N4")
  //     .send(data)
  //     .end((err,res)=>{
  //                         res.should.have.status(401);
  //                         res.should.be.a("object");
  //                         res.body.should.have.property("status_code")
  //                         res.body.should.have.property("message").eq("Password Or Confirm_Password Could Not Be Same");
  //                        done()
  //                     })
  //             })

  // it("paasword and confirmpassword are empty",(done)=>{
  //     const data={
  //         password:"",
  //         confirmPassword :""
  //     }
  //     chai.request(server)
  //     .post("/admin/user/reset-password/6475a22529d6ef7676d7df53/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDc1YTIyNTI5ZDZlZjc2NzZkN2RmNTMiLCJpYXQiOjE2ODU0MzQyNjgsImV4cCI6MTY4NTY5MzQ2OH0.3VoagcR3vxO1R3PecoxIix_O8lkKUNKXzebRgP_65N4")
  //     .send(data)
  //     .end((err,res)=>{
  //                         res.should.have.status(403);
  //                         res.should.be.a("object");
  //                         res.body.should.have.property("status_code")
  //                         res.body.should.have.property("message").eq("password and confirmPassword empty");
  //                        done()
  //                     })
  //             })

  // describe("verify otp",()=>{
  // it("verify otp",(done)=>{
  //         const data={
  //             userEmail:"kksdaamsscssujss@gmail.com",
  //             otp:"5531"
  //         }
  //         chai.request(server)
  //         .post("/admin/user/verifyOtp")
  //         .send(data)
  //         .end((err,res)=>{
  //                             res.should.have.status(200);
  //                             res.should.be.a("object");
  //                             res.body.should.have.property("status_code")
  //                             res.body.should.have.property("message").eq("Verify Otp Successfully");
  //                            done()
  //                         })
  //                 })

  //     it("verify otp",(done)=>{
  //         const data={
  //             userEmail:"kksdaamsssujss@gmail.com",
  //             otp:"5531"
  //         }
  //         chai.request(server)
  //         .post("/admin/user/verifyOtp")
  //         .send(data)
  //         .end((err,res)=>{
  //                             res.should.have.status(400);
  //                             res.should.be.a("object");
  //                             res.body.should.have.property("status_code")
  //                             res.body.should.have.property("message").eq("userEmail are incorrect");
  //                            done()
  //                         })
  //                 })

  //  })
  // describe("Edit profile pic",()=>{

  //     it("edit profile pic user",(done)=>{
  //                 const data={
  //                     userName:"ajay",
  //                     userEmail:"ajay@gmail.com",
  //                     profile_Pic:"/image_1685439270160.01.jpg.jpg"
  //                 }
  //                 chai.request(server)
  //                 .post("/admin/user/editProfile/6475a22b29d6ef7676d7df58")
  //                 .send(data)
  //                 .end((err,res)=>{
  //                                res.should.have.status(200);
  //                                     res.should.be.a("object");
  //                                     res.body.should.have.property("status_code")
  //                                     res.body.should.have.property("message").eq("Profile Updated");
  //                                    done()
  //                                 })

  //                         })
  // })
  //describe("user status Check",()=>{
  // it("user status check message success",(done)=>{
  //                     const data={
  //                         status:"false"
  //                     }
  //                     chai.request(server)
  //                     .post("/admin/user/checkStatus/6475a22b29d6ef7676d7df58")
  //                     .send(data)
  //                     .end((err,res)=>{
  //                                    res.should.have.status(200);
  //                                         res.should.be.a("object");
  //                                         res.body.should.have.property("status_code")
  //                                         res.body.should.have.property("message").eq("Success");
  //                                        done()
  //                                     })

  //                             })

  // it("user status check message Failed",(done)=>{
  //     const data={
  //         status:""
  //     }
  //     chai.request(server)
  //     .post("/admin/user/checkStatus/6475a22b29d6ef7676d7df58")
  //     .send(data)
  //     .end((err,res)=>{
  //                    res.should.have.status(400);
  //                         res.should.be.a("object");
  //                         res.body.should.have.property("status_code")
  //                         res.body.should.have.property("message").eq("Failed");
  //                        done()
  //                     })

  //  })

  // describe("user list Check",()=>{
  //     it("user list check status success",(done)=>{
  //             const data={
  //                 page:"3",
  //                 userName:"a",
  //                 pageSize:"4"
  //             }
  //             chai.request(server)
  //             .post("/admin/user/userList")
  //             .send(data)
  //             .end((err,res)=>{
  //                            res.should.have.status(200);
  //                                 res.should.be.a("object");
  //                                 res.body.should.have.property("status_code")
  //                                 res.body.should.have.property("message").eq("Success");
  //                                done()
  //                             })

  //               })
//   describe("user details Check", () => {
//     it("user details check status success",(done)=>{
                    
//                     chai.request(server)
//                     .post("/admin/user/details/6465ed9b8ddefe195c0b6ee8")
//                     .send()
//                     .end((err,res)=>{
//                                    res.should.have.status(200);
//                                         res.should.be.a("object");
//                                         res.body.should.have.property("status_code")
//                                         res.body.should.have.property("message").eq("Success");
//                                        done()
//                                     })
// });
// it("user details check Failed message",(done)=>{
                    
//     chai.request(server)
//     .post("/admin/user/details/6465ed9b8ddefe195c0b6ee")
//     .send()
//     .end((err,res)=>{
//                    res.should.have.status(400);
//                         res.should.be.a("object");
//                         res.body.should.have.property("status_code")
//                         res.body.should.have.property("message").eq("Failed");
//                        done()
//                     })
// });
describe("check category ", () => {
    // it("category success message ",(done)=>{
    //     const data={
    //         categoryName:"samsung",
    //         categoryPic:"/image_1685443070172.01.jpg.jpg",
    //     }
                    
    //         chai.request(server)
    //         .post("/admin/category/category/create")
    //         .send(data)
    //         .end((err,res)=>{
    //                        res.should.have.status(201);
    //                             res.should.be.a("object");
    //                             res.body.should.have.property("status_code")
    //                             res.body.should.have.property("message").eq("Category Create Successfully");
    //                            done()
    //                         })
    //     });
    //  it("check category list  ",(done)=>{
       
                    
    //         chai.request(server)
    //         .post("/admin/category/category/list")
    //         .send()
    //         .end((err,res)=>{
    //                        res.should.have.status(200);
    //                             res.should.be.a("object");
    //                             res.body.should.have.property("status_code")
    //                             res.body.should.have.property("message").eq("Success");
    //                            done()
    //                         })
    //   });
//     it("search category check  ",(done)=>{
//        const data={
//         categoryName:"s"
//        }          
//         chai.request(server)
//         .post("/admin/category/category/search-category")
//         .send(data)
//         .end((err,res)=>{
//                        res.should.have.status(200);
//                             res.should.be.a("object");
//                             res.body.should.have.property("status_code")
//                             res.body.should.have.property("message").eq("Success");
//                            done()
//                         })
//   });
// it("update  category check  ",(done)=>{
//            const data={
//             categoryName:"samsung"
//            }          
//             chai.request(server)
//             .patch("/admin/category/category/update/644f496426d12cdc4b7278b9")
//             .send(data)
//             .end((err,res)=>{
//                            res.should.have.status(200);
//                                 res.should.be.a("object");
//                                 res.body.should.have.property("status_code")
//                                 res.body.should.have.property("message").eq("Success");
//                                done()
//                             })
//       });
// it("  category status  check  ",(done)=>{
//     const data={
//      status:"false"
//     }          
//      chai.request(server)
//      .post("/admin/category/category/checkstatus/642a5a295c7827c6d6b00f7f")
//      .send(data)
//      .end((err,res)=>{
//                     res.should.have.status(200);
//                          res.should.be.a("object");
//                          res.body.should.have.property("status_code")
//                          res.body.should.have.property("message").eq("Success");
//                         done()
//                      })
// });
// it("  category failed message check  ",(done)=>{
//     const data={
//      status:""
//     }          
//      chai.request(server)
//      .post("/admin/category/category/checkstatus/642a5a295c7827c6d6b00f7f")
//      .send(data)
//      .end((err,res)=>{
//                     res.should.have.status(400);
//                          res.should.be.a("object");
//                          res.body.should.have.property("status_code")
//                          res.body.should.have.property("message").eq("Failed");
//                         done()
//                      })
// });
// it("check subCategory Status  ",(done)=>{         
//      chai.request(server)
//      .post("/admin/category/category/sub/642a5a295c7827c6d6b00f7f")
//      .send()
//      .end((err,res)=>{
//                     res.should.have.status(200);
//                          res.should.be.a("object");
//                          res.body.should.have.property("status_code")
//                          res.body.should.have.property("message").eq("Success");
//                         done()
//                      })
// });
// it("check subCategory failed message  ",(done)=>{         
//     chai.request(server)
//     .post("/admin/category/category/sub/642a5a295c7827c6d6b00f")
//     .send()
//     .end((err,res)=>{
//                    res.should.have.status(400);
//                         res.should.be.a("object");
//                         res.body.should.have.property("status_code")
//                         res.body.should.have.property("message").eq("Failed");
//                        done()
//                     })
// });
// it("check subCategory success message  ",(done)=>{ 
//     const data={
//         subCategoryName:"vivo",
//         category_Id:"644f496426d12cdc4b7278b9"
//     }        
//         chai.request(server)
//         .post("/admin/category/subCategory/createSubCategory")
//         .send(data)
//         .end((err,res)=>{
//                        res.should.have.status(200);
//                             res.should.be.a("object");
//                             res.body.should.have.property("status_code")
//                             res.body.should.have.property("message").eq("Success");
//                            done()
//                         })
//     })
// it("check subCategory Failed  message  ",(done)=>{ 
//     const data={
//         subCategoryName:"",
//         category_Id:""
//     }        
//         chai.request(server)
//         .post("/admin/category/subCategory/createSubCategory")
//         .send(data)
//         .end((err,res)=>{
//                        res.should.have.status(400);
//                             res.should.be.a("object");
//                             res.body.should.have.property("status_code")
//                             res.body.should.have.property("message").eq("Failed");
//                            done()
//                         })
//     })
// it("check subCategory list success  message  ",(done)=>{ 
//             chai.request(server)
//             .post("/admin/category/subCategory/SubCategoryList")
//             .send()
//             .end((err,res)=>{
//                            res.should.have.status(200);
//                                 res.should.be.a("object");
//                                 res.body.should.have.property("status_code")
//                                 res.body.should.have.property("message").eq("Success");
//                                done()
//                             })
//         })
// it("check subCategory updated success  message  ",(done)=>{ 
//     const data={
//         subCategoryName:"midd"
//     }
//                 chai.request(server)
//                 .patch("/admin/category/subCategory/subCategoryUpdate/642a5ae91b8de6ebd2649e11")
//                 .send(data)
//                 .end((err,res)=>{
//                                res.should.have.status(200);
//                                     res.should.be.a("object");
//                                     res.body.should.have.property("status_code")
//                                     res.body.should.have.property("message").eq("Success");
//                                    done()
//                                 })
//             })
            // it("check subCategory search success  message  ",(done)=>{ 
            //     const data={
            //         subCategoryName:"v"
            //     }
            //                 chai.request(server)
            //                 .post("/admin/category/subCategory/subCategorySearch")
            //                 .send(data)
            //                 .end((err,res)=>{
            //                                res.should.have.status(200);
            //                                     res.should.be.a("object");
            //                                     res.body.should.have.property("status_code")
            //                                     res.body.should.have.property("message").eq("Success");
            //                                    done()
            //                                 })
            //             })
            // it("check Category list success  message  ",(done)=>{ 
               
            //                 chai.request(server)
            //                 .post("/admin/category/subCategory/selectCategory")
            //                 .send()
            //                 .end((err,res)=>{
            //                                res.should.have.status(200);
            //                                     res.should.be.a("object");
            //                                     res.body.should.have.property("status_code")
            //                                     res.body.should.have.property("message").eq("Success");
            //                                    done()
            //                                 })
            //             })
            // it("check subSubCategory list success  message  ",(done)=>{ 
               
            //                     chai.request(server)
            //                     .post("/admin/category/subCategory/checkSubSubCategory/642a5ae91b8de6ebd2649e11")
            //                     .send()
            //                     .end((err,res)=>{
            //                                    res.should.have.status(200);
            //                                         res.should.be.a("object");
            //                                         res.body.should.have.property("status_code")
            //                                         res.body.should.have.property("message").eq("Success");
            //                                        done()
            //                                     })
            //                 })
            // it("check subSubCategory  success  message  ",(done)=>{ 
            //     const data={
            //         subSubCategoryName:"L.G TV 12",
            //         category_Id:"642a5a295c7827c6d6b00f7f",
            //         subCategory_Id:"642a5ae91b8de6ebd2649e11"
            //     }
               
            //     chai.request(server)
            //     .post("/admin/category/subSubCategory/createSubSubCategory")
            //     .send()
            //     .end((err,res)=>{
            //                    res.should.have.status(200);
            //                         res.should.be.a("object");
            //                         res.body.should.have.property("status_code")
            //                         res.body.should.have.property("message").eq("Success");
            //                        done()
            //                     })
            // })
            // it("check subSubCategory list  success  message  ",(done)=>{ 
            
               
            //     chai.request(server)
            //     .post("/admin/category/subSubCategory/subSubCategoryList")
            //     .send()
            //     .end((err,res)=>{
            //                    res.should.have.status(200);
            //                         res.should.be.a("object");
            //                         res.body.should.have.property("status_code")
            //                         res.body.should.have.property("message").eq("Success");
            //                        done()
            //                     })
            // })
            // it("check subSubCategory update  success  message  ",(done)=>{ 
            // const data={
            //     subSubCategoryName:"L.G TV 12",
            // }
               
            //     chai.request(server)
            //     .patch("/admin/category/subSubCategory/subSubCategoryUpdate/640ebde65e4ac49141265c5e")
            //     .send(data)
            //     .end((err,res)=>{
            //                    res.should.have.status(200);
            //                         res.should.be.a("object");
            //                         res.body.should.have.property("status_code")
            //                         res.body.should.have.property("message").eq("Success");
            //                        done()
            //                     })
            // })
            // it("check subSubCategory search  success  message  ",(done)=>{ 
            //     const data={
            //         subSubCategoryName:"L.G TV 12",
            //     }
                   
            //         chai.request(server)
            //         .patch("/admin/category/subSubCategory/subSubCategorySearch")
            //         .send(data)
            //         .end((err,res)=>{
            //                        res.should.have.status(200);
            //                             res.should.be.a("object");
            //                             res.body.should.have.property("status_code")
            //                             res.body.should.have.property("message").eq("Success");
            //                            done()
            //                         })
            //     })
            // it("check Category   success  message  ",(done)=>{ 
               
            //         chai.request(server)
            //         .post("/admin/category/subSubCategory/selectCategory")
            //         .send()
            //         .end((err,res)=>{
            //                        res.should.have.status(200);
            //                             res.should.be.a("object");
            //                             res.body.should.have.property("status_code")
            //                             res.body.should.have.property("message").eq("Success");
            //                            done()
            //                         })
            //     })
            // it("check subCategory   success  message  ",(done)=>{ 
               
            //     chai.request(server)
            //     .post("/admin/category/subSubCategory/selectSubCategory")
            //     .send()
            //     .end((err,res)=>{
            //                    res.should.have.status(200);
            //                         res.should.be.a("object");
            //                         res.body.should.have.property("status_code")
            //                         res.body.should.have.property("message").eq("Success");
            //                        done()
            //                     })
            // })
            // it("check attribute   success  message  ",(done)=>{ 
               
            //     chai.request(server)
            //     .post("/admin/category/subSubCategory/checkAttribute/640ebde65e4ac49141265c5e")
            //     .send()
            //     .end((err,res)=>{
            //                    res.should.have.status(200);
            //                         res.should.be.a("object");
            //                         res.body.should.have.property("status_code")
            //                         res.body.should.have.property("message").eq("Success");
            //                        done()
            //                     })
            // })
    //         it("check attribute   success  message  ",(done)=>{ 
               
    //             const data={
    //                 attributeName:"Iphone",
    // category_Id:"642a5a295c7827c6d6b00f7f",
    // subCategory_Id:"642a5ae91b8de6ebd2649e11",
    // subSubCategory_Id:"642a5bc31b8de6ebd2649e1d"
    //             }
    //             chai.request(server)
    //             .post("/admin/category/attribute/createAttribute")
    //             .send(data)
    //             .end((err,res)=>{
    //                            res.should.have.status(200);
    //                                 res.should.be.a("object");
    //                                 res.body.should.have.property("status_code")
    //                                 res.body.should.have.property("message").eq("Success");
    //                                done()
    //                             })
    //         })
    // it("check attribute List success  message  ",(done)=>{ 
               
       
    //     chai.request(server)
    //     .post("/admin/category/attribute/attributeList")
    //     .send()
    //     .end((err,res)=>{
    //                    res.should.have.status(200);
    //                         res.should.be.a("object");
    //                         res.body.should.have.property("status_code")
    //                         res.body.should.have.property("message").eq("Success");
    //                        done()
    //                     })
    // })
    it("check attribute search success  message  ",(done)=>{ 
               
       const data={
    attritubeName:"mi"
       }
        chai.request(server)
        .patch("/admin/category/attribute/attributeUpdate/640eb6873f933ae4dbc3ceee")
        .send(data)
        .end((err,res)=>{
                       res.should.have.status(200);
                            res.should.be.a("object");
                            res.body.should.have.property("status_code")
                            res.body.should.have.property("message").eq("Success");
                           done()
                        })
    })
 });
});
