// JavaScript för att implementera kraven A-E.
$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'http://demo.edument.se/api/products',
        dataType: 'json'
    }).done(function (data) {
        console.log(data);
        $.map(data, function (post, i) {
            $('#output').append('<h3>' + post.Name + '</h3><p>' + post.Price + '</p>'
                + '<img>' + post.image +'<p>' + post.Description +'</p>' +'<p>'+post.items+'</p>' +
                '<p><input type="submit" value="Add to cart" class="add-to-cart" /></p>');
        });
    });

    $(".add-to-cart").click(function(event){
        event.preventDefault();
        let name = $(this).attr("data-name");
        let price = Number($(this).attr("data-price"));
        addItemToCart(name, price, 1);
        displayCart();
    });

    function displayCart(){
        let cartArray = listCart();
        let output = "";
        for (let i in cartArray){
            output += "<li>"+cartArray[i].name+""+cartArray[i].count+"</li>"
        }
        $("#show-cart").html(output);
    }

    /*let items = new Array("1","2","3","4","5","6","7","8","9","10");
    let i=0;
    let rand;
    document.write("<ol><li>");
    while(items.length) {
        rand = Math.floor(Math.random()*(items.length));
        document.write(items[rand]);
        items.splice(rand,1);
        if(items.length) {
            if(i%2) {
                document.write("</li><li>");
            } else {
                document.write(" - ");
            }
            i++;
        }
    }
    document.write("</ol>");*/

    /*
            $.get('test.html', function(data){
                $('#result').html(data);
            });

            */
    /*$('#postForm').submit(function(e){
        e.preventDefault();
        let name = $('#name').val();
        let price = $('#price').val();
        let url = $(this).attr('action');

        $.post(url, {name:name, price:price}).done(function(data){
            console.log('Post Saved');
            console.log(data);
        });
    });*/
});