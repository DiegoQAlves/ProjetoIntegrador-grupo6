var products = JSON.parse(response),
    templateProductItem = document.getElementById('template-product-item').innerHTML,
    compiled = _.template(templateProductItem),
    html = '';
 
products.forEach(function(product) {
    html += compiled(data);
});
$('#products').append(html);

products.forEach(function(product) {
    var data = {
        id: product.id,
        title: product.title,
        descricao: product.descricao,
        disponivel: product.disponivel,
        classificacao: product.classificacao
    }
    html += compiled(data);
});