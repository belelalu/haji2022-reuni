document.getElementById("btnLoad").addEventListener("click", function () {

    const url = "https://script.google.com/macros/s/AKfycbzooPJLIUemyCzw1ff-x47N1J8rhXajd458I3KWfNRq8nY67ulNIQqRAIuKZA2ECsEl/exec";
  
    const params = new URLSearchParams({
      api: "1",
      action: "read",
      payload: JSON.stringify({
        sheetName: "Users"
      })
    });
  
    fetch(url + "?" + params.toString())
      .then(res => res.json())
      .then(data => {
        document.getElementById("output").innerText =
          JSON.stringify(data, null, 2);
      })
      .catch(err => {
        document.getElementById("output").innerText = "Error: " + err;
      });
  
  });