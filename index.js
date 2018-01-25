var recipes = {flour:"2 cups",eggs:3}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object,{[key]:value});
}
updateObjectWithKeyAndValue(recipes, "sugar","2 tbs")

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, "oil", "2 tsp");