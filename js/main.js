let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        cart: 0,
       altText: "A pair of socks",
       inStock: true,
       details: ['80% cotton', '20% polyester', 'Gender-neutral'],
       variants: [
        {
            variantId: 2234,
            variantColor: 'green',
            variantImage: "./assets/vmSocks-green-onWhite.jpg",
        },
        {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: "./assets/vmSocks-blue-onWhite.jpg",
        }
     ],
     updateProduct(variantImage) {
        this.image = variantImage
        },
     methods: {
        deleteToCart() {
            this.cart -= 1
            }
        },
   }
})
