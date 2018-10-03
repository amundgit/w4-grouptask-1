function readFile(){
		console.log(document.getElementById("fileUpload"));
        var filename = document.getElementById("fileUpload").value;
        var extension = getFileExtension(filename.toString());
        if(extension === 'txt'){
        	//call displayTxt(filename) eller whatever
        	console.log('text');
        }else if((extension === 'pdf')||(extension === 'xml')){
        	console.log('pdf or xml');
        	//call displayPdf osv
        }else if((extension === 'jpg')||(extension === 'jpeg')||(extension === 'png')||(extension === 'gif')){
        	console.log('image');
		}else if((extension === 'java')||(extension === 'py')||(extension === 'cs')||(extension === 'js')){
        	console.log('code');
		}else{
        	console.log('something else');
		}
}		

function getFileExtension(filename) {
   return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
          }
             