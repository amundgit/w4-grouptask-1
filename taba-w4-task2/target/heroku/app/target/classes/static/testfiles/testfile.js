function readFile(){
	console.log(document.getElementById("openFile")); 
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

       
