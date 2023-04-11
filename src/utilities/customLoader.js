const loadSingleJobData = async (id) => {
    const res = await fetch("/jobData.json");
    const data = await res.json();
    const selectedJob = data.find(singleData => +id === singleData.id);
    return selectedJob;

}
export { loadSingleJobData };
