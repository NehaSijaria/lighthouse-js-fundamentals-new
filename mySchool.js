function  whichSchool( age ) {
  if(age<13){
    console.log("Elementary School");
  } else if(age >13 && age <18){
    console.log("Secondary School");
  }
  else {
    console.log("LHL");
  }
}

whichSchool(34);