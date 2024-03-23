export function hexToRgba(hex: string = '#ff0000', withOpacity: number = 1) {
  hex = hex.slice(1);
  return `rgba(${parseInt(hex.slice(0, 2), 16)},${parseInt(
    hex.slice(2, 4),
    16
  )},${parseInt(hex.slice(4, 6), 16)},${withOpacity * 0.01})`;
}

export const sortHelper = {
  bubble: function (
    chart: any,
    arr: Array<number>,
    primaryColor: string,
    callback: Function = () => {}
  ) {
    const len = arr.length;
    const [_] = chart!;
    let timer = setInterval(() => {
      if (isSorted(arr)) {
        clearInterval(timer);
        callback();
      }
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            setData(_, primaryColor, arr);
            return;
          }
        }
      }
    }, 400);
  },
  selection: function (
    chart: any,
    arr: Array<number>,
    primaryColor: string,
    callback: Function = () => {}
  ) {
    const len = arr.length;
    const [_] = chart!;
    let timer = setInterval(async () => {
      if (isSorted(arr)) {
        clearInterval(timer);
        callback();
      }
      for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        if (i !== minIndex) {
          let temp = arr[i];
          arr[i] = arr[minIndex];
          arr[minIndex] = temp;
          await _.setOption({
            series: {
              // 图表类型
              type: 'bar',
              label: {
                show: true,
              },
              data: arr,
              itemStyle: {
                color: function (params: any) {
                  return hexToRgba(primaryColor, params.value);
                },
              },
            },
          });
          return;
        }
      }
    }, 400);
  },
  insertion: function (
    chart: any,
    arr: Array<number>,
    primaryColor: string,
    callback: Function = () => {}
  ) {
    const [_] = chart!;
    let currentIndex = 0;
    insertionSort();
    // 插入排序算法
    function insertionSort() {
      if (isSorted(arr)) {
        callback();
      }
      if (currentIndex < arr.length - 1) {
        let current = arr[currentIndex + 1];
        let position = currentIndex + 1;
        while (position > 0 && arr[position - 1] > current) {
          arr[position] = arr[position - 1];
          position--;
        }
        arr[position] = current;
        setData(_, primaryColor, arr); // 更新图表
        currentIndex++; // 移动到下一个元素
        setTimeout(insertionSort, 400); // 每500毫秒执行下一步
      }
    }
  },
  quick: function (
    chart: any,
    arr: Array<number>,
    primaryColor: string,
    callback: Function = () => {}
  ) {
    const [_] = chart!;
    quickSort(arr, 0, arr.length - 1);

    // 快速排序算法
    function quickSort(arr, left, right) {
      if (left < right) {
        var pivotIndex = partition(arr, left, right);
        // 递归排序左半部分
        if (left < pivotIndex - 1) {
          setTimeout(function () {
            quickSort(arr, left, pivotIndex - 1);
          }, 1000); // 递增延时，控制排序步骤
        }
        // 递归排序右半部分
        if (pivotIndex + 1 < right) {
          setTimeout(function () {
            quickSort(arr, pivotIndex + 1, right);
          }, 400); // 递增延时，控制排序步骤
        }
      }
    }

    // 分区函数
    function partition(arr, left, right) {
      var pivot = arr[right];
      var i = left - 1;
      for (var j = left; j < right; j++) {
        if (arr[j] <= pivot) {
          i++;
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          setData(_, primaryColor, arr); // 更新图表
        }
      }
      var temp = arr[i + 1];
      arr[i + 1] = arr[right];
      arr[right] = temp;
      setData(_, primaryColor, arr); // 更新图表
      return i + 1;
    }
  },
  merge: function (
    chart: any,
    arr: Array<number>,
    primaryColor: string,
    callback: Function = () => {}
  ) {
    const [_] = chart!;
    mergeSort(arr);
    // 归并排序算法
    function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
      var mid = Math.floor(arr.length / 2);
      var left = arr.slice(0, mid);
      var right = arr.slice(mid);
      return merge(mergeSort(left), mergeSort(right));
    }

    // 合并两个已排序数组
    function merge(left, right) {
      var result = [];
      var i = 0,
        j = 0;
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
        setTimeout(function () {
          // 继续合并下一对元素
          if (i < left.length) {
            result.push(left[i]);
            i++;
          } else {
            result.push(right[j]);
            j++;
          }
          setData(_, primaryColor, result); // 更新图表
        }, 1000); // 设置定时器间隔，这里以 1 秒为例
      }
      return result.concat(left.slice(i)).concat(right.slice(j));
    }
  },
  counting: function (
    chart: any,
    arr: Array<number>,
    primaryColor: string,
    callback: Function = () => {}
  ) {
    const [_] = chart;
    countingSort(arr, arr.length);
    function countingSort(array, max) {
      let count = Array(max + 1).fill(0);
      for (let i = 0; i < array.length; i++) {
        count[array[i]]++;
      }
      let index = 0;
      for (let i = 0; i <= max; i++) {
        while (count[i] > 0) {
          array[index++] = i;
          setTimeout(() => {
            setData(_, primaryColor, array); // 更新图表
          }, 400);

          count[i]--;
        }
      }
      return array;
    }
  },
};

function isSorted(arr: Array<number>) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function setData(_: any, primaryColor: string, data: Array<number>) {
  _.setOption({
    series: {
      // 图表类型
      type: 'bar',
      label: {
        show: true,
      },
      data,
      itemStyle: {
        color: function (params: any) {
          return hexToRgba(primaryColor, params.value);
        },
      },
    },
  });
}

// 在前端开发中，排序是处理数据列表和数组时的一个常见需求。以下是一些常用的排序算法和方法，它们可以在JavaScript或类似的环境中使用，也适用于Flutter的Dart语言，因为Dart提供了类似的数据处理能力。
//
// 1. 冒泡排序（Bubble Sort）
// 冒泡排序是一种简单的排序算法，它重复地遍历要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。遍历数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
//
// function bubbleSort(array) {
//   let len = array.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }
// 2. 选择排序（Selection Sort）
// 选择排序算法是一种原址比较排序算法。它的工作原理是每次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。
//
// function selectionSort(array) {
//   let len = array.length;
//   for (let i = 0; i < len - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < len; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (i !== minIndex) {
//       let temp = array[i];
//       array[i] = array[minIndex];
//       array[minIndex] = temp;
//     }
//   }
//   return array;
// }
// 3. 插入排序（Insertion Sort）
// 插入排序的工作方式像排序一手扑克牌。开始时，我们左手为空并且桌子上的牌面朝下。然后，我们每次从桌子上拿走一张牌并将它插入左手中正确的位置。为了找到一张牌的正确位置，我们从右向左将它与已在手中的每张牌进行比较。
//
// function insertionSort(array) {
//   let len = array.length;
//   for (let i = 1; i < len; i++) {
//     let key = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > key) {
//       array[j + 1] = array[j];
//       j = j - 1;
//     }
//     array[j + 1] = key;
//   }
//   return array;
// }
// 4. 快速排序（Quick Sort）
// 快速排序是一种分而治之的排序算法。它通过从数列中挑出一个元素，将数列分为两部分，一部分的元素都比它小，另一部分的元素都比它大，然后递归地排序这两部分。
//
// function quickSort(array) {
//   if (array.length <= 1) {
//     return array;
//   }
//   let pivot = array[0];
//   let left = [];
//   let right = [];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < pivot) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }
// 5. 归并排序（Merge Sort）
// 归并排序是将两个或多个已排序的列表合并为一个新的已排序列表的过程。在计算机科学中，归并排序通常是一种分而治之的算法，它将数组分为两半，分别对它们进行排序，然后将排序后的子列表合并。
//
// function mergeSort(array) {
//   if (array.length <= 1) {
//     return array;
//   }
//   let middle = Math.floor(array.length / 2);
//   let left = array.slice(0, middle);
//   let right = array.slice(middle);
//   return merge(mergeSort(left), mergeSort(right));
// }
//
// function merge(left, right) {
//   let result = [];
//   let i = 0;
//   let j = 0;
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }
//   return result.concat(left.slice(i)).concat(right.slice(j));
// }
// 6. 计数排序（Counting Sort）
// 计数排序是一种线性时间复杂度的排序算法，适用于整数。它通过统计每个整数在数组中出现的次数，然后根据这些计数来计算每个整数在排序后数组中的位置。
//
// function countingSort(array, max) {
//   let count = Array(max + 1).fill(0);
//   for (let i = 0; i < array.length; i++) {
//     count[array[i]]++;
//   }
//   let index = 0;
//   for (let i = 0; i <= max; i++) {
//     while (count[i] > 0) {
//       array[index++] = i;
//       count[i]--;
//     }
//   }
//   return array;
// }
// 这些排序算法在前端开发中非常实用，尤其是在处理大量数据时。在实际应用中，通常会根据数据的特点和需求选择最合适的排序算法。例如，快速排序和归并排序在大多数情况下都有很好的性能，而计数排序则适用于已知范围内的整数排序。
