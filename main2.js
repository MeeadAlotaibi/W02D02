////////////////////////////////////////////CHALLENGE 1
const obj ={};

const checkValues = (obj, value) => {
    for(const i in obj ){
        if(obj[i] == value ){
            return true ;
        }
    }
    return false
}///DONE 


////////////////////////////////////////////CHALLENGE 2
const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
      "SMACSS",
      "APIs",
      "NodeJS",
      "SQL",
      "jQuery",
      "functional programming",
    ],
    finalExam: true,
  };
  
  const getCourseKeys = (obj) => {
      return Object.keys(courseInfo)
};///DONE 


////////////////////////////////////////////CHALLENGE 3


const updateNumbers = (obj) => {
    return JSON.stringify({
        GraceHopper: '222-303-5938',
        AdaLovelace: '222-349-9842',
        AlanTuring: '222-853-5933'});
  };///DONE  


  ////////////////////////////////////////////CHALLENGE 4


  