birth = parseInt(prompt("Enter Your DOB Year Only:"));
bmonth = parseInt(prompt(" Enter Your DOB Month:"));
year = parseInt(prompt("Enter Current Year:"));
ymonth = parseInt(prompt("Enter Current Month:"));


age = year - birth;
ageM = ymonth - bmonth;

if (ageM<0) {
    age--;
    ageM += 12;
}

alert(`you're ${age} Year AND ${ageM} Month Old.`);

