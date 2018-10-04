document.getElementById("openFile").addEventListener('change', function(){
		var fr = new FileReader();
		var iSize = this.files[0].size / 1024; 
		var mod = new Date(this.files[0].lastModified); 
		var fileName = this.files[0].name; 
		var checkSize = checkSize();
		var newsize;

		
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

		document.getElementById("MetadataFileContent").innerHTML ="<h1> Filename: </h1> <p>" + fileName + "</p>";
		document.getElementById("MetadataFileContent2").innerHTML = "<h1>Filesize </h1><p>" + newsize + "</p>";
		document.getElementById("MetadataFileContent3").innerHTML = "<h1> Last modified: </h1><p>" + mod + "</p>";



			   
	});
