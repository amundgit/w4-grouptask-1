function readFile(){
    //document.getElementById("openFile").addEventListener('change', function(){

		//console.log(document.getElementById("openFile"));
        //var filename = document.getElementById("openFile").value;
        var fileName = sessionStorage.getItem('filename');
        var mod = sessionStorage.getItem('modified');
        var newsize = sessionStorage.getItem('size');
        var extension = sessionStorage.getItem('extension');


        if(extension === 'txt'){
            var textString = sessionStorage.getItem('text');
            clear();
            document.getElementById("FileContent").textContent = textString;                                  // TXTS
        }

        else if(extension === 'pdf'){
            var urlString = sessionStorage.getItem('url');
            clear();
            document.getElementById("FileContent").innerHTML = "<embed src=\"" + urlString + "\" width=\"100%\" height =\"1200px\" type=\"application/pdf\" ></embed>";   // PDFS
        }

        else if((extension === 'jpg')||(extension === 'jpeg')||(extension === 'png')||(extension === 'gif')){  //IMAGES
            var urlString = sessionStorage.getItem('url');
            clear();
            document.getElementById("FileContent").innerHTML = "<img style=\"width:800px; height:100%;\"src=\"" + urlString + "\"></img>";
            document.getElementById("MetadataFileContent").innerHTML ="<h2> Filename: </h2> <p>" + fileName + "</p>";
            document.getElementById("MetadataFileContent2").innerHTML = "<h2>Filesize </h2><p>" + newsize + "</p>";
            document.getElementById("MetadataFileContent3").innerHTML = "<h2> Last modified: </h2><p>" + mod + "</p>";
		}

        else if((extension === 'java')||(extension === 'py')||(extension === 'cs')||(extension === 'js')){     //CODES
            var textString = sessionStorage.getItem('text');
            clear();
            document.getElementById("codeInsert").textContent = textString;                               // TXTS
         }
            
        else{                                                                                                  // OTHER
            clear();
            document.getElementById("MetadataFileContent").innerHTML ="<h2> Filename: </h2> <p>" + fileName + "</p>";
            document.getElementById("MetadataFileContent2").innerHTML = "<h2>Filesize </h2><p>" + newsize + "</p>";
            document.getElementById("MetadataFileContent3").innerHTML = "<h2> Last modified: </h2><p>" + mod + "</p>";
		}

    
    function clear(){
        document.getElementById("FileContent").innerHTML = "" ;
        document.getElementById("MetadataFileContent3").innerHTML ="" ;
        document.getElementById("MetadataFileContent2").innerHTML = "";
        document.getElementById("MetadataFileContent").innerHTML ="" ;
        document.getElementById("fileInformation").innerHTML ="" ;
    }
    sessionStorage.clear();
}

function openNew(){
    //Setup
    var fr = new FileReader();
    var file = document.getElementById("fileUpload").files[0];
    
    var iSize = file.size / 1024; 
    var mod = new Date(file.lastModified); 
    var fileName = file.name; 
    var checkSize = checkSize();
    var newsize;
    var extension = getFileExtension(fileName.toString());
    console.log(fileName);
    console.log(extension);
    sessionStorage.setItem('filename',fileName);
    sessionStorage.setItem('modified',mod);
    sessionStorage.setItem('size',newsize);
    sessionStorage.setItem('extension',extension);

    if((extension === 'jpg')||(extension === 'jpeg')||(extension === 'png')||(extension === 'gif')||(extension === 'pdf')){
        fr.onload = function(event){
            let url = event.target.result;
            //console.log(url);
            sessionStorage.setItem('url',url); 
            var myWindow = window.open("second.html","_self");
            console.log("pre load");
        }
        var URLtest = fr.readAsDataURL(file);
    }else if((extension === 'txt')||(extension === 'java')||(extension === 'py')||(extension === 'cs')||(extension === 'js')){
        fr.onload = function(event){
            let text = event.target.result;
            //console.log(url);
            sessionStorage.setItem('text',text); 
            var myWindow = window.open("second.html","_self");
            console.log("pre load");
        }
        var URLtest = fr.readAsText(file);
    }else{
        var myWindow = window.open("second.html","_self");
    }

    function checkSize(){
        if (iSize / 1024 > 1) { 
            if (((iSize / 1024) / 1024) > 1) 
            { 
                iSize = (Math.round(((iSize / 1024) / 1024) * 100) / 100);
                newsize =  iSize + "Gb"; 
            }
            else
            { 
                iSize = (Math.round((iSize / 1024) * 100) / 100);
                newsize =  iSize + "Mb"; 
            } 
        } 
        else 
        {
            iSize = (Math.round(iSize * 100) / 100);
            newsize =  iSize + "Kb"; 
        }
    }
}

function getFileExtension(filename) {
       return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}