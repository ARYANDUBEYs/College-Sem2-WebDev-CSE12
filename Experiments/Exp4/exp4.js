function calculateResult ()
{
    let n = document.getElementById("subjects").value;
    let total = 0;
    console.log(n)
    for(let i=1; i<=parseInt(n); i++)
    {
        let mark = parseFloat(prompt("Enter marks for subjec " + i))
        total = total + mark;
    }
    let average = total/n;
    let grade;
    let result;
    if(average >= 90)
    {
        grade = "A";
    }
    else if(average >= 60)
    {
        grade = "B";
    }
    else if (average >= 40)
    {
        grade = "C";
    }
    else{
        result = "FAIL";
    }
    document.getElementById("result").innerHTML = 
    "Total Marks: " + total + "<br>" + 
    "Average Marks: " + average + "<br>"
}