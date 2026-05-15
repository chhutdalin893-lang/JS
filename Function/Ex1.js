function studentScore(ID , PHP , HTML , CSS , Boostrap ){
    let ID = prompt("Enter ID : ")
    let PHP = parseInt(prompt("Enter Score  : "))
    let HTML = parseInt(prompt("Enter Score  : "))
    let CSS = parseInt(prompt("Enter Score  : "))
    let Boostrap = parseInt(prompt("Enter Score  : "))
    return {
        ID : ID,
        PHP : PHP,
        HTML : HTML,
        CSS : CSS,
        Boostrap : Boostrap
    }
}
function total(){
    let total = PHP + HTML + CSS + Boostrap;
    return total;
}
function average(){
    let average = total()/4
    return average;
}
function grade(){
    let grade;
    let grade;
        if(average>90){
            grade = "A"
        }else if(average>80){
            grade = "B"
        }else if(average>70){
            grade = "C"
        }else if(average>60){
            grade = "D"
        }else if(average>50){
            grade = "E"
        }else{
            grade = "F"
        }
}