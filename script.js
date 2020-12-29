startRecon();
function startRecon(){
    console.clear()
     
        let links = document.links;
        let linkArr = Array.from(links)

       linkArr.map(link => {
           if(link.href.includes("s3") || link.href.includes("s3.amazonaws.com")){
               console.log(`[$] S3 bukcet found ${link.href}`)
           }
       })
    // popup.html
    // Extract API endpoints
    // make an request to s3 hosted website
    // Auth system
    // fix the timing issue 

    let scripts = document.scripts;
    let scrArr = Array.from(scripts)

  console.log("[*] Extracting JS files") 
  console.log("[!] Not extracting from external sites ");

 scrArr.map(script => {
     if(!script.src.includes(window.location.host)){
         let ssas;
     } else if(script.src.includes(window.location.host)){
        console.log(script.src)
     } // filter out the host javascript files
 })
 console.log(
    "[*] Done") 

 console.log("[JS] Analyzing JavaScript Files")
    scrArr.map(script => {
        if(script.src.includes(window.location.host)){
            fetch(script.src).then(res => res.text()).then(res => {
                if(res.includes("amazonaws.com") || res.includes("s3.amazonaws.com")){
                    console.log("S3 bukcet")
                }

                const arrayed = Array.from([res])
                let info = [arrayed.find(inf => inf.includes("api_key") || inf.includes("private_key") ||  inf.includes("/api/") ||  inf.includes(".api") || inf.includes("amazonaws") == 1)];
                if(typeof info[0] !== "string"){
                    let errors;
                } else {
                    console.log('[=>] This script may be contaning sensitive info' + ' ' + script.src)
                }
            })
    }})

    
    linkArr.map(link => {
       if(link.href.includes("facebook.com") || link.href.includes("twitter.com") || link.href.includes("instagram.com")  || link.href.includes("linkedin.com") ){
           console.log('[+] Broken link: ' + link.href)
       }
    })

    let search = window.location.search;
    if(search.includes('?id')){
        console.log(`[+] Try IDOR on the ${search} param`)
    }
    
    if(search.includes('?next') || search.includes('?return_url') || search.includes('?url')){
        console.log("try open redirect" + 'in' + window.location.search + 'parameter')
    }

    const port = window.location.port;
    if(port){
        console.log(`You are running on the port ${port} try scanning other ports`)
    }

    if(window.location.pathname == '/admin/'){
        console.log("/FUZZ/ did you try to do directory bruteforcing?  /FUZZ/")
    }
};