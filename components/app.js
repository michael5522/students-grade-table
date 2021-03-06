class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeForm = gradeForm;
    this.pageHeader = pageHeader;
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);

    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.createGrade = this.createGrade.bind(this);
  }

  handleGetGradesError(error){
    console.log(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);

    var gradeSum = 0;
    for(var i=0;i<grades.length;i++){
      gradeSum += grades[i].grade;
    }
    var gradeAverage = gradeSum/grades.length;
    this.pageHeader.updateAverage(gradeAverage.toFixed(0));
  }

  getGrades(){
    var gradesURL = "https://sgt.lfzprototypes.com/api/grades/";
    var requestPayload = {
      method: "GET",
      url: gradesURL,
      headers: {
        "X-Access-Token": "WLyN10XR"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    }

    $.ajax(requestPayload)
  }
  createGrade(name,course,grade){

    var createURL = "https://sgt.lfzprototypes.com/api/grades/";

    var postPayload = {
      method: "POST",
      url: createURL,
      dataType: "JSON",
      headers: {
        "X-Access-Token": "WLyN10XR"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    }
    $.ajax(postPayload)
  }

  handleCreateGradeError(error){
    console.log("error", error);
  }

  handleCreateGradeSuccess(){
    this.getGrades();
  }


  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
}
