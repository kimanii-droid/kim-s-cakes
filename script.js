function orderCake(cakeName) {
    let phoneNumber = "254748880067";

    let message = `Hello, I would like to order a ${cakeName}.`;

    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
}