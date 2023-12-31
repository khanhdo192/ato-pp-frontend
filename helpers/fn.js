<<<<<<< HEAD
const flattenDeep = leaves => {
  return leaves.reduce((flattenArray, leaf) => {
    if (leaf.hasOwnProperty('channel')) {
      return flattenArray.concat(leaf);
    }
    if (Array.isArray(leaf.leaves)) {
      return flattenArray.concat(flattenDeep(leaf.leaves));
    }
    return flattenArray;
  }, []);
};
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
const getTotalUserTestSets = stateUserTestSets => {
  console.log('Method: tc-service.getTotalUserTestSets');
  if (!stateUserTestSets || Object.keys(stateUserTestSets).length <= 0) {
    return [];
  }
  let totalList = [];
  Object.keys(stateUserTestSets)
    .sort()
    .forEach(function(pageIndex) {
      totalList = totalList.concat(stateUserTestSets[pageIndex]);
    });
  if (!totalList || totalList.length <= 0) {
    return [];
  }
  return totalList;
};

const getViewTestLogs = (testLog) => {
  const sortMap = {
    "3DSR23DSS": 1,
    "3DSS2DS": 2,
    "DS2ACS": 3,
    "3DSR2ACS": 4,
    "send": 5,
    "result": 6,
    "ACS2DS": 7,
<<<<<<< HEAD
    "DS23DSS": 8
  };
  const logList = testLog || [];
  let result = [];

  logList.sort((a, b) => sortMap[a.direction] - sortMap[b.direction]);

  logList.map( log => {
    const logAdded = result.find(f => Array.isArray(f) ? (f[0].direction === log.direction) : (f.direction === log.direction));
    if (!logAdded)
      return result.push(log);
    else
      result = result.filter(f => (Array.isArray(f) ? (f[0].direction && f[0].direction) : (f.direction && f.direction)) !== (Array.isArray(logAdded) ? logAdded[0].direction : logAdded.direction));

      let newLogAdded;

      if (Array.isArray(logAdded)) {
        logAdded.push(log);
        newLogAdded = logAdded;
      } else {
        newLogAdded = [logAdded,log];
      }

      return result.push(newLogAdded);
  });

=======
    "DS23DSS": 8,
    "DS2SERVER": 9
  };
  const logList = testLog || [];
  const result = [];
  logList.map( log => {
    if(! result.find(f => f.direction == log.direction))
      return result.push(log);
  });
  result.sort((a, b) => sortMap[a.direction] - sortMap[b.direction]);
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  return result;
}

const padLeft = (str, len) => {
  str = "" + (str + 1);
  return str.length >= len ? str : new Array(len - str.length + 1).join("0") + str;
}

const getResult = (result) => {
  switch(result) {
    case '0':
      return 0;
      break;
    case '1':
      return 1;
      break;
    case 'null':
      return 2;
      break;
  }
}

const getDate = (createdTime) => {
<<<<<<< HEAD
  return new Date(createdTime).toISOString().split('T')[0];
};

const getTime = (createdTime) => {
  return new Date(createdTime).toISOString().split('T')[1].split('.')[0];
};

const handleSort = ({list, setlist, value, sortedBy, setSortedBy, setIsSorted}) => {
  if (!list || list.length === 0) return setSortedBy(value);

=======
  return createdTime ? new Date(createdTime).toISOString().split('T')[0] : "";
};

const getTime = (createdTime) => {
  return createdTime ? new Date(createdTime).toISOString().split('T')[1].split('.')[0] : "";
};

const handleSort = ({list, setlist, value, sortedBy, setSortedBy, setIsSorted}) => {
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  let listSorted = [];
  if (sortedBy === value)
    listSorted = list.reverse();
  else {
    setSortedBy(value);

    if (value == 'tcListLength') {
      listSorted = list.sort((a, b) =>
        a.tcList.length >= b.tcList.length ? 1 : a.tcList.length <= b.tcList.length ? -1 : 0
      );
    }
    else if (value == 'date') {
      listSorted = list.sort((a, b) =>
        getDate(a.createdTime) >= getDate(b.createdTime) ? 1
        : getDate(a.createdTime) <= getDate(b.createdTime) ? -1
        : 0
      );
    }
    else if (value == 'time') {
      listSorted = list.sort((a, b) =>
        getTime(a.createdTime) >= getTime(b.createdTime) ? 1
        : getTime(a.createdTime) <= getTime(b.createdTime) ? -1
        : 0
      );
    }
    else if (value == 'createdTime') {
      listSorted = list.sort((a, b) =>
       a[value] >= b[value] ? 1 : a[value] <= b[value] ? -1 : 0
      );
    }
    else if (value == 'getResult') {
      listSorted = list.sort((a, b) =>
       getResult(a.result) >= getResult(b.result) ? 1
       : getResult(a.result) <= getResult(b.result) ? -1
       : 0
      );
    }
    else {
      listSorted = list.sort((a, b) =>
        (a[value] ? a[value] : 'Zz') >= (b[value] ? b[value] : 'Zz') ? 1
        : (a[value] ? a[value] : 'Zz') <= (b[value] ? b[value] : 'Zz') ? -1
        : 0
      );
    }
  }
  setlist(listSorted);
  setIsSorted(true);
}

const getHistoryBothVersions = (histories = null) => {
  const result = [];

  if (!histories)
    return result;

  Object.keys(histories).forEach(key => {
    const his = histories[key];

    his.map( h => {
      return result.push(h);
    });

  });

  return result;
}

<<<<<<< HEAD
export { flattenDeep, getTotalUserTestSets, getViewTestLogs, handleSort, padLeft, getResult, getDate, getTime, getHistoryBothVersions };
=======
export { getTotalUserTestSets, getViewTestLogs, handleSort, padLeft, getResult, getDate, getTime, getHistoryBothVersions };
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
