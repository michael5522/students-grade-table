class App {
  constructor(){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  handleGetGradesError(error){
    console.log(error);
  }
  handleGetGradesSuccess(grades){
    console.log(grades);
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
