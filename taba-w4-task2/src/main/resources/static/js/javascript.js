//function readFile(){
    document.getElementById("openFile").addEventListener('change', function(){

		console.log(document.getElementById("openFile"));
        var filename = document.getElementById("openFile").value;
        var extension = getFileExtension(filename.toString());
        var fr = new FileReader();


        //sizechecking
        var iSize = this.files[0].size / 1024; 
        var mod = new Date(this.files[0].lastModified); 
        var fileName = this.files[0].name; 
        var checkSize = checkSize();
        var newsize;


        if(extension === 'txt'){
            clear();

            fr.onload = function(){
            document.getElementById("FileContent").textContent = this.result;                                  // TXTS
             }
        }

        else if(extension === 'pdf'){
            clear();
            document.getElementById("FileContent").innerHTML = "<embed src=\"testfiles/testfile.pdf\" width=\"100%\" height =\"1200px\" type=\"application/pdf\" ></embed>"   // PDFS
        }

        else if((extension === 'jpg')||(extension === 'jpeg')||(extension === 'png')||(extension === 'gif')){  //IMAGES
            clear();
            document.getElementById("FileContent").innerHTML = "<img style=\"width:800px; height:100%;\"src=\"testfiles/testfile.jpg\"></img>"
            document.getElementById("MetadataFileContent").innerHTML ="<h2> Filename: </h2> <p>" + fileName + "</p>";
            document.getElementById("MetadataFileContent2").innerHTML = "<h2>Filesize </h2><p>" + newsize + "</p>";
            document.getElementById("MetadataFileContent3").innerHTML = "<h2> Last modified: </h2><p>" + mod + "</p>";
		}

        else if((extension === 'java')||(extension === 'py')||(extension === 'cs')||(extension === 'js')){     //CODES
            clear();
            fr.onload = function(e){
            document.getElementById("codeInsert").textContent = this.result                               // TXTS
             }
         }
            
        else{                                                                                                  // OTHER
            clear();
            document.getElementById("MetadataFileContent").innerHTML ="<h2> Filename: </h2> <p>" + fileName + "</p>";
            document.getElementById("MetadataFileContent2").innerHTML = "<h2>Filesize </h2><p>" + newsize + "</p>";
            document.getElementById("MetadataFileContent3").innerHTML = "<h2> Last modified: </h2><p>" + mod + "</p>";

           
		}

    function getFileExtension(filename) {
       return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
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
                            iSize = (Math.round((iSize / 1024) * 100) / 100)
                           newsize =  iSize + "Mb"; 
                        } 
                     } 
                     else 
                     {
                        iSize = (Math.round(iSize * 100) / 100)
                           newsize =  iSize + "Kb"; 
                     }
            }
    function clear(){
        document.getElementById("FileContent").innerHTML = "" ;
        document.getElementById("MetadataFileContent3").innerHTML ="" ;
        document.getElementById("MetadataFileContent2").innerHTML = "";
        document.getElementById("MetadataFileContent").innerHTML ="" ;
        document.getElementById("fileInformation").innerHTML ="" ;
    }

        fr.readAsText(this.files[0]);

});