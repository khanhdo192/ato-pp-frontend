const currJobState = state => {
<<<<<<< HEAD
  const currJob = state?.currJob;
=======
  const currJob = state.currJob;
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  if (
    !currJob ||
    !currJob.hasOwnProperty('isRunning') ||
    !currJob.hasOwnProperty('result')
  ) {
    return 'available';
  }

  const exeResult = currJob.result.toLowerCase();
  if (
    !currJob.isRunning &&
    (exeResult == 'success' || exeResult == 'failure')
  ) {
    return 'finished';
  } else if (currJob.isRunning) {
    return 'runing';
  }
  return 'other';
};
<<<<<<< HEAD
const allTcTreeProjectTestCases = state => {
  if (!state.tcTree || state.tcTree.length <= 0) {
    return [];
  }
  return fn.flattenDeep(state.tcTree);
};
const numberTcResults = state => {
  if (!state.tcResults) {
    return {};
  }
  return state.tcResults;
};

export { currJobState, allTcTreeProjectTestCases, numberTcResults };
=======

export { currJobState };
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
