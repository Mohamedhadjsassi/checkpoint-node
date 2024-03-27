const fs = require("fs");
//creation of the file

if (!fs.existsSync("./welcome.txt")) {
  fs.writeFile("./welcome.txt", "Hello Node", (error) => {
    if (error) {
      console.log(error);
    }
  });
}
//reading the file

fs.readFile("./welcome.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("the welcome file contain : " + data.toString());
  }
});

