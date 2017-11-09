export default{
  install (Vue, options) {
    Vue.prototype.Queue = function (length) {
      let obj = {}
      let dataStore = [];
      obj.dataStore = dataStore;
      obj.enqueue = enqueue;
      obj.dequeue = dequeue;
      obj.front = front;
      obj.back = back;
      obj.toString = toString;
      obj.empty = empty;
      //入队，就是在数组的末尾添加一个元素
      function enqueue(element) {
        if (count() === length) {
          dequeue();
        }
        dataStore.push(element);
      }

      //出队，就是删除数组的第一个元素
      function dequeue() {
        return dataStore.shift();
      }

      //取出数组的第一个元素
      function front() {
        return dataStore[0];
      }

      //取出数组的最后一个元素
      function back() {
        return dataStore[dataStore.length - 1];
      }

      // function toString () {
      //   let retStr = "";
      //   for (let i=0; i<this.dataStore.length; ++i) {
      //     retStr += dataStore[i] + "&nbsp;"
      //   }
      //   return retStr;
      // }
      //判断数组是否为空
      function empty() {
        if (dataStore.length === 0) {
          return true;
        } else {
          return false;
        }
      }

      //返回数组中元素的个数
      function count() {
        return dataStore.length;
      }

      return obj;
    },
      /**
       * @return {string}
       * @return {string}
       */
      Vue.prototype.DateFormate = function (time) {
        let datetime = new Date();
        datetime.setTime(time);
        let year = datetime.getFullYear();
        let month = datetime.getMonth() + 1;
        if (month >= 0 && month <= 9) {
          month = '0' + month;
        }
        let date = datetime.getDate();
        if (date >= 0 && date <= 9) {
          date = '0' + date;
        }
        let hour = datetime.getHours();
        if (hour >= 0 && hour <= 9) {
          hour = '0' + hour;
        }
        let minute = datetime.getMinutes();
        if (minute >= 0 && minute <= 9) {
          minute = '0' + minute;
        }
        let second = datetime.getSeconds();
        if (second >= 0 && second <= 9) {
          second = '0' + second;
        }
        // let mseconds = datetime.getMilliseconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
      },
      Vue.prototype.pagination = function (pageNo, pageSize, array) {
        const offset = (pageNo - 1) * pageSize;
        return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
      }
  }
}
