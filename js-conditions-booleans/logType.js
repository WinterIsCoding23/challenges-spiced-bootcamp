let data;
data = ["hello", 23, true];
console.log (typeof data);

switch (typeof data) {
    case "":
        console.log ("undefined!");
        break;
    case null:
        console.log ("null!");
        break;
    case "string":
        console.log ("string!");
        break;
    case "number":
       if (Number.isNaN(data)) {
         console.log ("not a number!");
         break;
       } else {
        console.log (data, " is a number!") 
        }
        break; 
    case "object":
       if (data === null) {
           console.log (data, " null!");
       } else if (Array.isArray (data)) {
           console.log (data, " array!");
       } else {
           console.log (data, " object!");
       }
       break;       
    case true || false:
        console.log ("boolean!");
        break;
    case "bigint":
        console.log ("bigint!");
        break;
    case "function":
        console.log ("function!");
        break;    
    default: 
        console.log ("I have no idea!");
}
