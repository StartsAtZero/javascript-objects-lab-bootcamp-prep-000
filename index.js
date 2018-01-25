var recipes = {flour:"2 cups",eggs:3, milk:"1 cup"}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object,{[key]:value});
}
updateObjectWithKeyAndValue(recipes, "sugar","2 tbs")

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, "oil", "2 tsp");

function deleteFromObjectByKey (object, key){
  delete object[key];
  return object;
}
deleteFromObjectByKey(recipes,"flour");