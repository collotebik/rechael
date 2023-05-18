// // / PRODUCT QUANTITY COUNTER

// var addCartItemButtonlinkproduct = document.getElementById('add_cart_item_link_product_1_droidcon');
// console.log('addCartItemButtonlinkproduct_dp', addCartItemButtonlinkproduct )

// var reduceCartItemButtonlinkproduct = document.getElementById('reduce_cart_item_link_product_1_droidcon');
// console.log('reduceCartItemButtonlinkproduct_dp', reduceCartItemButtonlinkproduct )

// var productcounterlinkproduct = document.getElementsByClassName('product counter link-product');
// console.log('reduceCartItemButtonlinkproduct_dp', reduceCartItemButtonlinkproduct )

// productcounterlinkproduct.innerHTML = 1;

// // add units link-product
// addCartItemButtonlinkproduct.addEventListener('click', function(event){
//     console.log('Clickeddddd ++');
//     var addButtonClicked = event.target;	
//     console.log('addButtonClicked_dp', addButtonClicked);
//     var cartItems = document.getElementById('Satis_Travel_Bags__2_moredp').innerHTML;
//     console.log('cartItems_dp', cartItems);
//     var productcount = document.getElementById('product_counter_input_droidcon');
//     console.log('productcount_dp', productcount)
//     var productcountvalue = parseInt(productcount.getAttribute('value'));
//     console.log('productcountvalue_dp', productcountvalue);
//     var product_units=  productcountvalue + 1;
//     console.log('product_units_dp', product_units);
//     console.log('productcountINPUT_dp', productcount.getElementsByTagName('input'));

//     document.getElementById('product_counter_input_droidcon').setAttribute("value", product_units);

//     productprice_dp = document.getElementById('Ksh_350000_htdp').innerText.replace('Ksh ', '').replace(',', '').replace(',', '')
//     console.log('productprice_dp', parseFloat(productprice_dp ))

//     total_dp= parseFloat(productprice_dp ) * parseInt(product_units)
//     console.log('total_dp', total_dp)    

//     cartprice_dp= document.getElementById('KES_800000dp').innerText;
//     console.log('cartprice_dp', cartprice_dp)

//     newtotal_dp = 0

//     if(total_dp < 10000){
//         service_fee = total_dp*0.01
//     } else{
//         service_fee = total_dp*0.005
//     }


//     if (product_units >= 1) { 
//         newtotal_dp= parseFloat(cartprice_dp.replace('Ksh. ', '').replace(/,/g, '')) + parseInt(productprice_dp )
//         console.log('newtotal_dp ==== 0  dp', newtotal_dp)
//     } 

//     document.getElementById('KES_800000dp').innerText= ('Ksh. ') + total_dp.toLocaleString() + ('.00')
//     document.getElementById('Ksh_350000_htdp').innerText= ('Ksh ') + total_dp.toLocaleString() + ('.00')
//     document.getElementById('n_2628_hsdp').innerText= ('Quantity : ') + product_units

//     document.getElementById('Ksh_829800dp').innerText= ('Ksh. ') + total_dp.toLocaleString() + ('.00')
//     document.getElementById('PAY_KES_1490000dp').innerText= ('PAY KES. ') + total_dp.toLocaleString() + ('.00')

    

//     console.log('cartprice_dp PAY_KES_1490000dp', document.getElementById('PAY_KES_1490000dp'))

    
//     checkout_total_parse(total_dp)


// });




// // reduce units link-product
// reduceCartItemButtonlinkproduct.addEventListener('click', function(event){

//     console.log('Clickeddddd -- ');
//     var reducebuttonClicked = event.target;	
//     console.log('reducebuttonClicked_dp', reducebuttonClicked);
//     var cartItems = document.getElementById('Satis_Travel_Bags__2_moredp').innerHTML;
//     console.log('cartItems_dp', cartItems);
//     var productcount = document.getElementById('product_counter_input_droidcon');
//     console.log('productcount_dp', productcount);
//     var productcountvalue = parseInt(productcount.getAttribute('value'));
//     console.log('productcountvalue', productcountvalue);

    



//     var product_units=  productcountvalue - 1;
//     if (product_units <= 0) { 
//         product_units = 1;
//         console.log('product_units = 1 x x x x dp');
//     } 
//     console.log('productcountvalue_dp', product_units, product_units);
//     console.log('productcountINPUT_dp', productcount.getElementsByTagName('input'));

//     document.getElementById('product_counter_input_droidcon').setAttribute("value", product_units);



//     productprice_dp = document.getElementById('KES_800000dp').getAttribute('data-value');
//     console.log('productprice_dp', productprice_dp )

//     total_dp= parseFloat(productprice_dp ) * parseInt(product_units)
//     console.log('total_dp', total_dp)


//     cartprice_dp= document.getElementById('KES_800000dp').innerText;
//     console.log('cartprice_dp', cartprice_dp)

//     // Ensures the total doesn't go below the product price 
//     newtotal_dp= parseFloat(cartprice_dp.replace('KES. ', '').replace(/,/g, '')) - parseInt(productprice_dp)
//     if (newtotal_dp < productprice_dp) {
//         newtotal_dp = productprice_dp
//     }
//     console.log('newtotal12345dp', newtotal_dp)



//     document.getElementById('KES_800000dp').innerText= ('Ksh. ') + total_dp.toLocaleString() + ('.00')
//     document.getElementById('Ksh_1490000_x1_droidcon').innerText= ('Ksh. ') + total_dp.toLocaleString() + ('.00')
//     document.getElementById('ID22628_ez_droidcon').innerText= ('Quantity ') + product_units
//     document.getElementById('KES_1490000_yourbasket').innerText= ('KES. ') + total_dp.toLocaleString() + ('.00')
    
//     checkout_total_parse(total_dp)


//     document.getElementById('PAY_KES_1490000dp').innerText= ('Ksh. ') + total_dp.toLocaleString() + ('.00')


// });


$('.ui.dropdown')
  .dropdown()
;

$('.ui.accordion')
  .accordion()
;

$(document).ready(function(){
    $("#Group_6107dp").click(function(){
        $("#Group_6057dpcart").show();
        $("#Group_6081dp").hide();
        $("#Group_5214dp").hide(); 
    });
});

$(document).ready(function(){
    $("#Group_6061dpcart").click(function(){
        $("#Group_6057dpcart").hide();
        $("#Group_6081dp").show();
        $("#Group_5214dp").show();
    });
});


const cartorder= document.getElementById('Group_6147dp');
const order_no= document.getElementById('prodcountdp');
const subtotal= document.getElementById('Total_Product_Pricedp');
const subtotalss= document.getElementById('Ksh_829800dp');
const servicefee= document.getElementById('Ksh_14900_hedp');
const checkout_charge= document.getElementById('PAY_KES_1490000dp');
const checkout_chargess= document.getElementById('PAY_KES_1490000dp');
const checkout_ttl= document.getElementById('KES_800000dp');
const pricing_summary= document.getElementById('pricing_details');


console.log('PAY KES.1', checkout_charge)
console.log('PAY KES.2', checkout_chargess)



// receipt
const servicefee_receipt= document.getElementById('Ksh_14900_ddp');
const subtotalss_receipt= document.getElementById('Ksh_1504900dp');



let products = JSON.parse(window.localStorage.getItem('quote_products'));
console.log("products", products)

if (products.length >= 1) {



    /// Calculate the total number of units
    function calcTotalForDataProps(products, props) {
        return products.reduce((r, o) => Object
            .fromEntries(props.map(k => [k, (r[k] || 0) + o[k]])
        ), {});
    }
    console.log('TotalnumberOfUnits', calcTotalForDataProps(products, ['numberOfUnits']));


    /// Number of units array
    let arrUnits = new Array();
    for (let i= 0; i < products.length; i++ ) {
        // console.log(i, 'Units', products[i]['numberOfUnits']);
        arrUnits.push([products[i]['numberOfUnits']])
    };
    // console.log('arrUnits', arrUnits)


    let arrNew = new Array();
    for (let i= 0; i < arrUnits.length; i++ ) {
        // console.log(i, 'Array Objects', arrUnits[i][0]);
        arrNew.push(arrUnits[i][0])
    };
    // console.log('arrNew', arrNew)


    /// Multiplying the number of units with the unit prices and appending it to the products array
    let Updated_Cart = products.map((item, index)=> ({...item, total: item.checkout_product__merch_price__price*arrNew[index]}));
    console.log('Updated_Cart', Updated_Cart);



    /// The sum of the units
    let sum = 0;
    for (let i = 0; i < arrNew.length; i++) {
        sum += arrNew[i];
    }
    console.log('sum', sum);

    // console.log('order_no', order_no)



    $(document).ready(function(){
        let newArr = JSON.parse(window.localStorage.getItem('quote_products'));

        /// Calculating the overall total 
        let arrTotal = new Array();
        for (let i= 0; i < Updated_Cart.length; i++ ) {
            console.log(i, 'Prices__price', Updated_Cart[i]['total']);
            arrTotal.push([Updated_Cart[i]['total']])
        };
        console.log('arrTotal::::', arrTotal)

        order_ttl= Object.values(arrTotal).reduce((a, b) => +a + +b, 0);
        console.log('order_ttl', order_ttl);

        service_fee= parseInt(order_ttl * 0.01)
        console.log('service_fee::::', service_fee);

        charge_ttl= parseInt(service_fee + order_ttl)
        console.log('charge_ttl::::', charge_ttl);

        

        if (Updated_Cart.length > 0) {
            console.log('::::cartorder::::', cartorder);

            cartorder.style.display = 'block';
            cartorder.innerHTML= '';
            
            Updated_Cart.map(item=> {
                prodName = item['checkout_product__product_name'];
                console.log('prodName', prodName)
                prodPrice = item['total'].toLocaleString() + ('.00');
                console.log('prodPrice', prodPrice)
                prodUnits = item['numberOfUnits'];
                console.log('prodUnits', prodUnits)


                cartorder.innerHTML+= 
                `
                <div id="Group_6147dp">
                    <div id="n_2628_hrdp">
                        <span>${prodName}</span>
                    </div>
                    <div id="n_2628_hsdp">
                        <span>Quantity : ${prodUnits} </span>
                    </div>
                    <div id="Ksh_350000_htdp">
                        <span>Ksh. ${prodPrice}</span>
                    </div>
                    <svg class="Path_9110_hudp" viewBox="0 0 472.443 0.5">
                        <path id="Path_9110_hudp" d="M 0 0 L 472.4432373046875 0">
                        </path>
                    </svg>
                </div>
                `
            });
            order_no.innerHTML=  ('+') + newArr.length + (' ') + ('more');

        }

        receipt_listdp = document.getElementById('Group_5320dp')
        console.log('receipt_listdp', receipt_listdp)
    
        if (Updated_Cart.length > 0) {
            console.log('::::Updated_Cart::::', Updated_Cart);
    
            receipt_listdp.style.display = 'block';
            receipt_listdp.innerHTML= '';
            
            Updated_Cart.map(item=> {
                prodName = item['checkout_product__product_name'];
                console.log('prodName', prodName)
                prodPrice = item['total'].toLocaleString() + ('.00');
                console.log('prodPrice', prodPrice)
                prodUnits = item['numberOfUnits'];
                console.log('prodUnits', prodUnits)
    
    
                receipt_listdp.innerHTML+= 
                `
                <div id="Group_5320dp">
                    <div id="ID22628_eidp">
                        <span>${prodName}</span>
                    </div>
                    <div id="ID22628_ejdp">
                        <span>Quantity : ${prodUnits}</span>
                    </div>
                    <div id="Ksh_1555000dp">
                        <span>Ksh. ${prodPrice}</span>
                    </div>
                    <svg class="Path_9110_eldp" viewBox="0 0 302.172 0.5">
                        <path id="Path_9110_eldp" d="M 0 0 L 302.1719055175781 0">
                        </path>
                    </svg>
                </div>
                `
            });

            if (Updated_Cart.length == 1) {
                console.log('0_Item_in_Receipt')
                var pricing_details= document.getElementById('Pricing_Detailsdp');
                pricing_details.style.top = '-121px';                          
                var Group_5715= document.getElementById('Group_5715dp');
                Group_5715.style.top = '404.004px';
                var Group_4531= document.getElementById('Group_4531dp');
                Group_4531.style.top = '520px';
    
            }
            if (Updated_Cart.length == 2) {
                var pricing_details= document.getElementById('Pricing_Detailsdp');
                pricing_details.style.top = '-80px';               
                var Group_5715= document.getElementById('Group_5715dp');
                Group_5715.style.top = '437.004px';
                var Group_4531= document.getElementById('Group_4531dp');
                Group_4531.style.top = '550px';
                console.log('1_Item_in_Receipt')
    
            }
            if (Updated_Cart.length == 3) {
                var pricing_details= document.getElementById('Pricing_Detailsdp');
                pricing_details.style.top = '-35px';               
                var Group_5715= document.getElementById('Group_5715dp');
                Group_5715.style.top = '474.004px';
                var Group_4531= document.getElementById('Group_4531dp');
                Group_4531.style.top = '580px';
                console.log('2_Item_in_Receipt')
    
            }
            if (Updated_Cart.length == 4) {
                var pricing_details= document.getElementById('Pricing_Detailsdp');
                pricing_details.style.top = '10px';               
                var Group_5715= document.getElementById('Group_5715dp');
                Group_5715.style.top = '524.004px';
                var Group_4531= document.getElementById('Group_4531dp');
                Group_4531.style.top = '630px';
                console.log('3_Item_in_Receipt')
    
            }
            if (Updated_Cart.length == 5) {
                var pricing_details= document.getElementById('Product_Detailsdp');
                pricing_details.style['overflow-y'] = 'auto';  
                var pricing_details= document.getElementById('Product_Detailsdp');
                pricing_details.style.width = '318px'; 
                var pricing_details= document.getElementById('Product_Detailsdp');
                pricing_details.style.height = '235px';  
                var pricing_details= document.getElementById('Pricing_Detailsdp');
                pricing_details.style.top = '55px';  
                var Group_5715= document.getElementById('Group_5715dp');
                Group_5715.style.top = '564.004px';
                var Group_4531= document.getElementById('Group_4531dp');
                Group_4531.style.top = '700px';
                console.log('3_Item_in_Receipt')
    
            }
            if (Updated_Cart.length > 5) {
                var pricing_details= document.getElementById('Product_Detailsdp');
                pricing_details.style['overflow-y'] = 'auto';  
                var pricing_details= document.getElementById('Product_Detailsdp');
                pricing_details.style.width = '318px'; 
                var pricing_details= document.getElementById('Product_Detailsdp');
                pricing_details.style.height = '255px';  
                var pricing_details= document.getElementById('Pricing_Detailsdp');
                pricing_details.style.top = '101px';  
                var Group_5715= document.getElementById('Group_5715dp');
                Group_5715.style.top = '619.004px';
                var Group_4531= document.getElementById('Group_4531dp');
                Group_4531.style.top = '750px';
                console.log('3_Item_in_Receipt')
    
            }
            
    
        }
        
        subtotal.innerHTML= ('Ksh. ') + charge_ttl.toLocaleString() + ('.00');
        subtotalss.innerHTML= ('Ksh. ') + charge_ttl.toLocaleString() + ('.00');
        servicefee.innerHTML= ('Ksh. ') + service_fee.toLocaleString() + ('.00');
        console.log('servicefee.innerHTML', servicefee.innerHTML)
        checkout_ttl.innerHTML= ('Ksh. ') + charge_ttl.toLocaleString() + ('.00');
        checkout_charge.innerHTML= ('PAY KES. ') + charge_ttl.toLocaleString() + ('.00');
        checkout_chargess.innerHTML= ('PAY KES. ') + charge_ttl.toLocaleString() + ('.00');

        // receipt
        subtotalss_receipt.innerHTML= ('Ksh. ') + charge_ttl.toLocaleString() + ('.00');
        servicefee_receipt.innerHTML= ('Ksh. ') + service_fee.toLocaleString() + ('.00');

        if (result.length ==  1) { pricing_summary.style.top = '-130px'; };
        if (result.length ==  2) { pricing_summary.style.top = '-85px'; };
        if (result.length ==  3) { pricing_summary.style.top = '-40px'; };
        if (result.length >= 4) { pricing_summary.style.top = '0px'; };

    });

    
    
}


