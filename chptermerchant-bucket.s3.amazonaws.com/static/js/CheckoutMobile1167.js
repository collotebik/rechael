//csrf token
var user = '{{request.user}}'

function getToken(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};
var csrftoken = getToken('csrftoken');

window.addEventListener('load', (event) =>{

    mpesapayment.getElementsByClassName('card')[0].style.border = 'solid 2px rgb(0, 71, 251)';
    cardpayment.getElementsByClassName('card')[0].style.border = 'none';
    // document.getElementById('Group_5320_re').style.visibility = 'hidden'

    let membership_field = document.getElementById('Group_5244_1');
    
    if (typeof(membership_field) != 'undefined' && membership_field != null) {
    // Exists.
    document.getElementById('Group_5235').style.top= '930px';
    }

});




// Hide Oops page
const Back_to_Checkout_Button = document.getElementById("Back_to_Checkout"); 
console.log('Back_to_Checkout_Button', Back_to_Checkout_Button)


function Back_to_Checkout() {
    console.log('Back to checkout clicked!!! ')
    document.getElementById('MobileCLPayPage').style.visibility = 'visible';
    document.getElementById('OopsSomethingWentWrong').style.visibility = 'hidden';
    document.getElementById('Something_went_wrong_balance').style.visibility = 'hidden';
    document.getElementById('Something_went_wrong_cancelled').style.visibility = 'hidden';
    document.getElementById('Something_went_wrong_failed').style.visibility = 'hidden';
    document.getElementById('Something_went_wrong_auth').style.visibility = 'hidden';

}



//////////////////////////////////////////
//checkout basket toggle
$(document).ready(function(){
    $("#shopping-bag").click(function(){
        $("#addproducts").toggle();     
    });
});
$(document).ready(function(){
    $("#grey_button_3").click(function(){
        $("#addproducts").toggle();     
    });
});
$(document).ready(function(){
    $("#Cancel").click(function(){
        $("#addproducts").toggle();     
    });
});
$(document).ready(function(){
    $("#Rectangle_2057_ge").click(function(){
        $("#addproducts").toggle();     
    });
});



//////////////////////////////////////////
//phonenumber input
const phonenumberInput = document.getElementById("phonenumber_input"); 

phonenumberInput.addEventListener('keyup', function() {
    console.log('phonenumberInput.value', phonenumberInput.value)
   
    if (phonenumberInput.value.length == 5 ) {
        console.log('phonenumberInput.value.length == 5')
        
        if (phonenumberInput.value.charAt(0) == 0 ) {
            phonenumberInput.value =  phonenumberInput.value.charAt(1) + phonenumberInput.value.charAt(2) +
                                        phonenumberInput.value.charAt(3)
                                        console.log('value111', value);
        }

        var value = phonenumberInput.value.charAt(2);
        console.log('valuessss::::', value);
        
        if (phonenumberInput.value.charAt(0) == 2 && phonenumberInput.value.charAt(1) == 5 && phonenumberInput.value.charAt(2) == 4 ) {
            phonenumberInput.value =  phonenumberInput.value.charAt(3) + phonenumberInput.value.charAt(4) +
                                        phonenumberInput.value.charAt(5)
                                        console.log('value222', value);
        }
          
    };
    
    if (phonenumberInput.value.length >= 9 ) {
            console.log('phonenumberInput.value.length == 5')
            // const prefix = /^.{0,3}/; 
            var phoneno = phonenumberInput.value;
            var phone_no = parseInt(('254') + phoneno.replace(/^07/, "7"));
            console.log('phone_no', phone_no)
            console.log('phoneno.slice(0, 1)', phoneno.slice(0, 1))

            if(phoneno.slice(0, 1) == 7 || phoneno.slice(0, 1) == 1 ) {
                phonenumberInput.setAttribute('isvalid', true);
                document.getElementById('Phone_Number_Invalid').style.visibility = "hidden";  
                console.log('254')
            }
            else { 
                console.log('254')
                document.getElementById('Phone_Number_Invalid').style.visibility = "visible";                               
            }

        console.log('keyup', phonenumberInput.value.length);

    };

});

// Rent a dress location listener
// const dropdown = document.querySelector('#location_inputdp')

// if (typeof(dropdown) != 'undefined' && dropdown != null) {
//     dropdown.addEventListener("change", function() {

//         console.log(dropdown.querySelector('.menu .item.active')); // this will output the selected option's data-value attribute

//         if(dropdown.querySelector('.menu .item.active') != undefined && dropdown.querySelector('.menu .item.active') != null){
//             const selectedOption = dropdown.querySelector('.menu .item.active').dataset.value;

//             console.log(selectedOption); // this will output the selected option's data-value attribute

//             const colonIndex = selectedOption.indexOf(":"); // Find the index of the colon

//             const location = selectedOption.slice(0, colonIndex).trim(); // Extract the first word
//             const price = selectedOption.slice(colonIndex + 1).trim(); // Extract the second word

//             console.log("Location:", location);
//             console.log("SPrice:", price);

//             console.log("selectedOption")
//             console.log(selectedOption)

//             const delivery_fee = document.getElementById("Ksh_14900dp");
//             // delivery_fee.innerHTML = ''
//             delivery_fee.innerHTML = ('Ksh. ') + price +('.00')
            
//             checkout_amount= document.getElementById("Ksh_829800dp")

//             // amount = checkout_amount.innerText.replace('Ksh.', '')

//             total_amount = document.getElementById('total_amount_fee').value;
//             parsed_amount = (parseFloat(total_amount) + parseFloat(price)).toLocaleString() + ('.00');


//             checkout_amount.innerHTML = ('Ksh. ') + parsed_amount;

//             let mpesa_grand_total = document.getElementById('PAY_KES_1490000dp');
        

//             if (typeof(mpesa_grand_total) != 'undefined' && mpesa_grand_total != null) {
//                 mpesa_grand_total.innerHTML= ('PAY KES. ') + parsed_amount;
//             }

//             let card_grand_total = document.getElementById('PAY_KES_1490000dp_1');

//             if (typeof(card_grand_total) != 'undefined' && card_grand_total != null) {
//                 card_grand_total.innerHTML= ('PAY KES. ') + parsed_amount;
//             }

//         }
//     });
// }

const dropdown = document.getElementById('location_inputdp_mob');

if (typeof(dropdown) != 'undefined' && dropdown != null) {
$(dropdown).dropdown();

// Add onchange event listener
dropdown.addEventListener('change', function () {
    const selectedOption = $(this).dropdown('get value');
    console.log(selectedOption);

                const colonIndex = selectedOption.indexOf(":"); // Find the index of the colon

            const location = selectedOption.slice(0, colonIndex).trim(); // Extract the first word
            const price = selectedOption.slice(colonIndex + 1).trim(); // Extract the second word

            console.log("Location:", location);
            console.log("SPrice:", price);

            console.log("selectedOption")
            console.log(selectedOption)

            const delivery_fee = document.getElementById("Ksh_14900");
            // delivery_fee.innerHTML = ''
            delivery_fee.innerHTML = ('Ksh. ') + price +('.00')
            
            checkout_amount= document.getElementById("Ksh_829800dp")

            let sub_total = document.getElementById('Ksh_1504900');
            let service_fee = document.getElementById('Ksh_14900_ev');
            


            // amount = checkout_amount.innerText.replace('Ksh.', '')

            total_amount = document.getElementById('total_amount_fee').value;
            product_price = document.getElementById('prod_pricee').value;
            mpesa_service_fee = document.getElementById('service_fee_amount').value;

            total_amount = total_amount - parseFloat(mpesa_service_fee)


            parsed_amount = parseFloat(total_amount) + parseFloat(price);


            checkout_amount.innerHTML = ('Ksh. ') + parsed_amount;

            let mpesa_grand_total = document.getElementById('PAY_KES_1549000_');
                //Ksh_1504900

            if (typeof(mpesa_grand_total) != 'undefined' && mpesa_grand_total != null) {
                mpesa_grand_total.innerHTML= ('PAY KES. ') + ((parsed_amount + parseFloat(mpesa_service_fee)).toFixed(2)).toLocaleString();
                sub_total.innerHTML= ('Ksh. ') + ((parsed_amount + parseFloat(mpesa_service_fee)).toFixed(2)).toLocaleString();
                service_fee.innerHTML = ('Ksh. ') + ( parseFloat(mpesa_service_fee)).toFixed(2);
            }

            var groupDiv = document.getElementById("Group_5214");
            if (typeof(groupDiv.querySelector("#PAY_KES_1549000_")) != 'undefined' && groupDiv.querySelector("#PAY_KES_1549000_") != null) {
             
                var element = groupDiv.querySelector("#PAY_KES_1549000_");

                element.innerHTML= ('PAY KES. ') + ((parsed_amount + (0.015 * product_price)).toFixed(2)).toLocaleString();
                sub_total.innerHTML= ('Ksh. ') + ((parsed_amount + (0.015 * product_price)).toFixed(2)).toLocaleString();
                service_fee.innerHTML = ('Ksh. ') + (((0.015 * product_price)).toFixed(2)).toLocaleString();
            }

});
  

}





//////////////////////////////////////////
//phonenumber input
const productUnitInput = document.getElementById("product_counter_input"); 

productUnitInput.addEventListener('keyup', function() {
    console.log('productUnitInput.value', productUnitInput.value)
    
    var product_units=  parseInt(productUnitInput.value);

    productprice= document.getElementById('KES_1490000').getAttribute('data-value')
    console.log('productprice', parseFloat(productprice))

    total= parseFloat(productprice) * parseInt(product_units)
    console.log('total', total)    

    cartprice= document.getElementById('KES_1490000').innerText;
    console.log('cartprice', cartprice)

    var numberOfItems = $('input:checkbox:checked').length;  
    console.log('numberOfItems', numberOfItems)

    if (numberOfItems >= 1) { 
        newtotal= parseFloat(cartprice.replace('KES. ', '').replace(/,/g, '')) + parseInt(total)
        console.log('newtotal ==== 0', newtotal)
    } else {
        newtotal= total
        console.log('newtotal ==== 1', total)
    }

    document.getElementById('KES_1490000').innerText= ('KES. ') + newtotal.toLocaleString() + ('.00')
    document.getElementById('Ksh_1490000_x1').innerText= ('Ksh. ') + total.toLocaleString() + ('.00')
    document.getElementById('ID22628_ez').innerText= ('Quantity ') + product_units
    document.getElementById('KES_1490000_yourbasket').innerText= ('KES. ') + total.toLocaleString() + ('.00')
    
    checkout_total_parse(newtotal)

});




//////////////////////////////////////////
//checkbox:selected:---add to cart

var checkboxInput = document.getElementsByClassName('ui checkbox');
console.log('checkboxInput.length', checkboxInput.length, checkboxInput.checked)

for (var i = 0; i < checkboxInput.length; i++) {
    var checked= checkboxInput[i]    

    checked.addEventListener('click', function(event){
        var box_onChecked = event.target;	
        var checkedbtn = box_onChecked.parentNode.getElementsByTagName('input');
        
        var productContainer = box_onChecked.parentNode.parentNode.parentNode.parentNode;	
        productprice= productContainer.getElementsByClassName('product price')[0].innerText.replace('+ksh', '').replace(',', '')
        cartprice= document.getElementById('KES_1490000_yourbasket').innerText;
        cartprice= document.getElementById('KES_1490000_yourbasket').innerText;
        
        if (checkedbtn[0].checked) {	
            productContainer.getElementsByClassName('product counter')[0].innerText = 1;
            total= parseFloat(productprice) * 1
            newtotal= parseFloat(cartprice.replace('KES. ', '').replace(/,/g, '')) + total
            cartprice_update= document.getElementById('KES_1490000_yourbasket');
            cartprice_update.innerHTML= ('KES. ') + newtotal.toLocaleString() + ('.00')
            var numberOfItems = $('input:checkbox:checked').length;            
            var checkout_count= document.getElementById("ID1");
            checkout_count.innerHTML= numberOfItems + 1                                  
            var checkout_counter= document.getElementById("All_gh");
            checkout_counter.innerHTML= ""           
            checkout_counter.innerHTML= "Your basket (" + (numberOfItems + 1) + (' items)')         
            console.log('checkout_count', checkout_count)
        }
        
        if (!checkedbtn[0].checked) {
            productunits= productContainer.getElementsByClassName('product counter')[0].innerText;
            total= parseFloat(productprice) * parseInt(productunits)
            newtotal= parseFloat(cartprice.replace('KES. ', '').replace(/,/g, '')) - total
            cartprice_update= document.getElementById('KES_1490000_yourbasket');
            cartprice_update.innerHTML= ('KES. ') + newtotal.toLocaleString() + ('.00')
            productContainer.getElementsByClassName('product counter')[0].innerText = 0;
            var numberOfItems = $('input:checkbox:checked').length; 
            var checkout_count= document.getElementById("ID1");
            checkout_count.innerHTML= numberOfItems + 1                              
            var checkout_counter= document.getElementById("All_gh");
            checkout_counter.innerHTML= ""           
            checkout_counter.innerHTML= "Your basket (" + (numberOfItems + 1) + (' items)')         
            console.log('checkout_count', checkout_count)
        }
    })
};

if ( checkboxInput.length >= 4 ) {    
}



//////////////////////////////////////////
//add to cart modal
var reduceCartItemButton = document.getElementsByClassName('reduce cart item');
var addCartItemButton = document.getElementsByClassName('add cart item');
var productcounter = document.getElementsByClassName('product counter');

// reduce units
for (var i=0; i < reduceCartItemButton.length; i++) {
    var reduceButton = reduceCartItemButton[i]
    
    reduceButton.addEventListener('click', function(event){
        var reducebuttonClicked = event.target;	
        var cartItems = reducebuttonClicked.parentNode.parentNode;	

        const checkbox = cartItems.parentNode.getElementsByTagName('input');
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {

                var productcount = cartItems.getElementsByClassName('product counter')[0];
                var productcountvalue = parseInt(productcount.innerText);
                console.log('productcountvalue', productcountvalue);
                var product_units=  productcountvalue - 1;
                if (productcountvalue <= 1) { product_units = 1}
                productcount.innerHTML = product_units;
                console.log('productcountvalue', product_units, product_units);
        
                productprice= cartItems.parentNode.getElementsByClassName('product price')[0].getAttribute('data-value')
                console.log('productprice', productprice)
        
                total= parseFloat(productprice) * parseInt(product_units)
                console.log('total', total)
                
                cartprice= document.getElementById('KES_1490000_yourbasket').innerText;
                console.log('cartprice', cartprice)
        
                
                if (productcountvalue == 1) { 
                    newtotal= parseFloat(cartprice.replace('KES. ', '').replace(/,/g, ''))
                    console.log('newtotal !1= 0', newtotal)
                } 
                else {
                    newtotal= parseFloat(cartprice.replace('KES. ', '').replace(/,/g, '')) - total
                    console.log('newtotal == 0', newtotal)
                    label= checkbox[i].getElementsByTagName('label')
                    console.log('label', label)
                }
        
                cartprice_update= document.getElementById('KES_1490000_yourbasket');
                cartprice_update.innerHTML= ('KES. ') + newtotal.toLocaleString() + ('.00')

            } 
        }
    })
};

// add units
for (var i=0; i < addCartItemButton.length; i++) {
    var addButton = addCartItemButton[i]
    
    addButton.addEventListener('click', function(event){
        var addButtonClicked = event.target;	
        var cartItems = addButtonClicked.parentNode.parentNode;	
        const checkbox = cartItems.parentNode.getElementsByTagName('input');
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {

                var productcount = cartItems.getElementsByClassName('product counter')[0];
                var productcountvalue = parseInt(productcount.innerText);
                var product_units=  productcountvalue + 1;
                productcount.innerHTML = product_units;
        
                productprice= cartItems.parentNode.getElementsByClassName('product price')[0].getAttribute('data-value')
                console.log('productprice:data-value', productprice)
                
                cartprice= document.getElementById('KES_1490000_yourbasket').innerText;
                console.log('cartprice', cartprice)
        
                newtotal= parseFloat(cartprice.replace('KES. ', '').replace(/,/g, '')) + parseFloat(productprice)
                console.log('newtotal', newtotal)
        
                cartprice_update= document.getElementById('KES_1490000_yourbasket');
                cartprice_update.innerHTML= ('KES. ') + newtotal.toLocaleString() + ('.00')

            } 

        }



    })
};



//////////////////////////////////////////
//add to product cart modal
var reduceCartItemButtonlinkproduct = document.getElementById('reduce_cart_item_link_product_1');
var addCartItemButtonlinkproduct = document.getElementById('add_cart_item_link_product_1');
var productcounterlinkproduct = document.getElementsByClassName('product counter link-product');
productcounterlinkproduct.innerHTML = 1;
console.log('looogs', reduceCartItemButtonlinkproduct, addCartItemButtonlinkproduct, productcounterlinkproduct)

// reduce units link-product
reduceCartItemButtonlinkproduct.addEventListener('click', function(event){
    console.log('Clickeddddd');
    var reducebuttonClicked = event.target;	
    console.log('reducebuttonClicked', reducebuttonClicked);
    var cartItems = document.getElementById('Adidas_Ultraboost').innerHTML;
    console.log('cartItems', cartItems);
    var productcount = document.getElementById('product_counter_input');
    console.log('productcount', productcount);
    var productcountvalue = parseInt(productcount.getAttribute('value'));
    console.log('productcountvalue', productcountvalue);
    var product_units=  productcountvalue - 1;
    if (product_units <= 0) { 
        product_units = 1;
        console.log('product_units = 1 x x x x');
    } 
    console.log('productcountvalue', product_units, product_units);
    console.log('productcountINPUT', productcount.getElementsByTagName('input'));
    // productcount.innerText = ""
    // productcount.innerHTML = product_units;
    document.getElementById('product_counter_input').setAttribute("value", product_units);

    // document.getElementById('ID22628_ez').innerHTML = ('Quantity ') + product_units;
    // console.log('productcountvalue', product_units, product_units);

    productprice= document.getElementById('KES_1490000').getAttribute('data-value');
    console.log('productprice', productprice)

    total= parseFloat(productprice) * parseInt(product_units)
    console.log('total', total)


    cartprice= document.getElementById('KES_1490000').innerText;
    console.log('cartprice', cartprice)

    // Ensures the total doesn't go below the product price 
    newtotal= parseFloat(cartprice.replace('KES. ', '').replace(/,/g, '')) - parseInt(productprice)
    if (newtotal < productprice) {
        newtotal = productprice
    }
    console.log('newtotal12345', newtotal)

    // if (product_units >= 1) { 
    //     newtotal= parseFloat(cartprice.replace('KES. ', '').replace(/,/g, '')) - parseInt(productprice)
    //     console.log('newtotal ==== 0', newtotal)
    // } 


    document.getElementById('KES_1490000').innerText= ('KES. ') + newtotal.toLocaleString() + ('.00')
    document.getElementById('Ksh_1490000_x1').innerText= ('Ksh. ') + total.toLocaleString() + ('.00')
    document.getElementById('ID22628_ez').innerText= ('Quantity ') + product_units
    document.getElementById('KES_1490000_yourbasket').innerText= ('KES. ') + total.toLocaleString() + ('.00')
    
    checkout_total_parse(newtotal)
    // // cartprice_update= document.getElementById('KES_1490000_yourbasket');
    // document.getElementById('KES_1490000').innerText= ('KES. ') + newtotal.toLocaleString() + ('.00')
    // document.getElementById('KES_1490000_yourbasket').setAttribute('data-value', newtotal)
        
    

});

// add units link-product
addCartItemButtonlinkproduct.addEventListener('click', function(event){
    console.log('Clickeddddd ++');
    var addButtonClicked = event.target;	
    console.log('addButtonClicked', addButtonClicked);
    var cartItems = document.getElementById('Adidas_Ultraboost').innerHTML;
    console.log('cartItems', cartItems);
    var productcount = document.getElementById('product_counter_input');
    console.log('productcount', productcount)
    var productcountvalue = parseInt(productcount.getAttribute('value'));
    console.log('productcountvalue', productcountvalue);
    var product_units=  productcountvalue + 1;
    console.log('product_units', product_units);
    console.log('productcountINPUT', productcount.getElementsByTagName('input'));
    // productcount.innerText = ""
    // productcount.innerHTML = product_units;
    document.getElementById('product_counter_input').setAttribute("value", product_units);

    productprice= document.getElementById('KES_1490000').getAttribute('data-value')
    console.log('productprice', parseFloat(productprice))

    total= parseFloat(productprice) * parseInt(product_units)
    console.log('total', total)    

    cartprice= document.getElementById('KES_1490000').innerText;
    console.log('cartprice', cartprice)

    if (product_units >= 1) { 
        newtotal= parseFloat(cartprice.replace('KES. ', '').replace(/,/g, '')) + parseInt(productprice)
        console.log('newtotal ==== 0', newtotal)
    } 

    document.getElementById('KES_1490000').innerText= ('KES. ') + newtotal.toLocaleString() + ('.00')
    document.getElementById('Ksh_1490000_x1').innerText= ('Ksh. ') + total.toLocaleString() + ('.00')
    document.getElementById('ID22628_ez').innerText= ('Quantity ') + product_units
    document.getElementById('KES_1490000_yourbasket').innerText= ('KES. ') + total.toLocaleString() + ('.00')
    
    checkout_total_parse(newtotal)
    
    // cartprice= document.getElementById('KES_1490000_yourbasket').innerText;
    // console.log('cartprice', cartprice)

    // newtotal= parseFloat(cartprice.replace('KES. ', '').replace(/,/g, '')) + parseFloat(productprice)
    // console.log('newtotal', newtotal)

    // // cartprice_update= document.getElementById('KES_1490000_yourbasket');
    // document.getElementById('KES_1490000').innerText= ('KES. ') + newtotal.toLocaleString() + ('.00')
    // document.getElementById('KES_1490000_yourbasket').setAttribute('data-value', newtotal)


    });


    // document.getElementById('Product_Details_re').style.visibility = "hidden"

//////////////////////////////////////////
//checkbox selected
function cartItems() {
    var numberOfItems = $('input:checkbox:checked').length;
    
    var checkout_count= document.getElementById("ID1");
    checkout_count.innerHTML= numberOfItems + 1
					
    var checkout_count= document.getElementById("All_gh");
    checkout_count.innerText= ('Your basket (') + (numberOfItems + 1) + (' items)')
    console.log('cartItems()  cartItems() ', checkout_count)
}

//   document.getElementById('Product_Details_re').style.visibility = "hidden"


function selectbox() {
    var arrObject = new Array();
    var check_box= document.getElementById("addproducts");
    var selected_check= check_box.getElementsByTagName("input");

    // array for cart items
    for (var i = 0; i < selected_check.length; i++) {
        if (selected_check[i].checked) {
            cart_prod = selected_check[i].parentNode.parentNode.parentNode.parentNode
            // console.log('selected::::', cart_prod)
            prod_name= cart_prod.getElementsByClassName('product cart')[0].innerText;
            // console.log('prod_name', prod_name)
            prod_units= parseInt(cart_prod.getElementsByClassName('product counter')[0].innerText);
            // console.log('prod_units', prod_units)
            prod_price= parseFloat(cart_prod.getElementsByClassName('product price')[0].getAttribute('data-value'));
            // console.log('prod_price', prod_price)
            prod_checkout= parseFloat(prod_units * prod_price)
            // console.log('prod_checkout', prod_checkout)

            arrObject.push([prod_name, prod_units, prod_checkout])
            // console.log('arrObject', arrObject)


        } else {
            console.log('no prdoducts')
        }
    };

    cart= document.getElementById('group_basket');
    // var cartbasket= cart.getElementsByClassName('cart-bask');
    // console.log('cartbasket', cartbasket)       

    if (arrObject.length > 0) {
        console.log('arrObject.length', arrObject.length)
        cart.style.display = 'unset';               
        cart.innerHTML = "";
        
        arrObject.map(item=> {

            prodName = item[0];
            prodPrice = item[2].toLocaleString() + ('.00')
            prodUnit = item[1]
                
            cart.innerHTML +=         
                `
                <div id="Group_5219_basket" class="cart-bask" >
                    <div id="ID22628_ey_basket">
                        <span> ${prodName} </span>
                    </div>
                    <div id="ID22628_ez_basket">
                        <span>Quantity ${prodUnit}</span>
                    </div>
                    <div id="Ksh_1490000_basket">
                        <span>Ksh. ${prodPrice} </span>
                    </div>
                    <svg class="Path_9110_basket" viewBox="0 0 347 0.5">
                        <path id="Path_9110_basket" d="M 0 0 L 347 0">
                        </path>
                    </svg>
                </div>
                `
                ;

        });

        

        if (arrObject.length == 1) {
            var delivery= document.getElementById('Group_5218');
            delivery.style.top = '40px';               
            var service= document.getElementById('Group_5240');
            service.style.top = '60px';
            var total= document.getElementById('Group_5241');
            total.style.top = '80px';
            var pay= document.getElementById('Group_5222');
            pay.style.top = '100px';
            var details= document.getElementById('Group_4531');
            details.style.top = '120px';
        }
        if (arrObject.length == 2) {
            var delivery= document.getElementById('Group_5218');
            delivery.style.top = '90px';               
            var service= document.getElementById('Group_5240');
            service.style.top = '110px';
            var total= document.getElementById('Group_5241');
            total.style.top = '130px';
            var pay= document.getElementById('Group_5222');
            pay.style.top = '150px';
            var details= document.getElementById('Group_4531');
            details.style.top = '170px';
        }
        if (arrObject.length == 3) {
            var delivery= document.getElementById('Group_5218');
            delivery.style.top = '140px';               
            var service= document.getElementById('Group_5240');
            service.style.top = '160px';
            var total= document.getElementById('Group_5241');
            total.style.top = '180px';
            var pay= document.getElementById('Group_5222');
            pay.style.top = '200px';
            var details= document.getElementById('Group_4531');
            details.style.top = '220px';
        }
        if (arrObject.length == 4) {
            var delivery= document.getElementById('Group_5218');
            delivery.style.top = '190px';               
            var service= document.getElementById('Group_5240');
            service.style.top = '210px';
            var total= document.getElementById('Group_5241');
            total.style.top = '230px';
            var pay= document.getElementById('Group_5222');
            pay.style.top = '250px';
            var details= document.getElementById('Group_4531');
            details.style.top = '270px';
        }
        if (arrObject.length >= 5) {
            var delivery= document.getElementById('Group_5218');
            delivery.style.top = '234px';               
            var service= document.getElementById('Group_5240');
            service.style.top = '244px';
            var total= document.getElementById('Group_5241');
            total.style.top = '257px';
            var pay= document.getElementById('Group_5222');
            pay.style.top = '290px';
            var details= document.getElementById('Group_4531');
            details.style.top = '392px';
            cart= document.getElementById('group_basket');
            cart.style['overflow-y'] = 'auto';  
        }

    }


    // Receipt
    receipt_list = document.getElementById('Product_Details_re')
        console.log('receipt_list', receipt_list)
        
    if (arrObject.length > 0) {
            console.log('arrObject_items', arrObject)

            // document.getElementById('Product_Details_re').style.visibility = "hidden"
            receipt_list.style.display = 'block';
            receipt_list.innerHTML= '';
            
            arrObject.map(item=> {
    
                prodName = item[0];
                prodPrice = item[2].toLocaleString() + ('.00')
                prodUnit = item[1]
                    
                receipt_list.innerHTML +=         
                    `
                    <div id="Group_5320_re">
                        <div id="ID22628_ei_re">
                            <span>${prodName}</span>
                        </div>
                        <div id="ID22628_ej_re">
                            <span>Quantity : ${prodUnit}</span>
                        </div>
                        <div id="Ksh_1555000_re">
                            <span>Ksh. ${prodPrice}</span>
                        </div>
                        <svg class="Path_9110_el_re" viewBox="0 0 302.172 0.5">
                            <path id="Path_9110_el_re" d="M 0 0 L 302.1719055175781 0">
                            </path>
                        </svg>
                    </div>
                    `
                    ;
    
        });

        if (arrObject.length == 0) {
            console.log('0_Item_in_Receipt')
            var product_details= document.getElementById('Product_Details_re');
            product_details.style.visibility = 'hidden'; 
            product_details.style.height = '-55px';      
            var pricing_details= document.getElementById('Pricing_Details_re');
            pricing_details.style.top = '-147px';                         
            var Group_5715= document.getElementById('Group_5715_re');
            Group_5715.style.top = '394.004px';
            var Group_4531= document.getElementById('Group_4531_re');
            Group_4531.style.top = '520px';

        }
        if (arrObject.length == 1) {
            var product= document.getElementById('Group_4810_re');
            // product.style.visibility = 'visible'; 
            product.style.top = '-27px';               
            var product_details= document.getElementById('Product_Details_re');
            // product_details.style.visibility = 'visible'; 
            product_details.style.top = '6px';               
            var pricing_details= document.getElementById('Pricing_Details_re');
            pricing_details.style.top = '-113px';               
            var Group_5715= document.getElementById('Group_5715_re');
            Group_5715.style.top = '455.004px';
            var Group_4531= document.getElementById('Group_4531_re');
            Group_4531.style.top = '550px';
            console.log('1_Item_in_Receipt')

        }
        if (arrObject.length == 2) {
            var product= document.getElementById('Group_4810_re');
            // product.style.visibility = 'visible'; 
            product.style.top = '-27px';   
            var product_details= document.getElementById('Product_Details_re');
            // product_details.style.visibility = 'visible'; 
            product_details.style.top = '6px';               
            var pricing_details= document.getElementById('Pricing_Details_re');
            pricing_details.style.top = '-110px';               
            var Group_5715= document.getElementById('Group_5715_re');
            Group_5715.style.top = '495.004px';
            var Group_4531= document.getElementById('Group_4531_re');
            Group_4531.style.top = '580px';
            console.log('2_Item_in_Receipt')

        }
        if (arrObject.length == 3) {
            var product= document.getElementById('Group_4810_re');
            // product.style.visibility = 'visible'; 
            product.style.top = '-27px';   
            var product_details= document.getElementById('Product_Details_re');
            // product_details.style.visibility = 'visible';
            product_details.style.top = '6px';               
            var pricing_details= document.getElementById('Pricing_Details_re');
            pricing_details.style.top = '-108px';               
            var Group_5715= document.getElementById('Group_5715_re');
            Group_5715.style.top = '542.004px';
            var Group_4531= document.getElementById('Group_4531_re');
            Group_4531.style.top = '630px';
            console.log('3_Item_in_Receipt')

        }
        if (arrObject.length == 4) {
            var product= document.getElementById('Group_4810_re');
            // product.style.visibility = 'visible'; 
            product.style.top = '-27px';   
            var product_details= document.getElementById('Product_Details_re');
            // product_details.style.visibility = 'visible'; 
            product_details.style.top = '6px';               
            var pricing_details= document.getElementById('Product_Details_re');
            pricing_details.style['overflow-y'] = 'auto';  
            var pricing_details= document.getElementById('Product_Details_re');
            pricing_details.style.width = '318px'; 
            var pricing_details= document.getElementById('Product_Details_re');
            pricing_details.style.height = '200px';  
            var pricing_details= document.getElementById('Pricing_Details_re');
            pricing_details.style.top = '-128px';  
            var Group_5715= document.getElementById('Group_5715_re');
            Group_5715.style.top = '592.004px';
            var Group_4531= document.getElementById('Group_4531_re');
            Group_4531.style.top = '680px';
            console.log('3_Item_in_Receipt')

        }
        if (arrObject.length >= 5) {
            var product= document.getElementById('Group_4810_re');
            // product.style.visibility = 'visible'; 
            product.style.top = '-27px';   
            var product_details= document.getElementById('Product_Details_re');
            // product_details.style.visibility = 'visible'; 
            product_details.style.top = '6px';               
            var pricing_details= document.getElementById('Product_Details_re');
            pricing_details.style['overflow-y'] = 'auto';  
            var pricing_details= document.getElementById('Product_Details_re');
            pricing_details.style.width = '318px'; 
            var pricing_details= document.getElementById('Product_Details_re');
            pricing_details.style.height = '200px';  
            var pricing_details= document.getElementById('Pricing_Details_re');
            pricing_details.style.top = '-112px';  
            var Group_5715= document.getElementById('Group_5715_re');
            Group_5715.style.top = '592.004px';
            var Group_4531= document.getElementById('Group_4531_re');
            Group_4531.style.top = '680px';
            console.log('3_Item_in_Receipt')

        }

    }

    

    

//     if (arrObject.length == 0) {
//         console.log('arrObject_items', arrObject.length)

//         document.getElementById('Product_Details_re').style.visibility = "hidden"

//         receipt_list.style.display = 'none';
//         receipt_list.innerHTML= '';
        
//         arrObject.map(item=> {

//             prodName = item[0];
//             prodPrice = item[2].toLocaleString() + ('.00')
//             prodUnit = item[1]
                
//             receipt_list.innerHTML +=         
//                 `
//                 <div id="Group_5320_re">
//                     <div id="ID22628_ei_re">
//                         <span>${prodName}</span>
//                     </div>
//                     <div id="ID22628_ej_re">
//                         <span>Quantity : ${prodUnit}</span>
//                     </div>
//                     <div id="Ksh_1555000_re">
//                         <span>Ksh. ${prodPrice}</span>
//                     </div>
//                     <svg class="Path_9110_el_re" viewBox="0 0 302.172 0.5">
//                         <path id="Path_9110_el_re" d="M 0 0 L 302.1719055175781 0">
//                         </path>
//                     </svg>
//                 </div>
//                 `
//                 ;

//     });
// }


    //     if (Array.isArray(arrObject)) {
    
    //         cart= document.getElementById('group_basket');
    //         cart.style.display = 'unset';    
    
    //         arrObject.forEach(item=> {
    //             // console.log('item', typeof(item), item.length, typeof(arrObject), arrObject.length, item[0], item[1], item[2])
    
                
    //             for (var i = 0; i < arrObject.length; i++) { 
    //             // item.forEach(item=> {     
    
    //                 var cartbasket= cart.getElementsByClassName('cart-bask')[0];
    //                 console.log('cartbasket', cartbasket)       
    
    //                 var cartbask_prod= cartbasket.getElementsByClassName('cart-bask-prod')[0];
    //                 console.log('CCCii', i)
    //                 console.log('CCCii', cartbask_prod)
    //                 cartbask_prod.innerHTML += item[0];
    
    //                 var cartbask_units= cartbasket.getElementsByClassName('cart-bask-units')[0];
    //                 console.log('XXXii', i)
    //                 console.log('XXXii', cartbask_units)
    //                 cartbask_units.innerHTML += item[1];
    
    //                 var cartbask_ttl= cartbasket.getElementsByClassName('cart-bask-ttl')[0];
    //                 console.log('VVVii', i)
    //                 console.log('VVVii', cartbask_ttl)
    //                 cartbask_ttl.innerHTML += item[2];
    
    
    //                 console.log('iiiiiiii', i, cartbasket)
    
    //                 // cartbasket.innerHTML += 
    //                 //     `                
    //                 //     <div id="ID22628_ey_basket" class="cart-bask-prod" >
    //                 //         <span>${item[0]}</span>
    //                 //     </div>
    //                 //     <div id="ID22628_ez_basket" class="cart-bask-units" >
    //                 //         <span>${item[1]}</span>
    //                 //     </div>
    //                 //     <div id="Ksh_1490000_basket" class="cart-bask-ttl" >
    //                 //         <span>${item[2]}</span>
    //                 //     </div>
    //                 //     <svg class="Path_9110_basket" viewBox="0 0 347 0.5">
    //                 //         <path id="Path_9110_basket" d="M 0 0 L 347 0">
    //                 //         </path>
    //                 //     </svg>
    //                 //     `
    
    
    
    
    //             }
    //         // })
    
    //             // cartbasket.forEach(item=> {     
    
    //             //     cartbask_prod= document.getElementById('ID22628_ey_basket');
    //             //     cartbask_prod.innerHTML = item[0];
    //             //     cartbask_units= document.getElementById('ID22628_ez_basket');
    //             //     cartbask_units.innerHTML = item[1];
    //             //     cartbask_ttl= document.getElementById('Ksh_1490000_basket');
    //             //     cartbask_ttl.innerHTML = item[2];
    
    
    //             // })
    
    
    //             // const option = cartbasket.createElement('div')
    //             // option.setAttribute('id', 'ID22628_ey_basket')
    //             // option.textContent = item[0]
    //             // option.setAttribute('id', 'ID22628_ez_basket')
    //             // option.textContent = item[1]
    //             // option.setAttribute('id', 'Ksh_1490000_basket')
    //             // option.textContent = item[2]
    
    //             // for (var i = 0; i < arrObject.length; i++) {
    //             //     console.log('arrObject.length', i)
                    
    
    //                 // cartbasket.style.display = 'unset';            
    //                 // cartbask_prod= document.getElementById('ID22628_ey_basket')[i];
    //                 // cartbask_prod.innerHTML = item[0];
    //                 // cartbask_units= document.getElementById('ID22628_ez_basket');
    //                 // cartbask_units.innerHTML = item[1];
    //                 // cartbask_ttl= document.getElementById('Ksh_1490000_basket');
    //                 // cartbask_ttl.innerHTML = item[2];
    
    //                 // cartbasket.innerHTML += `${item[0]} ${item[1]} ${item[2]}`
                    
    //                 // `
    //                 //             <div id="ID22628_ey_basket">
    //                 //                 <span> ${item[i][0]} </span>
    //                 //             </div>
    //                 //             <div id="ID22628_ez_basket">
    //                 //                 <span>Quantity ${item[1]}</span>
    //                 //             </div>
    //                 //             <div id="Ksh_1490000_basket">
    //                 //                 <span>Ksh. ${item[2]}</span>
    //                 //             </div>
    //                 //             <svg class="Path_9110_basket" viewBox="0 0 347 0.5">
    //                 //                 <path id="Path_9110_basket" d="M 0 0 L 347 0">
    //                 //                 </path>
    //                 //             </svg>
    //                 // `;
    
    // //             };
    // //             console.log('cartbasket', cartbasket)
    // //         })
    
    //     })
    
    
    // }

    }





// const locationInput = document.getElementById("location_input");
// if (typeof(locationInput) != 'undefined' && locationInput != null) {
//     locationInput.addEventListener('keyup', function() {
//         console.log('keyup keyup keyup', locationInput.value);
//         delivery_location= locationInput.value;
//         console.log('locationInput1', delivery_location);
//         sendDeliveryLocation(delivery_location);

//     });
// }


// const locationInput1 = document.getElementById("location_input_1");
// locationInput1.addEventListener('change', function(event) {
//     console.log('change change change');
//     delivery_location= event.target.value
//     console.log('locationInput1', delivery_location);
//     sendDeliveryLocation(delivery_location);

// });

const sendDeliveryLocation = (delivery_location) =>{
    $.ajax({
        type: "POST",
        url: 'delivery_fee',
        data: {
            'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
            'delivery_location' : delivery_location ,
        },
        success: function(response){
            const checkout_delivery_fee= response.delivery_fee
            console.log('delivery_fee1111::::', response.delivery_fee)

            const delivery_fee = document.getElementById("Ksh_14900");
            delivery_fee.innerHTML = ('Ksh. ') + response.delivery_fee +('.00')
            
            
            const cart_price= parseInt(document.getElementById("KES_1490000").innerText.replace('KES. ', '').replace(',', '').replace(',', ''));
            console.log('cart_price111::::', cart_price);

            const total= parseInt(document.getElementById("Ksh_1504900").innerText.replace('Ksh. ', '').replace(',', '').replace(',', ''));
            console.log('total111::::', total);
            
            const total_checkout= parseInt(total)
            console.log('checkout_price_total1111::::', total_checkout);

 
            checkout_price = cart_price
            
            checkout_total_parse(checkout_price);
                
        },
        error: function(error){
            console.log('failed ajax delivery_fee')
        },
    })
};

    
			

function checkout_total_parse (checkout_price) {
        
    checkout_price= checkout_price;
    $.ajax({
        type: "POST",
        url: 'checkout_total',
        data: {
            'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
            'checkout_price' : checkout_price,
        },
        success: function(response){
            var checkout_service= (response.service_fee);
            const checkout_service_fee = parseFloat(checkout_service).toFixed(2);
            console.log('checkout_service_fee::::', checkout_service_fee, typeof(checkout_service_fee))
            var service_fee_ = document.getElementById("Ksh_14900_ev");		
            const receipt_checkout_service_fee = document.getElementById("Ksh_14900_d_re"); //Receipt
            console.log('receipt_checkout_service_fee', receipt_checkout_service_fee)				
            service_fee_.innerHTML = ""
            receipt_checkout_service_fee.innerHTML = ""
            service_fee_.innerHTML += ('Ksh. ') + checkout_service.toLocaleString() + ('.00')
            receipt_checkout_service_fee.innerHTML += ('Ksh. ') + checkout_service.toLocaleString() + ('.00')



            const checkout_total= (response.cart_chekout_total);	
            const checkout_total_price= parseFloat(checkout_total);	
            console.log('checkout_total_price::::', checkout_total_price)
            const checkout_total_ = document.getElementById("Ksh_1504900");
            const receipt_checkout_total = document.getElementById("Ksh_1504900_re"); //Receipt
            console.log('receipt_checkout_total', receipt_checkout_total)
            checkout_total_.innerHTML = ""
            receipt_checkout_total.innerHTML = ""
            checkout_total_.innerHTML += ('Ksh. ') + checkout_total_price.toLocaleString() + ('.00')	


            // 
            const delivery_fee = parseInt(document.getElementById("Ksh_14900").innerText.replace('Ksh. ', '').replace(',', '').replace(',', ''));
            var grand_total= document.getElementById("Ksh_1504900");
            console.log('grand_total', grand_total)
            grand_total.innerHTML= ""           
            grand_total.innerHTML= ("Ksh. " + (checkout_total_price + delivery_fee) + ('.00')).replace(',', '').replace(',', '');

            var payment_total= document.getElementById("PAY_KES_1549000_");
            console.log('payment_total', payment_total)
            payment_total.innerHTML= ""           
            payment_total.innerHTML= ("PAY KES. " + (checkout_total_price + delivery_fee) + ('.00')).replace(',', '').replace(',', '');


            const receipt_checkout_delivery_fee = document.getElementById("Ksh_14900_re"); //Receipt
            receipt_checkout_delivery_fee.innerHTML = ""
            receipt_checkout_delivery_fee.innerHTML += ('Ksh. ') + delivery_fee.toLocaleString() + ('.00')
            receipt_checkout_total.innerHTML += ('Ksh. ') + (checkout_total_price + delivery_fee).toLocaleString() + ('.00')//Receipt


            var checkout_basket= document.getElementById("Adidas_Ultraboost");
            

            if($('#submit-button').css("visibility") == "hidden") {
                const checkout_total_PAY = document.getElementById("PAY_KES_1549000_");
                checkout_total_PAY.innerHTML = ""
                checkout_total_PAY.innerHTML += ('PAY KES. ') + (checkout_total_price + delivery_fee).toLocaleString() + ('.00')
                console.log('mpesa payment');
            } else {
                const checkout_total_PAY_2 = document.getElementsByClassName("PAY_KES")[0];
                checkout_total_PAY_2.innerHTML = ""
                checkout_total_PAY_2.innerHTML += ('PAY KES. ') + (checkout_total_price + delivery_fee).toLocaleString() + ('.00')
                console.log('card payment');
            }
            // checkout_basket.innerHTML = ""
            // checkout_basket.innerHTML = (checkout_product) + ('and ') + (selected.length) + (' other products');
                
        },
        error: function(error){
            console.log('failed ajax checkout_total')
        },
    })

};
//////////////////////////////////////////
//add to cart click
function getproductvalues() {   

    var totalprice= parseFloat(document.getElementById("KES_1490000_yourbasket").innerText.replace('KES. ', '').replace(',', '').replace(',', ''));
    console.log('totalprice', totalprice);

    var totalprice_top= document.getElementById("KES_1490000");
    totalprice_top.innerHTML = ""
    totalprice_top.innerHTML += ('KES. ') + totalprice.toLocaleString() + ('.00')
    checkout_total_parse(totalprice);

    var checkout_basket= document.getElementById("Adidas_Ultraboost");
    var numberOfItems = $('input:checkbox:checked').length;
    console.log('numberOfItems', numberOfItems)
    
    var checkout_product= document.getElementById("ID22628_ey").innerText;

    if (numberOfItems > 0) {
        checkout_basket.innerHTML = (checkout_product) + (' + ') + (numberOfItems) + (' more');
    } 

			

    const locationInput = document.getElementById("location_input");
    locationInput.addEventListener('change', function() {
        sendDeliveryLocation(locationInput.value);

    });

    const sendDeliveryLocation = (delivery_location) =>{
        $.ajax({
            type: "POST",
            url: 'delivery_fee',
            data: {
                'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
                'delivery_location' : delivery_location ,
            },
            success: function(response){
                const checkout_delivery_fee= response.delivery_fee
                console.log('delivery_fee::::', response.delivery_fee)

                const delivery_fee = document.getElementById("Ksh_14900");
                delivery_fee.innerHTML = ('Ksh. ') + response.delivery_fee +('.00')
                
                
                const cart_price= parseInt(document.getElementById("KES_1490000").innerText.replace(/,/g, ''));
                const total_checkout= parseInt(checkout_delivery_fee + cart_price)
                console.log('checkout_price_total::::', total_checkout);
                
                checkout_total_parse(total_checkout);
                    
            },
            error: function(error){
                console.log('failed ajax delivery_fee')
            },
        })
    };
}


const fullnameInput = document.getElementById("Input_email_address"); 
const fullnameValue = fullnameInput.value; 

fullnameInput.addEventListener('keyup', function() {
    console.log('fullnameValue', fullnameInput.value)

}
)


let company_name= document.getElementById("All").innerText
console.log('company_name', company_name)

if (company_name == 'KavulaniArt' || company_name == 'LuvaiOrganics') {
    console.log("DELIVERY COST ADDED")
    function checkout_payment() {  

        if (phonenumberInput.getAttribute('isvalid') === 'true') {
            console.log('Valid phonenumber')
            var phoneno = phonenumberInput.value;
            var phonenumber = parseInt(('254') + phoneno.replace(/^0/, ""));
            console.log('phonenumber', phonenumber)
    
            if (fullnameInput.value == "" || fullnameInput.value.length <= 3 ) {
                console.log('invalid fullnameValue', fullnameValue)
                document.getElementById('Phone_Number_Invalid_').style.visibility = "visible";    

            } else {  
                document.getElementById('Phone_Number_Invalid_').style.visibility = "hidden";  
                console.log('valid fullnameValue', fullnameValue)

                if (locationInput.value == "" ) {
                    console.log('invalid locationInputValue', locationInput.value)
                    document.getElementById('Location_Invalid_').style.visibility = "visible";    
                } else {  
                    document.getElementById('Location_Invalid_').style.visibility = "hidden";   
                    console.log('valid locationInputValue', locationInput.value)
                    getcheckoutinfo(phonenumber)
                }
    
            }
        } else {  
            document.getElementById('Phone_Number_Invalid').style.visibility = "visible";   
            console.log('phonenumber Not Valid')
        }
    
        if (fullnameInput.value == "" || fullnameInput.value.length <= 6 ) {
            console.log('invalid fullnameValue', fullnameValue)
            document.getElementById('Phone_Number_Invalid_').style.visibility = "visible";    
        } else {  
            document.getElementById('Phone_Number_Invalid_').style.visibility = "hidden";    
            console.log('valid fullnameValue', fullnameValue)
            
        }

        if (locationInput.value == "" ) {
            console.log('invalid locationInputValue', locationInput.value)
            document.getElementById('Location_Invalid_').style.visibility = "visible";    
        } else {  
            document.getElementById('Location_Invalid_').style.visibility = "hidden";  
            console.log('valid locationInputValue', locationInput.value)
        }
    
    }


} else {

    function checkout_payment() {  

        if (phonenumberInput.getAttribute('isvalid') === 'true') {
            console.log('Valid phonenumber')
            var phoneno = phonenumberInput.value;
            var phonenumber = parseInt(('254') + phoneno.replace(/^0/, ""));
            console.log('phonenumber', phonenumber)
    
            if (fullnameInput.value == "" || fullnameInput.value.length <= 3 ) {
                console.log('invalid fullnameValue', fullnameValue)
                document.getElementById('Phone_Number_Invalid_').style.visibility = "visible";    
            } else {  
                document.getElementById('Phone_Number_Invalid_').style.visibility = "hidden";
                console.log('valid fullnameValue', fullnameValue)
                getcheckoutinfo(phonenumber)
    
            }
        } else {  
            document.getElementById('Phone_Number_Invalid').style.visibility = "visible";   
            console.log('phonenumber Not Valid')
        }
    
        if (fullnameInput.value == "" || fullnameInput.value.length <= 6 ) {
            console.log('invalid fullnameValue', fullnameValue)
            document.getElementById('Phone_Number_Invalid_').style.visibility = "visible";    
        } else {
            document.getElementById('Phone_Number_Invalid_').style.visibility = "hidden";    
            console.log('valid fullnameValue', fullnameValue)
            
        }
    
    }

}



if(company_name == 'LuvaiOrganics'){
    console.log('LuvaiOrganicsHere')

    document.getElementById('Ksh_14900').style.visibility = 'hidden';
    document.getElementById('Ksh_14900_range').style.visibility = 'visible';

}






var cartArray= new Array();

function getcheckoutinfo(phonenumber) {
    var selected= new Array();
    var check_box= document.getElementById("addproducts");
    var selected_check= check_box.getElementsByTagName("input");


    // array for cart items
    for (var i = 0; i < selected_check.length; i++) {
        if (selected_check[i].checked) {

            productContainer= (selected_check[i].parentNode.parentNode.parentNode.parentNode)
            productName= productContainer.getElementsByClassName('product cart')[0].innerText.replace(/\n/g, '').replace('                    ', '').replace('                ', '')
            productsUnits= parseInt(productContainer.getElementsByClassName('product counter')[0].innerText)
            console.log('selected_check[i]', productName, typeof(productName), productsUnits)

            var a= {productName, productsUnits}
            selected.push(a)


        } else {
            console.log('no prdoducts')
        }
    };
    
    console.log('selected', selected)
    localStorage.setItem("product_bundle", JSON.stringify(selected))


    

    const phone_number= phonenumber
    console.log('phone_number', phone_number)
    checkout_cart= JSON.stringify(selected)
    console.log('checkout_cart', checkout_cart)

    linkproduct= (document.getElementById("ID22628_ey").innerText)
    linkproductunits= parseInt(document.getElementById("product_counter_input").getAttribute('value'))
    console.log('linkproductunits', linkproduct, linkproductunits)

    
    full_name= document.getElementById("Input_email_address").value
    delivery_fee= parseFloat(document.getElementById("Ksh_14900").innerText.replace('Ksh.', '').replace(',', ''))
    service_fee= parseFloat(document.getElementById("Ksh_14900_ev").innerText.replace('Ksh.', '').replace(',', ''))
    checkout_total= parseFloat(document.getElementById("Ksh_1504900").innerText.replace('Ksh.', '').replace(',', '')) 


    // deilvery_location= document.getElementById("location_input").value
    // console.log('full_name/deilvery_location', full_name, deilvery_location)

    var delivery_location = "Location"

    var location_inputdp = document.getElementById("location_inputdp_mob")
    if (typeof(location_inputdp) != 'undefined' && location_inputdp != null) {

        if(typeof(location_inputdp.querySelector('.menu .item.active')) != 'undefined' && location_inputdp.querySelector('.menu .item.active') != null){
            const selectedOption = location_inputdp.querySelector('.menu .item.active').dataset.value;

            membership_no= selectedOption
            
            console.log(selectedOption); // this will output the selected option's data-value attribute

            const colonIndex = selectedOption.indexOf(":"); // Find the index of the colon

            const location = selectedOption.slice(0, colonIndex).trim(); // Extract the first word
            const price = selectedOption.slice(colonIndex + 1).trim(); // Extract the second word

            console.log("Location:", location);
            console.log("SPrice:", price);
            delivery_fee = price
            delivery_location = location
        }else{
            delivery_location= location_inputdp.value

            console.log(location_inputdp)
            console.log(location_inputdp.value)
    

        }
       
        console.log("here")
    }

  

    console.log('checkout_total', linkproductunits, delivery_fee, service_fee, checkout_total)

    const loadingdots=  document.getElementById("ui_active_dimmer");
    loadingdots.style.visibility = 'visible';


    
    // Receipt
    const customer_name = document.getElementById('All_re')
    console.log('customer_name', customer_name)
    const customer_contact = document.getElementById('n_54723767380_re')
    console.log('customer_contact', customer_contact)

    customer_name.innerHTML = full_name
    customer_contact.innerHTML = ('+') + phone_number
    // 


    let membership_field =  document.getElementById('Group_5244_1');
    
    if (typeof(membership_field) != 'undefined' && membership_field != null) {
        // Exists.
        
        console.log("Membership exists")
        const dropdown = document.querySelector('#membership_number');
        if(typeof(dropdown.querySelector('.menu .item.active')) != 'undefined' && dropdown.querySelector('.menu .item.active') != null){
            const selectedOption = dropdown.querySelector('.menu .item.active').dataset.value;

            membership_no= selectedOption
            
            console.log(selectedOption); // this will output the selected option's data-value attribute
        }else{
            membership_no= document.getElementById("membership_number").value
        }
    } else {
        membership_no= 'null'
    }
    console.log('processpayment processpayment processpayment')

        data = {
            'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
            'phone_number':phone_number,
            'linkproduct': linkproduct,
            'linkproductunits': linkproductunits,
            'checkout_cart': checkout_cart,
            'full_name': full_name,
            'deilvery_location': delivery_location,
            'delivery_fee': delivery_fee,
            'service_fee': service_fee,
            'checkout_total': checkout_total,
            'membership_no': membership_no,
        }

        console.log(data)
    
    $.ajax({
        type: 'POST',
        url: 'createcheckoutpaymentlink',
        data: {
            'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
            'phone_number':phone_number,
            'linkproduct': linkproduct,
            'linkproductunits': linkproductunits,
            'checkout_cart': checkout_cart,
            'full_name': full_name,
            'deilvery_location': delivery_location,
            'delivery_fee': delivery_fee,
            'service_fee': service_fee,
            'checkout_total': checkout_total,
            'membership_no': membership_no,
        },
        success: function(response){
            checkoutlink= response.checkoutlink
            console.log('checkoutlink', checkoutlink);
            checkoutpaylink= response.checkoutpaylink
            console.log('checkoutpaylink', checkoutpaylink);

            let startTime = new Date().getTime();
            let interval = setInterval(function(){

                if(new Date().getTime() - startTime > 120000){
                    clearInterval(interval);
                    return;
                }
                
                $.ajax({
                    type: "POST",
                    url: 'paymentconfirm',
                    data: {
                        'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
                        'MR_id' : response.MerchantRequestID,
                    },
                    success: function(response){
                        const payment_status= response['paid']
                        console.log('checkout_complete::::', payment_status)

                        if(payment_status === true){
                            console.log('payment successfull!!')

                            
                            let company = document.getElementById("company__name");
                            if(company.value == "Trek Consulting"){
                                window.open("https://docs.google.com/forms/d/e/1FAIpQLSdzuhm1uuq9t2ewEUuCsXP_NlOwRk1dYwcqc-aFXgCnbufuxA/viewform?vc=0&c=0&w=1&flr=0", "_self");
                                return
                            }
                            
                            $.ajax({
                                type: "POST",
                                url: checkoutpaylink + '/paymentnotification_mpesa',
                                data: {
                                    'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
                                        'checkoutlink' : checkoutlink,
                                        'checkoutpaylink' :checkoutpaylink,
                                },
                                success: function(response){
                                    console.log('email sent::::')
                                        
                                },
                                error: function(error){
                                    console.log('failed email')
                                },
                            });

                            // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + checkoutpaylink 
                            
                            const payment_code= response['code'] 
                            const payment_date= response['date'] 

                            const transaction_code = document.getElementById('JSLADD-0001_re')
                            const transaction_date = document.getElementById('n_3_Oct_2021_705_am_re')


                            transaction_code.innerHTML = payment_code
                            transaction_date.innerHTML = payment_date


                            document.getElementById('MobileCLPayPage').style.visibility = 'hidden';
                            document.getElementById('MobileCheckoutLinkReceipt__3').style.visibility = 'visible';
                            document.getElementById("ui_active_dimmer").style.visibility = 'hidden';

                            $('html, body').animate({
                                scrollTop: $('#MobileCheckoutLinkReceipt__3').offset().top - 20 
                            }, 'slow');


                            setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
                            for(i=0; i<100; i++) { window.clearInterval(i); }
                            setTimeout("location.href = url;", 10);
                        }
                        if(payment_status === 'balance'){
                            console.log('insufficient balance!!')

                            // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopsbalance'
                            
                            document.getElementById('MobileCLPayPage').style.visibility = 'hidden';
                            document.getElementById('OopsSomethingWentWrong').style.visibility = 'visible';
                            document.getElementById('Something_went_wrong_balance').style.visibility = 'visible';
                            document.getElementById("ui_active_dimmer").style.visibility = 'hidden';
                            document.getElementById('Location_Invalid_').style.visibility = "hidden";    


                            $('html, body').animate({
                                scrollTop: $('#OopsSomethingWentWrong').offset().top - 20 
                            }, 'slow');
                            
                            setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
                            for(i=0; i<100; i++) { window.clearInterval(i); } 
                            setTimeout("location.href = url;", 10);
                        }
                        if(payment_status === 'cancelled'){
                            console.log('Request cancelled!!')

                            // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopscancelled'                          
                            
                            document.getElementById('MobileCLPayPage').style.visibility = 'hidden';
                            document.getElementById('OopsSomethingWentWrong').style.visibility = 'visible';
                            document.getElementById('Something_went_wrong_cancelled').style.visibility = 'visible';
                            document.getElementById("ui_active_dimmer").style.visibility = 'hidden';
                            document.getElementById('Location_Invalid_').style.visibility = "hidden";    


                            $('html, body').animate({
                                scrollTop: $('#OopsSomethingWentWrong').offset().top - 20 
                            }, 'slow');

                            setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
                            for(i=0; i<100; i++) { window.clearInterval(i); }
                            setTimeout("location.href = url;", 10);
                        }
                        if(payment_status === false){
                            console.log('payment failed!!')

                            // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopsfailed'                            
                            
                            document.getElementById('MobileCLPayPage').style.visibility = 'hidden';
                            document.getElementById('OopsSomethingWentWrong').style.visibility = 'visible';
                            document.getElementById('Something_went_wrong_failed').style.visibility = 'visible';
                            document.getElementById("ui_active_dimmer").style.visibility = 'hidden';
                            document.getElementById('Location_Invalid_').style.visibility = "hidden";    


                            $('html, body').animate({
                                scrollTop: $('#OopsSomethingWentWrong').offset().top - 20 
                            }, 'slow');

                            setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
                            for(i=0; i<100; i++) { window.clearInterval(i); }
                            setTimeout("location.href = url;", 10);
                        }
                        else {
                            console.log('pending Payment')
                            console.log('timer ::::', new Date().getTime() - startTime)
                        }
                            
                    },
                    error: function(error){
                        console.log('failed ajax delivery_fee')
                    },
                })

            }, 7700); 

            // setInterval(function(){
            //     $.ajax({
            //         type: "POST",
            //         url: 'paymentconfirm',
            //         data: {
            //             'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
            //             'MR_id' : response.MerchantRequestID,
            //         },
            //         success: function(response){
            //             const payment_status= response['paid']
            //             console.log('checkout_complete::::', payment_status)

            //             if(payment_status === true){
            //                 console.log('payment successfull!!')
                            
            //                 $.ajax({
            //                     type: "POST",
            //                     url: checkoutpaylink + '/paymentnotification',
            //                     data: {
            //                         'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
            //                             'checkoutlink' : checkoutlink,
            //                             'checkoutpaylink' :checkoutpaylink,
            //                     },
            //                     success: function(response){
            //                         console.log('email sent::::')
                                        
            //                     },
            //                     error: function(error){
            //                         console.log('failed email')
            //                     },
            //                 });

            //                 url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + checkoutpaylink  
                            
            //                 setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
            //                 for(i=0; i<100; i++) { window.clearInterval(i); }
            //                 setTimeout("location.href = url;", 10);
            //             }
            //             if(payment_status === 'balance'){
            //                 console.log('insufficient balance!!')

            //                 url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopsbalance'                                
                            
            //                 setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
            //                 for(i=0; i<100; i++) { window.clearInterval(i); } 
            //                 setTimeout("location.href = url;", 10);
            //             }
            //             if(payment_status === 'cancelled'){
            //                 console.log('Request cancelled!!')

            //                 url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopscancelled'                          
                            
            //                 setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
            //                 for(i=0; i<100; i++) { window.clearInterval(i); }
            //                 setTimeout("location.href = url;", 10);
            //             }
            //             if(payment_status === false){
            //                 console.log('payment failed!!')

            //                 url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopsfailed'                            
                            
            //                 setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
            //                 for(i=0; i<100; i++) { window.clearInterval(i); }
            //                 setTimeout("location.href = url;", 10);
            //             }
            //             else {
            //                 console.log('pending Payment')
            //             }
                            
            //         },
            //         error: function(error){
            //             console.log('failed ajax delivery_fee')
            //         },
            //     })
            // }, 3000);

        },
        error: function(error){
            console.log('failed ajax checkout_basket_info')
        }
    });
}


function processpayment() {
    $('#ui_active_dimmer').modal('show');
    console.log('processpayment')
}








const cardpayment= document.getElementById("Group_6098_card")

cardpayment.addEventListener('click', function(){
    console.log('cardpayment');
    cardpayment.getElementsByClassName('card')[0].style.border = 'solid 2px rgb(0, 71, 251)';
    mpesapayment.getElementsByClassName('card')[0].style.border = 'none';
    document.getElementById('Group_6091_card').style.visibility = 'visible';
    document.getElementById('Group_6091_card').style.top= '680px';
    document.getElementById('Group_3858_hc_card').style.visibility = 'visible';

    document.getElementById('Billing_Email_address').style.visibility = 'visible';
    document.getElementById('Group_5244').style.visibility = 'hidden';
    document.getElementById('email_address').style.visibility = 'visible';
    document.getElementById('An_Mpesa_prompt_will_be_sent_t').innerHTML = `
        <span>
            (Ready to checkout? You'll be redirected to a secure page <br/>to complete the purchase.)
        </span>
    `

    checkout_amount= document.getElementById("Ksh_1504900").innerText.replace('Ksh.', '')
    checkout_total= (parseFloat(document.getElementById("Ksh_1504900").innerText.replace('Ksh.', '').replace(',', '')).toFixed(2)).toLocaleString()
    console.log('checkout_total::::', checkout_total)

    product_price = document.getElementById('prod_pricee').value;
    total_amount = document.getElementById('total_amount_fee').value;
    mpesa_service_fee = document.getElementById('service_fee_amount').value;
    card_service_fee = (parseFloat(product_price) * 0.015);

    total_amount = total_amount - parseFloat(mpesa_service_fee)

    let sub_total = document.getElementById('Ksh_1504900');
    let service_fee = document.getElementById('Ksh_14900_ev');

    //Ksh_14900
    delivery_fee = parseFloat(document.getElementById("Ksh_14900").innerText.replace('Ksh.', ''));

    sub_total.innerHTML= ('Ksh. ') + ((total_amount + card_service_fee + delivery_fee).toFixed(2)).toLocaleString();
    service_fee.innerHTML = ('Ksh. ') + (( parseFloat(card_service_fee)).toFixed(2)).toLocaleString();

    console.log('total_amount, card_service_fee, delivery_fee::::', total_amount , card_service_fee , delivery_fee)
    console.log('total_amount + card_service_fee + delivery_fee::::', total_amount + card_service_fee + delivery_fee)



    document.getElementById('Group_521444').style.visibility = 'hidden',
    document.getElementById('submit-button').style.visibility = 'visible',
    document.getElementById('submit-button').innerHTML = `
        <div id="Group_5214" style="visibility: visible;">
        
            <div id="Group_3969">
                <svg class="Rectangle_2057_cv">
                    <linearGradient id="Rectangle_2057_cv" spreadMethod="pad" x1="0.066" x2="0.79" y1="0" y2="1.3">
                        <stop offset="0" stop-color="#5b97f4" stop-opacity="1"></stop>
                        <stop offset="1" stop-color="#5899ff" stop-opacity="1"></stop>
                    </linearGradient>
                    <rect id="Rectangle_2057_cv" rx="7" ry="7" x="0" y="0" width="347" height="46">
                    </rect>
                </svg>
            </div>
            
            <div id="PAY_KES_1549000_" class="PAY_KES" > PAY KES. ${((total_amount + card_service_fee + delivery_fee).toFixed(2)).toLocaleString()}
        </div>
        `

    const loadingdots=  document.getElementById("ui_active_dimmer");
    loadingdots.style.visibility = 'hidden';

});
 


const initialize_card_payment= document.getElementById("submit-button")

initialize_card_payment.addEventListener('click', function(){
    console.log('initialize_card_payment');

    var selected= new Array();
    var check_box= document.getElementById("addproducts");
    var selected_check= check_box.getElementsByTagName("input");


    // array for cart items
    for (var i = 0; i < selected_check.length; i++) {
        if (selected_check[i].checked) {

            productContainer= (selected_check[i].parentNode.parentNode.parentNode.parentNode)
            productName= productContainer.getElementsByClassName('product cart')[0].innerText.replace(/\n/g, '').replace('                    ', '').replace('                ', '')
            productsUnits= parseInt(productContainer.getElementsByClassName('product counter')[0].innerText)
            console.log('selected_check[i]', productName, typeof(productName), productsUnits)

            var a= {productName, productsUnits}
            selected.push(a)


        } else {
            console.log('no prdoducts')
        }
    };
    
    console.log('selected', selected)
    localStorage.setItem("product_bundle", JSON.stringify(selected))

    emailInput= document.getElementById('email_address')
    full_name= fullnameInput.value




    var delivery_location = "Location"

    if (typeof(locationInput) != 'undefined' && locationInput != null) {
        delivery_location= locationInput.value
    }else{
        // Rent a dress location listener
        let dropdown__mb = document.getElementById("rent_adress_mb");

        if (typeof(dropdown__mb) != 'undefined' && dropdown__mb != null) {
                const selectedOption = dropdown__mb.value;

                const colonIndex = selectedOption.indexOf(":"); // Find the index of the colon

                const location = selectedOption.slice(0, colonIndex).trim(); // Extract the first word
                const price = selectedOption.slice(colonIndex + 1).trim(); // Extract the second word

                console.log("Location:", location);
                console.log("SPrice:", price);

                if(location == "None"){
                    document.getElementById('Location_Invalid_').style.visibility = "visible";  
                    return
                }

                delivery_location = location
  
        }
    }







    checkout_cart= JSON.stringify(selected)
    console.log('checkout_cart', checkout_cart)
    
    linkproduct= (document.getElementById("ID22628_ey").innerText)
    linkproductunits= parseInt(document.getElementById("product_counter_input").getAttribute('value'))
    console.log('linkproductunits', linkproduct, linkproductunits)
    checkout_total= parseFloat(document.getElementById("Ksh_1504900").innerText.replace('Ksh.', '').replace(',', '').replace('.00', '')) 

    product_price = document.getElementById('prod_pricee').value;

    checkout_total = checkout_total - parseFloat((0.015 * parseFloat(product_price)))

    let membership_field =  document.getElementById('Group_5244_1');

    console.log("Membership membership_field")
    console.log(membership_field)
    
    if (typeof(membership_field) != 'undefined' && membership_field != null) {
        // Exists.
        console.log("Membership exists")
        const dropdown = document.querySelector('#membership_number');
        if(typeof(dropdown.querySelector('.menu .item.active')) != 'undefined' && dropdown.querySelector('.menu .item.active') != null){
            const selectedOption = dropdown.querySelector('.menu .item.active').dataset.value;

            membership_no= selectedOption
            
            console.log(selectedOption); // this will output the selected option's data-value attribute
        }else{
            membership_no= document.getElementById("membership_number").value
        }
        
       
        
    } else {
        membership_no= 'null'
        console.log("Membership d exists")
        console.log(membership_no)
    }


    // validate inputs
    if (emailInput.value == "" || emailInput.value.length <= 4 ) {
        console.log('invalid emailInput', fullnameValue)
        document.getElementById('Email_address_Invalid_').style.visibility = "visible";
        emailvalid = false;}
    else {  
        document.getElementById('Email_address_Invalid_').style.visibility = "hidden";  
        console.log('valid emailInput', fullnameValue)
        emailvalid = true;}

    if (fullnameInput.value == "" || fullnameInput.value.length <= 6 ) {
        console.log('invalid fullnameValue', fullnameValue)
        document.getElementById('Phone_Number_Invalid_').style.visibility = "visible";
        namevalid = false;}
    else {
        document.getElementById('Phone_Number_Invalid_').style.visibility = "hidden"; 
        console.log('valid fullnameValue', fullnameValue)
        namevalid = true;}

    // if (locationInput.value == ""  ) {
    //     console.log('invalid locationInputValue', locationInput.value)
    //     document.getElementById('Location_Invalid_').style.visibility = "visible";
    //     locationvalid = false;}
    // else {  
    //     document.getElementById('Location_Invalid_').style.visibility = "hidden";
    //     console.log('valid locationInputValue', locationInput.value)
    //     locationvalid = true;}
    
    if (  emailvalid == true && namevalid == true  ){
            
        const loadingdots=  document.getElementById("ui_active_dimmer");
        loadingdots.style.visibility = 'visible';

        //initialize transaction
        $.ajax({
            type: "POST",
            url: 'PaystackInitializeTransaction',
            data: {
                'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
                'membership_no': membership_no,
                'email': emailInput.value,
                'linkproduct': linkproduct,
                'linkproductunits': linkproductunits,
                'checkout_cart': checkout_cart,
                'full_name': full_name,
                'deilvery_location': delivery_location,
                'checkout_total': checkout_total,
                
            },
            success: function(response){
                console.log('response ::::', response);

                let status= response.status
                console.log('status ::::', status);

                if (status == true) {
                    let checkout_url= response.data.checkout_url
                    console.log('checkout_url ::::', checkout_url);
                    window.location.replace(checkout_url);
                }
                else {
                    loadingdots.style.visibility = 'hidden';
                    document.getElementById('OopsSomethingWentWrong').style.visibility = 'visible';
                    document.getElementById('Something_went_wrong_auth').style.visibility = 'visible';
                }
                    
            },
            error: function(error){
                console.log('failed ajax card payment');
            },
        })
    }
    else{
        console.log('failed validation for card payment');
    }
    });
    
    
    // document.getElementById('Group_521444').innerHTML = `
    //     <div id="Group_3969">
    //         <svg class="Rectangle_2057_cv">
    //             <linearGradient id="Rectangle_2057_cv" spreadMethod="pad" x1="0.066" x2="0.79" y1="0" y2="1.3">
    //                 <stop offset="0" stop-color="#5b97f4" stop-opacity="1"></stop>
    //                 <stop offset="1" stop-color="#5899ff" stop-opacity="1"></stop>
    //             </linearGradient>
    //             <rect id="Rectangle_2057_cv" rx="7" ry="7" x="0" y="0" width="347" height="46">
    //             </rect>
    //         </svg>
    //     </div>
        
    //     <a onClick="card_payment()">
    //         <div id="PAY_KES_1549000_" > PAY KES. ${ checkout_total.toLocaleString().toFixed(2) }
    //         </div>
    //     </a>

    //     `

    // const buttonSubmit= document.getElementById('submit-button');
        // checkout_amount= document.getElementById("Ksh_1504900").innerText.replace('Ksh.', '')
        // checkout_total= parseFloat(document.getElementById("Ksh_1504900").innerText.replace('Ksh.', '').replace(',', ''))
        // console.log('checkout_total::::', checkout_total)





//         let membership_field =  document.getElementById('Group_5244_1');
          
//         if (typeof(membership_field) != 'undefined' && membership_field != null) {
//             // Exists.
//             console.log('membership_field::::  Exists')
//             document.getElementById('Group_5235').style.top= '1300px';
//             document.getElementById('Group_6091_card').style.top= '887px';
//             document.getElementById('submit-button').style.top= '1160px';
//         } else {
//             document.getElementById('Group_5235').style.top = '1220px';
//         }

//         let stripe = Stripe('pk_live_51KbtEPKv0vSxkVAbrHQLQHpbRuCh6etpUaB248H5RkKwiqjTjcmyt0S4DYH5P2XUtAH4Vz8Z1WHt6ePd07Qev2MW00gl3NXnSl');
//         // let stripe = Stripe('pk_test_51KbtEPKv0vSxkVAbiOLNZZSRCtFhrSjWlSjvZQSWPA7u7u1LWaiy7Az949fXmcTd0GU6rkkdimYWhZhVZHEtSD5V00WbKS5RZ2');
        
//         let elements = stripe.elements();

//         const cardNumberElement= elements.create('cardNumber');
//         const cardExpiryElement= elements.create('cardExpiry');
//         const cardCvcElement= elements.create('cardCvc');


//         document.getElementById('cardnumber').style.visibility = 'visible';
//         document.getElementById('cardyear').style.visibility = 'visible';
//         document.getElementById('cardcvc').style.visibility = 'visible';

//         cardNumberElement.mount('#cardnumber')
//         cardExpiryElement.mount('#cardyear')
//         cardCvcElement.mount('#cardcvc')

//         document.getElementById('Card_Information_card').style.visibility = 'visible';
//         document.getElementById('Group_6091_hm_card').style.visibility = 'visible';

//         setTimeout(
//             document.getElementById('Group_521444').style.visibility = 'hidden',
//             document.getElementById('submit-button').style.visibility = 'visible',
//             document.getElementById('submit-button').innerHTML = `
//                 <div id="Group_5214" style="visibility: visible;">
                
//                     <div id="Group_3969">
//                         <svg class="Rectangle_2057_cv">
//                             <linearGradient id="Rectangle_2057_cv" spreadMethod="pad" x1="0.066" x2="0.79" y1="0" y2="1.3">
//                                 <stop offset="0" stop-color="#5b97f4" stop-opacity="1"></stop>
//                                 <stop offset="1" stop-color="#5899ff" stop-opacity="1"></stop>
//                             </linearGradient>
//                             <rect id="Rectangle_2057_cv" rx="7" ry="7" x="0" y="0" width="347" height="46">
//                             </rect>
//                         </svg>
//                     </div>
                    
//                     <div id="PAY_KES_1549000_" class="PAY_KES" > PAY KES. ${ checkout_amount }  </div>
//             `
//         , 5000);
        
//         const buttonSubmit= document.getElementById('submit-button');

//         // Handle real-time validation errors from the card Element.
//         buttonSubmit.addEventListener('change', function(event) {
//             let displayError = document.getElementById('Card_Information_card');
//             if (event.error) {
//                 displayError.style.color = 'rgb(226, 2, 2)';
//                 displayError.textContent = event.error.message;
//             } else {
//                 displayError.style.color = 'rgba(0,0,0,1)';
//                 displayError.textContent = 'Phone Number';
//             }
//         });

//         let form = document.getElementById('payment-form');

//         form.addEventListener('submit', function(event) {
//             event.preventDefault();
 
//             stripe.createToken(cardNumberElement).then(function(result) {
//                 if (result.error) {

//                 // Inform the user if there was an error.
//                 let errorElement = document.getElementById('Card_Information_card');
//                 errorElement.style.color = 'rgb(226, 2, 2)';
//                 errorElement.textContent = result.error.message;

//                 } else { 

//                     const emailaddressInput = document.getElementById("email_address");
//                     const emailaddressValue = emailaddressInput.value;

//                     email_validate= ValidateEmail(emailaddressValue)

//                     if (email_validate == true) {

//                         // Create Payment Method BEGIN
//                         stripe.createPaymentMethod({
//                             type: 'card',
//                             card: cardNumberElement,
//                             billing_details: {
//                                 email: emailaddressValue,
//                             },
//                         }).then(function(payment_method_result){

//                             if (payment_method_result.error) {

//                                 let errorElement = document.getElementById('Card_Information_card');
//                                 errorElement.style.color = 'rgb(226, 2, 2)';
//                                 errorElement.textContent = payment_method_result.error.message;

//                             } else {

//                                 let form = document.getElementById('payment-form');
//                                 let hiddenInput2 = document.createElement('input');
                
//                                 hiddenInput2.setAttribute('type', 'hidden');
//                                 hiddenInput2.setAttribute('name', 'payment_method_id');
//                                 hiddenInput2.setAttribute('value', payment_method_result.paymentMethod.id);
//                                 form.appendChild(hiddenInput2);
                
//                                 var phoneno = phonenumberInput.value;
//                                 let phone_number = parseInt(('254') + phoneno.replace(/^0/, ""));
//                                 let hiddenInput3 = document.createElement('input');
//                                 hiddenInput3.setAttribute('type', 'hidden');
//                                 hiddenInput3.setAttribute('name', 'phone_number');
//                                 hiddenInput3.setAttribute('value', phone_number);
//                                 form.appendChild(hiddenInput3);
                
//                                 let linkproduct= (document.getElementById("ID22628_ey").innerText)
//                                 let hiddenInput4 = document.createElement('input');
//                                 hiddenInput4.setAttribute('type', 'hidden');
//                                 hiddenInput4.setAttribute('name', 'linkproduct');
//                                 hiddenInput4.setAttribute('value', linkproduct);
//                                 form.appendChild(hiddenInput4);
                
                
//                                 let linkproductunits= parseInt(document.getElementById("product_counter_input").getAttribute('value'))
//                                 let hiddenInput5 = document.createElement('input');
//                                 hiddenInput5.setAttribute('type', 'hidden');
//                                 hiddenInput5.setAttribute('name', 'linkproductunits');
//                                 hiddenInput5.setAttribute('value', linkproductunits);
//                                 form.appendChild(hiddenInput5);


//                                 var selected= new Array();
//                                 var check_box= document.getElementById("addproducts");
//                                 var selected_check= check_box.getElementsByTagName("input");
                            
                            
//                                 // array for cart items
//                                 for (var i = 0; i < selected_check.length; i++) {
//                                     if (selected_check[i].checked) {
                            
//                                         productContainer= (selected_check[i].parentNode.parentNode.parentNode.parentNode)
//                                         productName= productContainer.getElementsByClassName('product cart')[0].innerText.replace(/\n/g, '').replace('                    ', '').replace('                ', '')
//                                         productsUnits= parseInt(productContainer.getElementsByClassName('product counter')[0].innerText)
//                                         console.log('selected_check[i]', productName, typeof(productName), productsUnits)
                            
//                                         var a= {productName, productsUnits}
//                                         selected.push(a)
                            
                            
//                                     } else {
//                                         console.log('no prdoducts')
//                                     }
//                                 };
                                
//                                 console.log('selected', selected)
//                                 localStorage.setItem("product_bundle", JSON.stringify(selected))
//                                 checkout_cart= JSON.stringify(selected)
//                                 let hiddenInput6 = document.createElement('input');
//                                 hiddenInput6.setAttribute('type', 'hidden');
//                                 hiddenInput6.setAttribute('name', 'checkout_cart');
//                                 hiddenInput6.setAttribute('value', checkout_cart);
//                                 form.appendChild(hiddenInput6);
                
//                                 full_name= document.getElementById("Input_email_address").value
//                                 let hiddenInput7 = document.createElement('input');
//                                 hiddenInput7.setAttribute('type', 'hidden');
//                                 hiddenInput7.setAttribute('name', 'full_name');
//                                 hiddenInput7.setAttribute('value', full_name);
//                                 form.appendChild(hiddenInput7);
                
//                                 deilvery_location= document.getElementById("location_input").value
//                                 let hiddenInput8 = document.createElement('input');
//                                 hiddenInput8.setAttribute('type', 'hidden');
//                                 hiddenInput8.setAttribute('name', 'deilvery_location');
//                                 hiddenInput8.setAttribute('value', deilvery_location);
//                                 form.appendChild(hiddenInput8);

//                                 delivery_fee= parseFloat(document.getElementById("Ksh_14900").innerText.replace('Ksh.', '').replace(',', ''))
//                                 let hiddenInput9 = document.createElement('input');
//                                 hiddenInput9.setAttribute('type', 'hidden');
//                                 hiddenInput9.setAttribute('name', 'delivery_fee');
//                                 hiddenInput9.setAttribute('value', delivery_fee);
//                                 form.appendChild(hiddenInput9);
                
//                                 service_fee= parseFloat(document.getElementById("Ksh_14900_ev").innerText.replace('Ksh.', '').replace(',', ''))
//                                 console.log('service_fee', service_fee)
//                                 let hiddenInput10 = document.createElement('input');
//                                 hiddenInput10.setAttribute('type', 'hidden');
//                                 hiddenInput10.setAttribute('name', 'service_fee');
//                                 hiddenInput10.setAttribute('value', service_fee);
//                                 form.appendChild(hiddenInput10);
                
//                                 checkout_total= parseFloat(document.getElementById("Ksh_1504900").innerText.replace('Ksh.', '').replace(',', ''))
//                                 let hiddenInput11 = document.createElement('input');
//                                 hiddenInput11.setAttribute('type', 'hidden');
//                                 hiddenInput11.setAttribute('name', 'checkout_total');
//                                 hiddenInput11.setAttribute('value', checkout_total);
//                                 form.appendChild(hiddenInput11);

//                                 payment_intent_id= sessionStorage.getItem('payment_intent_id')
//                                 console.log('!!!!payment_intent_id::::payment_intent_id!!!!', payment_intent_id)
//                                 let hiddenInput12= document.createElement('input');
//                                 hiddenInput12.setAttribute('type', 'hidden');
//                                 hiddenInput12.setAttribute('name', 'payment_intent_id');
//                                 hiddenInput12.setAttribute('value', payment_intent_id);
//                                 form.appendChild(hiddenInput12);

//                                 const emailaddressInput = document.getElementById("email_address");
//                                 const emailaddressValue = emailaddressInput.value;
//                                 console.log('emailaddressValue', emailaddressValue)


//                                 let membership_field =  document.getElementById('Group_5244_1');
        
//                                 if (typeof(membership_field) != 'undefined' && membership_field != null) {
//                                     // Exists.
//                                     membership_no= document.getElementById("membership_number").value
//                                     console.log('!!!!membership_no!!!!', membership_no)
//                                     let hiddenInput13= document.createElement('input');
//                                     hiddenInput13.setAttribute('type', 'hidden');
//                                     hiddenInput13.setAttribute('name', 'membership_no');
//                                     hiddenInput13.setAttribute('value', membership_no);
//                                     form.appendChild(hiddenInput13);
//                                 } else {
//                                     // Exists.
//                                     membership_no= 'null'
//                                     console.log('!!!!null membership_no!!!!', membership_no)
//                                     let hiddenInput13= document.createElement('input');
//                                     hiddenInput13.setAttribute('type', 'hidden');
//                                     hiddenInput13.setAttribute('name', 'membership_no');
//                                     hiddenInput13.setAttribute('value', membership_no);
//                                     form.appendChild(hiddenInput13);
//                                 }


//                                 name_validate= ValidateFullname()
//                                 phone_validate= ValidatePhoneNumber()
//                                 email_validate= ValidateEmail(emailaddressValue)
//                                 console.log('name_validate ::::', name_validate, 'phone_validate ::::', phone_validate, 'email_validate ::::', email_validate)

//                                 if (email_validate == true && name_validate == true && phone_validate == true) {


//                                     const loadingdots=  document.getElementById("ui_active_dimmer");
//                                     loadingdots.style.visibility = 'visible';

                                    
//                                     // Submit the form
//                                     // form.submit();
//                                     var data = form;
//                                     fetch(
//                                         data.getAttribute('action'), {
//                                         method: data.getAttribute('method'),
//                                         body: new FormData(data)
//                                     }).then(res=>res.json())
//                                         .then(function (response) {

//                                             const checkoutlink= response.checkoutlink;
//                                             const checkoutpaylink= response.checkoutpaylink;

//                                             if (response.payment_status === true) {
//                                                 console.log('authentication ::::', response.authentication);


//                                                 // Show Confirmation Receipt
//                                                 $.ajax({
//                                                     type: "POST",
//                                                     url: checkoutpaylink + '/paymentnotification_card',
//                                                     data: {
//                                                         'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
//                                                             'checkoutlink' : checkoutlink,
//                                                             'checkoutpaylink' :checkoutpaylink,
//                                                             'emailaddress': emailaddressValue,
//                                                     },
//                                                     success: function(response){
//                                                         console.log('email sent::::')
                                                            
//                                                     },
//                                                     error: function(error){
//                                                         console.log('failed email')
//                                                     },
//                                                 });
                    
//                                                 // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + checkoutpaylink  

//                                                 const customer_name = document.getElementById('All_re')
//                                                 customer_name.innerHTML = full_name
//                                                 const customer_contact = document.getElementById('n_54723767380_re')
                                            
//                                                 customer_name.innerHTML = response['name'] 
//                                                 customer_contact.innerHTML = ('+') + response['phone'] 

//                                                 const payment_code= response['code'] 
//                                                 const payment_date= response['date'] 
                
//                                                 const transaction_code = document.getElementById('JSLADD-0001_re')
//                                                 const transaction_date = document.getElementById('n_3_Oct_2021_705_am_re')
                
                
//                                                 transaction_code.innerHTML = payment_code
//                                                 transaction_date.innerHTML = payment_date

//                                                 document.getElementById('MobileCLPayPage').style.visibility = 'hidden';
//                                                 document.getElementById('Card_types').style.visibility = 'hidden';
//                                                 document.getElementById('MobileCheckoutLinkReceipt__3').style.visibility = 'visible';
//                                                 document.getElementById("ui_active_dimmer").style.visibility = 'hidden';
                                                
//                                                 $('html, body').animate({
//                                                     scrollTop: $('#MobileCheckoutLinkReceipt__3').offset().top - 20 
//                                                 }, 'slow');
                    
                                                
//                                                 setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
//                                                 for(i=0; i<100; i++) { window.clearInterval(i); }
//                                                 setTimeout("location.href = url;", 10);

//                                             }

//                                             if(response.payment_status === 'balance'){
//                                                 console.log('insufficient balance!!')

//                                                 // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopsbalance'                                
                                                

//                                                 document.getElementById('MobileCLPayPage').style.visibility = 'hidden';
//                                                 document.getElementById('OopsSomethingWentWrong').style.visibility = 'visible';
//                                                 document.getElementById('Something_went_wrong_balance').style.visibility = 'visible';
//                                                 document.getElementById('Card_types').style.visibility = 'hidden';
//                                                 document.getElementById("ui_active_dimmer").style.visibility = 'hidden';
//                                                 document.getElementById('Location_Invalid_').style.visibility = "hidden";    


//                                                 $('html, body').animate({
//                                                     scrollTop: $('#OopsSomethingWentWrong').offset().top - 20 
//                                                 }, 'slow');

//                                                 setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
//                                                 for(i=0; i<100; i++) { window.clearInterval(i); } 
//                                                 setTimeout("location.href = url;", 10);
//                                             }
                                            
//                                             if(response.payment_status === 'failed'){
//                                                 console.log('payment failed!!')
                
//                                                 // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopsfailed'                            
                                                

//                                                 document.getElementById('MobileCLPayPage').style.visibility = 'hidden';
//                                                 document.getElementById('OopsSomethingWentWrong').style.visibility = 'visible';
//                                                 document.getElementById('Something_went_wrong_failed').style.visibility = 'visible';
//                                                 document.getElementById('Card_types').style.visibility = 'hidden';
//                                                 document.getElementById("ui_active_dimmer").style.visibility = 'hidden';
//                                                 document.getElementById('Location_Invalid_').style.visibility = "hidden";    


//                                                 $('html, body').animate({
//                                                     scrollTop: $('#OopsSomethingWentWrong').offset().top - 20 
//                                                 }, 'slow');

//                                                 setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
//                                                 for(i=0; i<100; i++) { window.clearInterval(i); }
//                                                 setTimeout("location.href = url;", 10);

//                                             }


//                                             if(response.payment_status === 'requires_action'){
//                                                 let stripe= 'pk_live_51KbtEPKv0vSxkVAbrHQLQHpbRuCh6etpUaB248H5RkKwiqjTjcmyt0S4DYH5P2XUtAH4Vz8Z1WHt6ePd07Qev2MW00gl3NXnSl'
//                                                 let secret_key= response.client_secret

//                                                 _3dsec(stripe, secret_key, checkoutlink, checkoutpaylink)

//                                             }
//                                         });
//                                     event.preventDefault();
//                                 }

//                             }
//                         });

//                 };
//             };
//             })
                
//         });



function _3dsec(stripe_publishable_key, pi_secret, checkout_link, checkoutpay_link) {
    console.log('_3dsec::::')
    console.log('_3dsec :::: checkout_link ', checkout_link)
    console.log('_3dsec :::: checkoutpay_link ', checkoutpay_link)
    var stripe = Stripe(stripe_publishable_key);

    stripe.confirmCardPayment(pi_secret).then(function(result) {
    if (result.error) {
        // Display error.message in your UI.
        let errorElement = document.getElementById('Card_Information_card');
        errorElement.style.color = 'rgb(226, 2, 2)';
        errorElement.textContent = 'Error!!!';

    } else {
        // The payment has succeeded. Display a success message.
        // Show Confirmation Receipt
        $.ajax({
            type: "POST",
            url: checkoutpay_link + '/paymentnotification_card',
            data: {
                'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
                    'checkoutlink' : checkout_link,
                    'checkoutpaylink' :checkoutpay_link,
            },
            success: function(response){
                console.log('email sent::::')
                    
            },
            error: function(error){
                console.log('failed email')
            },
        });

        url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkout_link + '/' + checkoutpay_link  
        
        // setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
        for(i=0; i<100; i++) { window.clearInterval(i); }
        setTimeout("location.href = url;", 10);
    }
    });
}

function ValidateEmail(emailaddressValue) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log('emailaddressValue::::', emailaddressValue)
    if(emailaddressValue.match(mailformat)) {
        document.getElementById('Email_address_Invalid_').style.visibility = "hidden";
        return true;
    } else
    {
        document.getElementById('Email_address_Invalid_').style.visibility = "visible";
        return false;
    }
}

function ValidatePhoneNumber() {

    if (phonenumberInput.getAttribute('isvalid') === 'true') {
        document.getElementById('Phone_Number_Invalid').style.visibility = "hidden"; 
        return true;
    } else {
        document.getElementById('Phone_Number_Invalid').style.visibility = "visible"; 
        return false;
    }
}


function ValidateFullname() {

    if (fullnameInput.value == "" || fullnameInput.value.length <= 3 ) {
        document.getElementById('Phone_Number_Invalid_').style.visibility = "visible";
        return false;
    } else {
        document.getElementById('Phone_Number_Invalid_').style.visibility = "hidden";
        return true;
    }
}



const mpesapayment= document.getElementById("Group_6097_card")

mpesapayment.addEventListener('click', function(){

    mpesapayment.getElementsByClassName('card')[0].style.border = 'solid 2px rgb(0, 71, 251)';
    cardpayment.getElementsByClassName('card')[0].style.border = 'none';
    
    document.getElementById('Group_6091_card').style.visibility = 'hidden';
    document.getElementById('Group_3858_hc_card').style.visibility = 'hidden';
    document.getElementById('Billing_Email_address').style.visibility = 'hidden';

    document.getElementById('Group_5244').style.visibility = 'visible';
    document.getElementById('email_address').style.visibility = 'hidden';
    document.getElementById('An_Mpesa_prompt_will_be_sent_t').innerHTML = `
        <span>
            (An Mpesa prompt will be sent to the entered phone number. <br/>Fill in your pin to complete the purchase)
        </span>
    `

    checkout_amount= document.getElementById("Ksh_1504900").innerText.replace('Ksh.', '')
    checkout_total= (parseFloat(document.getElementById("Ksh_1504900").innerText.replace('Ksh.', '').replace(',', '')).toFixed(2)).toLocaleString()
    console.log('checkout_total::::', checkout_total)

    let mpesa_grand_total = document.getElementById('PAY_KES_1549000_');
    let sub_total = document.getElementById('Ksh_1504900');
    let service_fee = document.getElementById('Ksh_14900_ev');


    total_amount = document.getElementById('total_amount_fee').value;
    product_price = document.getElementById('prod_pricee').value;
    mpesa_service_fee = document.getElementById('service_fee_amount').value;

    total_amount = total_amount - parseFloat(mpesa_service_fee)
    delivery_fee = parseFloat(document.getElementById("Ksh_14900").innerText.replace('Ksh.', ''));

    parsed_amount = parseFloat(total_amount) + parseFloat(delivery_fee);

    mpesa_grand_total.innerHTML= ('PAY KES. ') + ((parsed_amount + parseFloat(mpesa_service_fee)).toFixed(2)).toLocaleString();
    sub_total.innerHTML= ('Ksh. ') + ((parsed_amount + parseFloat(mpesa_service_fee)).toFixed(2)).toLocaleString();
    service_fee.innerHTML = ('Ksh. ') + ( parseFloat(mpesa_service_fee)).toFixed(2);



    document.getElementById('Group_521444').style.visibility = 'visible';
    document.getElementById('submit-button').style.visibility = 'hidden';
    document.getElementById('Group_5214').style.visibility = 'hidden';
    

    let membership_field =  document.getElementById('Group_5244_1');
        
    if (typeof(membership_field) != 'undefined' && membership_field != null) {
        // Exists.
        console.log('membership_field::::  Exists')
        document.getElementById('Group_5235').style.top= '930px';
        document.getElementById('Group_6091_card').style.top= '887px';
        document.getElementById('submit-button').style.top= '1160px';
    } else {
        document.getElementById('Group_5235').style.top = '830px';
    }

    console.log('mpesapayment::::', Group_6097_card)


    const loadingdots=  document.getElementById("ui_active_dimmer");
    loadingdots.style.visibility = 'hidden';
})