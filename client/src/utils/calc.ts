export function getCartSubTotal(cart) {
    return cart
        ? cart
            .reduce(
                (total, item) => total + Number(item.price) * item.quantity,
                0,
            )
            .toFixed(2)
        : 0
}