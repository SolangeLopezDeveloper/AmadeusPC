const btnAddCart = document.querySelector('#btn-addCart')
const URL_API_SERVER = 'https://amadeuspc-production.up.railway.app'

btnAddCart.addEventListener('click', async () =>{
    const id = btnAddCart.getAttribute('data-id')
        try {
          const objProductId = { idProduct: id }
          const { ok } = await fetch(`${URL_API_SERVER}/api/cart/addProduct`, {
            method: "POST",
            body: JSON.stringify(objProductId),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res)=>res.json());
      
         await Swal.fire({
            title: ok ? "Producto agregado a tu Carrito!" : "Lo sentimos, debes iniciar sesión",
            icon: ok ? 'success' : 'warning',
        showConfirmButton: false,
        timer: 1200
          })
          !ok && (location.href = "/users/login")
        } catch (error) {
          console.log(error)
        }
      
      })


