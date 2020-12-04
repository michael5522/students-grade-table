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
    this.pageHeader.updateAverage(gradeAverage);
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
    console.log(name,course,grade);
  }

  handleCreateGradeError(error){
    console.log("error", error);
  }

  handleCreateGradeSuccess(){
    this.getGrades();
  }


  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade)
  }
}
