class App {
  constructor(gradeTable, pageHeader){
    this.pageHeader = pageHeader;
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  handleGetGradesError(error){
    console.log(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
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

  start(){
    this.getGrades();
  }
}
