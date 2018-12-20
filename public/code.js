window.addEventListener("load", ()=>{

  var validExtensions = ["jpeg", "jpg", "png"];

  // Ajax request, hiermee kan je data van een website opvragen doormiddel bijvoorbeeld een API
  // http://api.jquery.com/jquery.ajax/

  $.get("http://localhost:8080/list-files", (files) => {
    $(files).each((index, filepath) => {
      const parts = filepath.split("/");

      const filename = parts[parts.length - 1];
      const personName = parts[parts.length - 2];
      const mediumName = parts[parts.length - 3];

      const extName = filename.split(".").pop();

      if(validExtensions.indexOf(extName) > -1){

        // here you do it here

      }


    })
  })
})
