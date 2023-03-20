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
    case "number":
        console.log ("number!");
        break;
    case isNaN(data):
        console.log ("not a number!");
        break;
    case "string":
        console.log ("string!");
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
    case typeof null:
        console.log ("object!");
        break;
    case Array.isArray(data):
        console.log ("array!");
        break;
    default: 
        console.log ("I have no idea!");
}
