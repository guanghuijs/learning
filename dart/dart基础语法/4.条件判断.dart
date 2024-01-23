main(){ if(true){ print('1'); }else{ print('2'); } calGrade(int score){
switch(score){ case 100: { print('100'); } break; case 90: { print(90); } break;
case 80: { return '80'; } } }; calGrade(100); // 100 calGrade(90); // 90
print(calGrade(80)); // 80 }
