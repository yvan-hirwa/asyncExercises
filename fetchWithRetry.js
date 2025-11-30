function wait(delay){
  return new Promise(resolve => setTimeout(resolve, delay));
}

async function fetchWithRetry(url, retries, delay=1000){
  try{
    const response = await fetch(url);
    if(!response.ok) throw new Error('Fetch failed');
    return response;
  } catch(e){
    if(retries < 1) throw e;
    
    await wait(delay);
    return fetchWithRetry(url, retries - 1, delay * 2);
  }
}