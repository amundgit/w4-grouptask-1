function readFile(){
		console.log(document.getElementById("openFile")); //BYTT NAVN TIL RIKTIG PÅ INDEX.HTML FØR DERE TESTER VIDERE
        var filename = document.getElementById("openFile").value;
        var extension = getFileExtension(filename.toString());
        var name = "balle";
        var fileSize = 123;
        var modified = "12-01-2015"
        if(extension === 'txt'){
        	console.log('text');
        }
        else if((extension === 'pdf')||(extension === 'xml')){
        	console.log('pdf or xml');
        }
        else if((extension === 'jpg')||(extension === 'jpeg')||(extension === 'png')||(extension === 'gif')){
        	console.log('image');
		}
        else if((extension === 'java')||(extension === 'py')||(extension === 'cs')||(extension === 'js')){
        	console.log('code');
		}
        else{
        	console.log('something else');
            var iSize = this.files[0].size / 1024; 
            var mod = new Date(this.files[0].lastModified); 
            var fileName = this.files[0].name; 

            document.getElementById("MetadataFileContent").innerHTML ="<h1> Filename: </h1> <p>" + fileName + "</p>";
            document.getElementById("MetadataFileContent3").innerHTML = "<h1> Last modified: </h1><p>" + mod + "</p>";


            if (iSize / 1024 > 1) { 
                    if (((iSize / 1024) / 1024) > 1) 
                    { 
                        iSize = (Math.round(((iSize / 1024) / 1024) * 100) / 100);
                       document.getElementById("MetadataFileContent2").innerHTML = "<h1> Filesize: </h1><p> "+ iSize + "Gb </p>"; 
                    }
                    else
                    { 
                        iSize = (Math.round((iSize / 1024) * 100) / 100)
                        document.getElementById("MetadataFileContent2").innerHTML ="<h1> Filesize: </h1> <p>"+ iSize + "Mb </p>"; 
                    } 
                 } 
                 else 
                 {
                    iSize = (Math.round(iSize * 100) / 100)
                    document.getElementById("MetadataFileContent2").innerHTML ="<h1> Filesize: </h1><p> "+ iSize + "Kb </p>"; 
                 }   
		}
}		

function getFileExtension(filename) {
   return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
          }
             