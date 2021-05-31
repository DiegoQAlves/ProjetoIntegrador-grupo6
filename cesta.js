// Obter dados
function updateData() {
    cartData = JSON.parse(localStorage.getItem('cart')) || [];
    return cartData;
}
 
// Retornar dados
function getData() {
    return cartData;
}
 
// Salve os dados no localStorage
function saveData() {
    localStorage.setItem('cart', JSON.stringify(cartData));
    return cartData;
}
 
// Limpando os dados
function clearData() {
    cartData = [];
    saveData();
    return cartData;
}
 
// Procurar um objeto na coleção cartData por id
function getById(id) {
    return _.findWhere(cartData, {id: id});
}
 
// Adicionar um produto a uma coleção
function add(item) {
    var oldItem;
    updateData();
    oldItem = getById(item.id);
    if(!oldItem) {
        cartData.push(item);
    } else {
        oldItem.count = oldItem.count + item.count;
    }
    saveData();
    return item;
}
 
// Removendo um item da coleção
function remove(id) {
    updateData();
    cartData = _.reject(cartData, function(item) {
        return item.id === id;
    });
    saveData();
    return cartData;
}
 
// Alterar a quantidade de um item em uma coleção
function changeCount(id, delta) {
    var item;
    updateData();
    item = getById(id);
    if(item) {
        item.count = item.count + delta;
        if (item.count < 1) {
            remove(id);
        }
        saveData();
    }
    return getById(id) || {};
}
 
// Devolvemos a quantidade de mercadorias (o número de tipos de mercadorias no carrinho de compras)
function getCount() {
    return _.size(cartData);
}
 
// Devolvemos a quantidade total de mercadorias 
function getCountAll() {
    return _.reduce(cartData, function(sum, item) {return sum + item.count}, 0);
}
 
// Devolvemos o valor total
function getSumma() {
    return _.reduce(cartData, function(sum, item) {return sum + item.count * item.price}, 0);
}    