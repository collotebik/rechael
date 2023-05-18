window.addEventListener('load', (event) =>{
    console.log("window:::: load")
    const mpesapayment_desktop= document.getElementById("Group_6097_carddp");
    const cardpaymentdesktop= document.getElementById("Group_6098_carddp");

    mpesapayment_desktop.getElementsByClassName('card')[0].style.border = 'solid 2px rgb(0, 71, 251)';
    cardpaymentdesktop.getElementsByClassName('card')[0].style.border = 'none';


    if (document.getElementById('Product_description')){
        document.getElementById('Group_6093dp').style.visibility = 'hidden';//Location
        document.getElementById('Group_6093_emaildp').style.visibility = 'visible';//Email
        document.getElementById('Group_6156dp').style.top = '160px';
        document.getElementById('Product_description').style.top = '100px';

        document.getElementById('Group_6147dp').style.color = 'transparent';
        document.getElementById('Group_6147dp').style.top = '-1000px';

        document.getElementById('Ksh_350000_htdp').style.color = 'transparent';
        document.getElementById('n_2628_hrdp').style.color = 'transparent';
        document.getElementById('n_2628_hsdp').style.color = 'transparent';
        document.getElementById('Ksh_350000_htdp').style.color = 'transparent';

        document.getElementById('Group_6146dp').style.top = '782px';

    }
    else{
        document.getElementById('Group_6093dp').style.visibility = 'visible';
        document.getElementById('Group_6093_emaildp').style.visibility = 'hidden';//Email

    }
    // document.getElementById('Product_Details_re').style.visibility = 'hidden';//Email

  

    let isDataFromCart =window.localStorage.getItem('quote_products')
    let cartData;

    localStorage.setItem("quote_products", null);
   
    console.log('cartDataType',typeof(cartData))
    console.log('isDataFromCart', isDataFromCart)

    if( isDataFromCart == null){

        console.log('isDataFromCart',isDataFromCart)

        console.log("cartData:::: empty")

        let arrObject = new Array();

        let productName= document.getElementById("Satis_Travel_Bags__2_moredp").innerText
        console.log('productName', productName)
        let productsUnits=  parseInt(document.getElementById("n_2628_hsdp").innerText.replace('Quantity : ', ''))
        console.log('productsUnits', productsUnits)
        let productprice= parseFloat(document.getElementById("Ksh_350000_htdp").innerText.replace('Ksh ', ''))
        console.log('productprice', productprice)
        let total= productprice * productsUnits;
        console.log('total', total)
        let prodURL= document.getElementById("Satis_Travel_Bags__2_moredp").getAttribute('data-link');
        console.log('prodURL', prodURL)

        arrObject.push({productName, productsUnits, total, prodURL});

        localStorage.setItem("quote_products", JSON.stringify(arrObject));

    }
       
    cartData = JSON.parse(window.localStorage.getItem('quote_products'));

    

    let membership_field_dp = document.getElementById('Group_6094dp_1');
    
    if (typeof(membership_field_dp) != 'undefined' && membership_field_dp != null) {
        console.log("Exists   Exists  Exists")
        // Exists.
        document.getElementById('Group_5214dp').style.top= '730px';
    } else {
        console.log(" Does Not Exist   Does Not Exist")

    }
    let sub_total= parseFloat(document.getElementById("Ksh_829800dp").innerText.replace('Ksh. ', '').replace(',', ''))
    let grand_total = document.getElementById('PAY_KES_1490000dp');
    grand_total.innerHTML= ('PAY KES. ') + sub_total.toLocaleString() + ('.00');


});

const phonenumberInput_dp = document.getElementById("phonenumber_inputdp"); 
const fullnameInput_dp = document.getElementById("Input_email_addressdp"); 
const fullnameValue_dp = fullnameInput_dp.value; 

fullnameInput_dp.addEventListener('keyup', function() {

    if (fullnameInput_dp.value.length > 3 ) {
        document.getElementById('Phone_Number_Invalid__dp').style.visibility = "hidden";
    }
    
}
)


// const location_inputdp = document.getElementById("location_inputdp");
// console.log(location_inputdp)
// if (typeof(location_inputdp) != 'undefined' && location_inputdp != null) {
//     // Exists.
//     location_inputdp.addEventListener('keyup', function() {
//         console.log('keyup keyup keyup', location_inputdp.value);
//         delivery_locationdp= location_inputdp.value;
//         console.log('locationInput1', delivery_locationdp);
//         sendDeliveryLocationdp(delivery_locationdp);
    
//     }) 
// } 


   


// Rent a dress location listener
// const dropdown_dp = document.getElementById("rent_adress");

// if (typeof(dropdown_dp) != 'undefined' && dropdown_dp != null) {
//     dropdown.addEventListener("change", function() {

//         const selectedOption = dropdown.querySelector('.menu .item.active').dataset.value;

          
//         console.log(selectedOption); // this will output the selected option's data-value attribute

//         const colonIndex = selectedOption.indexOf(":"); // Find the index of the colon

//         const location = selectedOption.slice(0, colonIndex).trim(); // Extract the first word
//         const price = selectedOption.slice(colonIndex + 1).trim(); // Extract the second word

//         console.log("Location:", location);
//         console.log("SPrice:", price);

//         console.log("selectedOption")
//         console.log(selectedOption)

//         const delivery_fee = document.getElementById("Ksh_14900dp");
//         // delivery_fee.innerHTML = ''
//         delivery_fee.innerHTML = ('Ksh. ') + price +('.00')
        
//         checkout_amount= document.getElementById("Ksh_829800dp")

//         // amount = checkout_amount.innerText.replace('Ksh.', '')

//         total_amount = document.getElementById('total_amount_fee').value;
//         parsed_amount = (parseFloat(total_amount) + parseFloat(price)).toLocaleString() + ('.00');


//         checkout_amount.innerHTML = ('Ksh. ') + parsed_amount;

//         let mpesa_grand_total = document.getElementById('PAY_KES_1490000dp');
       

//         if (typeof(mpesa_grand_total) != 'undefined' && mpesa_grand_total != null) {
//             mpesa_grand_total.innerHTML= ('PAY KES. ') + parsed_amount;
//         }

//         let card_grand_total = document.getElementById('PAY_KES_1490000dp_1');

//         if (typeof(card_grand_total) != 'undefined' && card_grand_total != null) {
//             card_grand_total.innerHTML= ('PAY KES. ') + parsed_amount;
//         }
   

//     });
// }

const dropdown_dp = document.getElementById('location_inputdp_mb');

if (typeof(dropdown_dp) != 'undefined' && dropdown_dp != null) {
    $(dropdown_dp).dropdown();

    // Add onchange event listener
    dropdown_dp.addEventListener('change', function () {
        const selectedOption = $(this).dropdown('get value');
        console.log(selectedOption);
    
                    const colonIndex = selectedOption.indexOf(":"); // Find the index of the colon
    
                const location = selectedOption.slice(0, colonIndex).trim(); // Extract the first word
                const price = selectedOption.slice(colonIndex + 1).trim(); // Extract the second word
    
                console.log("Location:", location);
                console.log("SPrice:", price);
    
                console.log("selectedOption")
                console.log(selectedOption)
    
                const delivery_fee = document.getElementById("Ksh_14900dp");
                // delivery_fee.innerHTML = ''
                delivery_fee.innerHTML = ('Ksh. ') + price +('.00')
                
    
                let sub_total = document.getElementById('Ksh_829800dp');
                let service_fee = document.getElementById('Ksh_14900_hedp');
                
    
    
                // amount = checkout_amount.innerText.replace('Ksh.', '')
    
                total_amount = document.getElementById('total_amount_fee').value;
                product_price = document.getElementById('prod_pricee').value;
                mpesa_service_fee = document.getElementById('service_fee_amount').value;
    
                total_amount = total_amount - parseFloat(mpesa_service_fee)
    
    
                parsed_amount = parseFloat(total_amount) + parseFloat(price);
    
    
                let mpesa_grand_total = document.getElementById('PAY_KES_1490000dp');
                    //Ksh_1504900
    
                if (typeof(mpesa_grand_total) != 'undefined' && mpesa_grand_total != null) {
                    mpesa_grand_total.innerHTML= ('PAY KES. ') + ((parsed_amount + parseFloat(mpesa_service_fee)).toFixed(2)).toLocaleString();
                    sub_total.innerHTML= ('Ksh. ') + ((parsed_amount + parseFloat(mpesa_service_fee)).toFixed(2)).toLocaleString();
                    service_fee.innerHTML = ('Ksh. ') + ( parseFloat(mpesa_service_fee)).toFixed(2);
                }
    
                var groupDiv = document.getElementById("PAY_KES_1490000dp_1");
                if (typeof(groupDiv) != 'undefined' && groupDiv != null) {
                    groupDiv.innerHTML= ('PAY KES. ') + ((parsed_amount + (0.015 * product_price)).toFixed(2)).toLocaleString();
                    sub_total.innerHTML= ('Ksh. ') + ((parsed_amount + (0.015 * product_price)).toFixed(2)).toLocaleString();
                    service_fee.innerHTML = ('Ksh. ') + (((0.015 * product_price)).toFixed(2)).toLocaleString();
                }
    
    });

}

  





// Hide Oops page
const Back_to_Checkout_Buttondp = document.getElementById("Back_to_Checkoutdp"); 
console.log('Back_to_Checkout_Buttondp', Back_to_Checkout_Buttondp)


function Back_to_Checkoutdp() {
    console.log('Back to checkout desktop clicked!!! ')

    document.getElementById('CheckoutPPDesktopdp').style.visibility = 'visible';
    document.getElementById('OopsSomethingWentWrongdp').style.visibility = 'hidden';
    document.getElementById('Something_went_wrong_balancedp').style.visibility = 'hidden';
    document.getElementById('Something_went_wrong_cancelleddp').style.visibility = 'hidden';
    document.getElementById('Something_went_wrong_faileddp').style.visibility = 'hidden';
    document.getElementById('Something_went_wrong_authdp').style.visibility = 'hidden';

}



//////////////////////////////////////////
//phonenumber input
phonenumberInput_dp.addEventListener('keyup', function() {
    console.log('phonenumberInput_dp.value', phonenumberInput_dp.value)
   
    if (phonenumberInput_dp.value.length == 4 ) {
        console.log('phonenumberInput_dp.value.length == 5')
        
        if (phonenumberInput_dp.value.charAt(0) == 0 ) {
            phonenumberInput_dp.value =  phonenumberInput_dp.value.charAt(1) + phonenumberInput_dp.value.charAt(2) +
                                        phonenumberInput_dp.value.charAt(3)
                                        console.log('value111', value);
        }

        var value = phonenumberInput_dp.value.charAt(2);
        console.log('valuessss::::', value);
        
        if (phonenumberInput_dp.value.charAt(0) == 2 && phonenumberInput_dp.value.charAt(1) == 5 && phonenumberInput_dp.value.charAt(2) == 4 ) {
            phonenumberInput_dp.value =  phonenumberInput_dp.value.charAt(3) + phonenumberInput_dp.value.charAt(4) +
                                        phonenumberInput_dp.value.charAt(5)
                                        console.log('value222', value);
        }
          
    };
    
    if (phonenumberInput_dp.value.length >= 9 ) {
            console.log('phonenumberInput_dp.value.length == 5')
            // const prefix = /^.{0,3}/; 
            var phoneno = phonenumberInput_dp.value;
            var phone_no = parseInt(('254') + phoneno.replace(/^07/, "7"));
            console.log('phone_no', phone_no)
            console.log('phoneno.slice(0, 1)', phoneno.slice(0, 1))

            if(phoneno.slice(0, 1) == 7 || phoneno.slice(0, 1) == 1 ) {
                phonenumberInput_dp.setAttribute('isvalid', true);
                document.getElementById('Phone_Number_Invalid_dp').style.visibility = "hidden";  
                console.log('254')
            }
            else { 
                console.log('254')
                document.getElementById('Phone_Number_Invalid_dp').style.visibility = "visible";                               
            }

        console.log('keyup', phonenumberInput_dp.value.length);

    };

});


let company_name_dp= document.getElementById("Denri_Africadp").innerText
console.log('company_name_dp', company_name_dp)


if (company_name_dp == 'KavulaniArt' || company_name_dp == 'LuvaiOrganics'){
    console.log("DELIVERY COST ADDED")

    function checkout_payment_desktop() {  

        console.log('phonenumberInput_dp.value', phonenumberInput_dp.value)
    
        if (phonenumberInput_dp.getAttribute('isvalid') === 'true') {
            console.log('Valid phonenumber')
            var phoneno = phonenumberInput_dp.value;
            var phonenumber = parseInt(('254') + phoneno.replace(/^07/, "7"));
            console.log('phonenumber', phonenumber)
    
            if (fullnameInput_dp.value == "" || fullnameInput_dp.value.length <= 3 ) {
                console.log('invalid fullnameValue_dp', fullnameValue_dp)
                document.getElementById('Phone_Number_Invalid__dp').style.visibility = "visible";    
            } else {  
                console.log('valid fullnameValue_dp', fullnameValue_dp)

                if (location_inputdp.value == "" || location_inputdp.value.length <= 3 ) {
                    console.log('invalid locationInputValue_dp', location_inputdp.value)
                    document.getElementById('Location_Invalid_dp').style.visibility = "visible";    
                } else {  
                    console.log('valid locationInputValue_dp', location_inputdp.value)
                    getcheckoutinfo_desktop(phonenumber)                }
            }
        } else {  
            document.getElementById('Phone_Number_Invalid_dp').style.visibility = "visible";   
            console.log('phonenumber Not Valid')
        }
    
        if (fullnameInput_dp.value == "" || fullnameInput_dp.value.length <= 3 ) {
            console.log('invalid fullnameValue_dp', fullnameValue_dp)
            document.getElementById('Phone_Number_Invalid__dp').style.visibility = "visible";    
        } else {  
            console.log('valid fullnameValue_dp', fullnameValue_dp)
            
        }
        if (location_inputdp.value == "" || location_inputdp.value.length <= 3 ) {
            console.log('invalid locationInputValue_dp', location_inputdp.value)
            document.getElementById('Location_Invalid_dp').style.visibility = "visible";    
        } else {  
            console.log('valid locationInputValue_dp', location_inputdp.value)
        }
    
    }


} else {
    function checkout_payment_desktop() {  

        console.log('phonenumberInput_dp.value', phonenumberInput_dp.value)
    
        if (phonenumberInput_dp.getAttribute('isvalid') === 'true') {
            console.log('Valid phonenumber')
            var phoneno = phonenumberInput_dp.value;
            var phonenumber = parseInt(('254') + phoneno.replace(/^07/, "7"));
            console.log('phonenumber', phonenumber)
    
            if (fullnameInput_dp.value == "" || fullnameInput_dp.value.length <= 3 ) {
                console.log('invalid fullnameValue_dp', fullnameValue_dp)
                document.getElementById('Phone_Number_Invalid__dp').style.visibility = "visible";    
            } else {  
                console.log('valid fullnameValue_dp', fullnameValue_dp)
                getcheckoutinfo_desktop(phonenumber)
    
            }
        } else {  
            document.getElementById('Phone_Number_Invalid_dp').style.visibility = "visible";   
            console.log('phonenumber Not Valid')
        }
    
        if (fullnameInput_dp.value == "" || fullnameInput_dp.value.length <= 3 ) {
            console.log('invalid fullnameValue_dp', fullnameValue_dp)
            document.getElementById('Phone_Number_Invalid__dp').style.visibility = "visible";    
        } else {  
            console.log('valid fullnameValue_dp', fullnameValue_dp)
            
        }
    
    }
}


if(company_name_dp == 'LuvaiOrganics'){
    console.log('LuvaiOrganicsHere_dp')

    document.getElementById('Ksh_14900dp').style.visibility = 'hidden';
    document.getElementById('Ksh_14900dp_range').style.visibility = 'visible';

}






var cartArray= new Array();

function getcheckoutinfo_desktop(phonenumber) {
    var cartData = JSON.parse(window.localStorage.getItem('quote_products'));
    console.log("quote _ products::::", cartData, typeof cartData)
    

    var selected= new Array();

    if (cartData !== null && cartData !== undefined) {
        // array for cart items
        for (var i = 0; i < cartData.length; i++) {
            console.log('cartitem', i, cartData[i])

            let productName= cartData[i]['productName'];
            console.log('productName', productName)
            let productsUnits= cartData[i]['productsUnits'];
            console.log('cartitem', i, productsUnits, productName)

            var a= {productName, productsUnits}
            // selected.push(a)
        };
    } else {
        // array for cart items
        let arrObject = new Array();

        let productName= document.getElementById("Satis_Travel_Bags__2_moredp").innerText
        console.log('productName', productName)
        let productsUnits=  parseInt(document.getElementById("n_2628_hsdp").innerText.replace('Quantity : ', ''))
        console.log('productsUnits', productsUnits)
        let productprice= parseFloat(document.getElementById("Ksh_350000_htdp").innerText.replace('Ksh ', ''))
        console.log('productprice', productprice)
        let total= productprice * productsUnits;
        console.log('total', total)
        let prodURL= document.getElementById("Satis_Travel_Bags__2_moredp").getAttribute('data-link');
        console.log('prodURL', prodURL)

        selected.push({productName, productsUnits, total, prodURL});

        

    }
    
    console.log('selected', selected)
    // localStorage.setItem("product_bundle", JSON.stringify(selected))

    const phone_number= phonenumber
    console.log('phone_number_checkout', phone_number)
    checkout_cart= JSON.stringify(selected)

    linkproduct= document.getElementById("n_2628_hrdp").innerText
    linkproductunits= parseInt(document.getElementById("n_2628_hsdp").innerText.replace('Quantity :', ''))
    console.log('linkproductunits', linkproduct, linkproductunits)

    

    full_name= document.getElementById("Input_email_addressdp").value 
    var delivery_location = "Location"

    var location_inputdp = document.getElementById("location_inputdp")
    if (typeof(location_inputdp) != 'undefined' && location_inputdp != null) {
        console.log("First")
        delivery_location= location_inputdp.value
    } 
    
    // Rent a dress location listener
    const dropdown = document.getElementById('location_inputdp_mb');
    
    console.log("Second")
    if (typeof(dropdown) != 'undefined' && dropdown != null) {
            $(dropdown).dropdown();
            console.log("Third")
            // Get selected value
            const selectedOption = $(dropdown).dropdown('get value');
            console.log(selectedOption);


            const colonIndex = selectedOption.indexOf(":"); // Find the index of the colon

            const location = selectedOption.slice(0, colonIndex).trim(); // Extract the first word
            const price = selectedOption.slice(colonIndex + 1).trim(); // Extract the second word

            console.log("Location:", location);
            console.log("SPrice:", price);

            if(location == "None"){
                document.getElementById('Location_Invalid_dp').style.visibility = "visible";  
                return
            }

            delivery_location = location

    }
    


    console.log('full_name/delivery_location', full_name, delivery_location)

    delivery_fee= parseFloat(document.getElementById("Ksh_14900dp").innerText.replace('Ksh.', '').replace(',', ''))
    service_fee= parseFloat(document.getElementById("Ksh_14900_hedp").innerText.replace('Ksh.', '').replace(',', ''))
    checkout_total= parseFloat(document.getElementById("Ksh_829800dp").innerText.replace('Ksh.', '').replace(',', ''))

    console.log('linkproductunits', linkproductunits)
    console.log('delivery_fee', delivery_fee)
    console.log('service_fee', service_fee,)
    console.log('checkout_total', checkout_total)

    // Receipt
    const customer_name = document.getElementById('Alldp')
    console.log('customer_name', customer_name)
    customer_name.innerHTML = full_name
    const customer_contact = document.getElementById('n_54723767380dp')
    console.log('customer_contact', customer_contact)

    customer_name.innerHTML = full_name
    customer_contact.innerHTML = ('+') + phone_number
    // 



    let membership_field = document.getElementById('Group_6094dp_1');
        
    if (typeof(membership_field) != 'undefined' && membership_field != null) {
        // Exists.
        console.log("Membership exists")
        const dropdown = document.querySelector('#membership_numberdp');
        if(typeof(dropdown.querySelector('.menu .item.active')) != 'undefined' && dropdown.querySelector('.menu .item.active') != null){
            const selectedOption = dropdown.querySelector('.menu .item.active').dataset.value;

            membership_no= selectedOption
            
            console.log(selectedOption); // this will output the selected option's data-value attribute
        }else{
            membership_no= document.getElementById("membership_numberdp").value
        }
        
    } else {
        membership_no= 'null'

        console.log("membership_no not found")
        console.log(membership_no)
    }

    console.log('processpayment processpayment processpayment')
    
    name_validate= ValidateFullname_desktp()
    phone_validate= ValidatePhoneNumber_desktp()


    if (name_validate == true && phone_validate == true) {
        const loadingdots=  document.getElementById("ui_active_dimmerdp");
        loadingdots.style.visibility = 'visible';
        loadingdots.style.visibility = 'visible';

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
                                localStorage.setItem("from_link_basket", null);
                                localStorage.setItem("quote_products", null);

                              

                                let company = document.getElementById("company__name");
                                if(company.value == "Trek Consulting"){
                                    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdzuhm1uuq9t2ewEUuCsXP_NlOwRk1dYwcqc-aFXgCnbufuxA/viewform?vc=0&c=0&w=1&flr=0", "_self");
                                    return
                                }

                                console.log('payment successfull!!')
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
                                console.log('payment_code::::', payment_code)
                                const payment_date= response['date'] 
                                console.log('payment_date::::', payment_date)


                                const transaction_code = document.getElementById('JSLADD-0001dp')
                                console.log('transaction_code', transaction_code)
                                const transaction_date = document.getElementById('n_3_Oct_2021_705_amdp')
                                console.log('transaction_date', transaction_date)


                                transaction_code.innerHTML = payment_code
                                transaction_date.innerHTML = payment_date

                                
                                document.getElementById('CheckoutPPDesktopdp').style.visibility = 'hidden';
                                document.getElementById('MobileCheckoutLinkReceipt__3dp').style.visibility = 'visible';
                                document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden';
                                document.getElementById('Group_6093dp').style.visibility = 'hidden';
                                document.getElementById('Group_3858_fdp').style.visibility = 'hidden';
                                document.getElementById('Group_3969dp').style.visibility = 'hidden';


                                setTimeout(document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden', 5);
                                for(i=0; i<100; i++) { window.clearInterval(i); }
                                setTimeout("location.href = url;", 10);
                            }
                            if(payment_status === 'balance'){
                                console.log('insufficient balance!!')
                                // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopsbalance'

                                document.getElementById('CheckoutPPDesktopdp').style.visibility = 'hidden';
                                document.getElementById('OopsSomethingWentWrongdp').style.visibility = 'visible';
                                document.getElementById('Something_went_wrong_balancedp').style.visibility = 'visible';
                                document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden';

                                setTimeout(document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden', 5);
                                for(i=0; i<100; i++) { window.clearInterval(i); }
                                setTimeout("location.href = url;", 10);
                            }
                            if(payment_status === 'cancelled'){
                                console.log('Request cancelled!!')
                                // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopscancelled'

                                document.getElementById('CheckoutPPDesktopdp').style.visibility = 'hidden';
                                document.getElementById('OopsSomethingWentWrongdp').style.visibility = 'visible';
                                document.getElementById('Something_went_wrong_cancelleddp').style.visibility = 'visible';
                                document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden';

                                setTimeout(document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden', 5);
                                for(i=0; i<100; i++) { window.clearInterval(i); }
                                setTimeout("location.href = url;", 10);
                            }
                            if(payment_status === false){
                                console.log('payment failed!!')
                                // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopsfailed'

                                document.getElementById('CheckoutPPDesktopdp').style.visibility = 'hidden';
                                document.getElementById('OopsSomethingWentWrongdp').style.visibility = 'visible';
                                document.getElementById('Something_went_wrong_faileddp').style.visibility = 'visible';
                                document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden';
                                
                                setTimeout(document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden', 5);
                                for(i=0; i<100; i++) { window.clearInterval(i); }
                                setTimeout("location.href = url;", 10);
                            }
                            else {
                                console.log('pending Payment')
                            }
                        },
                        error: function(error){
                            console.log('failed ajax delivery_fee')
                        },
                    })
                }, 7700);

            },
            error: function(error){
                console.log('failed ajax checkout_basket_info')
            }
        });
    }
};

function checkout_total_parse_desktop (checkout_price) {
        
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
            var service_fee_ = document.getElementById("Ksh_14900_hedp");						
            service_fee_.innerHTML = ""
            service_fee_.innerHTML += ('Ksh. ') + checkout_service.toLocaleString() + ('.00')


            const checkout_total= (response.cart_chekout_total);	
            const checkout_total_price= parseFloat(checkout_total);	
            console.log('checkout_total_price::::', checkout_total_price)
            const checkout_total_ = document.getElementById("KES_800000dp");
            checkout_total_.innerHTML = ""
            checkout_total_.innerHTML += ('Ksh. ') + checkout_total_price.toLocaleString() + ('.00')	


            // var checkout_basket= document.getElementById("Adidas_Ultraboost");
            
            // // CARD PAYMENT______KURIA.
            // if($('#submit-button').css("visibility") == "hidden") {
            //     const checkout_total_PAY = document.getElementById("PAY_KES_1490000dp");
            //     checkout_total_PAY.innerHTML = ""
            //     checkout_total_PAY.innerHTML += ('PAY KES. ') + checkout_total_price.toLocaleString() + ('.00')
            //     console.log('mpesa payment');
            // } else {
            //     const checkout_total_PAY_2 = document.getElementsByClassName("PAY_KES")[0];
            //     checkout_total_PAY_2.innerHTML = ""
            //     checkout_total_PAY_2.innerHTML += ('PAY KES. ') + checkout_total_price.toLocaleString() + ('.00')
            //     console.log('card payment');
            // }
            // checkout_basket.innerHTML = ""
            // checkout_basket.innerHTML = (checkout_product) + ('and ') + (selected.length) + (' other products');
                
        },
        error: function(error){
            console.log('failed ajax checkout_total')
        },
    })

};

const sendDeliveryLocationdp = (delivery_location) =>{
    console.log('sendDeliveryLocationdp')
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

            const delivery_fee = document.getElementById("Ksh_14900dp");
            // delivery_fee.innerHTML = ''
            delivery_fee.innerHTML = ('Ksh. ') + response.delivery_fee +('.00')
            
            // const service_fee = parseInt(document.getElementById("Ksh_14900_hedp").innerText.replace('Ksh. ', '').replace(',', '').replace(',', ''));
            // console.log('service_fee',service_fee )

            const cart_price= parseInt(document.getElementById("Ksh_350000_htdp").innerText.replace('Ksh ', '').replace(',', '').replace(',', ''));
            console.log('cart_price111::::', cart_price);

            const total= parseInt(document.getElementById("Ksh_829800dp").innerText.replace('Ksh. ', '').replace(',', '').replace(',', ''));
            console.log('total111::::', total);
            
            const total_checkout= parseInt(checkout_delivery_fee + total) 
            console.log('total_checkout', total_checkout)

            var grand_total= document.getElementById("Ksh_829800dp");
            grand_total.innerHTML= ""           
            grand_total.innerHTML= ("Ksh. " + (total_checkout) + ('.00')).replace(',', '').replace(',', '');

            var payment_total= document.getElementById("PAY_KES_1490000dp");
            console.log('payment_total', payment_total)
            payment_total.innerHTML= ""           
            payment_total.innerHTML= ("PAY KES. " + (total_checkout) + ('.00')).replace(',', '').replace(',', '');



            var checkout_product= document.getElementById("n_2628_hrdp").innerText
            console.log('checkout_product', checkout_product)
            var receipt_checkout_product= document.getElementById("ID22628_eidp");
            receipt_checkout_product.innerHTML= ""           
            receipt_checkout_product.innerHTML= checkout_product;

            var checkout_product_quantity= document.getElementById("n_2628_hsdp").innerText.replace('Quantity : ', '')
            console.log('checkout_product_quantity', checkout_product_quantity)
            var receipt_checkout_product_quantity= document.getElementById("ID22628_ejdp");
            receipt_checkout_product_quantity.innerHTML= ""           
            receipt_checkout_product_quantity.innerHTML= ("Quantity : " + (checkout_product_quantity) );


            var receipt_checkout_delivery_fee= document.getElementById("Ksh_14900_dp");
            console.log('receipt_checkout_delivery_fee', receipt_checkout_delivery_fee)
            receipt_checkout_delivery_fee.innerHTML= ""           
            receipt_checkout_delivery_fee.innerHTML= ("Ksh. " + (checkout_delivery_fee) + ('.00')).replace(',', '').replace(',', '');
            var receipt_total= document.getElementById("Ksh_1504900dp");
            console.log('receipt_total', receipt_total)
            receipt_total.innerHTML= ""           
            receipt_total.innerHTML= ("Ksh. " + (total_checkout) + ('.00')).replace(',', '').replace(',', '');

            // const total_checkout= parseInt(checkout_delivery_fee + cart_price)
            // const total_checkout= parseInt(document.getElementById("Ksh_829800dp").innerText.replace('Ksh. ', '').replace(',', '').replace(',', ''));
            console.log('checkout_price_total1111::::', total_checkout);

            checkout_price = cart_price
            
            checkout_total_parse_desktop(checkout_price);
                
        },
        error: function(error){
            console.log('failed ajax delivery_fee')
        },
    })
};







const cardpaymentdesktop= document.getElementById("Group_6098_carddp")

cardpaymentdesktop.addEventListener('click', function(){
    console.log('cardpayment');

    if (document.getElementById('Product_description')){
        document.getElementById('Group_6094dp').style.visibility = 'hidden';//Phone
        document.getElementById('Group_6093_emaildp').style.visibility = 'hidden';
        document.getElementById('Group_6091_carddp').style.top = '210px';
        document.getElementById('submit-buttondp').style.top = '500px';
        document.getElementById('submit-buttondp').style.top = '500px';



    }
    else{
        document.getElementById('Group_6094dp').style.visibility = 'visible';//Phone
        document.getElementById('Billing_Email_addressdp').style.top = '334px';
        // document.getElementById('Email_address_Invalid_dp').style.visibility = 'visible';

    }

    let membership_field_dp = document.getElementById('Group_6094dp_1');

    if (typeof(membership_field_dp) != 'undefined' && membership_field_dp != null) {
        // Exists.
        console.log('membership_field::::  Exists')
        document.getElementById('submit-buttondp').style.top= '500px';
    }

    cardpaymentdesktop.getElementsByClassName('card')[0].style.border = 'solid 2px rgb(0, 71, 251)';
    mpesapayment_desktop.getElementsByClassName('card')[0].style.border = 'none';
    document.getElementById('Group_6091_carddp').style.visibility = 'visible';
    document.getElementById('Group_3858_hc_carddp').style.visibility = 'visible';

    document.getElementById('Billing_Email_address_dp').style.visibility = 'visible';
    document.getElementById('Group_6094dp').style.visibility = 'hidden';
    document.getElementById('Group_3969dp').style.visibility = 'hidden';
    document.getElementById('email_address').style.visibility = 'visible';
    document.getElementById('email_addressdp').style.visibility = 'visible';
    // document.getElementById('An_Mpesa_prompt_will_be_sent_t').innerHTML = `
    //     <span>
    //         (Ready to checkout? You'll be redirected to a secure page <br/>to complete the purchase.)
    //     </span>
    // `

    checkout_amount= document.getElementById("Ksh_829800dp").innerText.replace('Ksh.', '')
    console.log('checkout_amount::::', checkout_amount)
    checkout_total= parseFloat(document.getElementById("Ksh_829800dp").innerText.replace('Ksh.', '').replace(',', '')) * 100
    console.log('checkout_total::::', checkout_total)

    product_price = document.getElementById('prod_pricee').value;
    total_amount = document.getElementById('total_amount_fee').value;
    mpesa_service_fee = document.getElementById('service_fee_amount').value;
    card_service_fee = (parseFloat(product_price) * 0.015);

    total_amount = total_amount - parseFloat(mpesa_service_fee)

    let sub_total = document.getElementById('Ksh_829800dp');
    let service_fee = document.getElementById('Ksh_14900_hedp');

    //Ksh_14900
    delivery_fee = parseFloat(document.getElementById("Ksh_14900dp").innerText.replace('Ksh.', ''));

    sub_total.innerHTML= ('Ksh. ') + ((total_amount + card_service_fee + delivery_fee).toFixed(2)).toLocaleString();
    service_fee.innerHTML = ('Ksh. ') + (( parseFloat(card_service_fee)).toFixed(2)).toLocaleString();






    document.getElementById('Group_5214dp').style.visibility = 'hidden';
    document.getElementById('PAY_KES_1490000dp').style.visibility = 'hidden';
    document.getElementById('submit-buttondp').style.visibility = 'visible';
    document.getElementById('submit-buttondp').innerHTML = `
    <div id="Group_3969dp_1" style="visibility: visible;">

        <svg class="Rectangle_2057_gydp_1">
            <linearGradient id="Rectangle_2057_gydp_1" spreadMethod="pad" x1="0.066" x2="0.79" y1="0" y2="1.3">
                <stop offset="0" stop-color="#5b97f4" stop-opacity="1"></stop>
                <stop offset="1" stop-color="#5899ff" stop-opacity="1"></stop>
            </linearGradient>
            <rect id="Rectangle_2057_gydp_1" rx="7" ry="7" x="0" y="0" width="425" height="50">
            </rect>
        </svg>
        </div>
        <div id="PAY_KES_1490000dp_1">
            <span>PAY KES. ${ ((total_amount + card_service_fee + delivery_fee).toFixed(2)).toLocaleString() } </span>
        </div>
    `

});


const initialize_card_paymentdesktop= document.getElementById("submit-buttondp")

initialize_card_paymentdesktop.addEventListener('click', function(){
    console.log('initialize_card_payment desktop');
    var cartData = JSON.parse(window.localStorage.getItem('quote_products'));
    console.log("quote _ products::::", cartData, typeof cartData)

    var selected= new Array();

    if (cartData != null) {
        // array for cart items
        for (var i = 0; i < cartData.length; i++) {
            console.log('cartitem', i, cartData[i])

            let productName= cartData[i]['productName'];
            console.log('productName', productName)
            let productsUnits= cartData[i]['productsUnits'];
            console.log('cartitem', i, productsUnits, productName)

            var a= {productName, productsUnits}
            // selected.push(a)
        };
    } else {
        // array for cart items
        let productName= document.getElementById("Satis_Travel_Bags__2_moredp").innerText
        console.log('productName', productName)
        let productsUnits=  parseInt(document.getElementById("n_2628_hsdp").innerText.replace('Quantity : ', ''))
        console.log('productsUnits', productsUnits)
        let productprice= parseFloat(document.getElementById("Ksh_350000_htdp").innerText.replace('Ksh ', ''))
        console.log('productprice', productprice)
        let total= productprice * productsUnits;
        console.log('total', total)
        let prodURL= document.getElementById("Satis_Travel_Bags__2_moredp").getAttribute('data-link');
        console.log('prodURL', prodURL)

        selected.push({productName, productsUnits, total, prodURL});

    }
    
    console.log('selected', selected)
    checkout_cart= JSON.stringify(selected)

    linkproduct= document.getElementById("n_2628_hrdp").innerText
    linkproductunits= parseInt(document.getElementById("n_2628_hsdp").innerText.replace('Quantity :', ''))
    console.log('linkproductunits', linkproduct, linkproductunits)

    full_name= document.getElementById("Input_email_addressdp").value 

    var delivery_location = "Location"

    var location_inputdp = document.getElementById("location_inputdp")
    if (typeof(location_inputdp) != 'undefined' && location_inputdp != null) {
        delivery_location= location_inputdp.value
    }
    
    // Rent a dress location listener
    const dropdown = document.getElementById('location_inputdp_mb');
    
    console.log("Second")
    if (typeof(dropdown) != 'undefined' && dropdown != null) {
            $(dropdown).dropdown();
            console.log("Third")
            // Get selected value
            const selectedOption = $(dropdown).dropdown('get value');
            console.log(selectedOption);


            const colonIndex = selectedOption.indexOf(":"); // Find the index of the colon

            const location = selectedOption.slice(0, colonIndex).trim(); // Extract the first word
            const price = selectedOption.slice(colonIndex + 1).trim(); // Extract the second word

            console.log("Location:", location);
            console.log("SPrice:", price);

            if(location == "None"){
                document.getElementById('Location_Invalid_dp').style.visibility = "visible";  
                return
            }

            delivery_location = location

    }


    console.log('full_name/delivery_location', full_name, delivery_location)

    delivery_fee= parseFloat(document.getElementById("Ksh_14900dp").innerText.replace('Ksh.', '').replace(',', ''))
    service_fee= parseFloat(document.getElementById("Ksh_14900_hedp").innerText.replace('Ksh.', '').replace(',', ''))
    checkout_total= parseFloat(document.getElementById("Ksh_829800dp").innerText.replace('Ksh.', '').replace(',', '').replace('.00', ''))

    let membership_field = document.getElementById('Group_6094dp_1');
        
    if (typeof(membership_field) != 'undefined' && membership_field != null) {
        // Exists.
        console.log("Membership exists")
        const dropdown = document.querySelector('#membership_numberdp');
        if(typeof(dropdown.querySelector('.menu .item.active')) != 'undefined' && dropdown.querySelector('.menu .item.active') != null){
            const selectedOption = dropdown.querySelector('.menu .item.active').dataset.value;

            membership_no= selectedOption
            
            console.log(selectedOption); // this will output the selected option's data-value attribute
        }else{
            membership_no= document.getElementById("membership_numberdp").value
        }
        
    } else {
        membership_no= 'null'

        console.log("membership_no not found")
        console.log(membership_no)
    }


    const emailaddressInput = document.getElementById("email_addressdp");
    const emailaddressValue = emailaddressInput.value;

    email_validate= ValidateEmail_desktp(emailaddressValue)

    if (email_validate == true) {
        console.log(membership_no)
        const loadingdots=  document.getElementById("ui_active_dimmerdp");
        loadingdots.style.visibility = 'visible';

        //initialize transaction
        $.ajax({
            type: "POST",
            url: 'PaystackInitializeTransaction',
            data: {
                'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
                'email': emailaddressInput.value,
                'linkproduct': linkproduct,
                'linkproductunits': linkproductunits,
                'checkout_cart': checkout_cart,
                'full_name': full_name,
                'deilvery_location': delivery_location,
                'checkout_total': checkout_total,
                'membership_no': membership_no,
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
                    document.getElementById('OopsSomethingWentWrongdp').style.visibility = 'visible';
                    document.getElementById('Something_went_wrong_authdp').style.visibility = 'visible';
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

})
        
        // if (typeof(membership_field) != 'undefined' && membership_field != null) {
        //     // Exists.
        //     console.log('membership_field::::  Exists')
        //     // document.getElementById('Billing_Email_addressdp').style.top= '250px';
        //     document.getElementById('Group_6091_carddp').style.top= '500px';
        //     document.getElementById('submit-buttondp').style.top= '790px';
        // }

        
        // const buttonSubmit= document.getElementById('submit-buttondp');
        // console.log('buttonSubmit', buttonSubmit),

        // // Handle real-time validation errors from the card Element.
        // buttonSubmit.addEventListener('change', function(event) {
        //     let form = document.getElementById('payment-form-dp');
        //     console.log('form', form);
        //     let displayError = document.getElementById('Card_Information_carddp');
        //     if (event.error) {
        //         displayError.style.color = 'rgb(226, 2, 2)';
        //         displayError.textContent = event.error.message;
        //     } else {
        //         displayError.style.color = 'rgba(0,0,0,1)';
        //         displayError.textContent = 'Phone Number';
        //     }
        // });

        // let form = document.getElementById('payment-form-dp');
        // console.log('form', form);

        // form.addEventListener('submit', function(event) {
        //     event.preventDefault();
 
        //     stripe.createToken(cardNumberElement).then(function(result) {
        //         if (result.error) {

        //         // Inform the user if there was an error.
        //         let errorElement = document.getElementById('Card_Information_carddp');
        //         errorElement.style.color = 'rgb(226, 2, 2)';
        //         errorElement.textContent = result.error.message;

        //         } else { 

        //             const emailaddressInput = document.getElementById("email_addressdp");
        //             const emailaddressValue = emailaddressInput.value;

        //             email_validate= ValidateEmail_desktp(emailaddressValue)
        //             console.log('here')

        //             if (email_validate == true) {

        //                 // Create Payment Method BEGIN
        //                 stripe.createPaymentMethod({
        //                     type: 'card',
        //                     card: cardNumberElement,
        //                     billing_details: {
        //                         email: emailaddressValue,
        //                     },
        //                 }).then(function(payment_method_result){

        //                     if (payment_method_result.error) {

        //                         let errorElement = document.getElementById('Card_Information_carddp');
        //                         errorElement.style.color = 'rgb(226, 2, 2)';
        //                         errorElement.textContent = payment_method_result.error.message;

        //                     } else {
        //                         let form = document.getElementById('payment-form-dp');
        //                         let hiddenInput2 = document.createElement('input');
                
        //                         hiddenInput2.setAttribute('type', 'hidden');
        //                         hiddenInput2.setAttribute('name', 'payment_method_id');
        //                         hiddenInput2.setAttribute('value', payment_method_result.paymentMethod.id);
        //                         form.appendChild(hiddenInput2);

        //                         console.log('payment_method_result.paymentMethod.id', payment_method_result.paymentMethod.id)
                
        //                         var phoneno = phonenumberInput_dp.value;
        //                         let phone_number = parseInt(('254') + phoneno.replace(/^0/, ""));
        //                         let hiddenInput3 = document.createElement('input');
        //                         hiddenInput3.setAttribute('type', 'hidden');
        //                         hiddenInput3.setAttribute('name', 'phone_number');
        //                         hiddenInput3.setAttribute('value', phone_number);
        //                         form.appendChild(hiddenInput3);
        //                         console.log('phone_number', phone_number)
                
        //                         let linkproduct= document.getElementById("Satis_Travel_Bags__2_moredp").innerText
        //                         let hiddenInput4 = document.createElement('input');
        //                         hiddenInput4.setAttribute('type', 'hidden');
        //                         hiddenInput4.setAttribute('name', 'linkproduct');
        //                         hiddenInput4.setAttribute('value', linkproduct);
        //                         form.appendChild(hiddenInput4);
        //                         console.log('linkproduct', linkproduct)
                
                
        //                         let linkproductunits= parseInt(document.getElementById("n_2628_hsdp").innerText.replace('Quantity : ', ''))
        //                         let hiddenInput5 = document.createElement('input');
        //                         hiddenInput5.setAttribute('type', 'hidden');
        //                         hiddenInput5.setAttribute('name', 'linkproductunits');
        //                         hiddenInput5.setAttribute('value', linkproductunits);
        //                         form.appendChild(hiddenInput5);
        //                         console.log('linkproductunits', linkproductunits)

                                
        //                         let cart= Object.values(JSON.parse(localStorage.getItem("quote_products")));
        //                         console.log('cart', cart, typeof cart, cart.length)

        //                         arr = cart.filter(function(item) {
        //                             console.log('item[0]::::', item['productName'])
        //                             return item['productName'] !== linkproduct; });
        //                         console.log('arr::::', arr)

        //                         let checkout_cart= JSON.stringify(arr);
        //                         let hiddenInput6 = document.createElement('input');
        //                         hiddenInput6.setAttribute('type', 'hidden');
        //                         hiddenInput6.setAttribute('name', 'checkout_cart');
        //                         hiddenInput6.setAttribute('value', checkout_cart);
        //                         form.appendChild(hiddenInput6);
        //                         console.log('checkout_cart', checkout_cart)
                
        //                         full_name= document.getElementById("Input_email_addressdp").value
        //                         let hiddenInput7 = document.createElement('input');
        //                         hiddenInput7.setAttribute('type', 'hidden');
        //                         hiddenInput7.setAttribute('name', 'full_name');
        //                         hiddenInput7.setAttribute('value', full_name);
        //                         form.appendChild(hiddenInput7);
        //                         console.log('full_name', full_name)
                
        //                         deilvery_location= document.getElementById("location_inputdp").value
        //                         let hiddenInput8 = document.createElement('input');
        //                         hiddenInput8.setAttribute('type', 'hidden');
        //                         hiddenInput8.setAttribute('name', 'deilvery_location');
        //                         hiddenInput8.setAttribute('value', deilvery_location);
        //                         form.appendChild(hiddenInput8);
        //                         console.log('deilvery_location', deilvery_location)

        //                         delivery_fee= parseFloat(document.getElementById("Ksh_14900dp").innerText.replace('Ksh.', '').replace(',', ''))
        //                         let hiddenInput9 = document.createElement('input');
        //                         hiddenInput9.setAttribute('type', 'hidden');
        //                         hiddenInput9.setAttribute('name', 'delivery_fee');
        //                         hiddenInput9.setAttribute('value', delivery_fee);
        //                         form.appendChild(hiddenInput9);
        //                         console.log('delivery_fee', delivery_fee)
                
        //                         service_fee= parseFloat(document.getElementById("Ksh_14900_hedp").innerText.replace('Ksh.', '').replace(',', ''))
        //                         let hiddenInput10 = document.createElement('input');
        //                         hiddenInput10.setAttribute('type', 'hidden');
        //                         hiddenInput10.setAttribute('name', 'service_fee');
        //                         hiddenInput10.setAttribute('value', service_fee);
        //                         form.appendChild(hiddenInput10);
        //                         console.log('service_fee', service_fee)
                
        //                         checkout_total= parseFloat(document.getElementById("Ksh_829800dp").innerText.replace('Ksh.', '').replace(',', ''))
        //                         let hiddenInput11 = document.createElement('input');
        //                         hiddenInput11.setAttribute('type', 'hidden');
        //                         hiddenInput11.setAttribute('name', 'checkout_total');
        //                         hiddenInput11.setAttribute('value', checkout_total);
        //                         form.appendChild(hiddenInput11);
        //                         console.log('checkout_total', checkout_total)

        //                         payment_intent_id= sessionStorage.getItem('payment_intent_id')
        //                         console.log('!!!!payment_intent_id::::payment_intent_id!!!!', payment_intent_id)
        //                         let hiddenInput12= document.createElement('input');
        //                         hiddenInput12.setAttribute('type', 'hidden');
        //                         hiddenInput12.setAttribute('name', 'payment_intent_id');
        //                         hiddenInput12.setAttribute('value', payment_intent_id);
        //                         form.appendChild(hiddenInput12);
        //                         console.log('payment_intent_id', payment_intent_id)

        //                         const emailaddressInput = document.getElementById("email_addressdp");
        //                         const emailaddressValue = emailaddressInput.value;
        //                         console.log('emailaddressValue', emailaddressValue)


        //                         let membership_field_dp = document.getElementById('Group_6094dp_1');
        
        //                         if (typeof(membership_field_dp) != 'undefined' && membership_field_dp != null) {
        //                             // Exists.
        //                             membership_no= document.getElementById("membership_numberdp").value
        //                             console.log('!!!!membership_no!!!!', membership_no)
        //                             let hiddenInput13= document.createElement('input');
        //                             hiddenInput13.setAttribute('type', 'hidden');
        //                             hiddenInput13.setAttribute('name', 'membership_no');
        //                             hiddenInput13.setAttribute('value', membership_no);
        //                             form.appendChild(hiddenInput13);
        //                         } else {
        //                             // Exists.
        //                             membership_no= 'null'
        //                             console.log('!!!!null membership_no!!!!', membership_no)
        //                             let hiddenInput13= document.createElement('input');
        //                             hiddenInput13.setAttribute('type', 'hidden');
        //                             hiddenInput13.setAttribute('name', 'membership_no');
        //                             hiddenInput13.setAttribute('value', membership_no);
        //                             form.appendChild(hiddenInput13);
        //                         }

        //                         name_validate= ValidateFullname_desktp()
        //                         phone_validate= ValidatePhoneNumber_desktp()
        //                         email_validate= ValidateEmail_desktp(emailaddressValue)
        //                         console.log('name_validate ::::', name_validate, 'phone_validate ::::', phone_validate, 'email_validate ::::', email_validate)

        //                         if (email_validate == true && name_validate == true ) {


        //                             const loadingdots=  document.getElementById("ui_active_dimmerdp");
        //                             loadingdots.style.visibility = 'visible';


        //                             // Submit the form
        //                             // form.submit();
        //                             var data = form;
        //                             fetch(
        //                                 data.getAttribute('action'), {
        //                                 method: data.getAttribute('method'),
        //                                 body: new FormData(data)
        //                             }).then(res=>res.json())
        //                                 .then(function (response) {

        //                                     const checkoutlink= response.checkoutlink;
        //                                     const checkoutpaylink= response.checkoutpaylink;

        //                                     if (response.payment_status === true) {
        //                                         console.log('authentication ::::', response.authentication);
                                                


        //                                         // Show Confirmation Receipt
        //                                         $.ajax({
        //                                             type: "POST",
        //                                             url: checkoutpaylink + '/paymentnotification_card',
        //                                             data: {
        //                                                 'csrfmiddlewaretoken': jQuery("[name=csrfmiddlewaretoken]").val(),
        //                                                     'checkoutlink' : checkoutlink,
        //                                                     'checkoutpaylink' :checkoutpaylink,
        //                                                     'emailaddress': emailaddressValue,
        //                                             },
        //                                             success: function(response){
        //                                                 console.log('email sent::::')
                                                            
        //                                             },
        //                                             error: function(error){
        //                                                 console.log('failed email')
        //                                             },
        //                                         });
                    
        //                                         // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + checkoutpaylink  

        //                                         const customer_name = document.getElementById('Alldp')
        //                                         customer_name.innerHTML = full_name
        //                                         const customer_contact = document.getElementById('n_54723767380dp')
                                            
        //                                         customer_name.innerHTML = response['name'] 
        //                                         customer_contact.innerHTML = ('+') + response['phone'] 

        //                                         const payment_code= response['code'] 
        //                                         const payment_date= response['date'] 
                
        //                                         const transaction_code = document.getElementById('JSLADD-0001dp')
        //                                         const transaction_date = document.getElementById('n_3_Oct_2021_705_amdp')
                
                
        //                                         transaction_code.innerHTML = payment_code
        //                                         transaction_date.innerHTML = payment_date

        //                                         document.getElementById('CheckoutPPDesktopdp').style.visibility = 'hidden';
        //                                         document.getElementById('MobileCheckoutLinkReceipt__3dp').style.visibility = 'visible';
        //                                         document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden';
        //                                         document.getElementById('Group_6093dp').style.visibility = 'hidden';
        //                                         document.getElementById('Group_6094dp').style.visibility = 'hidden';
        //                                         document.getElementById('Group_3858_hc_carddp').style.visibility = 'hidden';
        //                                         document.getElementById('Billing_Email_addressdp').style.visibility = 'hidden';
        //                                         document.getElementById('submit-buttondp').style.visibility = 'hidden';
        //                                         document.getElementById('Group_3969dp_1').style.visibility = 'hidden';
        //                                         document.getElementById('Group_6142dp').style.visibility = 'hidden';
        //                                         document.getElementById('email_addressdp').style.visibility = 'hidden';
        //                                         document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden';
        //                                         document.getElementById("Group_6091_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("Card_Information_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("cardyeardp").style.visibility = 'hidden';
        //                                         document.getElementById("cardcvcdp").style.visibility = 'hidden';
        //                                         document.getElementById("Group_6091_hm_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("Group_6091_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("cardnumberdp").style.visibility = 'hidden';
        //                                         document.getElementById("Rectangle_2002_hd_carddp").style.visibility = 'hidden';



        //                                         setTimeout(document.getElementById("ui_active_dimmer").style.visibility = 'hidden', 5);
        //                                         for(i=0; i<100; i++) { window.clearInterval(i); }
        //                                         setTimeout("location.href = url;", 10);
                                                

        //                                     } 
                                            
        //                                     if(response.payment_status === 'balance'){
        //                                         console.log('insufficient balance!!')

        //                                         // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopsbalance'                                
        //                                         document.getElementById('CheckoutPPDesktopdp').style.visibility = 'hidden';
        //                                         document.getElementById('OopsSomethingWentWrongdp').style.visibility = 'visible';
        //                                         document.getElementById('Something_went_wrong_balancedp').style.visibility = 'visible';
        //                                         document.getElementById('Group_6142dp').style.visibility = 'hidden';
        //                                         document.getElementById('email_addressdp').style.visibility = 'hidden';
        //                                         document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden';
        //                                         document.getElementById("Group_6091_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("Group_3858_hc_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("Card_Information_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("cardyeardp").style.visibility = 'hidden';
        //                                         document.getElementById("cardcvcdp").style.visibility = 'hidden';
        //                                         document.getElementById("cardnumberdp").style.visibility = 'hidden';
        //                                         document.getElementById("Rectangle_2002_hd_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("Group_6091_hm_carddp").style.visibility = 'hidden';


        //                                         setTimeout(document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden', 5);
        //                                         for(i=0; i<100; i++) { window.clearInterval(i); } 
        //                                         setTimeout("location.href = url;", 10);
        //                                     }
                                            
        //                                     if(response.payment_status === 'failed'){
        //                                         console.log('payment failed!!')
                
        //                                         // url= 'https://chpter.co/checkout/MobileCheckoutLinkReceipt/' + checkoutlink + '/' + 'ooopsfailed'                            
        //                                         document.getElementById('CheckoutPPDesktopdp').style.visibility = 'hidden';
        //                                         document.getElementById('OopsSomethingWentWrongdp').style.visibility = 'visible';
        //                                         document.getElementById('Something_went_wrong_faileddp').style.visibility = 'visible';
        //                                         document.getElementById('Group_6142dp').style.visibility = 'hidden';
        //                                         document.getElementById('email_addressdp').style.visibility = 'hidden';
        //                                         document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden';
        //                                         document.getElementById("Group_6091_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("Group_3858_hc_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("Card_Information_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("cardyeardp").style.visibility = 'hidden';
        //                                         document.getElementById("cardcvcdp").style.visibility = 'hidden';
        //                                         document.getElementById("cardnumberdp").style.visibility = 'hidden';
        //                                         document.getElementById("Rectangle_2002_hd_carddp").style.visibility = 'hidden';
        //                                         document.getElementById("Group_6091_hm_carddp").style.visibility = 'hidden';

                                                

        //                                         setTimeout(document.getElementById("ui_active_dimmerdp").style.visibility = 'hidden', 5);
        //                                         for(i=0; i<100; i++) { window.clearInterval(i); }
        //                                         setTimeout("location.href = url;", 10);

        //                                     }

        //                                     if(response.payment_status === 'requires_action'){
        //                                         let stripe= 'pk_live_51KbtEPKv0vSxkVAbrHQLQHpbRuCh6etpUaB248H5RkKwiqjTjcmyt0S4DYH5P2XUtAH4Vz8Z1WHt6ePd07Qev2MW00gl3NXnSl'

        //                                         let secret_key= response.client_secret

        //                                         _3dsec(stripe, secret_key, checkoutlink, checkoutpaylink)

        //                                     }
        //                                 });
        //                             event.preventDefault();
        //                         }

        //                     }
        //                 });

        //         };
        //     };
        //     })
                
        // });
 



function _3dsec(stripe_publishable_key, pi_secret, checkout_link, checkoutpay_link) {
    console.log('_3dsec::::')
    console.log('_3dsec :::: checkout_link ', checkout_link)
    console.log('_3dsec :::: checkoutpay_link ', checkoutpay_link)
    var stripe = Stripe(stripe_publishable_key);

    stripe.confirmCardPayment(pi_secret).then(function(result) {
    if (result.error) {
        // Display error.message in your UI.
        let errorElement = document.getElementById('Card_Information_carddp');
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

function ValidateEmail_desktp(emailaddressValue) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log('emailaddressValue::::', emailaddressValue.match(mailformat))
    if(emailaddressValue.match(mailformat)) {
        document.getElementById('Email_address_Invalid_dp').style.visibility = "hidden";
        console.log('emailaddressValue:::: true')
        return true;
    } else {
        document.getElementById('Email_address_Invalid_dp').style.visibility = "visible";
        console.log('emailaddressValue:::: false')
        return false;
    }
}

function ValidatePhoneNumber_desktp() {

    if (phonenumberInput_dp.getAttribute('isvalid') === 'true') {
        document.getElementById('Phone_Number_Invalid_dp').style.visibility = "hidden"; 
        return true;
    } else {
        document.getElementById('Phone_Number_Invalid_dp').style.visibility = "visible"; 
        return false;
    }
}


function ValidateFullname_desktp() {

    if (fullnameInput_dp.value == "" || fullnameInput_dp.value.length <= 3 ) {
        document.getElementById('Phone_Number_Invalid__dp').style.visibility = "visible";
        return false;
    } else {
        document.getElementById('Phone_Number_Invalid__dp').style.visibility = "hidden";
        return true;
    }
}



const mpesapayment_desktop= document.getElementById("Group_6097_carddp")

mpesapayment_desktop.addEventListener('click', function(){

    // let sub_total= parseFloat(document.getElementById("Ksh_829800dp").innerText.replace('Ksh. ', '').replace(',', ''))
    let grand_total = document.getElementById('PAY_KES_1490000dp');
    // grand_total.innerHTML= ('PAY KES. ') + sub_total.toLocaleString() + ('.00');

    let mpesa_grand_total = document.getElementById('PAY_KES_1549000_');
    let sub_total = document.getElementById('Ksh_829800dp');
    let service_fee = document.getElementById('Ksh_14900_hedp');


    total_amount = document.getElementById('total_amount_fee').value;
    product_price = document.getElementById('prod_pricee').value;
    mpesa_service_fee = document.getElementById('service_fee_amount').value;

    total_amount = total_amount - parseFloat(mpesa_service_fee)
    delivery_fee = parseFloat(document.getElementById("Ksh_14900dp").innerText.replace('Ksh.', ''));

    parsed_amount = parseFloat(total_amount) + parseFloat(delivery_fee);

    mpesa_grand_total.innerHTML= ('PAY KES. ') + ((parsed_amount + parseFloat(mpesa_service_fee)).toFixed(2)).toLocaleString();
    grand_total.innerHTML= ('PAY KES. ') + ((parsed_amount + parseFloat(mpesa_service_fee)).toFixed(2)).toLocaleString();
    sub_total.innerHTML= ('Ksh. ') + ((parsed_amount + parseFloat(mpesa_service_fee)).toFixed(2)).toLocaleString();
    service_fee.innerHTML = ('Ksh. ') + ( parseFloat(mpesa_service_fee)).toFixed(2);





    let membership_field_dp = document.getElementById('Group_6094dp_1');
        
    if (typeof(membership_field_dp) != 'undefined' && membership_field_dp != null) {
        // Exists.
        console.log('membership_field::::  Exists')
        document.getElementById('Group_5214dp').style.top= '700px';
    }
    
    console.log('mpesapayment::::', mpesapayment_desktop)
    
    if (document.getElementById('Product_description')){
        document.getElementById('Group_6093dp').style.visibility = 'hidden';//Location
        document.getElementById('Group_6093_emaildp').style.visibility = 'visible';//Email

        document.getElementById('Group_6094dp').style.visibility = 'visible';//Phone


        mpesapayment_desktop.getElementsByClassName('card')[0].style.border = 'solid 2px rgb(0, 71, 251)';
        cardpaymentdesktop.getElementsByClassName('card')[0].style.border = 'none';

        document.getElementById('Group_3858_hc_carddp').style.visibility = 'hidden';
        document.getElementById('Billing_Email_address_dp').style.visibility = 'hidden';
        document.getElementById('email_addressdp').style.visibility = 'hidden';
        document.getElementById('email_address').style.visibility = 'hidden';
        document.getElementById('Group_6091_carddp').style.visibility = 'hidden';
        document.getElementById('submit-buttondp').style.visibility = 'hidden';
        
        document.getElementById('Group_5214dp').style.zIndex = '2';

        
        document.getElementById('Group_3969dp').style.visibility = 'visible';
    
        document.getElementById('Group_6094dp').style.visibility = 'visible';
        document.getElementById('PAY_KES_1490000dp').style.visibility = 'visible';
        
        document.getElementById('Group_3969dp_1').style.visibility = 'hidden';
        document.getElementById('PAY_KES_1490000dp_1').style.visibility = 'hidden';

        
        const loadingdots=  document.getElementById("ui_active_dimmer");
        loadingdots.style.visibility = 'hidden';

    }
    else{
        document.getElementById('Group_6093dp').style.visibility = 'visible';
        document.getElementById('Group_6093_emaildp').style.visibility = 'hidden';//Email


        mpesapayment_desktop.getElementsByClassName('card')[0].style.border = 'solid 2px rgb(0, 71, 251)';
        cardpaymentdesktop.getElementsByClassName('card')[0].style.border = 'none';

        document.getElementById('Group_3858_hc_carddp').style.visibility = 'hidden';
        document.getElementById('Billing_Email_address_dp').style.visibility = 'hidden';
        document.getElementById('email_address').style.visibility = 'hidden';
        document.getElementById('email_addressdp').style.visibility = 'hidden';
        document.getElementById('Group_6091_carddp').style.visibility = 'hidden';
        document.getElementById('submit-buttondp').style.visibility = 'hidden';
        
        document.getElementById('Group_5214dp').style.zIndex = '2';

        
        document.getElementById('Group_3969dp').style.visibility = 'visible';
        document.getElementById('Group_6094dp').style.visibility = 'visible';
        document.getElementById('PAY_KES_1490000dp').style.visibility = 'visible';
        
        document.getElementById('Group_3969dp_1').style.visibility = 'hidden';
        document.getElementById('PAY_KES_1490000dp_1').style.visibility = 'hidden';
        
        const loadingdots=  document.getElementById("ui_active_dimmer");
        loadingdots.style.visibility = 'hidden';

    }

    const loadingdots=  document.getElementById("ui_active_dimmer");
    loadingdots.style.visibility = 'hidden';

})



// checkout_cart [[{'productName': 'Almond Croissant', 'productsUnits': 1, 'total': 275, 'prodURL': '\n\t\t\t\t\tlink-0IfNwy4qazlTSn1w7D\n\t\t\t\t'}], [{'productName': 'Chocolate Brownie', 'productsUnits': 1, 'total': 240, 'prodURL': '\n\t\t\t\t\tlink-Mdz2Enn8AoRedZubbQ\n\t\t\t\t'}]]
// checkout_cart [{'productName': 'imac', 'productsUnits': 1}]



// let checkout_cart= JSON.parse(localStorage.getItem("quote_products"));
// console.log('::::checkout_cart::::', checkout_cart)

// let checkout_cart2= localStorage.getItem("quote_products")[0];
// console.log('::::checkout_cart2::::', checkout_cart2)