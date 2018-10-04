function readFile(){
		console.log(document.getElementById("fileUpload"));
        var filename = document.getElementById("fileUpload").value;
        var extension = getFileExtension(filename.toString());
        /*var file = ;
        var fileSize = file.size;
        var modified = file.lastModified;
        var name = file.name;*/
        var myWindow = window.open("/second.html","_self");
        myWindow.document.open();
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
            console.log(myWindow.document.getElementById("showFile"));
            myWindow.document.getElementById("showFile").innerHTML = "The file "+ name +" is of type " + 
        extension + ", with a size of "+ fileSize +", and was last modified " + modified;

		}
        //myWindow.document.close();
}		

function getFileExtension(filename) {
   return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
          }
             