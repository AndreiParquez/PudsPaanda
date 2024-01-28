
        document.addEventListener('DOMContentLoaded', function () {
            var basketIcon = document.getElementById('basket-icon');
            var cart = document.getElementById('cart');

            basketIcon.addEventListener('click', function () {
                // Toggle the 'open' class to show/hide the cart
                cart.classList.toggle('open');
            });
        });



    const searchInput = document.getElementById('searchInput');
    const listItems = document.querySelectorAll('.nav-list li');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        listItems.forEach(function(item) {
            const text = item.textContent.toLowerCase();
            const listItem = item.style.display !== 'none' ? 'list-item' : 'none';
            if (text.includes(searchTerm)) {
                item.style.display = listItem;
            } else {
                item.style.display = 'none';
            }
        });
    });
