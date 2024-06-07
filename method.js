

export function updateArrayValue(arrNumber, giaTriGoc, giaTriMoi) {
  let updatedArray = [...arrNumber];

  for (let i = 0; i < updatedArray.length; i++) {
    if (updatedArray[i] === giaTriGoc) {
      updatedArray[i] = giaTriMoi;
    }
  }

  return { updated: true, updatedArray: updatedArray };
}