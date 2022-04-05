function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}



const inputs = document.querySelectorAll("[name='qty']")

inputs.forEach(function (input) {

    input.addEventListener("change", function (e){
        const this_input = e.target;
        const qty = parseFloat{e.target.value);
        const this_row = this_input.closest(".row");

            const amazon = this_row.querySelector(".amazon");
            const amazon_span = amazon.querySelector("span");
            const amazon_price = parseFloat(amazon.database.price);
            const amazon_cost = qty * amazon_price;
                amazon_span.innerHTML = amazon_cost;

            const freshdirect = this_row.querySelector(".freshdirect");
            const freshdirect_span = freshdirect.querySelector("span");
            const freshdirect_price = parseFloat(freshdirect.database.price);
            const freshdirect_cost = qty * freshdirect_price;
                freshdirect_span.innerHTML = freshdirect_cost;

            const peapod = this_row.querySelector(".peapod");
            const peapod_span = peapod.querySelector("span");
            const peapod_span = parseFloat(peapod.database.price);
                peapod_span.innerHTML = peapod_cost;
    });
});