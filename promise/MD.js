// import { resolve } from "any-promise";

// class MD {
//   static FULFILLED = "fulfilled";
//   static REJECT = "reject";
//   static PENDING = "pending";
//   constructor(excutor) {
//     this.state = MD.PENDING;
//     this.value = null;
//     this.callback = [];
//     excutor(this.resolve.bind(this), this.reject.bind(this));
//   }
//   reject(reason) {
//     if (this.state == MD.PENDING) {
//       this.state = MD.REJECT;
//       this.value = reason;
//       setTimeout(() => {
//         this.callback.map(cb => {
//           cb.onReject(reason);
//         });
//       });
//     }
//   }
//   resolve(value) {
//     if (this.state == MD.PENDING) {
//       this.state = MD.FULFILLED;
//       this.value = value;
//       setTimeout(() => {
//         this.callback.map(cb => {
//           cb.onFulfilled(value);
//         });
//       });
//     }
//   }
//   then(onFulfilled, onReject) {
//     if (typeof onFulfilled !== "function") {
//       onFulfilled = () => {};
//     }
//     if (typeof onReject !== "function") {
//       onReject = () => {};
//     }
//     return new MD((resolve, reject) => {
//       if (this.state == MD.PENDING) {
//         this.callback.push({
//           onFulfilled: value => {
//             try {
//               let res = onFulfilled(value);
//               resolve(res);
//             } catch (error) {
//               onReject(error);
//             }
//           },
//           onReject: value => {
//             try {
//               let res = onReject(value);
//               resolve(res);
//             } catch (error) {
//               onReject(error);
//             }
//           }
//         });
//       }
//       if (this.state == MD.FULFILLED) {
//         setTimeout(() => {
//           try {
//             let res = onFulfilled(this.value);
//             resolve(res);
//           } catch (error) {
//             onReject(error);
//           }
//         });
//       }
//       if (this.state == MD.REJECTED) {
//         setTimeout(() => {
//           try {
//             let res = onReject(this.value);
//             resolve(res);
//           } catch (error) {
//             onReject(error);
//           }
//         });
//       }
//     });
//   }
// }

// class MD {
//   static FULFILLED = "fulfilled";
//   static PENDING = "pending";
//   static REJECT = "reject";

//   constructor(excutor) {
//     this.value = null;
//     this.state = MD.PENDING;
//     this.callback = [];
//     excutor(this.resolve.bind(this), this.reject.bind(this));
//   }
//   resolve(value) {
//     if (this.state == MD.PENDING) {
//       this.state = MD.FULFILLED;
//       this.value = value;
//       setTimeout(() => {
//         this.callback.map(cb => {
//           cb.onFulfilled(value);
//         });
//       });
//     }
//   }
//   reject(reason) {
//     if (this.state == MD.PENDING) {
//       this.state = MD.REJECT;
//       this.value = reason;
//       setTimeout(() => {
//         this.callback.map(cb => {
//           cb.onReject(this.value);
//         });
//       });
//     }
//   }
//   then(onFulfilled, onReject) {
//     if (typeof onFulfilled !== "function") {
//       onFulfilled = () => {
//         return this.value;
//       };
//     }
//     if (typeof onReject !== "function") {
//       onReject = () => {
//         return this.value;
//       };
//     }
//     return new MD((resolve, reject) => {
//       if (this.state == MD.PENDING) {
//         this.callback.push({
//           onFulfilled: value => {
//             try {
//               let res = onFulfilled(value);
//               resolve(res);
//             } catch (error) {
//               reject(error);
//             }
//           },
//           onReject: value => {
//             try {
//               let res = onFulfilled(value);
//               resolve(res);
//             } catch (error) {
//               reject(error);
//             }
//           }
//         });
//       }
//       if (this.state == MD.FULFILLED) {
//         setTimeout(() => {
//           try {
//             let res = onFulfilled(this.value);
//             resolve(res);
//           } catch (error) {
//             reject(error);
//           }
//         });
//       }
//       if (this.state == MD.REJECT) {
//         setTimeout(() => {
//           try {
//             let res = onReject(this.value);
//             resolve(res);
//           } catch (error) {
//             reject(error);
//           }
//         });
//       }
//     });
//   }
// }





// class MD {
//   static FULFILLED = "fulfilled";
//   static PENDING = "pending";
//   static REJECT = "reject";
//   constructor(excutor) {
//     this.value = null;
//     this.state = MD.PENDING;
//     this.callback = [];
//     excutor(this.resolve.bind(this), this.reject.bind(this));
//   }
//   resolve(value) {
//     if (this.state === MD.PENDING) {
//       this.state = MD.FULFILLED;
//       this.value = value;
//       setTimeout(() => {
//         this.callback.map(item => {
//           item.onFulfiller(value);
//         });
//       });
//     }
//   }
//   reject(value) {
//     if (this.state === MD.PENDING) {
//       this.state = MD.REJECT;
//       this.value = value;
//       setTimeout(() => {
//         this.callback.map(item => {
//           item.onReject(value);
//         });
//       });
//     }
//   }
//   then(onFulfiller, onReject) {
//     if (typeof onFulfiller !== "function") {
//       onFulfiller = () => {
//         return this.value;
//       };
//     }
//     if (typeof onReject !== "function") {
//       onReject = () => {
//         return this.value;
//       };
//     }
//     return new MD((resolve, reject) => {
//       if (this.state === MD.PENDING) {
//         this.callback.push({
//           onFulfiller: value => {
//             try {
//               let res = onFulfiller(value);
//               resolve(res);
//             } catch (error) {
//               reject(error);
//             }
//           },
//           onReject: value => {
//             try {
//               let res = onReject(value);
//               resolve(res);
//             } catch (error) {
//               reject(error);
//             }
//           }
//         });
//       }

//       if (this.state === MD.FULFILLED) {
//         try {
//           setTimeout(() => {
//             let res = onFulfiller(this.value);
//             resolve(res);
//           });
//         } catch (error) {
//           reject(error);
//         }
//       }
//       if (this.state === MD.REJECT) {
//         try {
//           setTimeout(() => {
//             let res = onReject(this.value);
//             resolve(res);
//           });
//         } catch (error) {
//           reject(error);
//         }
//       }
//     });
//   }
// }



