export default function getStudentsByLocation(studentlist, city) {
	if (Array.isArray(studentlist)) {
	  return studentlist.filter((student.location === city));
	}

	return [];
}
