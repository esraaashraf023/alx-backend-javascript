function getStudentIdsSum(studentlist) {
  return studentlist.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
