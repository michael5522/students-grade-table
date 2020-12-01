var table = document.querySelector('table');
var gTable = new GradeTable(table);
var headerElement = document.querySelector('header');
var pageHeader = new PageHeader(headerElement)
var app = new App(gTable, pageHeader);
app.start();
