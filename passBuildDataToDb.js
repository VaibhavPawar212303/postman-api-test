const testFolder = "./newman/";
const fs = require("fs");
const url = "https://dashboard-api-backhend-production.up.railway.app/api/build/createbuild";
fs.readdir(testFolder, (err, files) => {
  console.log(files);
  fs.readFile(
    `./newman/${files[0]}`,
    { encoding: "utf-8" },
    function (err, data) {
      let collectionTestData = JSON.parse(data);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project_id: 1,
          project_type: "Postman_API Test",
          BuildData: collectionTestData,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  );
});
