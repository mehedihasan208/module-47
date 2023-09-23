const findSomeApplication = () =>{
const searchApplication = localStorage.getItem('job-application')
if(searchApplication){
    return JSON.parse(searchApplication)
}
return []
}


const saveSomeApplication = id =>{
const searchApplications = findSomeApplication();
const exist = searchApplications.find(jobId=>jobId === id);
if(!exist){
searchApplications.push(id);
localStorage.setItem('job-application',JSON.stringify(searchApplications))
}
}

export{findSomeApplication,saveSomeApplication}