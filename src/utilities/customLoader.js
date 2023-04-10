const loadSingleJobData = async (id) => {
    const res = await fetch("/jobData.json");
    const data = await res.json();
    const selectedJob = data.find(singleData => +id === singleData.id);
    // console.log(selectedJob);
    return selectedJob;

}
export { loadSingleJobData };