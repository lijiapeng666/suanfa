class HD {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(excutor) {
    this.status = HD.PENDING;
    this.value = null;
    this.callbacks = [];
    try {
      excutor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status == HD.PENDING) {
      this.status = HD.FULFILLED;
      this.value = value;
      setTimeout(() => {
        this.callbacks.map(item => {
          item.onFulfilled(this.value);
        });
      });
    }
  }
  reject(reason) {
    if (this.status == HD.PENDING) {
      this.status = HD.REJECTED;
      this.value = reason;
      setTimeout(() => {
        this.callbacks.map(item => {
          item.onRejected(reason);
        });
      });
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== "function") {
      onFulfilled = () => {};
    }
    if (typeof onRejected !== "function") {
      onRejected = () => {};
    }
    return new HD((resolve, reject) => {
      if (this.status === HD.FULFILLED) {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value)
            resolve(result)
        
          } catch (error) {
            onRejected(error);
          }
        });
      }
      if (this.status === HD.PENDING) {
        this.callbacks.push({
          onFulfilled: value => {
            try {
              let result =  onFulfilled(value);
              resolve(result)
            } catch (error) {
              onRejected(error);
            }
          },
          onRejected: value => {
            try {
              let result =  onRejected(value);
              resolve(result)
            } catch (error) {
              onRejected(error);
            }
          }
        });
      }
      if (this.status === HD.REJECTED) {
        setTimeout(() => {
          try {
            let result = onRejected(this.value)
            resolve(result)
          } catch (error) {
            onRejected(error);
          }
        });
      }
    });
  }
}
