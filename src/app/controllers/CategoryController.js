class CategoryController {

  index(request, response){
    response.send('Ok - index')
  }

  store(request, response){
    response.send('Ok - store')
  }

}

module.exports = new CategoryController();
