//assigning subject marks to variable
function getGrade(){
const a = document.getElementById('numEnglish').value;
const b = document.getElementById('numKiswahili').value;
const c = document.getElementById('numMath').value;
const d = document.getElementById('numScience').value;
const result = a -( - b ) - ( - c ) - ( - d);
const avgResult = result / 4;

//array containing variables for all subjects
const arrMarks = [a, b, c, d];

//English grade switch case with ternary expressions
switch(
    (arrMarks[0] > 79 && arrMarks[0] <= 100) ? 1 : 
    (arrMarks[0] >= 60 && arrMarks[0] <= 79) ? 2 : 
    (arrMarks[0] >= 49 && arrMarks[0] <= 59) ? 3 : 
    (arrMarks[0] >= 40 && arrMarks[0] <= 48) ? 4 : 0
  )
    
    {
        case 1 :aGrade = "A";break;
        case 2 :aGrade = "B";break;
        case 3 :aGrade = "C";break;
        case 4 :aGrade = "D";break;
        case 0 :aGrade = "E";break;
    }
//Kiswahili grade
    switch(
        (arrMarks[1] > 79 && arrMarks[1] <= 100) ? 1 : 
        (arrMarks[1] >= 60 && arrMarks[1] <= 79) ? 2 : 
        (arrMarks[1] >= 49 && arrMarks[1] <= 59) ? 3 : 
        (arrMarks[1] >= 40 && arrMarks[1] <= 48) ? 4 : 0
      )
        
        {
            case 1 :bGrade = "A";break;
            case 2 :bGrade = "B";break;
            case 3 :bGrade = "C";break;
            case 4 :bGrade = "D";break;
            case 0 :bGrade = "E";break;
        }
//Maths grade
        switch(
            (arrMarks[2] > 79 && arrMarks[2] <= 100) ? 1 : 
            (arrMarks[2] >= 60 && arrMarks[2] <= 79) ? 2 : 
            (arrMarks[2] >= 49 && arrMarks[2] <= 59) ? 3 : 
            (arrMarks[2] >= 40 && arrMarks[2] <= 48) ? 4 : 0
          )
            
            {
                case 1 :cGrade = "A";break;
                case 2 :cGrade = "B";break;
                case 3 :cGrade = "C";break;
                case 4 :cGrade = "D";break;
                case 0 :cGrade = "E";break;
            }
//science grade
            switch(
                (arrMarks[3] > 79 && arrMarks[3] <= 100) ? 1 : 
                (arrMarks[3] >= 60 && arrMarks[3] <= 79) ? 2 : 
                (arrMarks[3] >= 49 && arrMarks[3] <= 59) ? 3 : 
                (arrMarks[3] >= 40 && arrMarks[3] <= 48) ? 4 : 0
              )
               
                {
                    case 1 :dGrade = "A";break;
                    case 2 :dGrade = "B";break;
                    case 3 :dGrade = "C";break;
                    case 4 :dGrade = "D";break;
                    case 0 :dGrade = "E";break;
                }
//average grade 
                switch(
                    (avgResult > 79 && avgResult <= 100) ? 1 : 
                    (avgResult >= 60 && avgResult <= 79) ? 2 : 
                    (avgResult >= 49 && avgResult <= 59) ? 3 : 
                    (avgResult >= 40 && avgResult <= 48) ? 4 : 0
                  )
                    
                    {
                        case 1 :avgGrade = "A";break;
                        case 2 :avgGrade = "B";break;
                        case 3 :avgGrade = "C";break;
                        case 4 :avgGrade = "D";break;
                        case 0 :avgGrade = "E";break;
                    }

//displaying the results
document.getElementById('txtStudentName').value = document.getElementById('studentName').value;
document.getElementById('txtEnglish').value = aGrade;
document.getElementById('txtKiswahili').value = bGrade;
document.getElementById('txtMaths').value = cGrade;
document.getElementById('txtScience').value = dGrade;
document.getElementById('numTotalMarks').value = result;
document.getElementById('numAvgMarks').value = avgResult;
document.getElementById('txtAvgGrade').value = avgGrade;

}